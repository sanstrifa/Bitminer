// script.js
document.addEventListener('DOMContentLoaded', function () {
    const openBuyMenuBtn = document.getElementById('openMarket');
    const closeBuyMenuBtn = document.getElementById('closeBuyMenuBtn');
    const buyMenu = document.getElementById('buyMenu');
    const buyBtn = document.getElementById('buyBtn');


  
    openBuyMenuBtn.addEventListener('click', function () {
      buyMenu.style.display = 'block';
    });
  
    closeBuyMenuBtn.addEventListener('click', function () {
      buyMenu.style.display = 'none';
    });
  
    buyBtn.addEventListener('click', function () {
      // Logic for buying upgrades goes here
      // You can update state or perform other actions
      // create purchase function that checks balance and buys a new computer and adds it to the dom
    buyBtn.addEventListener('click', () => {
  const computer = new Computer(2, 1000, 8);
})
      console.log('Upgrade bought!');
    });
  });
  