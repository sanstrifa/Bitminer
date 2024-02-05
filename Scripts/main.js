
let systemPower = false;
let money = 1000000;
let bitValue = 10;
let convertedMoneyMultiplier = 1;
const bitCount = document.getElementById("bit");
const trade = document.getElementById("trade");
const cpuUPG = document.querySelector(".upgradeCPU");
const gpuUPG = document.querySelector(".upgradeGPU");
const ramUPG = document.querySelector(".upgradeRAM");


// declaring object literals into a variable. Objects contain two valus with seperate computer components used in calculating bitpower.
// the idea is to incrementally progress through upgrading the components.
const CPUs = [ 
  {name: 'SparkyV1',
    price: 500,
    cores: 4,
    speed: 3,
    description: 'Basic gaming processor'
  },
  {
    name: 'SparkyV2',
    price: 1100,
    cores: 8,
    speed: 4.5,
    description: 'Excellent processor capable of running nearly anything the average user would need with relative ease.'
  },
  {
    name: 'SparkyV3',
    price: 2000,
    cores: 10,
    speed: 5.2,
    description: 'Sparkys revolutionary processor that exceeded any competition at the time, they were the first to deliver a 10 core processor with these kinds of speeds.'
  },
  {
    name: 'SparkyV4',
    price: 3500,
    cores: 12,
    speed: 6,
    description: 'Things are getting kind of silly, Sparky seems to have produced something the world has never seen before. The speed of this 12-core CPU is unparalleled.'
  }
];
const cpuPower = CPUs[0].cpu


// the graphics cards currently are going to provide the most return but once passive tree is functional the idea of making special builds could change.


const GPUs = [
  {
    name: 'Nova-Gen1',
    price: 700,
    VRAM: 4,
    speed: 1200,
    modifier: 2, // modifier value is meant to emphasize the significance of the gpu in the bitminer program it will just give more of a stat boost 
    description: 'Budget-friendly graphics card, nothing overly exciting here but can run most games.'
  },
  {
    name: 'Nova-Gen2',
    price: 1100,
    VRAM: 6,
    speed: 1700,
    modifier: 3,
    description: 'Significant upgrade from the previous model'
  },
  {
    name: 'Nova-Gen3',
    price: 1500,
    VRAM: 8,
    speed: 2300,
    modifier: 4,
    description: 'Now we are talkin, Novas 170 has made a huge milestone here in graphics computing'
  },
  {
    name: 'Nova-Gen4',
    price: 2500,
    VRAM: 10,
    speed: 2500,
    modifier: 5,
    description: 'Novas high-end graphics capable of running all modern games'
  },
];

const MEMORY = [
{name: 'Vexcore828', price: 800, Ram: 8, speed: 2800,},
{name: 'Vexcore1632', price: 1200, Ram: 16, speed: 3200,},
{name: 'Vexcore3245', price: 2000, Ram: 32, speed: 4500,},
{name: 'Vexcore6460', price: 2500, Ram: 64, speed: 6000,},
{name: 'Vexcore1287', price: 3900, Ram: 128, speed: 7200,},
];

class Computer {
  constructor(cpu, gpu, ram){
      this.name = `Computer-$${Computer.counter}`;
      this.cpu = cpu;
      this.gpu = gpu;
      this.ram = ram;
      this.upgrades = [];
      this.bitPower = this.calcBitPower();
      this.bits = 0.01; // this is just to get some bits coming in from the start
      Computer.counter++
  }
  calcBitPower(){
      return this.cpu * this.gpu * this.ram; // bitpower is the value used to farm bits, it essentially bundles the computer power into one number. Its used in upgrades and math.
  }
  updateVariables(bitPower, bits){
      stopWorker();
      this.bitPower = bitPower;
      this.bits = bits;
      
    }
  upgradeCPU(newCPU){
     this.cpu = newCPU;
     this.upgrades.push(`CPU: ${newCPU.name}`) // store cpu upgrade
     this.bitPower = this.calcBitPower();
  }
  upgradeGPU(){
      this.gpu += 1000;
      this.bitPower = this.calcBitPower();
  }
  upgradeRAM(){
      this.ram += 8;
      this.bitPower = this.calcBitPower();
  }
}
const computers = [];

