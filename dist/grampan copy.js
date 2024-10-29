class Grimpan {
    static instance;
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas is not HTMLCanvasElement");
        }
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.getElementById("canvas"));
        }
        return this.instance;
    }
    initialize() { }
    initializeMenu() { }
}
export default Grimpan;
