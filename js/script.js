document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const moreBtns = document.querySelectorAll('.more-btn');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // モーダル機能
    moreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            modalImage.src = imageSrc;
            modal.style.display = 'block';
        });
    });

    // モーダルの外側をクリックして閉じる
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});