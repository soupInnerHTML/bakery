ymaps.ready(function () {
    const coordinates = [58.003236, 56.237445]
    const map = new ymaps.Map('map', {
        center: coordinates, // Координаты центра карты
        zoom: 16,
        controls: []
    });

    // Создаем метку
    const placemark = new ymaps.Placemark(coordinates, {
        hintContent: 'Bakery',
        balloonContent: 'Bakery'
    });

    // Добавляем метку на карту
    map.geoObjects.add(placemark);
});