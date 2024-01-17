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
        
      }
    upgradeCPU(){
       this.cpu += 2;
       this.bitPower = this.cpu * this.gpu * this.ram;
        
    }
    upgradeGPU(){
        this.gpu += 1000;
        this.bitPower = this.cpu * this.gpu * this.ram;
    }
    upgradeRAM(){
        this.ram += 8;
        this.bitPower = this.cpu * this.gpu * this.ram;
    }
}
if (typeof window.Computer === 'undefined') {
    window.Computer = Computer;
}