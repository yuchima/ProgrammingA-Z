function diastic(seed, words){
  var phrase = "";
  var currentword = 0;

  for (var i = 0; i < seed.length; i++){
    var c = seed.charAt(i);

    for (var j = currentword; j < words.length; j++){
      if (words[j].charAt(i) == c){
        phrase += words[j];
        phrase += " ";
        currentword = j + 1;
        break;
      }
    }
  }
  return {text: phrase, counts:currentword};
}


var source;
var words;
var phrase;

function preload(){
  source = loadStrings('random.txt')

}

function setup() {
  noCanvas();

  source = join(source, ' ');
  words =  splitTokens(source, ' ,!.?()[] ');
  var seed = select("#seed");
  var submit = select("#submit");
  var newwords = words;

  submit.mousePressed(function(){
    phrase = diastic(seed.value(), newwords).text;
    count = diastic(seed.value(), newwords).counts;
    createP(phrase);
    newwords =  newwords.slice(count, newwords.length);
    console.log(count);

    if (count >= newwords.length){
      newwords = words;
    }
  });
}
