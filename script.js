const tulipsContainer = document.querySelector('.tulips');
const tulipImages = [
    'tulip1.jpg',
    'tulip2.jpg',
    'tulip3.jpg',
    'tulip4.jpg',
    'tulip5.jpg'
];

tulipImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    tulipsContainer.appendChild(img);
});
