// let text,textArr;
// let btns = [...document.querySelectorAll("button")];
//
//
// btns.forEach((item)=>{
//
//     item.addEventListener("click", ()=>{
//         text = document.querySelector("textarea");
//         if (item.id === "upper-case") {
//             text.value = text.value.toUpperCase();
//         } else if (item.id === "lower-case") {
//             text.value = text.value.toLowerCase();
//         } else if (item.id === "proper-case") {
//             let properCase = [];
//             textArr = text.value.split(" ");
//             for (let i = 0; i < textArr.length; i++) {
//                 properCase.push(textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1))
//             }
//             text.value = properCase.join(" ");
//         } else if (item.id === "sentence-case") {
//             let sentenceCase = [];
//             let sentenceArr = []
//             let reg = /^\s*/;
//
//             textArr = (text.value.split("."))
//             for (let i = 0; i < textArr.length; i++) {
//                 let test;
//                 test = textArr[i].replace(reg, "")
//                 sentenceCase.push(test)
//             }
//             for (let i = 0; i < sentenceCase.length; i++) {
//                 sentenceArr.push(sentenceCase[i].charAt(0).toUpperCase() + sentenceCase[i].slice(1).toLowerCase())
//             }
//             text.value = sentenceArr.join(". ")
//         } else {
//             return false
//         }
//     })
// })

let textArr;
let text = document.querySelector("textarea");
let toUpperCaseButton = document.getElementById("upper-case");
let toLowerCaseButton = document.getElementById("lower-case");
let toProperCaseButton = document.getElementById("proper-case");
let toSentenceCaseButton = document.getElementById("sentence-case");
let downloadButton = document.getElementById("save-text-file");

let downloadFn = function (filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


toUpperCaseButton.addEventListener("click", function (){
    text = document.querySelector("textarea");
    text.value = text.value.toUpperCase();
})
toLowerCaseButton.addEventListener("click", function (){
    text = document.querySelector("textarea");
    text.value = text.value.toLowerCase();
})
toProperCaseButton.addEventListener("click", function (){
    text = document.querySelector("textarea");
    let properCase = [];
    textArr = text.value.split(" ");
    for (let i = 0; i < textArr.length; i++) {
     properCase.push(textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1))
    }
    text.value = properCase.join(" ");
})
toSentenceCaseButton.addEventListener("click", function (){

    text = document.querySelector("textarea");

    // let sentences = text.value.toLowerCase().split('. ');
    //     let modifiedSentences = [];
    //     for (let sentence of sentences) {
    //         let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
    //         modifiedSentences.push(modifiedSentence);
    //     }
    //     text.value = modifiedSentences.join('. ');

            text = document.querySelector("textarea");
            textArr = (text.value.toLowerCase().split(/[!,.,?]/))

            let sentenceCase = [];
            let sentenceArr = []
            let reg = /^\s*/;

            for (let i = 0; i < textArr.length; i++) {
                let withoutSpace;
                withoutSpace = textArr[i].replace(reg, "")
                sentenceCase.push(withoutSpace)
            }
            for (let i = 0; i < sentenceCase.length; i++) {
                sentenceArr.push(sentenceCase[i].charAt(0).toUpperCase().concat(sentenceCase[i].slice(1)))
            }
            text.value = sentenceArr.join(". ")

})

text.addEventListener("keyup", function(e){
    console.log(text.value.length)
    if (text.value.length > 0){
        downloadButton.disabled = false
    } else
        downloadButton.disabled = true
})

downloadButton.addEventListener("click", function (){
    text = document.querySelector("textarea").value;
    downloadFn("text.txt",text)
})

