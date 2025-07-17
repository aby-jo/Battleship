import { computeraction } from "./computeraction"
import { computerPlaceShips } from "./computerplacingships"
import { COLS, ROWS } from "./constants"
import { header } from "./createHeader"
import { takeaction } from "./gameaction"
import { resetgame } from "./gamecontroller"
import { createInstructions } from "./instructions"
import { placingships } from "./placingships"
import { renderboard } from "./renderboard"
import { renderships } from "./renderships"
import player from "./utils/player"

let humanPlayerName="Player"
const gamerender=(pageElement,playerName)=>{
const person=player("Player")
const computer=player("Computer")
if(playerName){
    humanPlayerName=playerName
}
person.playerType=humanPlayerName

const instructions=createInstructions()
const head=header()
pageElement.appendChild(head)
pageElement.appendChild(instructions)


const rows=ROWS
const cols=COLS
const { boardContainer: playeroneboard, boardblocks: playeroneblocks } = renderboard(rows, cols,person.playerType)
const{ boardContainer: playertwoboard, boardblocks: playertwoblocks}= renderboard(rows,cols,computer.playerType)
playeroneboard.setAttribute("data-player", "p1"); // This is done for selecting the board for the player to place ship

const boardgroup=document.createElement("div")
boardgroup.classList.add("boardgroup")
boardgroup.appendChild(playeroneboard)
boardgroup.appendChild(playertwoboard)

pageElement.appendChild(boardgroup)

const shipDock=renderships()
pageElement.appendChild(shipDock)
computerPlaceShips(computer)

placingships(person,playeroneblocks,()=>{
    console.log("placed all ships")
    startgame(person,computer)
})
const startgame=(p1,p2)=>{
    let turn=p1
    const startTurn=()=>{
        if(turn==p2) computeraction(p1,playeroneboard,playeroneblocks,endTurn)
        else takeaction(p2,playertwoboard,playertwoblocks,endTurn)
    }
    const endTurn=(status,loser)=>{
        console.log("EndTurn called. Status:", status, "Loser:", loser);
        if(status?.gameOver){
            const winner=loser===p1?p2.playerType:p1.playerType
            return resetgame(pageElement,winner)
        }
        turn=turn===p1?p2:p1
        startTurn()
    }
    startTurn()
}
}
export{gamerender}