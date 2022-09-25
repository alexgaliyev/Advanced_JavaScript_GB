let block = document.getElementById('text');

document.getElementById('push').addEventListener('click', () => {
block.textContent = block.textContent.replace(/'/g, '"');
});

document.getElementById('push2').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/\B'|'\B/g, '"');
    });