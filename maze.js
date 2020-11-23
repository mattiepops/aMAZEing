const body = document.querySelector("body");
body.className = "body";

const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`;

for (let i = 0; i < multiline.length; i++) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "mazeboxes";
    // lineDiv.innerHTML = multiline[i].split('');
    body.appendChild(lineDiv);
    if (multiline[i] == "*") {
        lineDiv.className = "wall"
        lineDiv.innerHTML = "";
    } else if (multiline[i] == "T") {
        lineDiv.className = 'end'
    } else if (multiline[i] == "S") {
        lineDiv.className = 'start'
    }
}


const mario = document.createElement('div');
mario.className = "mario";
document.querySelector("body > div.start").appendChild(mario);


let posX = 1;
let posY = 1;

document.addEventListener('keydown', function (e) {

    if (e.code === "ArrowRight") {
        posX++;
        // posY += 13;
        document.querySelector("body > div:nth-child(" +posX+ ")").appendChild(mario);
    } else if (e.code == "ArrowLeft") {
        posX--;
        // posY-=13;
        document.querySelector("body > div:nth-child(" +posX+ ")").appendChild(mario);
    } else if (e.code == "ArrowDown") {
        posX += 13;
        // posY++;

        document.querySelector("body > div:nth-child(" +posX+ ")").appendChild(mario);
    } else if (e.code == "ArrowUp") {
            posX -= 13;
            // posY--;
            document.querySelector("body > div:nth-child(" +posX+ ")").appendChild(mario);
        } else if (mario.parentElement.wall) {
            console.log("you hit lava (lamp)")
    }
    if(posY==2 && posX==13){
        alert('well done jackass')
    }

    else if(mario.parentElement == ".wall"){
        alert("you hit a fucking wall!")
    }
})