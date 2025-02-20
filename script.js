const canvas = document.getElementById("captchaCanvas");
const ctx = canvas.getContext("2d");
const slider = document.getElementById("slider");
const verifyBtn = document.getElementById("verifyBtn");

const image = new Image();
image.src = "https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm.jpg"; // ใช้ภาพสุ่มจาก Unsplash
let puzzleX = Math.floor(Math.random() * 150) + 50; // ตำแหน่งของจิ๊กซอว์
let userX = 0;

// โหลดภาพพื้นหลังและสร้างจิ๊กซอว์
image.onload = () => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    drawPuzzlePiece(puzzleX);
};

// วาดชิ้นจิ๊กซอว์
function drawPuzzlePiece(x) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillRect(x, 50, 50, 50);
}

// เมื่อเลื่อน slider
slider.addEventListener("input", (event) => {
    userX = parseInt(event.target.value);
    drawPuzzlePiece(userX);
});

// ตรวจสอบว่าตรงกับตำแหน่งจริงหรือไม่
verifyBtn.addEventListener("click", () => {
    if (Math.abs(userX - puzzleX) < 5) {
        alert("✅ Verification Successful!");
    } else {
        alert("❌ Try Again!");
        slider.value = 0;
        drawPuzzlePiece(0);
    }
});
