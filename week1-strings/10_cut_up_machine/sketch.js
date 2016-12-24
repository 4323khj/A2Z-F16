var slider;
var percent = 5;
var dropZone, input, button, sample, clearButton;
var paragraphs = [];
var inputText = '';

function setup() {
  noCanvas();
  input = select('#textinput');
  button = select('#submit');
  button.mousePressed(handleInput);
  slider = select("#percentslider");
  slider.input(changePercent);
  dropZone = select('#drop_zone');
  dropZone.dragOver(highlight);
  dropZone.drop(gotFile, unHighlight);
  sample = select('#sample');
  sample.mousePressed(loadFile);
  clearButton = select('#clear');
  clearButton.mousePressed(clearText);
}

function loadFile() {
  loadStrings('files/spam.txt', fileLoaded);
}

function fileLoaded(data) {
  var txt = data.join('\n');
  input.html(txt);
}

function highlight() {
  dropZone.style('background', '#AAA');
}

function unHighlight() {
  dropZone.style('background','');
}

function gotFile(file) {
  if (file.type === 'text') {
    inputText += file.data + '\n\n';
    input.html(inputText);
  }
  else {
    alert('this is not a text file.');
  }
}

function handleInput() {
  process(input.value());
}

function clearText() {
  input.html('');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].remove();
  }
  paragraphs = [];
}

function changePercent() {
  var span = select('#percent');
  percent = slider.value();
  span.html(percent);
}
