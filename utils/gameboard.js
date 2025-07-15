const ship = require("./ship")

const gameboard=()=>{
    const boundx=10 ,boundy=10
    const shipCoordinates={}
    const ships=[]
    const blastedCoordinates=[]
    const checkNotOutofBounds=(x,y,orient,len)=>{
        if (orient=="h") return x+len<=boundx
        else return y+len<=boundy
    }
    const placeShip=(x,y,orient,len)=>{
        if(!checkNotOutofBounds(x,y,orient,len)) return false
        const bship=ship(len)
        ships.push(bship)
        if (orient=="h"){
            for(let i=x;i<x+len;i++){
                shipCoordinates[`${i},${y}`]=bship
            }
        }
        else{
            for(let j=y;j<y+len;j++){
                shipCoordinates[`${x},${j}`]=bship
            }
        }

    }
    const receiveAttack=(x,y)=>{
        const bship=shipCoordinates[`${x},${y}`]
        if(bship){
            bship.hit()
        }
        else blastedCoordinates.push([x,y])
    }
    const missedAttacks=()=>{
        return blastedCoordinates
    }
    const reportIfAllShipsSunken=()=>{
        return ships.every((bship)=> bship.isSunk())
    }
    return{placeShip,receiveAttack,missedAttacks,reportIfAllShipsSunken}
}
module.exports=gameboard