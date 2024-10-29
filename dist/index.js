import ChromeGripman from "./ChromeGrimpan.js";
import IEGripman from "./IEGrimpan.js";
function grimpanFactory(type) {
    if (type === "ie") {
        return IEGripman.getInstance();
    }
    else if (type === "chrome") {
        return ChromeGripman.getInstance();
    }
    else {
        throw new Error("unsupported browser");
    }
}
function main() {
    grimpanFactory("ie");
    grimpanFactory("chrome");
}
main();
