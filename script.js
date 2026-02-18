:root {
    --bg-dark: #05070a;
    --panel: #0f121a;
    --accent: #00f2ff;
    --text: #ffffff;
    --text-dim: #64748b;
}

* { box-sizing: border-box; }

body {
    margin: 0;
    background: var(--bg-dark);
    color: var(--text);
    font-family: 'Plus Jakarta Sans', sans-serif;
    overflow: hidden; /* Prevents double scrollbars */
}

.app-container {
    display: flex;
    height: 100vh;
}

/* Sidebar */
.sidebar {
    width: 260px;
    background: var(--panel);
    border-right: 1px solid #1e293b;
    padding: 40px 20px;
}

.logo {
    font-size: 28px;
    font-weight: 800;
    color: var(--accent);
    margin-bottom: 40px;
    text-shadow: 0 0 15px rgba(0, 242, 255, 0.3);
}

.nav-item {
    padding: 15px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.2s;
    color: var(--text-dim);
    margin-bottom: 5px;
}

.nav-item.active, .nav-item:hover {
    background: #1e293b;
    color: var(--text);
}

/* Content */
.main-content {
    flex: 1;
    padding: 40px;
    overflow-y: auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

/* Game Cards */
.card {
    background: var(--panel);
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #1e293b;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    border-color: var(--accent);
}

.card-img {
    height: 120px;
    background: #1e293b;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-bottom: 10px;
}

/* Overlay (The Game Player) */
.overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.95);
    z-index: 100;
    padding: 20px;
}

.overlay-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.overlay-nav {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #334155;
}

#iframeContainer {
    flex: 1;
    background: #000;
    margin-top: 15px;
    border-radius: 15px;
    overflow: hidden;
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.exit-btn {
    background: #ff4757;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
}
