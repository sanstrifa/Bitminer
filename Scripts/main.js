
let systemPower = false;
let money = 500;
let bitValue = 1000
const bitCount = document.getElementById("bit");
const trade = document.getElementById("trade");
const cpuUPG = document.querySelector(".upgradeCPU");
const gpuUPG = document.querySelector(".upgradeGPU");
const ramUPG = document.querySelector(".upgradeRAM");

const computer = new Computer(2, 1000, 8)

cpuUPG.addEventListener("click", () => { 
let cost = 200;
// create upgrade
if (cost <= money){
    computer.upgradeCPU();
    const newBitPower = computer.bitPower;
    const newBits = computer.bits;
    computer.updateVariables(newBitPower, newBits);
    mineBits();
    money -=cost;
    cost += 1000;
    console.log(cost)
    console.log(money)
}
else{
  alert("Not enough money!")
}
 
});
gpuUPG.addEventListener("click", () => { 
    
  computer.upgradeGPU();
  
  const newBitPower = computer.bitPower;
  const newBits = computer.bits;
  computer.updateVariables(newBitPower, newBits);
  mineBits();
})
ramUPG.addEventListener("click", () => { 
  computer.upgradeRAM();
  const newBitPower = computer.bitPower;
  const newBits = computer.bits;
  computer.updateVariables(newBitPower, newBits);
  mineBits();
})

// listener to exchange bits for money
trade.addEventListener('click', () => {
const convertedMoney = Math.floor(bitCnt / bitValue);// calc for bit exchange
bitCnt -= convertedMoney * bitValue;
money += convertedMoney;
updateResultDisplay(bitCnt);
showMoney(money);
})

function bitCalc(bitPower, bits){
  return bitPower * bits;
}

function mineBits() {
  if (!systemPower) {
    const result = bitCalc(computer.bitPower, computer.bits);
    const intervalID = setInterval(() => {
        bitCnt += Math.floor(result / 10); // the math here is going into updateResultDisplay as the value for bitCnt
        powerCount = computer.bitPower;
        updateResultDisplay(bitCnt);
        showBitPower(powerCount);
        showMoney(money);
        console.log(computer.cpu, computer.gpu, computer.ram);
        
    }, 50);
    systemPower = intervalID;
  }
}

function stopWorker() {
  if ( systemPower !== false){
    clearInterval(systemPower);
    systemPower = false;
  }
}
let bitCnt = 0;
let powerCount = 0;
                            //the value being passed here is bitCnt
function updateResultDisplay(value) {
  const resultDisplay = document.getElementById('bit');
  resultDisplay.textContent = `Bits: ${value}`;
}
function showBitPower(v){
  const powerDisplay = document.getElementById('bitpower');
  powerDisplay.textContent = `Power: ${v}`
}
function showMoney(m){
  const moneyDisplay = document.getElementById('money');
  moneyDisplay.textContent = `$: ${m}`
}



document.getElementById("start").addEventListener("click", mineBits)
document.getElementById("stop").addEventListener("click", stopWorker);