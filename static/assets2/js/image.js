const images = document.querySelectorAll('img');
images.forEach((image) => {
　image.addEventListener('error',() => {
　　image.setAttribute('src', 'https://png.pngtree.com/png-clipart/20190921/original/pngtree-yellow-warning-icon-png-image_4708778.jpg');
　});
});