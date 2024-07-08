document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");

    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove('active');
            if (idx === index) {
                item.classList.add('active');
            }
        });
    }

    function moveCarousel(step) {
        currentIndex += step;
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= items.length) {
            currentIndex = items.length - 1;
        }
        showItem(currentIndex);
    }

    document.querySelector(".prev").addEventListener("click", () => moveCarousel(-1));
    document.querySelector(".next").addEventListener("click", () => moveCarousel(1));
    showItem(currentIndex);

    document.addEventListener("click", (event) => {
        const sidebar = document.getElementById("sidebar");
        const menuToggle = document.querySelector(".menu-toggle");
        if (sidebar.classList.contains("active") && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });
});


function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
}

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    window.scrollToTop = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelector('.nav-links');

    sidebar.classList.toggle('active');
    navLinks.classList.toggle('show');
}

});