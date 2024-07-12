document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    const images = [
        { src: 'images/1.jpg', hdSrc: 'images/hd/1.jpg', title: 'Image 1', description: '1' },
        { src: 'images/2.jpg', hdSrc: 'images/hd/2.jpg', title: 'Image 2', description: '2' },
        { src: 'images/3.jpg', hdSrc: 'images/hd/3.jpg', title: 'Image 3', description: '3' },
        { src: 'images/4.jpg', hdSrc: 'images/hd/4.jpg', title: 'Image 4', description: '4' },
        { src: 'images/5.jpg', hdSrc: 'images/hd/5.jpg', title: 'Image 5', description: '5' },
        { src: 'images/6.jpg', hdSrc: 'images/hd/6.jpg', title: 'Image 6', description: '6' },
        { src: 'images/7.jpg', hdSrc: 'images/hd/7.jpg', title: 'Image 7', description: '7' },
        { src: 'images/8.jpg', hdSrc: 'images/hd/8.jpg', title: 'Image 8', description: '8' },
        { src: 'images/9.jpg', hdSrc: 'images/hd/9.jpg', title: 'Image 9', description: '9' },
        { src: 'images/10.jpg', hdSrc: 'images/hd/10.jpg', title: 'Image 10', description: '10' },
        { src: 'images/11.jpg', hdSrc: 'images/hd/11.jpg', title: 'Image 11', description: '11' },
        { src: 'images/12.jpg', hdSrc: 'images/hd/12.jpg', title: 'Image 12', description: '12' },
        { src: 'images/13.jpg', hdSrc: 'images/hd/13.jpg', title: 'Image 13', description: '13' },
        { src: 'images/14.jpg', hdSrc: 'images/hd/14.jpg', title: 'Image 14', description: '14' },
        { src: 'images/15.jpg', hdSrc: 'images/hd/15.jpg', title: 'Image 15', description: '15' },
        { src: 'images/16.jpg', hdSrc: 'images/hd/16.jpg', title: 'Image 16', description: '16' },
        { src: 'images/17.jpg', hdSrc: 'images/hd/17.jpg', title: 'Image 17', description: '17' },
        { src: 'images/18.jpg', hdSrc: 'images/hd/18.jpg', title: 'Image 18', description: '18 ' },
        { src: 'images/19.jpg', hdSrc: 'images/hd/19.jpg', title: 'Image 19', description: '19' },
        { src: 'images/20.jpg', hdSrc: 'images/hd/20.jpg', title: 'Image 20', description: '20' },
    ];

    images.forEach((image, index) => {
        const container = document.createElement('div');
        container.classList.add('image-container');
        container.dataset.index = index;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;

        container.appendChild(img);
        gallery.appendChild(container);
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    gallery.addEventListener('click', (event) => {
        const target = event.target.closest('.image-container');
        if (target) {
            const index = target.dataset.index;
            const image = images[index];
            modal.style.display = 'block';
            modalImg.src = image.hdSrc;
            captionText.innerHTML = <h2>${image.title}</h2><p>${image.description}</p>;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});