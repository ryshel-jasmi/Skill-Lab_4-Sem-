document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    
    function revealCards() {
        const windowHeight = window.innerHeight;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 50) {
                card.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealCards);
    revealCards();
});

document.addEventListener("DOMContentLoaded", function () {
    const shopBooksText = "Shop Books";
    const shopBooksElement = document.querySelector('.featured-section h2');
    let currentIndex = 0;
    let intervalId;

    function typeText() {
        shopBooksElement.textContent = shopBooksText.slice(0, currentIndex);
        currentIndex++;
        if (currentIndex > shopBooksText.length) {
            clearInterval(intervalId);
            setTimeout(() => {
                currentIndex = 0;
                startTyping();
            }, 2000);
        }
    }

    function startTyping() {
        clearInterval(intervalId);
        intervalId = setInterval(typeText, 180);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleTypingVisibility() {
        const shopBooksVisible = isElementInViewport(shopBooksElement);
        if (shopBooksVisible) {
            if (!intervalId) {
                startTyping();
            }
        } else {
            clearInterval(intervalId);
            intervalId = null;
            shopBooksElement.textContent = shopBooksText;
        }
    }

    startTyping();
    window.addEventListener('scroll', handleTypingVisibility);
});
