import { playgame } from "./gamecontroller"
import "./style.css"
const body=document.querySelector("body")
const battleship=document.createElement("div")
body.appendChild(battleship)
battleship.classList.add("battleship")
playgame(battleship)

