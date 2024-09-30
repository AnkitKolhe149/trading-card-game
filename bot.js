// Basic card data for player (human) and AI, including image URLs
const playerCards = [
  { name: 'Warrior', attack: 8, defense: 5, image: 'warrior.gif' },
  { name: 'Mage', attack: 6, defense: 7, image: 'mage3-unscreen.gif' },
  { name: 'Archer', attack: 7, defense: 6, image: 'archer3-unscreen.gif' },
  { name: 'Dragon', attack: 10, defense: 8, image: 'dragon.gif' },
  { name: 'Goblin', attack: 5, defense: 4, image: 'goblin.gif' },
  { name: 'Dwarf', attack: 5, defense: 4, image: 'dwarf.gif' },
  { name: 'Street-fighter', attack: 5, defense: 4, image: 'street-fighter.gif' },
  { name: 'Werewolf', attack: 5, defense: 4, image: 'werewolf.gif' },
  { name: 'Rogue', attack: 5, defense: 4, image: 'rogue.gif' },
  { name: 'Spearman', attack: 5, defense: 4, image: 'Spearman.gif' },
  { name: 'Knight', attack: 7, defense: 7, image: 'knight.gif' },
  { name: 'Sorcerer', attack: 6, defense: 8, image: 'sorcerer2-unscreen.gif' },
  { name: 'Assassin', attack: 9, defense: 5, image: 'assasin2-unscreen.gif' },
  { name: 'Zombie', attack: 10, defense: 9, image: 'zombie2.gif' },
  { name: 'Orc', attack: 6, defense: 5, image: 'orc.gif' },
  { name: 'Necromancer', attack: 5, defense: 4, image: 'Necromancer.gif' },
  { name: 'Mimic', attack: 5, defense: 4, image: 'shape-shifter-unscreen.gif' },
  { name: 'Vampire', attack: 5, defense: 4, image: 'vampire.gif' },
  { name: 'Yogi', attack: 5, defense: 4, image: 'yogi.gif' },
  { name: 'Barbarian', attack: 5, defense: 4, image: 'barbarian.gif' },
];

const aiCards = [
  { name: 'Warrior', attack: 8, defense: 5, image: 'warrior.gif' },
  { name: 'Mage', attack: 6, defense: 7, image: 'mage3-unscreen.gif' },
  { name: 'Archer', attack: 7, defense: 6, image: 'archer3-unscreen.gif' },
  { name: 'Dragon', attack: 10, defense: 8, image: 'dragon.gif' },
  { name: 'Goblin', attack: 5, defense: 4, image: 'goblin.gif' },
  { name: 'Dwarf', attack: 5, defense: 4, image: 'dwarf.gif' },
  { name: 'Street-fighter', attack: 5, defense: 4, image: 'street-fighter.gif' },
  { name: 'Werewolf', attack: 5, defense: 4, image: 'werewolf.gif' },
  { name: 'Rogue', attack: 5, defense: 4, image: 'rogue.gif' },
  { name: 'Spearman', attack: 5, defense: 4, image: 'Spearman.gif' },
  { name: 'Knight', attack: 7, defense: 7, image: 'knight.gif' },
  { name: 'Sorcerer', attack: 6, defense: 8, image: 'sorcerer2-unscreen.gif' },
  { name: 'Assassin', attack: 9, defense: 5, image: 'assasin2-unscreen.gif' },
  { name: 'Zombie', attack: 10, defense: 9, image: 'zombie2.gif' },
  { name: 'Orc', attack: 6, defense: 5, image: 'orc.gif' },
  { name: 'Necromancer', attack: 5, defense: 4, image: 'Necromancer.gif' },
  { name: 'Mimic', attack: 5, defense: 4, image: 'shape-shifter-unscreen.gif' },
  { name: 'Vampire', attack: 5, defense: 4, image: 'vampire.gif' },
  { name: 'Yogi', attack: 5, defense: 4, image: 'yogi.gif' },
  { name: 'Barbarian', attack: 5, defense: 4, image: 'barbarian.gif' },
];

// Variables to store selected cards
let selectedPlayerCard = null;
let selectedAICard = null;

// Function to render player cards
function renderCards(cardArray, containerId) {
  const cardContainer = document.getElementById(containerId);
  cardContainer.innerHTML = ''; // Clear any existing cards

  cardArray.forEach((card, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner'); // Ensure card inner is created

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.alt = card.name;
    cardImage.classList.add('card-image');
    cardBack.appendChild(cardImage);

    const cardTitle = document.createElement('div');
    cardTitle.innerText = card.name;
    cardTitle.classList.add('card-title');
    cardBack.appendChild(cardTitle);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardDiv.appendChild(cardInner); // Append card inner to card div

    cardDiv.addEventListener('click', () => selectCard(index)); // Card click event

    cardContainer.appendChild(cardDiv);
  });
}

// Function to handle card selection
function selectCard(index) {
  selectedPlayerCard = playerCards[index];
  renderSelectedCards();
  aiSelectCard();
  determineWinner();
}

// Function to render the selected player's and AI's cards
function renderSelectedCards() {
  const playerCardDetails = document.getElementById('selected-player1-card-details');
  const aiCardDetails = document.getElementById('selected-player2-card-details');

  if (selectedPlayerCard) {
    playerCardDetails.innerHTML = `
      <h2>Player's Selected Card</h2>
      <img src="${selectedPlayerCard.image}" alt="${selectedPlayerCard.name}" class="card-image-selected">
      <p><strong>${selectedPlayerCard.name}</strong></p>
      <p>Attack: ${selectedPlayerCard.attack}, Defense: ${selectedPlayerCard.defense}</p>
    `;
  }

  if (selectedAICard) {
    aiCardDetails.innerHTML = `
      <h2>AI's Selected Card</h2>
      <img src="${selectedAICard.image}" alt="${selectedAICard.name}" class="card-image-selected">
      <p><strong>${selectedAICard.name}</strong></p>
      <p>Attack: ${selectedAICard.attack}, Defense: ${selectedAICard.defense}</p>
    `;
  }
}
//making wait some time before selection
setTimeout(function(){ },2000);

// Function to make AI select a card randomly
function aiSelectCard() {
  const randomIndex = Math.floor(Math.random() * aiCards.length);
  selectedAICard = aiCards[randomIndex];
  setTimeout(function(){console.log("Selecting Opponent") },2000);
  renderSelectedCards();
}

// making wait some time before giving winner
setTimeout(function(){ },2000);

// Function to determine the winner
function determineWinner() {
  const resultDiv = document.getElementById('battle-result');

  if (!selectedPlayerCard || !selectedAICard) return;

  const playerScore = selectedPlayerCard.attack + selectedPlayerCard.defense;
  const aiScore = selectedAICard.attack + selectedAICard.defense;
  
setTimeout(function(){ console.log("Calculating Result") },2000);
  
  if (playerScore > aiScore) {
    resultDiv.textContent = 'Player Wins!';
  } else if (playerScore < aiScore) {
    resultDiv.textContent = 'AI Wins!';
  } else {
    resultDiv.textContent = 'It\'s a Draw!';
  }
}



// Initialize the game by rendering the player's cards
renderCards(playerCards, 'player-cards');
