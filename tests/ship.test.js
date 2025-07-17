import { ship } from "../src/utils/ship"

/* eslint-disable no-undef */
test('isSunk returns false when ship is not fully hit',()=>{
    const bship2=ship(2)
    expect(bship2.isSunk()).toBe(false)
})

test('isSunk returns true when ship is fully hit',()=>{
    const bship2=ship(2)
    bship2.hit()
    bship2.hit()
    expect(bship2.isSunk()).toBe(true)
})

test('getLen returns correct len',()=>{
    const bship2=ship(2)
    expect(bship2.getLen()).toBe(2)
})