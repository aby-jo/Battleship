const { gameboard } = require("./gameboard")

const player=(type)=>{
    let playerType=type
    let playergameboard=gameboard()
    return{playerType,playergameboard}
}
module.exports=player