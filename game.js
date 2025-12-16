// ===== GAME STATE =====
class GameState {
    constructor() {
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameStarted = false;
        this.boardSpaces = 40;
    }

    addPlayer(name, color, emoji) {
        const player = new Player(name, color, emoji, this.players.length);
        this.players.push(player);
        return player;
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    nextTurn() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        this.updateCurrentPlayerDisplay();
    }

    updateCurrentPlayerDisplay() {
        const currentPlayer = this.getCurrentPlayer();
        document.getElementById('current-player-name').textContent = currentPlayer.name;

        // Highlight active player
        document.querySelectorAll('.player-card').forEach((card, index) => {
            card.classList.toggle('active', index === this.currentPlayerIndex);
        });
    }

    reset() {
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameStarted = false;
    }
}

// ===== PLAYER CLASS =====
class Player {
    constructor(name, color, emoji, id) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.position = 0;
        this.money = 15000; // Starting money
        this.properties = [];
    }

    move(spaces, animate = true) {
        this.position = (this.position + spaces) % 40;
        return this.position;
    }

    addMoney(amount) {
        this.money += amount;
        this.updateMoneyDisplay();
    }

    subtractMoney(amount) {
        this.money = Math.max(0, this.money - amount);
        this.updateMoneyDisplay();
    }

    updateMoneyDisplay() {
        const playerCard = document.querySelector(`.player-card[data-player-id="${this.id}"]`);
        if (playerCard) {
            const moneyElement = playerCard.querySelector('.money');
            if (moneyElement) {
                moneyElement.textContent = `$${this.money.toLocaleString()}`;
            }
        }
    }
}

// ===== DICE SYSTEM =====
class DiceSystem {
    constructor() {
        this.dice1 = 0;
        this.dice2 = 0;
        this.total = 0;
    }

    roll() {
        this.dice1 = Math.floor(Math.random() * 6) + 1;
        this.dice2 = Math.floor(Math.random() * 6) + 1;
        this.total = this.dice1 + this.dice2;
        return { dice1: this.dice1, dice2: this.dice2, total: this.total };
    }

    displayResult(container) {
        container.innerHTML = `
            <div class="dice-value">${this.dice1}</div>
            <div class="dice-value">${this.dice2}</div>
        `;
    }
}

// ===== BOARD MANAGER =====
class BoardManager {
    constructor() {
        this.spaces = this.initializeSpaces();
    }

    initializeSpaces() {
        const spaces = [];
        const spaceElements = document.querySelectorAll('.space');

        spaceElements.forEach((element, index) => {
            const type = element.dataset.type || 'regular';
            const color = element.dataset.color || null;

            spaces.push({
                index: parseInt(element.dataset.index),
                type: type,
                color: color,
                element: element,
                name: this.getSpaceName(index)
            });
        });

        return spaces;
    }

    getSpaceName(index) {
        const names = [
            'INICIO', 'Espacio 1', 'Espacio 2', 'Espacio 3', 'Espacio 4',
            'Espacio 5', 'Espacio 6', 'Espacio 7', 'Espacio 8', 'Espacio 9',
            'SORTEO', 'Espacio 11', 'Espacio 12', 'Espacio 13', 'Espacio 14',
            'Espacio 15', 'Espacio 16', 'Espacio 17', 'Espacio 18', 'Espacio 19',
            'INVERSIONES', 'Espacio 21', 'Espacio 22', 'Espacio 23', 'Espacio 24',
            'Espacio 25', 'Espacio 26', 'Espacio 27', 'Espacio 28', 'Espacio 29',
            'MONEY', 'Espacio 31', 'Espacio 32', 'Espacio 33', 'Espacio 34',
            'Espacio 35', 'Espacio 36', 'Espacio 37', 'Espacio 38', 'Espacio 39'
        ];
        return names[index] || `Espacio ${index}`;
    }

    getSpace(index) {
        return this.spaces.find(space => space.index === index);
    }

    getSpaceElement(index) {
        return this.spaces[index]?.element;
    }

