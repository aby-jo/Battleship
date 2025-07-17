/* eslint-disable no-undef */
import { COLS, ROWS } from "../src/constants";
import { gameboard } from "../src/utils/gameboard";

test("ship not placed if out of bounds",()=>{
    const board = gameboard();
    expect(board.placeShip(0, COLS, "h", 3)).toBe(false)
    expect(board.placeShip(ROWS, 0, "v", 3)).toBe(false)

})
test("ship within bounds",()=>{
    const board = gameboard();
    expect(board.placeShip(0, 5, "h", 5)).toBe(true)
    expect(board.placeShip(ROWS, 0, "v", 3)).toBe(false)
})
test("hit takes place",()=>{
    const board = gameboard();
    board.placeShip(0, 0, "h", 3);

    const result=board.receiveAttack(0, 0);
    expect(result.hit).toBe(true)
})
test("places ship horizontally and registers hits", () => {
    const board = gameboard();
    board.placeShip(0, 0, "h", 3);

    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(0, 2);

    expect(board.reportIfAllShipsSunken()).toBe(true);
});

test("registers missed attacks correctly", () => {
    const board = gameboard();
    board.placeShip(0, 0, "h", 2);

    board.receiveAttack(5, 5);
    expect(board.missedAttacks()).toContainEqual([5, 5]);
});

test("return all ship coordinates",()=>{
    const board = gameboard();
    board.placeShip(0, 0, "h", 2);
    const shipCoordinates = board.returnAllShipCoordinates();
    expect(shipCoordinates).toEqual(expect.arrayContaining([[0,0],[0,1]]));
})