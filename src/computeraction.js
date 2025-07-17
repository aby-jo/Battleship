import { COLS, ROWS} from "./constants"

const getRandom = (max) => Math.floor(Math.random() * max)

const actionSet = new Set();
const resetComputerMemory = () => {
  actionSet.clear();
};
const computeraction=(player,computerboard,playerblocks,callback)=>{
    const board = player.playergameboard;
    let x,y,key
    do{
    x=getRandom(ROWS)
    y=getRandom(COLS)
    key=`${x},${y}`
    }while(actionSet.has(key))

    actionSet.add(key)
    const result=board.receiveAttack(x, y);
    const block=playerblocks[x][y]
    block.classList.remove("shipishere")
    if (result.hit) {
    block.classList.add("hit");
    block.textContent="🔥"
    } else {
    block.classList.add("miss");
    }
    

    console.log(`Button clicked at row ${x}, col ${y}`);
    if(board.reportIfAllShipsSunken()){
        callback({gameOver:true},player)
        return
    }
    callback();

}
export{computeraction,resetComputerMemory}