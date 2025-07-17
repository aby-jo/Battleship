const createShip=(shiplen)=>{
    const shipContainer=document.createElement("div")
    for(let i=0;i<shiplen;i++){
        const ship=document.createElement("button")
        shipContainer.appendChild(ship)
    }
    shipContainer.draggable=true
    shipContainer.dataset.len=shiplen
    shipContainer.dataset.orientation="h"
    shipContainer.classList.add("shipcontainer")
    return shipContainer
}

const renderships=()=>{
    const ship5=createShip(5)
    const ship4=createShip(4)
    const ship3=createShip(3)
    const ship2=createShip(2)
    const shipDock=document.createElement("div")
    shipDock.classList.add("shipdock")
    const heading=document.createElement("div")
    heading.classList.add("heading")
    heading.textContent="Ship Dock"
    const allShipContainer=document.createElement("div")
    allShipContainer.classList.add("allships")
    allShipContainer.appendChild(ship5)
    allShipContainer.appendChild(ship4)
    allShipContainer.appendChild(ship3)
    allShipContainer.appendChild(ship2)
    shipDock.appendChild(heading)
    shipDock.appendChild(allShipContainer)
    return shipDock  
}
export{renderships}