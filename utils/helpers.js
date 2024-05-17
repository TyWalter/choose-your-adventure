module.exports = {
  level_icon: (url) => {
    if (url === '/game') {
      return `<img class="levelLogo" src="/imgs/level-1.png" alt="level one">`;
    } else if(url === '/game/'){
      return `<img class="levelLogo" src="/imgs/level-1.png" alt="level one">`;
    } else if(url === '/game/1'){
      return `<img class="levelLogo" src="/imgs/level-1.png" alt="level one">`;
    } else if(url === '/game/2'){
      return `<img class="levelLogo" src="/imgs/level-2.png" alt="level two">`;
    } else if(url === '/game/3'){
      return `<img class="levelLogo" src="/imgs/level-3.png" alt="level three">`;
    }
  },
  
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  get_emoji: () => {
    const randomNum = Math.random();
    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};