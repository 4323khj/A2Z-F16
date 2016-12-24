var txt;

// function preload() {
//   txt = loadStrings('rainbow.txt');
// }

function setup() {
  noCanvas();
  var button = select('#loadfile');
  button.mousePressed(loadFile);
  createFileInput(fileSelected);
  // console.log(txt);
  // createP(join(txt, '<br/><br/>'));
}

function fileSelected(file) {
  createP(file.name+" "+file.size+" "+file.type);
  createP(file.data);
}

function loadFile() {
  loadStrings('rainbow.txt', fileLoaded);
}

function fileLoaded(data) {
  createP(join(data, '<br/><br/>'));
}
