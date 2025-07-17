const takeaction = (player, playerPageBlockElement, playerblocks, callback) => {
  const board = player.playergameboard;

  // Define a named handler so we can remove it later
  const handleClick = (e) => {
    const target = e.target;

    if (target.tagName === "BUTTON") {
      target.disabled=true
      const row = parseInt(target.dataset.row, 10);
      const col = parseInt(target.dataset.col, 10);

      const result=board.receiveAttack(row, col);
      const block=playerblocks[row][col]
      if (result.hit) {
        block.classList.add("hit");
      } else {
        block.classList.add("miss");
      }

      console.log(`Button clicked at row ${row}, col ${col}`);

      // Remove listener after the action
      playerPageBlockElement.removeEventListener("click", handleClick);
      if(board.reportIfAllShipsSunken()){
        console.log(player.playerType)
        callback({gameOver:true},player)
        return
      }
      // Continue to the next turn
      callback();
    }
  };

  // Add listener
  playerPageBlockElement.addEventListener("click", handleClick);
};
export{takeaction}