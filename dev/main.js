window.onload = function () {
    const canvas = document.getElementById("main");
    setupLoop(canvas);
}

function setupLoop(canvas) {
    if (!canvas.getContext) {
        return;
    }

    fixScale(canvas);

    let x = 0;
    setInterval(() => {
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        tick(canvas);
    }, 500);
}

function fixScale(canvas) {
    const ctx = canvas.getContext('2d');

    // Set display size (css pixels).
    var width = window.innerWidth;
    var height = window.innerHeight;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    // Set actual size in memory (scaled to account for extra pixel density).
    var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
    canvas.width = width * scale;
    canvas.height = height * scale;

    // Normalize coordinate system to use css pixels.
    ctx.scale(scale, scale);
}

function tick(canvas) {
    if (this.ticker === undefined) {
        this.ticker = 0;
    }

    const ctx = canvas.getContext('2d');

    // Draw boxes
    const boxCount = Math.floor(this.ticker / 5) * 2;
    for (let i = 0; i < boxCount; i++) {
        const rad = 2 * Math.PI / boxCount * i;
        const size = 300 / ((boxCount)/1.5) ;
        const offsets = calcBoxOffsets(rad);
        const x = window.innerWidth / 2 + offsets[0];
        const y = window.innerHeight / 2 + offsets[1];
        
        // Box
        ctx.fillStyle = '#000';
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
        ctx.strokeStyle = '#ff0000';
        ctx.strokeText(`${i}`, x - 10 + size / 2, y - 6 + size / 2);

        // Line
        if (i <= boxCount / 2) {
            const oppositeIndex = (boxCount / 2 + i) % boxCount;
            const _offsets = calcBoxOffsets(2 * Math.PI / boxCount * oppositeIndex);

            const _x = window.innerWidth / 2 + _offsets[0];
            const _y = window.innerHeight / 2 + _offsets[1];
            
            ctx.strokeStyle = '#ff0000';
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(_x, _y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    // Draw stats
    const stats = [
        `Ticker: ${this.ticker}`,
        `Box Count: ${boxCount}`,
    ];
    ctx.strokeStyle = '#000';
    for (let i = 0; i < stats.length; i++) {
        const stat = stats[i];
        ctx.strokeText(stat, 10, 20 + 14 * i);
    }

    this.ticker++;
}

function calcBoxOffsets(rad) {
    const scale = 300;
    const xOffset = Math.cos(rad) * scale;
    const yOffset = Math.sin(rad) * scale;
    return [xOffset, -yOffset];
}