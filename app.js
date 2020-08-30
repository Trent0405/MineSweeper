let tiles = document.querySelectorAll(".tile");
tiles = [...tiles];

// get the url of flag image and store it in the flag variable.
let para = document.querySelector(".flagholder");
let flag = window.getComputedStyle(para);
flag = flag.getPropertyValue("background-image");
//

let randomly_Sorted_Tile_Indexes = [...tiles];


function randomlySortTiles_AssignBombs() {

for (let i = 0; i < randomly_Sorted_Tile_Indexes.length; i++) {
        randomly_Sorted_Tile_Indexes[i] = i;
        
    }

    randomly_Sorted_Tile_Indexes = randomly_Sorted_Tile_Indexes.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

for (let ii = 0; ii < 40; ii++) {
    
    tiles[randomly_Sorted_Tile_Indexes[ii]].classList.add("bomb");
}

}


function placeFlag () {
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('contextmenu', function () {
            //add flag if a square is empty, remove it if it already has a flag. 
            if(document.querySelectorAll(".tile")[i].style.backgroundImage == flag) {
                document.querySelectorAll(".tile")[i].style.backgroundImage = ""
                document.querySelector(".counter").innerHTML = parseInt(document.querySelector(".counter").innerHTML) + 1
        }
            
            else if (document.querySelectorAll(".tile")[i].style.backgroundImage == ""){
                document.querySelectorAll(".tile")[i].style.backgroundImage = flag;
                document.querySelector(".counter").innerHTML -= 1;
            }
            //
            
        });
    }
    } 
    

    function restart() {
        tiles.forEach((tile) => {
            tile.style.backgroundImage = "";
            tile.classList.remove("bomb");
    });

        document.querySelector(".counter").innerHTML = 40;
        randomlySortTiles_AssignBombs()
        document.querySelector(".youLost").style.display = "none";
        document.querySelector(".youWon").style.display = "none";
    }
    

    function gameOver() {
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('click', function () {
                 if (tiles[i].matches(".bomb")) {
                setTimeout(function(){
                    tiles.forEach(function(tile)  {
                        tile.style.backgroundImage = ""
                            document.querySelector(".youLost").style.display = "flex"

                }
                    
                    ) }, 75);
                
                 }
            
            });
        }
    }
    
   


    placeFlag()

    randomlySortTiles_AssignBombs()

    gameOver()

    

  

    function  victory() {
        let arrayWithoutBombs = tiles.filter(x => x.matches(".bomb") == false);
        if(arrayWithoutBombs.every(x => x.style.backgroundImage != flag) && arrayWithoutBombs.every(x => x.style.backgroundImage != "") && arrayWithoutBombs.every(x => x.style.backgroundImage != "none")) {
            document.querySelector(".youWon").style.display = "flex"
        }
    }




    
    function setNumbers(index) {
     
     let surroundingBombs = 0;
     
     if( index >= 16 && tiles[index-16].matches(".bomb") === true)  surroundingBombs += 1; //
     
     if( index >= 17 && index % 16 != 0 && tiles[index-17].matches(".bomb") === true)  surroundingBombs += 1;

     if( index >= 15 && index % 16 != 15 && tiles[index-15].matches(".bomb") === true)  surroundingBombs += 1; //

     if( index <= 239 && tiles[index+16].matches(".bomb") === true)  surroundingBombs += 1; //

     if( index <= 238 && index % 16 != 15 && tiles[index+17].matches(".bomb") === true)  surroundingBombs += 1;

     if( index <= 240 && index % 16 != 0 && tiles[index+15].matches(".bomb") === true)  surroundingBombs += 1; //

     if( index <= 254 && index % 16 != 15 && tiles[index+1].matches(".bomb") === true)  surroundingBombs += 1; //
 
     if( index >= 1 && index % 16 != 0 && tiles[index-1].matches(".bomb") === true)  surroundingBombs += 1; //
     
    
    
        
        return surroundingBombs;
    }
    
    for(let i = 0; i < tiles.length; i++) {
       tiles[i].addEventListener('click', function(){
         (setNumbers(i) === 0) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number0.png)"
         :(setNumbers(i) === 1) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number1.png)"
         :(setNumbers(i) === 2) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number2.png)"
         :(setNumbers(i) === 3) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number3.png)"
         :(setNumbers(i) === 4) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number1.png)"
         :(setNumbers(i) === 5) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number1.png)"
         :(setNumbers(i) === 6) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number1.png)"
         :(setNumbers(i) === 7) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number1.png)"
         :(setNumbers(i) === 8) ? document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number1.png)"
           :document.querySelectorAll(".tile")[i].style.backgroundImage = "url(Images/Number0.png)"
           victory()
       });
    }

