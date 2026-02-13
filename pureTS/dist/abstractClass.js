class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const camera = new Instagram("test", "Test", 10);
export {};
//# sourceMappingURL=abstractClass.js.map