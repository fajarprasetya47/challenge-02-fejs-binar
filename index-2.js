const checkTypeNumber = (givenNumber) => {
    if(givenNumber==null){
        return "Error: Bro where is the parameter?";
    }else if(typeof givenNumber !== "number"){
        return "Error: Invalid data type";
    }else {
        if(givenNumber%2 == 0){
            return "GENAP";
        }else{
            return "GANJIL";
        }
    }
}

console.log(checkTypeNumber(47));
//console.log(checkTypeNumber());