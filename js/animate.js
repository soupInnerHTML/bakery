// Создаем новый экземпляр Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn'); // Добавляем классы анимации
            observer.unobserve(entry.target); // Отключаем наблюдение за этим элементом
        }
    });
});

// Наблюдаем за элементами с классом fade-in
document.querySelectorAll('.appear').forEach((element) => {
    observer.observe(element);
});