// Card data for both players
const player1Cards = [
  { name: 'Warrior', attack: 8, defense: 5, image: 'warrior.gif' },
  { name: 'Mage', attack: 7, defense: 5, image: 'mage3-unscreen.gif' },
  { name: 'Archer', attack: 7, defense: 6, image: 'archer3-unscreen.gif' },
  { name: 'Dragon', attack: 10, defense: 8, image: 'dragon.gif' },
  { name: 'Goblin', attack: 5, defense: 4, image: 'goblin.gif' },
  { name: 'Dwarf', attack: 6, defense: 7, image: 'dwarf.gif' },
  { name: 'Street-fighter', attack: 7, defense: 4, image: 'street-fighter.gif' },
  { name: 'Werewolf', attack: 8, defense: 6, image: 'werewolf.gif' },
  { name: 'Rogue', attack: 7, defense: 6, image: 'rogue.gif' },
  { name: 'Spearman', attack: 9, defense: 4, image: 'Spearman.gif' },
];

const player2Cards = [
  { name: 'Knight', attack: 7, defense: 7, image: 'knight.gif' },
  { name: 'Sorcerer', attack: 6, defense: 8, image: 'sorcerer2-unscreen.gif' },
  { name: 'Assassin', attack: 9, defense: 5, image: 'assasin2-unscreen.gif' },
  { name: 'Zombie', attack: 10, defense: 9, image: 'zombie2.gif' },
  { name: 'Orc', attack: 6, defense: 5, image: 'orc.gif' },
  { name: 'Necromancer', attack: 6, defense: 7, image: 'Necromancer.gif' },
  { name: 'Shape-Shifter', attack: 5, defense: 6, image: 'shape-shifter-unscreen.gif' },
  { name: 'Vampire', attack: 8, defense: 6, image: 'vampire.gif' },
  { name: 'Yogi', attack: 6, defense: 8, image: 'yogi.gif' },
  { name: 'Barbarian', attack: 8, defense: 5, image: 'barbarian.gif' },
];

let selectedPlayer1Card = null;
let selectedPlayer2Card = null;

// Function to render cards for each player
function renderCards(player, cardArray, containerId) {
  const cardContainer = document.getElementById(containerId);
  cardContainer.innerHTML = ''; // Clear previous cards

  cardArray.forEach((card, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Create image for card
    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.alt = card.name;
    cardImage.classList.add('card-image');

    // Add card name
    const cardTitle = document.createElement('div');
    cardTitle.innerText = card.name;

    // Handle card selection
    cardDiv.addEventListener('click', () => selectCard(player, index));

    // Append card elements to card div
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardTitle);
    cardContainer.appendChild(cardDiv);
  });
}

// Function to handle card selection for both players
function selectCard(player, index) {
  if (player === 1) {
    selectedPlayer1Card = player1Cards[index];
    displaySelectedCard(1, selectedPlayer1Card);
  } else {
    selectedPlayer2Card = player2Cards[index];
    displaySelectedCard(2, selectedPlayer2Card);
  }
}

// Function to display the selected card for each player
function displaySelectedCard(player, card) {
  const selectedCardDetails = document.getElementById(`selected-player${player}-card-details`);

  // Apply background image and update card content
  selectedCardDetails.style.backgroundImage = `url('${card.image}')`; // Set background image to the card's image
  selectedCardDetails.classList.add('selected-card'); // Apply selected-card styles
  
  // Update the text and stats inside the card
  selectedCardDetails.innerHTML = `
    <h3>${card.name}</h3>
    <p>Attack: ${card.attack}</p>
    <p>Defense: ${card.defense}</p>
  `;
}

// Function to handle the battle logic
function startBattle() {
  if (!selectedPlayer1Card || !selectedPlayer2Card) {
    alert('Both players need to select a card!');
    return;
  }

  const player1Attack = selectedPlayer1Card.attack - selectedPlayer2Card.defense;
  const player2Attack = selectedPlayer2Card.attack - selectedPlayer1Card.defense;

  let resultMessage = '';
  let winnerCardImage = '';
  
  if (player1Attack > player2Attack) {
    resultMessage = `Player 1's ${selectedPlayer1Card.name} wins!`;
    winnerCardImage = selectedPlayer1Card.image; // Store the winning card's image
  } else if (player2Attack > player1Attack) {
    resultMessage = `Player 2's ${selectedPlayer2Card.name} wins!`;
    winnerCardImage = selectedPlayer2Card.image; // Store the winning card's image
  } else {
    resultMessage = "It's a tie!";
    winnerCardImage = 'selected.png'; // Set to a generic tie image
  }

  
  // Store result and winner's image in localStorage
  localStorage.setItem('battleResult', resultMessage);
  localStorage.setItem('winnerCardImage', winnerCardImage);

  // Navigate to result page
  window.location.href = 'final-result.html';
}


// Render cards for both players on page load
renderCards(1, player1Cards, 'player1-cards');
renderCards(2, player2Cards, 'player2-cards');
