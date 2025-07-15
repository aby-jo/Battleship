const gameboard = require("./gameboard")

const player=(type)=>{
    let player_type=type
    let playergameboard=gameboard()
    return{player_type,playergameboard}
}
module.exports=player