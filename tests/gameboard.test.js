const gameboard = require("../utils/gameboard");

test("places ship horizontally and registers hits", () => {
    const board = gameboard();
    board.placeShip(0, 0, "h", 3);

    board.receiveAttack(0, 0);
    board.receiveAttack(1, 0);
    board.receiveAttack(2, 0);

    expect(board.reportIfAllShipsSunken()).toBe(true);
});

test("registers missed attacks correctly", () => {
    const board = gameboard();
    board.placeShip(0, 0, "h", 2);

    board.receiveAttack(5, 5);
    expect(board.missedAttacks()).toContainEqual([5, 5]);
});

test("does not place ship out of bounds", () => {
    const board = gameboard();
    const placed = board.placeShip(9, 0, "h", 3);
    expect(placed).toBe(false);
});
