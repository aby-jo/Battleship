
const renderboard=(rows,cols,playerName)=>{
const boardContainer=document.createElement("div")
const boardName=document.createElement("div")
boardName.classList.add("boardname")
boardName.textContent=playerName+"'s "+"board"
const board=document.createElement("div")
board.classList.add("playerboard")
const boardblocks=Array.from({length: rows},()=>Array(cols).fill(0))
for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        const btn=document.createElement("button")
        btn.dataset.row=i
        btn.dataset.col=j
        boardblocks[i][j]=btn
        btn.classList.add("cell")
        board.appendChild(btn)
    }
}
boardContainer.appendChild(boardName)
boardContainer.appendChild(board)
return {boardContainer,boardblocks}
}
export{renderboard}