const placingships=(player,playerblocks,callback)=>{
    const board=player.playergameboard
    let draggedship=null
    let selectedship=null
    let noOfShipsPlaced=0
    const totalNoOfShips=document.querySelectorAll(".shipcontainer").length
    window.addEventListener("keydown",(e)=>{
        if(e.key.toLowerCase()==="r" && selectedship){
            const currentOrientation=selectedship.dataset.orientation
            const newOrientation=currentOrientation==="h"? "v":"h"
            selectedship.dataset.orientation=newOrientation
            if (newOrientation == "v") {
                selectedship.classList.add("vertical")
            } 
            else {
                selectedship.classList.remove("vertical")
            }
        }
    })
    document.querySelectorAll(".shipcontainer").forEach(ship=>{
        ship.style.setProperty('--len', ship.dataset.len);
        ship.addEventListener("dragstart",()=>{
            draggedship=ship
        })
        ship.addEventListener("click",()=>{
            selectedship=ship
        })
    })
    const playerBoardElement=document.querySelector('[data-player="p1"]')
    playerBoardElement.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('dragover', (e) => {
            e.preventDefault(); // required to allow drop
            cell.classList.add('highlight'); // optional visual feedback
        });

        cell.addEventListener('dragleave', () => {
            cell.classList.remove('highlight');
        });
        cell.addEventListener("drop",(e)=>{
            e.preventDefault()
            cell.classList.remove("highlight")
            const row=parseInt(cell.dataset.row,10)
            const col=parseInt(cell.dataset.col,10)
            const shiplen=parseInt(draggedship.dataset.len,10)
            const orient=draggedship.dataset.orientation
            if(board.placeShip(row,col,orient,shiplen)){
                for(let i=0;i<shiplen;i++){
                    const currentrow = orient === "v" ? row + i : row
                    const currentcol = orient === "h" ? col + i : col
                    playerblocks[currentrow][currentcol].classList.add("shipishere")
                }
                draggedship.style.display = "none";
                noOfShipsPlaced++
            }
            else alert("Invalid ship placement")
            draggedship=null
            if(totalNoOfShips===noOfShipsPlaced) callback()
        })
});

}
export{placingships}