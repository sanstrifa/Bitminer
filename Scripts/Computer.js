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
    upgradeCPU(){
        this.cpu += 2;
    }
    upgradeGPU(){
        this.gpu += 1000;
    }
    upgradeRAM(){
        this.ram += 8;
    }
}
if (typeof window.Computer === 'undefined') {
    window.Computer = Computer;
}