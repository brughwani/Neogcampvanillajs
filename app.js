var txtinput=document.querySelector("#txt-input")
var btntranslate=document.querySelector("#btn-translate")
var output=document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationurl(input)
{
    return serverURL + "?" + "text=" +input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickhandler()
{
    var text=txtinput.value
    console.log(text)
    fetch(getTranslationurl(text)).then(response=>response.json()).then(json=>{
        var translated=json.contents.translated;
        console.log(translated)
        //console.log(json)
        output.innerText=translated


    }).catch(errorHandler)
};
btntranslate.addEventListener("click", clickhandler())