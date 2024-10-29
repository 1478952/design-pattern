class IEGrimpan {
    static instance;
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas is not HTMLCanvasElement");
        }
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new IEGrimpan(document.getElementById("canvas"));
        }
        return this.instance;
    }
    initialize() { }
    initializeMenu() { }
}
export default IEGrimpan;
