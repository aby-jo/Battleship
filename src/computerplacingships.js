import { COLS, ROWS } from "./constants"

const getRandomCoordinate = (max) => Math.floor(Math.random() * max)
const getRandomOrientation=()=>{
    const val=Math.random()*100
    return val>=50?"h":"v"
}
const computerPlaceShips=(player)=>{
    const board=player.playergameboard
    const shiplenghts=[2,3,4,5]
    shiplenghts.forEach((len)=>{
        let row,col,orientation
        do{
        row=getRandomCoordinate(ROWS)
        col=getRandomCoordinate(COLS)
        orientation=getRandomOrientation()
        }while(!board.placeShip(row,col,orientation,len))
    })
    

}
export{computerPlaceShips}
