function getAngkaTerbesarKedua(dataNumbers){
    if(dataNumbers==null){
        return "Error: Parameter is empty. Please give the parameter";
    }else if(typeof dataNumbers !== "object"){
        return "Error: Invalid data type";
    }else{
        for (let i = 0; i < dataNumbers.length; i++) {
            if(typeof dataNumbers[i] !== "number"){
                return "Error: Array element are not number";
                break;
            }
        }
        let listNumber = [...new Set(dataNumbers)];
        listNumber = listNumber.sort((a,b) => {return b-a});
        return listNumber[1];
    }
}

// const data = [4,5,7,4,1,3,1,9,0];
const points = [4, 100, 1, 5, 25, 10];
console.log(getAngkaTerbesarKedua(points));