// Открытие бургер-меню
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Открытие модального окна с игрой
function openGame(gameId) {
    const gameData = {
        game1: {
            title: "Game 1",
            description: "Description of Game 1...",
            requirements: [
                "OS: Windows 10",
                "Processor: Intel i5",
                "Memory: 8GB RAM",
                "Graphics: GTX 960",
                "Storage: 20GB available space"
            ]
        },
        game2: {
            title: "Game 2",
            description: "Description of Game 2...",
            requirements: [
                "OS: Windows 7",
                "Processor: Intel i3",
                "Memory: 4GB RAM",
                "Graphics: GTX 750",
                "Storage: 10GB available space"
            ]
        },
        game3: {
            title: "Game 3",
            description: "Description of Game 3...",
            requirements: [
                "OS: Windows 11",
                "Processor: Intel i7",
                "Memory: 16GB RAM",
                "Graphics: GTX 1080",
                "Storage: 50GB available space"
            ]
        }
    };

    const game = gameData[gameId];
    document.getElementById('gameTitle').innerText = game.title;
    document.getElementById('gameDescription').innerText = game.description;
    
    const requirementsList = document.getElementById('systemRequirements');
    requirementsList.innerHTML = '';
    game.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requirementsList.appendChild(li);
    });

    document.getElementById('gameModal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('gameModal').style.display = 'none';
}
