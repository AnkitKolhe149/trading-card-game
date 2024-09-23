// Basic card data for player (human) and AI, including image URLs
const playerCards = [
    { name: 'Warrior', attack: 8, defense: 5, image: 'gifs/warrior.gif' },
    { name: 'Mage', attack: 6, defense: 7, image: 'gifs/mage3-unscreen.gif' },
    { name: 'Archer', attack: 7, defense: 6, image: 'gifs/archer3-unscreen.gif' },
    { name: 'Dragon', attack: 10, defense: 8, image: 'gifs/dragon.gif' },
    { name: 'Goblin', attack: 5, defense: 4, image: 'gifs/goblin.gif' },
    { name: 'Dwarf', attack: 5, defense: 4, image: 'gifs/dwarf.gif' },
    { name: 'Street-fighter', attack: 5, defense: 4, image: 'gifs/street-fighter.gif' },
    { name: 'Werewolf', attack: 5, defense: 4, image: 'gifs/werewolf.gif' },
    { name: 'Rogue', attack: 5, defense: 4, image: 'gifs/rogue.gif' },
    { name: 'Spearman', attack: 5, defense: 4, image: 'gifs/Spearman.gif' },
    { name: 'Knight', attack: 7, defense: 7, image: 'gifs/knight.gif' },
    { name: 'Sorcerer', attack: 6, defense: 8, image: 'gifs/sorcerer2-unscreen.gif' },
    { name: 'Assassin', attack: 9, defense: 5, image: 'gifs/assasin2-unscreen.gif' },
    { name: 'Zombie', attack: 10, defense: 9, image: 'gifs/zombie2.gif' },
    { name: 'Orc', attack: 6, defense: 5, image: 'gifs/orc.gif' },
    { name: 'Necromancer', attack: 5, defense: 4, image: 'gifs/Necromancer.gif' },
    { name: 'Mimic', attack: 5, defense: 4, image: 'gifs/shape-shifter-unscreen.gif' },
    { name: 'Vampire', attack: 5, defense: 4, image: 'gifs/vampire.gif' },
    { name: 'Yogi', attack: 5, defense: 4, image: 'gifs/yogi.gif' },
    { name: 'Barbarian', attack: 5, defense: 4, image: 'gifs/barbarian.gif' },
  ];
  
  const aiCards = [
    { name: 'Warrior', attack: 8, defense: 5, image: 'gifs/warrior.gif' },
    { name: 'Mage', attack: 6, defense: 7, image: 'gifs/mage3-unscreen.gif' },
    { name: 'Archer', attack: 7, defense: 6, image: 'gifs/archer3-unscreen.gif' },
    { name: 'Dragon', attack: 10, defense: 8, image: 'gifs/dragon.gif' },
    { name: 'Goblin', attack: 5, defense: 4, image: 'gifs/goblin.gif' },
    { name: 'Dwarf', attack: 5, defense: 4, image: 'gifs/dwarf.gif' },
    { name: 'Street-fighter', attack: 5, defense: 4, image: 'gifs/street-fighter.gif' },
    { name: 'Werewolf', attack: 5, defense: 4, image: 'gifs/werewolf.gif' },
    { name: 'Rogue', attack: 5, defense: 4, image: 'gifs/rogue.gif' },
    { name: 'Spearman', attack: 5, defense: 4, image: 'gifs/Spearman.gif' },
    { name: 'Knight', attack: 7, defense: 7, image: 'gifs/knight.gif' },
    { name: 'Sorcerer', attack: 6, defense: 8, image: 'gifs/sorcerer2-unscreen.gif' },
    { name: 'Assassin', attack: 9, defense: 5, image: 'gifs/assasin2-unscreen.gif' },
    { name: 'Zombie', attack: 10, defense: 9, image: 'gifs/zombie2.gif' },
    { name: 'Orc', attack: 6, defense: 5, image: 'gifs/orc.gif' },
    { name: 'Necromancer', attack: 5, defense: 4, image: 'gifs/Necromancer.gif' },
    { name: 'Mimic', attack: 5, defense: 4, image: 'gifs/shape-shifter-unscreen.gif' },
    { name: 'Vampire', attack: 5, defense: 4, image: 'gifs/vampire.gif' },
    { name: 'Yogi', attack: 5, defense: 4, image: 'gifs/yogi.gif' },
    { name: 'Barbarian', attack: 5, defense: 4, image: 'gifs/barbarian.gif' },
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
      cardDiv.addEventListener('click', () => selectCard(index));
  
      // Append the image and title to the card div
      cardDiv.appendChild(cardImage);
      cardDiv.appendChild(cardTitle);
      cardContainer.appendChild(cardDiv);
    });
  }
  
  // Function to select a card for the player and automatically select one for the AI
  function selectCard(index) {
    selectedPlayerCard = playerCards[index];
    displaySelectedCard(1, selectedPlayerCard);
  
    // Delay AI card selection by 2 seconds using setTimeout
    setTimeout(() => {
      // AI selects a random card after 2 seconds
      selectedAICard = aiCards[Math.floor(Math.random() * aiCards.length)];
      displaySelectedCard(2, selectedAICard);
  
      // Resolve the battle after both cards are selected
      resolveBattle();
    }, 2000); // 2000 milliseconds = 2 seconds
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
  
  // Function to resolve the battle between the player's and AI's selected cards
  function resolveBattle() {
    const battleResult = document.getElementById('battle-result');
    const playerAttack = selectedPlayerCard.attack - selectedAICard.defense;
    const aiAttack = selectedAICard.attack - selectedPlayerCard.defense;
  
    let resultMessage = '';
  
    if (playerAttack > aiAttack) {
      resultMessage = `Player's ${selectedPlayerCard.name} wins!`;
    } else if (aiAttack > playerAttack) {
      resultMessage = `AI's ${selectedAICard.name} wins!`;
    } else {
      resultMessage = "It's a tie!";
    }
  
    // Display the result of the battle
    battleResult.innerText = resultMessage;
  
    // Reset selected cards for a new round
    selectedPlayerCard = null;
    selectedAICard = null;
  }
  
  // Initialize the game by rendering the player's cards
  renderCards(playerCards, 'player-cards');
  