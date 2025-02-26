function createBlossom() {
    const blossom = document.createElement("div");
    blossom.classList.add("blossom");
    document.getElementById("blossom-container").appendChild(blossom);

    const size = Math.random() * 10 + 10; // Random size
    const startPosition = Math.random() * window.innerWidth; // Random start position
    const duration = Math.random() * 5 + 5; // Random fall duration

    blossom.style.width = `${size}px`;
    blossom.style.height = `${size}px`;
    blossom.style.left = `${startPosition}px`;
    blossom.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        blossom.remove();
    }, duration * 1000);
}

setInterval(createBlossom, 300);

/* Blossom Styling */
const style = document.createElement("style");
style.innerHTML = `
    .blossom {
        position: absolute;
        top: 0;
        background: pink;
        border-radius: 50%;
        opacity: 0.8;
        box-shadow: 0px 0px 5px rgba(255, 182, 193, 0.8);
        animation: fall linear infinite;
    }

    @keyframes fall {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);
