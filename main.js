//  When system powered on computers farm bits 

let systemPower = false;

let money = 0;
const bitCount = document.getElementById("bit");
const buyComputer = document.getElementById('buyBtn');

const cpuit = document.querySelector(".cpu");
const gpuit = document.querySelector(".gpu");
const ramem = document.querySelector(".ram");
const btn = document.querySelector(".upgrade");

class Computer {
  constructor(cpu, gpu, ram){
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.bitPower = cpu * gpu * ram;
    this.bits = 0.01;
  }
  updateVariables(bitPower, bits){
    stopWorker();
    this.bitPower = bitPower;
    this.bits = bits;
    mineBits();
    
  }
}
const computer = new Computer(2, 1000, 8); // create purchase function that checks balance and buys a new computer and adds it to the dom
buyComputer.addEventListener('click', () => {
  const computer = new Computer(2, 1000, 8);
})

btn.addEventListener("click", () => { // upgrade menu give option to chose from cpu gpu and ram upgrades.
    
    upgradeCpu()
})

function upgradeCpu(){
    computer.cpu += 2;
    computer.gpu += 1000;
    computer.ram += 8;
    console.log(computer.cpu,computer.gpu, computer.ram);
    const newBitPower = computer.cpu * computer.gpu * computer.ram;
    computer.updateVariables(newBitPower, computer.bits)
}

    var bitPower =  computer.cpu * computer.gpu * computer.ram;     //componentSpeeds.cpu * componentSpeeds.gpu * componentSpeeds.ram;
    var bits = 0.01;
    let bitCnt = 0;
    let powerCount = 0;
    //    var bitAmount = bitPower * bits;
    function updateResultDisplay(value) {
        const resultDisplay = document.getElementById('bit');
        resultDisplay.textContent = `Bits: ${value}`;
      }
      function showBitPower(v){
        const powerDisplay = document.getElementById('bitpower');
        powerDisplay.textContent = `Power: ${v}`
      }
function bitCalc(bitPower, bits){
    return bitPower * bits;

}
function mineBits() {
  // check if an interval has already been set up
  if (!systemPower) {
    const result = bitCalc(computer.bitPower, computer.bits);
    const intervalID = setInterval(() => {
        bitCnt += Math.floor(result / 100);
        powerCount = computer.bitPower;
        updateResultDisplay(bitCnt);
        showBitPower(powerCount);
        
    }, 134);
    systemPower = intervalID;
  }
}

function stopWorker() {
  if ( systemPower !== false){
    clearInterval(systemPower);
    systemPower = false;
  }
 
}
document.getElementById("start").addEventListener("click", mineBits)
document.getElementById("stop").addEventListener("click", stopWorker);