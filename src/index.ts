import AbstractGrimpanFactory from "./AbstractGrimpanFactory.js";
import ChromeGripman from "./ChromeGrimpan.js";
import IEGripman from "./IEGrimpan.js";

class ChromGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGripman.getInstance();
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGripman.getInstance();
  }
}

function grimpanFactory(type: string) {
  if (type === "ie") {
    return IEGripman.getInstance();
  } else if (type === "chrome") {
    return ChromeGripman.getInstance();
  } else {
    throw new Error("unsupported browser");
  }
}

function main() {
  const grimpan = IEGrimpanFactory.createGrimpan();
  grimpanFactory("chrome");
}

main();
