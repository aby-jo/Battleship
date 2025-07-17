import { resetComputerMemory } from "./computeraction"
import { gamerender } from "./gamerender"

const playgame=(body)=>{
    const welcome=document.createElement("dialog")
    welcome.classList.add("welcome")
    const input=document.createElement("input")
    input.id="input"
    input.placeholder = "Enter your name"
    const greeting=document.createElement("div")
    greeting.classList.add("greeting")
    greeting.textContent="Welcome to Battleship.io"
    const btn=document.createElement("button")
    btn.textContent = "Start Game"
    btn.addEventListener("click",()=>{
    welcome.close()
    welcome.remove()
    const playerName=input.value
    gamerender(body,playerName)
})
    welcome.appendChild(greeting)
    welcome.appendChild(input)
    welcome.appendChild(btn)
    body.appendChild(welcome)
    welcome.showModal()
}

const resetgame=(body,playerName)=>{
    const reset=document.createElement("dialog")
    reset.classList.add("resetdialog")
    const congrats=document.createElement("div")
    congrats.textContent=`${playerName} has won!`
    const playagain=document.createElement("div")
    playagain.textContent="Do you want to play again?"
    const resetbtn=document.createElement("button")
    resetbtn.textContent = "Play Again"
    resetbtn.addEventListener("click",()=>{
        reset.close()
        reset.remove()
        body.replaceChildren();// Clears old game UI
        // Wait for DOM to finish clearing before re-rendering
        requestAnimationFrame(() => {
        gamerender(body)
        })
        resetComputerMemory()
    })

    reset.appendChild(congrats)
    reset.appendChild(playagain)
    reset.appendChild(resetbtn)
    body.appendChild(reset)
    reset.showModal()
}
export{resetgame,playgame}
