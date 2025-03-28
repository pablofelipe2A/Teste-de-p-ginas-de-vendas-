const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500;

let bird = { x: 50, y: 250, width: 20, height: 20, velocity: 0, gravity: 0.6, lift: -10 };
let pipes = [];
let score = 0;
let isGameOver = false;

function createPipe() {
    let pipeHeight = Math.floor(Math.random() * (canvas.height / 2)) + 50;
    let gap = 100;
    pipes.push({
        x: canvas.width,
        y: pipeHeight,
        width: 40,
        height: canvas.height - pipeHeight,
        gap: gap
    });
}

function update() {
    if (isGameOver) return;

    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.height >= canvas.height) {
        gameOver();
    }

    pipes.forEach((pipe, index) => {
        pipe.x -= 2;

        if (pipe.x + pipe.width < 0) {
            pipes.splice(index, 1);
            score++;
            document.getElementById("score").textContent = score;
        }

        if (
            bird.x < pipe.x + pipe.width &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.y || bird.y + bird.height > pipe.y + pipe.gap)
        ) {
            gameOver();
        }
    });

    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
        createPipe();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "yellow";
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

    ctx.fillStyle = "green";
    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.y);
        ctx.fillRect(pipe.x, pipe.y + pipe.gap, pipe.width, canvas.height - pipe.y - pipe.gap);
    });
}

function gameOver() {
    isGameOver = true;
    alert(`Game Over! Sua pontuação: ${score}`);
    location.reload();
}

function jump() {
    if (!isGameOver) {
        bird.velocity = bird.lift;
    }
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") jump();
});

document.addEventListener("click", jump);

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
