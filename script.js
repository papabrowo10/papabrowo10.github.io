:root {
    --bg: #0b0e14;
    --sidebar: #131720;
    --card: #1c2331;
    --accent: #7c4dff;
    --text-main: #ffffff;
    --text-dim: #94a3b8;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
    background-color: var(--bg);
    color: var(--text-main);
    font-family: 'Plus Jakarta Sans', sans-serif;
    margin: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
}

/* Sidebar Navigation */
.sidebar {
    width: 240px;
    background: var(--sidebar);
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #2d3748;
}

.logo {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 2px;
    color: var(--accent);
    margin-bottom: 50px;
}

nav a {
    color: var(--text-dim);
    text-decoration: none;
    padding: 12px 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: block;
    transition: var(--transition);
}

nav a.active, nav a:hover {
    background: var(--accent);
    color: white;
}

/* Main Content Area */
.content {
    flex: 1;
    padding: 40px;
    overflow-y: auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

.search-bar input {
    background: var(--card);
    border: 1px solid #2d3748;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    width: 250px;
}

/* Game Cards */
.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
}

.game-card {
    background: var(--card);
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition);
    border: 1px solid transparent;
}

.game-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(124, 77, 255, 0.2);
}

.thumb {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    background: linear-gradient(45deg, #1e293b, #334155);
}

.info {
    padding: 15px;
}

.info h3 { margin: 0; font-size: 18px; }
.info p { color: var(--text-dim); font-size: 14px; margin: 5px 0 0; }

/* The Game Overlay */
.overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.95);
    z-index: 1000;
    flex-direction: column;
}

.overlay-header {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#gameContainer {
    flex: 1;
    margin: 0 40px 40px 40px;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
}

.close-btn {
    background: var(--accent);
    border: none; color: white;
    font-size: 24px; padding: 5px 15px;
    border-radius: 8px; cursor: pointer;
}
