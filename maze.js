const body = document.querySelector("body");
body.className = "body";

const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`;


const lineArr = multiline.split("\n");
console.log(lineArr);

for (let i = 0; i <= lineArr.length - 1; i++) {
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('lineDiv');
    lineDiv.id = i
    const line = lineArr[i];
    for (let j = 0; j <= line.length - 1; j++) {
        const characterDiv = document.createElement('div');
        const character = line.split("")
        characterDiv.innerHTML = character[j];
        characterDiv.classList.add('tile');
        lineDiv.appendChild(characterDiv);
        if (characterDiv.innerHTML == "*") {
            characterDiv.classList.add("wall");
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == ".") {
            characterDiv.classList.add('path');
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "S") {
            characterDiv.classList.add('start');
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "T") {
            characterDiv.classList.add('end');
            characterDiv.innerHTML = "";
        }

    }
    body.appendChild(lineDiv)

}

let x = 2;
let y = 3;

const mario = document.createElement('div');
mario.className = "mario";
document.querySelector("#\\31  > div.tile.start").appendChild(mario);

const box = document.createElement('div');
box.className = "box"
body.appendChild(box)
// document.querySelector("#\\32  > div:nth-child(6)").appendChild(box);

boxPos = 270,
    boxVelocity = 0.06,
    limit = 460,
    lastFrameTimeMs = 0,
    maxFPS = 60,
    delta = 0,
    timestep = 1000 / 60;

function update(delta) {
    boxPos += boxVelocity * delta;
    // Switch directions if we go too far
    if (boxPos >= limit || boxPos <= 270) boxVelocity = -boxVelocity;
}

function draw() {
    box.style.left = boxPos + 'px';
}

function mainLoop(timestamp) {
    // Throttle the frame rate.    
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    while (delta >= timestep) {
        update(timestep);
        delta -= timestep;
    }
    draw();
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);



document.body.addEventListener('keydown', function (e) {
    if (e.code == 'ArrowUp') {
        if (document.querySelector("body > div:nth-child(" + (y - 1) + ")> div:nth-child(" + x + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved up');
            y--;
            document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + x + ")").appendChild(mario);
        }
    }
    if (e.code == 'ArrowRight') {
        if (document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + (x + 1) + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved right');
            x++;
            console.log(x);
            document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + x + ")").appendChild(mario);
        }
    }
    if (e.code == 'ArrowDown') {
        if (document.querySelector("body > div:nth-child(" + (y + 1) + ")> div:nth-child(" + x + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved down');
            y++;
            document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + x + ")").appendChild(mario);
        }
    }
    if (e.code == 'ArrowLeft') {
        if (document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + (x - 1) + ")").classList.contains('wall')) {
            console.log('hit a wall');
        } else {
            console.log('moved left');
            x--
            document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + x + ")").appendChild(mario);
        }
    }
    if (y == 3 && x == 13) {
        alert('YOU DID IT WAHOOOOO')
    }

})


// let seconds = 0;
// let minutes = 0;
// const section = document.createElement('section')
// const time = document.createElement('div')
// const p = document.createElement('p');
// p.className = 'timer';
// time.appendChild(p)
// section.appendChild(time)
// body.appendChild(section)



// function timer() {
//     const para = document.querySelector('p');
//     if (seconds>=0){
//         para.textContent = seconds + ' s';
//         if (seconds>60){
//             para.textContent = minutes + ' min ' + (seconds - (minutes *60)) + ' s'
//         }
//     }
//     if (seconds % 60 == 0 && seconds !== 0) {
//         para.textContent = (minutes +1 ) + ' min';
//         minutes++
//     }
//     seconds++
// }
// const interval = setInterval(timer, 1000)