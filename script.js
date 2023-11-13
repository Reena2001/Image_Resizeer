const images = [
    'image1.jpg',
    'image2.jpg',
    // Add more image URLs as needed
];

const container = document.querySelector('.container');

images.forEach((imageUrl) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = imageUrl;

    imageContainer.appendChild(img);
    container.appendChild(imageContainer);
});
const icons = [
    'icon1.png',
    'icon2.png',
    // Add more icon URLs as needed
];

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container, index) => {
    const icon = document.createElement('img');
    icon.src = icons[index];
    icon.classList.add('icon');

    container.appendChild(icon);
});
