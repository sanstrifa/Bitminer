
document.addEventListener('click', function(event) {

  if(event.target.classList.contains('openUpgradeMenu')){
    const openBuyMenuBtn = document.getElementById("openUpgradeMenu");
    const closeBuyMenuBtn = document.getElementById('closeBuyMenuBtn');
    const buyMenu = document.getElementById('buyMenu');


    openBuyMenuBtn.addEventListener('click', function () {
      buyMenu.style.display = 'block';
    });
  
    closeBuyMenuBtn.addEventListener('click', function () {
      buyMenu.style.display = 'none';
    });

  }
   
});
  