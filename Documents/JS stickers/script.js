const inputs = document.querySelectorAll('.sticker-input');
const stickerCount = document.getElementById('sticker-count');

inputs.forEach(input => {
    input.addEventListener('input', updateStickerCount);
});

function updateStickerCount() {
    let total = 0;
    inputs.forEach(input => {
        total += parseInt(input.value) || 0;
    });

    if (total <= 10) {
        stickerCount.textContent = `Llevas ${total} stickers`;
    } else {
        stickerCount.textContent = 'Llevas demasiados stickers';
    }
}
