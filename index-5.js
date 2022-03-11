function getSplitName(personName){
    if(typeof personName == "string"){
        let splitName = personName.split(" ");
        if(splitName.length > 3){
            return "ERROR: This function is only for 3 characters name";
        }else{
            for (let index = 0; index < 3; index++) {
                let element = splitName[index];
                if(element == null){
                    splitName[index] = null;
                }
            }
            let splitNameObject = {
                firstName: splitName[0],
                middleName: splitName[1],
                lastName: splitName[2]
            };
            return splitNameObject;
        }
    }else{
        return "ERROR: Parameter must String!";
    }
}

console.log(getSplitName("FAJAR Prasetya Japra"));
console.log(getSplitName("FAJAR Prasetya Japra Setya"));