    movePlayerToken(player, newPosition, animate = true) {
        const oldToken = document.querySelector(`.player-token[data-player-id="${player.id}"]`);
        if (oldToken) {
            oldToken.remove();
        }

        const space = this.getSpace(newPosition);
        if (!space) return;

        const token = this.createPlayerToken(player);
        space.element.appendChild(token);

        if (animate) {
            token.classList.add('moving');
            setTimeout(() => token.classList.remove('moving'), 300);
        }

        this.positionTokenInSpace(space.element);
    }

    createPlayerToken(player) {
        const token = document.createElement('div');
        token.className = 'player-token';
        token.dataset.playerId = player.id;
        token.style.backgroundColor = player.color;
        token.textContent = player.emoji;
        return token;
    }

    positionTokenInSpace(spaceElement) {
        const tokens = spaceElement.querySelectorAll('.player-token');
        tokens.forEach((token, index) => {
            const angle = (index * 360) / tokens.length;
            const radius = 15;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            token.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
}

// ===== GAME CONTROLLER =====
class GameController {
    constructor() {
        this.gameState = new GameState();
        this.diceSystem = new DiceSystem();
        this.boardManager = new BoardManager();
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Start game button
        document.getElementById('start-game-btn').addEventListener('click', () => {
            this.showPlayerSetupModal();
        });

        // Add player button
        document.getElementById('add-player-btn').addEventListener('click', () => {
            this.showPlayerSetupModal();
        });

        // Reset game button
        document.getElementById('reset-game-btn').addEventListener('click', () => {
            this.resetGame();
        });

        // Roll dice button
        document.getElementById('roll-dice-btn').addEventListener('click', () => {
            this.rollDice();
        });

        // Player setup modal
        document.getElementById('confirm-players-btn').addEventListener('click', () => {
            this.confirmPlayers();
        });

        document.getElementById('cancel-setup-btn').addEventListener('click', () => {
            this.hidePlayerSetupModal();
        });

        document.getElementById('player-count').addEventListener('input', (e) => {
            this.updatePlayerNameInputs(parseInt(e.target.value));
        });
    }

    showPlayerSetupModal() {
        const modal = document.getElementById('player-setup-modal');
        modal.classList.add('active');
        this.updatePlayerNameInputs(2);
    }

    hidePlayerSetupModal() {
        const modal = document.getElementById('player-setup-modal');
        modal.classList.remove('active');
    }

    updatePlayerNameInputs(count) {
        const container = document.getElementById('player-names-container');
        container.innerHTML = '';

        const playerColors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
        const playerEmojis = ['🚗', '🚀', '🎩', '🎸', '⚽', '🎮'];

        for (let i = 0; i < count; i++) {
            const playerInput = document.createElement('div');
            playerInput.style.marginTop = '1rem';
            playerInput.innerHTML = `
                <label for="player-name-${i}">
                    <span style="display: inline-block; width: 30px; height: 30px; background: ${playerColors[i]}; border-radius: 50%; text-align: center; line-height: 30px; margin-right: 0.5rem;">${playerEmojis[i]}</span>
                    Jugador ${i + 1}:
                </label>
                <input type="text" id="player-name-${i}" value="Jugador ${i + 1}" data-color="${playerColors[i]}" data-emoji="${playerEmojis[i]}">
            `;
            container.appendChild(playerInput);
        }
    }

    confirmPlayers() {
        this.gameState.reset();

        const playerInputs = document.querySelectorAll('#player-names-container input');
        playerInputs.forEach(input => {
            const name = input.value || input.placeholder;
            const color = input.dataset.color;
            const emoji = input.dataset.emoji;
            this.gameState.addPlayer(name, color, emoji);
        });

        this.hidePlayerSetupModal();
        this.startGame();
    }

    startGame() {
        this.gameState.gameStarted = true;
        this.renderPlayers();
        this.initializePlayerPositions();
        this.gameState.updateCurrentPlayerDisplay();

        // Enable dice button
        document.getElementById('roll-dice-btn').disabled = false;

        console.log('Game started with', this.gameState.players.length, 'players');
    }

    renderPlayers() {
        const playerList = document.getElementById('player-list');
        playerList.innerHTML = '';

        this.gameState.players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.dataset.playerId = player.id;
            playerCard.innerHTML = `
                <div class="player-piece" style="background: ${player.color};">${player.emoji}</div>
                <div class="player-info">
                    <div class="name">${player.name}</div>
                    <div class="money">$${player.money.toLocaleString()}</div>
                </div>
            `;
            playerList.appendChild(playerCard);
        });
    }

    initializePlayerPositions() {
        this.gameState.players.forEach(player => {
            this.boardManager.movePlayerToken(player, 0, false);
        });
    }

    rollDice() {
        if (!this.gameState.gameStarted) {
            alert('¡Primero debes iniciar el juego!');
            return;
        }

        const currentPlayer = this.gameState.getCurrentPlayer();
        const rollButton = document.getElementById('roll-dice-btn');
        const diceResult = document.getElementById('dice-result');

        // Disable button during roll
        rollButton.disabled = true;
        rollButton.classList.add('rolling');

        // Animate dice roll
        setTimeout(() => {
            const result = this.diceSystem.roll();
            this.diceSystem.displayResult(diceResult);

            // Move player
            const newPosition = currentPlayer.move(result.total);
            this.boardManager.movePlayerToken(currentPlayer, newPosition, true);

            // Handle landing on space
            this.handleSpaceLanding(currentPlayer, newPosition);

            // Re-enable button and move to next turn
            setTimeout(() => {
                rollButton.classList.remove('rolling');
                this.gameState.nextTurn();
                rollButton.disabled = false;
            }, 1000);
        }, 500);
    }

    handleSpaceLanding(player, spaceIndex) {
        const space = this.boardManager.getSpace(spaceIndex);
        console.log(`${player.name} landed on ${space.name} (index ${spaceIndex})`);

        // Handle special spaces
        if (space.type === 'corner') {
            this.handleCornerSpace(player, space);
        } else {
            // Regular space logic can be added here
            this.handleRegularSpace(player, space);
        }
    }

    handleCornerSpace(player, space) {
        switch (space.index) {
            case 0: // INICIO
                console.log(`${player.name} on START`);
                player.addMoney(2000);
                this.showNotification(`¡${player.name} pasó por INICIO! +$2,000`, 'income');
                break;
            case 10: // SORTEO
                console.log(`${player.name} on SORTEO`);
                this.showNotification(`${player.name} en SORTEO - ¡Suerte!`, 'surprise-positive');
                break;
            case 20: // INVERSIONES
                console.log(`${player.name} on INVERSIONES`);
                this.showNotification(`${player.name} en INVERSIONES`, 'investment');
                break;
            case 30: // MONEY
                console.log(`${player.name} on MONEY`);
                player.addMoney(5000);
                this.showNotification(`¡${player.name} ganó $5,000 en MONEY!`, 'income');
                break;
        }
    }

    handleRegularSpace(player, space) {
        // Color-based mechanics
        switch (space.color) {
            case 'red':
                this.handleExpense(player);
                break;
            case 'blue':
                this.handleInvestment(player);
                break;
            case 'yellow':
                this.handleSurprise(player);
                break;
            case 'green':
                this.handleIncome(player);
                break;
            default:
                console.log(`Unknown space color: ${space.color}`);
        }
    }

    handleExpense(player) {
        const expenses = [
            { name: 'Reparación de Auto', amount: 500 },
            { name: 'Cuenta Médica', amount: 800 },
            { name: 'Multa de Tránsito', amount: 300 },
            { name: 'Reparación del Hogar', amount: 1000 },
            { name: 'Factura de Servicios', amount: 400 },
            { name: 'Pago de Impuestos', amount: 1200 },
            { name: 'Reparación de Electrodoméstico', amount: 600 },
            { name: 'Seguro Inesperado', amount: 700 }
        ];

        const expense = expenses[Math.floor(Math.random() * expenses.length)];
        player.subtractMoney(expense.amount);
        this.showNotification(`💸 ${player.name} - GASTO: ${expense.name} -$${expense.amount.toLocaleString()}`, 'expense');
    }

    handleInvestment(player) {
        const investments = [
            { name: 'Inversión en Bolsa', amount: 1500 },
            { name: 'Negocio Rentable', amount: 2000 },
            { name: 'Propiedad Apreciada', amount: 1800 },
            { name: 'Dividendos', amount: 1200 },
            { name: 'Bonos del Gobierno', amount: 1000 },
            { name: 'Fondo de Inversión', amount: 1600 },
            { name: 'Inversión Inmobiliaria', amount: 2200 },
            { name: 'Acciones Exitosas', amount: 1400 }
        ];

        const investment = investments[Math.floor(Math.random() * investments.length)];
        player.addMoney(investment.amount);
        this.showNotification(`📈 ${player.name} - INVERSIÓN: ${investment.name} +$${investment.amount.toLocaleString()}`, 'investment');
    }

    handleSurprise(player) {
        const surprises = [
            { name: 'Ganaste la Lotería', amount: 3000, type: 'positive' },
            { name: 'Multa Inesperada', amount: -800, type: 'negative' },
            { name: 'Bono de Trabajo', amount: 2000, type: 'positive' },
            { name: 'Robo en Casa', amount: -1500, type: 'negative' },
            { name: 'Regalo de Familiar', amount: 1000, type: 'positive' },
            { name: 'Accidente Menor', amount: -600, type: 'negative' },
            { name: 'Herencia Pequeña', amount: 2500, type: 'positive' },
            { name: 'Pérdida en Apuesta', amount: -400, type: 'negative' },
            { name: 'Reembolso de Impuestos', amount: 1500, type: 'positive' },
            { name: 'Deuda Olvidada', amount: -1000, type: 'negative' }
        ];

        const surprise = surprises[Math.floor(Math.random() * surprises.length)];

        if (surprise.amount > 0) {
            player.addMoney(surprise.amount);
            this.showNotification(`🎁 ${player.name} - SORPRESA: ${surprise.name} +$${surprise.amount.toLocaleString()}`, 'surprise-positive');
        } else {
            player.subtractMoney(Math.abs(surprise.amount));
            this.showNotification(`⚠️ ${player.name} - SORPRESA: ${surprise.name} -$${Math.abs(surprise.amount).toLocaleString()}`, 'surprise-negative');
        }
    }

    handleIncome(player) {
        const incomes = [
            { name: 'Salario Mensual', amount: 2000 },
            { name: 'Bono de Rendimiento', amount: 1500 },
            { name: 'Venta Exitosa', amount: 1800 },
            { name: 'Comisión', amount: 1200 },
            { name: 'Trabajo Extra', amount: 1000 },
            { name: 'Proyecto Freelance', amount: 1600 },
            { name: 'Aumento de Sueldo', amount: 2500 },
            { name: 'Renta de Propiedad', amount: 1400 }
        ];

        const income = incomes[Math.floor(Math.random() * incomes.length)];
        player.addMoney(income.amount);
        this.showNotification(`💰 ${player.name} - INGRESO: ${income.name} +$${income.amount.toLocaleString()}`, 'income');
    }

    showNotification(message, type = 'default') {
        // Define colors for different notification types
        const notificationStyles = {
            'default': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            'expense': 'linear-gradient(135deg, #ef4444, #dc2626)',
            'income': 'linear-gradient(135deg, #10b981, #059669)',
            'investment': 'linear-gradient(135deg, #3b82f6, #2563eb)',
            'surprise-positive': 'linear-gradient(135deg, #f59e0b, #d97706)',
            'surprise-negative': 'linear-gradient(135deg, #f97316, #ea580c)'
        };

        const background = notificationStyles[type] || notificationStyles['default'];

        // Create a notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${background};
            color: white;
            padding: 2rem 3rem;
            border-radius: 1rem;
            font-size: 1.5rem;
            font-weight: 700;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            z-index: 10000;
            animation: notification-in 0.3s ease-out;
            font-family: 'Fredoka', sans-serif;
            text-align: center;
            max-width: 80%;
            border: 3px solid rgba(255, 255, 255, 0.3);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'notification-out 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    resetGame() {
        this.gameState.reset();
        document.getElementById('player-list').innerHTML = '';
        document.getElementById('dice-result').innerHTML = '';
        document.querySelectorAll('.player-token').forEach(token => token.remove());
        document.getElementById('roll-dice-btn').disabled = true;
        document.getElementById('current-player-name').textContent = 'Jugador 1';
        console.log('Game reset');
    }
}

// ===== INITIALIZE GAME =====
let game;

document.addEventListener('DOMContentLoaded', () => {
    game = new GameController();
    console.log('Decisión Financiera - Game Loaded!');

    // Add notification animations to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes notification-in {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes notification-out {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(style);
});
