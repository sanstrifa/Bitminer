class Computer {
    constructor(cpu, gpu, ram){
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.bitPower = this.calcBitPower();
        this.bits = 0.01; // this is just to get some bits coming in from the start
    }
    calcBitPower(){
        return this.cpu * this.gpu * this.ram; // bitpower is the value used to farm bits, it essentially bundles the computer power into one number. Its used in upgrades and math.
    }
    updateVariables(bitPower, bits){
        stopWorker();
        this.bitPower = bitPower;
        this.bits = bits;
        
      }
    upgradeCPU(){
       this.cpu += 2;
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
if (typeof window.Computer === 'undefined') {
    window.Computer = Computer;
}