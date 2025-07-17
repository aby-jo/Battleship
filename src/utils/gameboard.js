import { COLS, ROWS } from "../constants";
import { ship } from "./ship";

const gameboard=()=>{
    const boundx=ROWS ,boundy=COLS
    const shipCoordinates={}
    const ships=[]
    const blastedCoordinates=[]
    const checkNotOutofBounds=(x,y,orient,len)=>{
        if (orient=="h") return y+len-1<boundx
        else return x+len-1<boundy
    }
    const checkNotOverlapping=(x,y,orient,len)=>{
        for(let i=0;i<len;i++){
            const row=orient==="h"? x :x+i
            const col=orient==="v"? y :y+i
            const key=`${row},${col}`
            if(shipCoordinates[key]) return false
        }
        return true
    }
    const placeShip=(x,y,orient,len)=>{
        if(!checkNotOutofBounds(x,y,orient,len)) return false
        if(!checkNotOverlapping(x,y,orient,len)) return false
        const bship=ship(len)
        ships.push(bship)
        if (orient=="v"){
            for(let i=x;i<x+len;i++){
                shipCoordinates[`${i},${y}`]=bship
            }
        }
        else{
            for(let j=y;j<y+len;j++){
                shipCoordinates[`${x},${j}`]=bship
            }
        }
        return true
    }
    const receiveAttack=(x,y)=>{
        const bship=shipCoordinates[`${x},${y}`]
        if(bship){
            bship.hit()
            return {hit: true}
        }
        else {
            blastedCoordinates.push([x,y])
            return{hit:false};
        }
    }
    const missedAttacks=()=>{
        return blastedCoordinates
    }
    const reportIfAllShipsSunken=()=>{
        return ships.every((bship)=> bship.isSunk())
    }
    const returnAllShipCoordinates=()=>{
        return Object.keys(shipCoordinates).map((string)=>{
            return string.split(",").map(Number)
        })
    }
    return{placeShip,receiveAttack,missedAttacks,reportIfAllShipsSunken,returnAllShipCoordinates}
}
export {gameboard}