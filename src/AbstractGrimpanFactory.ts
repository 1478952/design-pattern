import Grimpan from "./AbstractGrimpan";

abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    return Grimpan.getInstance();
  }
}

export default AbstractGrimpanFactory;
