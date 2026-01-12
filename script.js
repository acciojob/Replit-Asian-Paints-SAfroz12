
    const resetButton = document.getElementById("Reset");

    changeButton.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

    
      const allBlocks = document.querySelectorAll(".grid-item");
      allBlocks.forEach(block => {
        block.style.backgroundColor = "transparent";
      });

    
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
      }
    });

    resetButton.addEventListener("click", () => {
      const allBlocks = document.querySelectorAll(".grid-item");
      allBlocks.forEach(block => {
        block.style.backgroundColor = "transparent";
      });
    });required.
