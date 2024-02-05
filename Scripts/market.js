document.addEventListener('DOMContentLoaded', () =>{
    const Marketmenu = document.getElementById('market');
    const openMarket = document.getElementById('openMarket');
    const closeUp = document.getElementById('closeMarketMenu');


    Marketmenu.addEventListener('click', function () {
        openMarket.style.display = 'block';
                
      });
    
      closeUp.addEventListener('click', function () {
        openMarket.style.display = 'none';
      });
  
})