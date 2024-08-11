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
            // ワンフレーム遅らせてshowクラスを追加
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });

    // モーダルの外側をクリックして閉じる
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // トランジションの時間と同じにする
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 既存のコード...

    // マップセクションの「more」ボタンにイベントリスナーを追加
    const mapMoreBtn = document.querySelector('#access .more-btn');
    if (mapMoreBtn) {
        mapMoreBtn.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            modalImage.src = imageSrc;
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    }
});