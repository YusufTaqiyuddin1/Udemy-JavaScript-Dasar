// Case Statement

const nilai = "B";

switch (nilai) {
  case "A":
    document.writeln("Anda lulus dengan pujian");
    break;
  case "B":
  case "C":
    document.writeln("Anda lulus");
    break;
  case "D":
    document.writeln("Anda tidak lulus");
    break;
  default:
    document.writeln("Input salah");
}
