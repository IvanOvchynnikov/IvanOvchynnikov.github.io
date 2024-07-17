let countries = {
    "Romania": {
        topLeft: [947, 863],
        bottomRight: [1039, 946.5]
    },
    "Poland": {
        topLeft: [807, 686],
        bottomRight: [946, 775]
    },
    "Hungary": {
        topLeft: [828, 869],
        bottomRight: [903, 900]
    },
    "Czech Republic": {
        topLeft: [762, 786],
        bottomRight: [810, 820]
    },
    "Slovakia": {
        topLeft: [830, 814],
        bottomRight: [878, 849]
    },
    "Germany": {
        topLeft: [664, 701],
        bottomRight: [732, 848]
    },
    "France": {
        topLeft: [463, 784],
        bottomRight: [597, 945]
    },
    "Austria": {
        topLeft: [754, 847],
        bottomRight: [813, 882]
    },
    "Switzerland": {
        topLeft: [626, 861],
        bottomRight: [669, 881]
    },
    "Italy": {
        topLeft: [624, 904],
        bottomRight: [716, 936]
    },
    "Italy2": {
        topLeft: [681, 950],
        bottomRight: [714, 968]
    },
    "Italy3": {
        topLeft: [703, 977],
        bottomRight: [744, 1004]
    },
    "Italy4": {
        topLeft: [727, 1014],
        bottomRight: [760, 1032]
    },
    "Italy5": {
        topLeft: [767, 1037],
        bottomRight: [789, 1056]
    },
    "Italy6": {
        topLeft: [779, 1064],
        bottomRight: [804, 1073]
    }
};

// Функція, яка визначає, чи знаходиться точка в прямокутнику
function isPointInRectangle(point, rectangle) {
    // Extract point coordinates
    const [px, py] = point;

    // Extract rectangle coordinates
    const [x1, y1] = rectangle.topLeft;
    const [x2, y2] = rectangle.bottomRight;

    // Check if the point is within the rectangle bounds
    return px >= x1 && px <= x2 && py >= y1 && py <= y2;
}

// Обробник події кліку на зображенні
document.getElementById('image').addEventListener('click', function (event) {
    let img = event.target;

    // Отримання розмірів зображення
    let imgWidth = img.naturalWidth;
    let imgHeight = img.naturalHeight;

    // Отримання розмірів контейнера (або вікна)
    let rect = img.getBoundingClientRect();
    let containerWidth = rect.width;
    let containerHeight = rect.height;

    // Координати кліку відносно зображення
    let x = (event.clientX - rect.left) * (imgWidth / containerWidth);
    let y = (event.clientY - rect.top) * (imgHeight / containerHeight);

    // Перевірка, чи точка знаходиться в будь-якому прямокутнику країни
    for (let country in countries) {
        if (isPointInRectangle([x, y], countries[country])) {
            window.alert(`Clicked on ${country}`);
            break; // Перервати цикл, якщо точка знайдена в прямокутнику країни
        }
    }
});
