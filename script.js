// Database of your games
const games = [
    { id: 1, title: "Square Dodger", emoji: "🟦", color: "#38bdf8" },
    { id: 2, title: "Neon Climber", emoji: "🧗", color: "#f472b6" },
    { id: 3, title: "Space Loot", emoji: "🚀", color: "#fbbf24" },
    { id: 4, title: "Pixel Quest", emoji: "🗡️", color: "#4ade80" }
];

const gameGrid = document.getElementById('gameGrid');
const modal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close-btn');

// 1. Generate the Library UI
function loadLibrary() {
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-thumb" style="color: ${game.color}">${game.emoji}</div>
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>Action • Multiplayer</p>
            </div>
        `;
        card.onclick = () => openGame(game);
        gameGrid.appendChild(card);
    });
}

// 2. Handle Opening Games
function openGame(game) {
    modal.style.display = "block";
    document.getElementById('currentVisibleTitle').innerText = game.title;
    
    // In a real app, you might use an <iframe> here to load a sub-game
    document.getElementById('gameViewport').innerHTML = `
        <div style="color: white; padding-top: 200px;">
            <p>Connecting to ${game.title} servers...</p>
            <button onclick="alert('Launch Game Logic Here')">Play Now</button>
        </div>
    `;
}

// 3. Modal Close Logic
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

loadLibrary();
