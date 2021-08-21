var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector('#input-text')
var outputBox = document.querySelector('#output-box')



function clickFunc(){
    outputBox.innerText = "aaaaddeqfwefwf " + inputText.value;
    
}
btnTranslate.addEventListener("click", clickFunc);