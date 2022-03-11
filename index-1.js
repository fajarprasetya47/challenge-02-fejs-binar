function changeWord(selectedText, changedText, text){
    if(selectedText,changedText,text == null){
        return "Error: Parameter is empty. Please give the parameter"
    }
    else if(typeof selectedText !== "string" 
        || typeof changedText !== "string" 
        || typeof text !== "string"){
            return "Error: Invalid data type";
    }
    else{
        let replace = text.replace(selectedText, changedText);
        return replace;
    }
}

const kalimat1 = "Gunung Bromo ada di Malang";

console.log(changeWord("Bromo", "Semeru", kalimat1));