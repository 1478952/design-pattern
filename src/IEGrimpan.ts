import Grimpan from "./AbstractGrimpan";

class IEGrimpan extends Grimpan {
  private static instance: IEGrimpan | null;

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(
        document.getElementById("canvas") as HTMLCanvasElement
      );
    }
    return this.instance;
  }

  initialize() {}
  initializeMenu() {}
}

export default IEGrimpan;
