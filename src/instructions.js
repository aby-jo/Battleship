const createInstructions=()=>{
const instructions=document.createElement("div")
instructions.classList.add("instructions")
const heading=document.createElement("div")
heading.textContent="Instructions"
heading.classList.add("heading")
const list=document.createElement("ul")
const po1=document.createElement("li")
po1.textContent="Game will only start after placing the ships"
const po2=document.createElement("li")
po2.textContent="You can rotate the ships by clicking on the ships once and pressing 'R' on your keyboard"
const po3=document.createElement("li")
po3.textContent="You can fire by clicking on the opponent board. Game will finish after all ships are hit on either of the board"
instructions.appendChild(heading)
list.appendChild(po1)
list.appendChild(po2)
list.appendChild(po3)
instructions.appendChild(list)
return instructions
}
export{createInstructions}