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

  // Variables to store selected cards for both players
  let selectedPlayer1Card = null;
  let selectedPlayer2Card = null;
  
  // Function to render player cards
  function renderCards(player, cardArray, containerId) {
    const cardContainer = document.getElementById(containerId);
    cardContainer.innerHTML = ''; // Clear any existing cards
  
    cardArray.forEach((card, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
      
      // Create an image element for the card
      const cardImage = document.createElement('img');
      cardImage.src = card.image;
      cardImage.alt = card.name;
      cardImage.classList.add('card-image');
      
      // Create a title for the card
      const cardTitle = document.createElement('div');
      cardTitle.innerText = card.name;
      cardTitle.classList.add('card-title');
  
      // Add an event listener to handle card selection
      cardDiv.addEventListener('click', () => selectCard(player, index));
  
      // Append the image and title to the card div
      cardDiv.appendChild(cardImage);
      cardDiv.appendChild(cardTitle);
      cardContainer.appendChild(cardDiv);
    });
  }
  
  // Function to select a card for either player
  function selectCard(player, index) {
    if (player === 1) {
      selectedPlayer1Card = player1Cards[index];
      displaySelectedCard(1, selectedPlayer1Card);
    } else {
      selectedPlayer2Card = player2Cards[index];
      displaySelectedCard(2, selectedPlayer2Card);
    }
  
    // If both players have selected their cards, resolve the battle
    if (selectedPlayer1Card && selectedPlayer2Card) {
      resolveBattle();
    }
  }
  
  // Function to display selected card details for each player
  function displaySelectedCard(player, card) {
    const selectedCardDetails = document.getElementById(`selected-player${player}-card-details`);
    selectedCardDetails.innerHTML = `
      <h3>${card.name}</h3>
      <img src="${card.image}" alt="${card.name}" class="card-image-selected">
      <p>Attack: ${card.attack}</p>
      <p>Defense: ${card.defense}</p>
    `;
  }
  
  // Function to resolve the battle between two selected cards
  function resolveBattle() {
    const battleResult = document.getElementById('battle-result');
    const player1Attack = selectedPlayer1Card.attack - selectedPlayer2Card.defense;
    const player2Attack = selectedPlayer2Card.attack - selectedPlayer1Card.defense;
  
    let resultMessage = '';
  
    if (player1Attack > player2Attack) {
      resultMessage = `Player 1's ${selectedPlayer1Card.name} wins!`;
    } else if (player2Attack > player1Attack) {
      resultMessage = `Player 2's ${selectedPlayer2Card.name} wins!`;
    } else {
      resultMessage = "It's a tie!";
    }
  
    // Display the result of the battle
    battleResult.innerText = resultMessage;
  
    // Reset selected cards for a new round
    selectedPlayer1Card = null;
    selectedPlayer2Card = null;
  }
  
  // Initialize the game by rendering the cards for both players
  renderCards(1, player1Cards, 'player1-cards');
  renderCards(2, player2Cards, 'player2-cards');

  // Function to resolve the battle between two selected cards
function resolveBattle() {
  const player1Attack = selectedPlayer1Card.attack - selectedPlayer2Card.defense;
  const player2Attack = selectedPlayer2Card.attack - selectedPlayer1Card.defense;
  
  let resultMessage = '';
  let winnerCard = null;
  
  if (player1Attack > player2Attack) {
    resultMessage = `Player 1's ${selectedPlayer1Card.name} wins!`;
    winnerCard = selectedPlayer1Card;
  } else if (player2Attack > player1Attack) {
    resultMessage = `Player 2's ${selectedPlayer2Card.name} wins!`;
    winnerCard = selectedPlayer2Card;
  } else {
    resultMessage = "It's a tie!";
    winnerCard = null; // No winner in case of a tie
  }
  
  // Store the result and winner information in localStorage
  localStorage.setItem('battleResult', resultMessage);
  
  if (winnerCard) {
    localStorage.setItem('winnerName', winnerCard.name);
    localStorage.setItem('winnerImage', winnerCard.image);
  } else {
    localStorage.removeItem('winnerName');
    localStorage.removeItem('winnerImage');
  }