let computerCost = 10000;

function purchaseComputer(){
  if(computers.length < 3 && money >= computerCost){
    Computer.counter = 1;
    const newComputer = new Computer(2, 1000, 8)
    computers.push(newComputer);
    money -= computerCost;
    renderComputers();
  } else if(money != computerCost){
alert('Not enough money!')
  } else {
    alert("You can't purchase more than 3 computers.")
  }

}

function renderComputers() {
  const container = document.getElementById('computerContainer')
  container.innerHTML = '';
  computers.forEach((computer, index) => {
    const computerDiv = document.createElement('div');
    computerDiv.classList.add('col');
      computerDiv.innerHTML = `

    
      <h4>CPU: ${computer.cpu}</h4>
      <h4>GPU: ${computer.gpu}</h4>
      <h4>RAM: ${computer.ram}</h4>
      <button class="openUpgradeMenu btn btn-outline-success" data-index="${index}">Upgrade</button>
      
      `;
      container.appendChild(computerDiv);


  });

  const openUpgradeMenuBtns = document.querySelectorAll(".openUpgradeMenu");
  openUpgradeMenuBtns.forEach(btn => {
    btn.addEventListener('click', function(event){
      
      const index = event.target.dataset.index; // this is storing which button is on what computer
      const buyMenu = document.getElementById('buyMenu');
      const closeBuyMenuBtn = document.getElementById('closeBuyMenuBtn');
      buyMenu.style.display = 'block';
  
      closeBuyMenuBtn.addEventListener('click', function () {
        buyMenu.style.display = 'none';
      });
    });
  });

}

let pcomputer = document.getElementById('purchaseComputer');
pcomputer.addEventListener('click', purchaseComputer);



const computer = new Computer(2, 1000, 8);

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
// Function to generate HTML for CPU upgrades menu
// function generateCPUUpgradesMenu() {
  
//   const cpuMenu = document.getElementById('cpuMenu');
//   cpuMenu.style.display = 'block';
//   cpuMenu.innerHTML = '';
//   const closeButton = document.createElement('button');
//   closeButton.textContent = 'Close';
//   closeButton.classList.add('btn-close');
//   closeButton.addEventListener('click', function() {
//     cpuMenu.style.display = 'none';
//   });
//   cpuMenu.addEventListener('click', function(event) {
//     const button = event.target;
//       const cpuName = button.dataset.cpu;
//       const cpuPrice = parseInt(button.dataset.price);
//       const cpuCores = parseInt(button.dataset.cores);
//       const cpuSpeed = parseInt(button.dataset.speed);
//       buyCPUUpgrade(cpuName, cpuPrice, cpuCores, cpuSpeed);
//     });
//   CPUs.forEach(cpu => {
//     const cpuOption = document.createElement('div');
//     cpuOption.classList.add('upgrade-option');
//     cpuOption.innerHTML = `
//       <h4>${cpu.name}</h4>
//       <p>Cores: ${cpu.cores}</p>
//       <p>${cpu.speed}GHz</p>
//       <p>${cpu.description}</p>
//       <p>Price: $${cpu.price}</p>
//       <button class="btn-buy-cpu" data-cpu="${cpu.name}" data-price="${cpu.price}" data-cores="${cpu.cores}" data-speed="${cpu.speed}">Buy</button>
//     `;
   
//     cpuMenu.appendChild(cpuOption);
  
//     cpuMenu.appendChild(closeButton);
//     })
// }
// function buyCPUUpgrade(cpuName, cpuPrice, cpuCores, cpuSpeed){
//   console.log(`Bought CPU: ${cpuName}, ${cpuCores}Cores @ ${cpuSpeed}GHz for $${cpuPrice}`);
// }







