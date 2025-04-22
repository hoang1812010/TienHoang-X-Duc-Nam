// Lấy các phần tử
const previewImage = document.getElementById('preview-image');
const speedSlider = document.getElementById('speed');
const brightnessSlider = document.getElementById('brightness');
const contrastSlider = document.getElementById('contrast');
const speedValue = document.getElementById('speed-value');
const brightnessValue = document.getElementById('brightness-value');
const contrastValue = document.getElementById('contrast-value');

// Cập nhật giá trị tốc độ
speedSlider.addEventListener('input', () => {
    const speed = speedSlider.value;
    speedValue.textContent = `${speed}/2.0`;
    // Logic thay đổi tốc độ video nếu dùng video
});

// Cập nhật độ sáng
brightnessSlider.addEventListener('input', () => {
    const brightness = brightnessSlider.value;
    brightnessValue.textContent = `${brightness}%`;
    previewImage.style.filter = `brightness(${brightness}%) contrast(${contrastSlider.value}%)`;
});

// Cập nhật độ tương phản
contrastSlider.addEventListener('input', () => {
    const contrast = contrastSlider.value;
    contrastValue.textContent = `${contrast}%`;
    previewImage.style.filter = `brightness(${brightnessSlider.value}%) contrast(${contrast}%)`;
});
