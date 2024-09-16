const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F7FF33', '#FF33A1',
    '#33FFF6', '#F6FF33', '#FF8C33', '#33FF8C', '#8C33FF',
    '#FF3333', '#33FF33', '#3333FF', '#FFB833', '#33FFB8',
    '#B833FF', '#FF33B8', '#B8FF33', '#33B8FF', '#FF33B3',
    '#B3FF33', '#33B3FF', '#FF6C33', '#33FF6C', '#6C33FF',
    '#FF336C', '#6CFF33', '#336CFF', '#FF8C6C', '#6CFF8C',
    '#8C6CFF', '#FF6C8C', '#8CFF6C', '#6C8CFF', '#FF6C6C',
    '#6CFF6C', '#6C6CFF', '#6CFF6C', '#FF6C6C', '#33FF33',
    '#FF33FF', '#FF33CC', '#33FFCC', '#CC33FF', '#CCFF33',
    '#33CCFF', '#FFCC33', '#CC33CC', '#FFCCCC', '#CCFFCC'
];

let currentColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        changeBackgroundColor();
    }
});

document.addEventListener('touchstart', function() {
    changeBackgroundColor();
});