// function generategGPUUpgradesMenu() {
  
//   const gpuMenu = document.getElementById('gpuMenu');
//   gpuMenu.style.display = 'block';
//   gpuMenu.innerHTML = '';
//   const closeButton = document.createElement('button');
//   closeButton.textContent = 'Close';
//   closeButton.classList.add('btn-close');
//   closeButton.addEventListener('click', function() {
//     gpuMenu.style.display = 'none';
//   });
//   GPUs.forEach(gpu => {
//     const gpuOption = document.createElement('div');
//     gpuOption.classList.add('upgrade-option');
//     gpuOption.innerHTML = `
//       <h4>${gpu.name}</h4>
//       <p>${gpu.VRAM}</h4>
//       <p>${gpu.speed}GHz</h4>
//       <p>${gpu.description}</p>
//       <p>Price: $${gpu.price}</p>
//       <button class="btn-buy-gpu" data-gpu="${gpu.name}" data-price="${gpu.price}">Buy</button>
//     `;
//     gpuMenu.appendChild(gpuOption);
  
//     gpuMenu.appendChild(closeButton);
  
//   });
// }
// function generateRAMUpgradesMenu() {
  
//   const ramMenu = document.getElementById('ramMenu');
//   ramMenu.style.display = 'block';
//   ramMenu.innerHTML = '';
//   const closeButton = document.createElement('button');
//   closeButton.textContent = 'Close';
//   closeButton.classList.add('btn-close');
//   closeButton.addEventListener('click', function() {
//     ramMenu.style.display = 'none';
//   });
//   MEMORY.forEach(ram => {
//     const ramOption = document.createElement('div');
//     ramOption.classList.add('upgrade-option');
//     ramOption.innerHTML = `
//       <h4>${ram.name}</h4>
//       <p>${ram.Ram}Gb</h4>
//       <p>${ram.speed}MHz</h4>
//       <p>${ram.description}</p>
//       <p>Price: $${ram.price}</p>
//       <button class="btn-buy-ram" data-rram="${ram.name}" data-price="${ram.price}">Buy</button>
//     `;
//     ramMenu.appendChild(ramOption);
  
//     ramMenu.appendChild(closeButton);
  
//   });
// }

function generateUpgradeMenu(component, menuId) {
  const componentMenu = document.getElementById(menuId);
  componentMenu.style.display = 'block';
  componentMenu.innerHTML = '';
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.classList.add('btn-close');
  closeButton.addEventListener('click', function() {
    componentMenu.style.display = 'none';
  });

  component.forEach(item => {
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('upgrade-option');
    optionDiv.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.details}</p>
      <p>Price: $${item.price}</p>
      <button class="btn-buy" data-name="${item.name}" data-price="${item.price}">Buy</button>
    `;

    componentMenu.appendChild(optionDiv);
    componentMenu.appendChild(closeButton);
  });

  componentMenu.addEventListener('click', function(event) {
    const button = event.target;
    if (button.classList.contains('btn-buy')) {
      const itemName = button.dataset.name;
      const itemPrice = parseInt(button.dataset.price);
      buyUpgrade(itemName, itemPrice);
    }
  });
}

function buyUpgrade(itemName, itemPrice) {
  console.log(`Bought ${itemName} for $${itemPrice}`);
}


cpuUPG.addEventListener("click", () => { 
  generateUpgradeMenu(CPUs, 'cpuMenu');
 
});
gpuUPG.addEventListener("click", () => { 
  generateUpgradeMenu(GPUs, 'gpuMenu');
})
ramUPG.addEventListener("click", () => { 
  generateUpgradeMenu(MEMORY, 'ramMenu');
 
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
  powerDisplay.textContent = `BitPower: ${v}`
  const moneyDisplay = document.getElementById('money');
  moneyDisplay.textContent = `$: ${m}`
}
  
document.getElementById("start").addEventListener("click", mineBits)
document.getElementById("stop").addEventListener("click", stopWorker);