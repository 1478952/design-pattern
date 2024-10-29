import Grimpan from "./AbstractGrimpan";

class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan | null;

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(
        document.getElementById("canvas") as HTMLCanvasElement
      );
    }
    return this.instance;
  }

  initialize() {}
  initializeMenu() {}
}

export default ChromeGrimpan;
