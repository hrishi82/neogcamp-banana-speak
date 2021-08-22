var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector('#input-text')
var outputBox = document.querySelector('#output-box')

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var urlConverter = (text) => {
    return url + "?text=" + text;
};


function errorHandler(error){
    console.log(error);
}

var dataFetch = () => {
    var inptxt =  inputText.value
    fetch(urlConverter(inptxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputBox.innerText = translatedText;
    })
    .catch(errorHandler)
};


    
btnTranslate.addEventListener("click", dataFetch);