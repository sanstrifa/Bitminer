
let systemPower = false;
let money = 0;
let bitValue = 10;
let convertedMoneyMultiplier = 1
const bitCount = document.getElementById("bit");
const trade = document.getElementById("trade");
const cpuUPG = document.querySelector(".upgradeCPU");
const gpuUPG = document.querySelector(".upgradeGPU");
const ramUPG = document.querySelector(".upgradeRAM");


const computer = new Computer(2, 1000, 8)


const CPUs = [
  {name: 'SparkyV1', price: 500, cores: 4, speed: 3, description: 'Basic gaming processor'},
  {name: 'SparkyV2', price: 1100, cores: 8, speed: 4.5, description: 'Excellent processor capable of running nearly anything the average user would need with relative ease.'},
  {name: 'SparkyV3', price: 2000, cores: 10, speed: 5.2, description: 'Sparkys revolutionary processor that exceeded any competion at the time, they were the first to deliver a 10 core processor with these kinds of speeds.'},
  {name: 'SparkyV4', price: 3500, cores: 12, speed: 6, description: 'Things are getting kind of silly, Sparky seems to have produced something the world has never seen before. The speed of this 12-core cpu are unparalleled' },
];

// the graphics cards currently are going to provide the most return but once passive tree is functional the idea of making special builds could change.
const GPUs = [
  {name: 'Nova-Gen1', price: 700, VRAM: 4, speed: 1200, modifier: 2, description:  'Budget friendly graphics card, nothing overly exciting here but can run most games.'},
  {name: 'Nova-Gen2', price: 1100, VRAM: 6, speed: 1700, modifier: 3, description: 'Significant upgrade from the previous modle'},
  {name: 'Nova-Gen3', price: 1500, VRAM: 8, speed: 2300, modifier: 4, description: 'Now we are talkin, Novas 170 has made a huge milestone here in graphics computing'},
  {name: 'Nova-Gen4', price: 2500, VRAM: 10, speed: 2500, modifier: 5, description: 'Novas high end graphics capable of running all modern games withe'},
  {name: 'Nova-GenX', price: 4000, VRAM: 15, speed: 3500, modifier: 6, description: 'Novas flagship graphics card.'},
];

const MEMORY = [
{name: 'Vexcore828', price: 800, Ram: 8, speed: 2800,},
{name: 'Vexcore1632', price: 1200, Ram: 16, speed: 3200,},
{name: 'Vexcore3245', price: 2000, Ram: 32, speed: 4500,},
{name: 'Vexcore6460', price: 2500, Ram: 64, speed: 6000,},
{name: 'Vexcore1287', price: 3900, Ram: 128, speed: 7200,},
];

function performUpgrade(upgradeFunction, costIncrease){ // add function that updates cpu gpu and ram numbers after upgrading
  let cost = 200;
  if(cost <= money){
    upgradeFunction();
    const newBitPower = computer.bitPower;
    const newBits = computer.bits;
    computer.updateVariables(newBitPower, newBits);
    mineBits();
    money -= cost;
    cost += costIncrease;
  } else{
    alert("Not enough money!")
  }
};
cpuUPG.addEventListener("click", () => { 
  performUpgrade(() => computer.upgradeCPU(), 1000); // these two are the parameters for the perform upgrade function
 
});
gpuUPG.addEventListener("click", () => { 
    performUpgrade(() => computer.upgradeGPU(), 500);// modify these functions to select the next components on the market rather than just continously upgrading one
})
ramUPG.addEventListener("click", () => { 
  performUpgrade(() => computer.upgradeRAM(), 2000);
 
});

// listener to exchange bits for money
trade.addEventListener('click', () => {
const convertedMoney = Math.floor(bitCnt / bitValue) * convertedMoneyMultiplier;// calc for bit exchange
bitCnt -= Math.floor(bitCnt / bitValue) * bitValue;
money += convertedMoney;
updateResultDisplay(bitCnt, powerCount, money);

})

function bitCalc(bitPower, bits){
  return bitPower * bits;
}


let bitCnt = 0;
let powerCount = 0;

function mineBits() {
  if (!systemPower) {
    const result = bitCalc(computer.bitPower, computer.bits);
    const intervalID = setInterval(() => {
        bitCnt += Math.floor(result / 10); // the math here is going into updateResultDisplay as the value for bitCnt
        powerCount = computer.bitPower;
        updateResultDisplay(bitCnt, powerCount, money)
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

function updateResultDisplay(value, v, m) {
  const resultDisplay = document.getElementById('bit');
  resultDisplay.textContent = `Bits: ${value}`;
  const powerDisplay = document.getElementById('bitpower');
  powerDisplay.textContent = `Power: ${v}`
  const moneyDisplay = document.getElementById('money');
  moneyDisplay.textContent = `$: ${m}`
}
  
document.getElementById("start").addEventListener("click", mineBits)
document.getElementById("stop").addEventListener("click", stopWorker);