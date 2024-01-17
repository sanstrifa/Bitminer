
let systemPower = false;
let money = 0;
const bitCount = document.getElementById("bit");
const cpuUPG = document.querySelector(".upgradeCPU");
const gpuUPG = document.querySelector(".upgradeGPU");
const ramUPG = document.querySelector(".upgradeRAM");
// const btn = document.querySelector(".upgrade");


const computer = new Computer(2, 1000, 8)

// class Computer {
//   constructor(cpu, gpu, ram){
//     this.cpu = cpu;
//     this.gpu = gpu;
//     this.ram = ram;
//     this.bitPower = cpu * gpu * ram;
//     this.bits = 0.01;
//   }
//   updateVariables(bitPower, bits){
//     stopWorker();
//     this.bitPower = bitPower;
//     this.bits = bits;
//     mineBits();
    
//   }
// }  // create purchase function that checks balance and buys a new computer and adds it to the dom
cpuUPG.addEventListener("click", () => { 
    
    computer.upgradeCPU();
    const newBitPower = computer.bitPower;
    const newBits = computer.bits;
  
    computer.updateVariables(newBitPower, newBits);
    mineBits();
  
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


// function upgradeCpu(){
  
//   computer.upgradeCPU();
//   computer.upgradeGPU();
//   computer.upgradeRAM();
//   console.log(computer.cpu, computer.gpu, computer.ram)

//   const newBitPower = computer.bitPower;
//   const newBits = computer.bits;

//   computer.updateVariables(newBitPower, newBits);
//   mineBits();

// }

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
        console.log(computer.cpu, computer.gpu, computer.ram);
        
    }, 1000);
    systemPower = intervalID;
  }
}
    // var bitPower =  computer.cpu * computer.gpu * computer.ram;     //componentSpeeds.cpu * componentSpeeds.gpu * componentSpeeds.ram;
    // var bits = 0.01;
    //    var bitAmount = bitPower * bits;
function stopWorker() {
  if ( systemPower !== false){
    clearInterval(systemPower);
    systemPower = false;
  }
}
let bitCnt = 0;
let powerCount = 0;

function updateResultDisplay(value) {
  const resultDisplay = document.getElementById('bit');
  resultDisplay.textContent = `Bits: ${value}`;
}
function showBitPower(v){
  const powerDisplay = document.getElementById('bitpower');
  powerDisplay.textContent = `Power: ${v}`
}

document.getElementById("start").addEventListener("click", mineBits)
document.getElementById("stop").addEventListener("click", stopWorker);