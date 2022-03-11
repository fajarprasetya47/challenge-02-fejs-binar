function isValidPassword(givenPassword){
    if(givenPassword==null){
        return "Error: Parameter is empty. Please give the parameter";
    }else if(typeof givenPassword !== "string"){
        return "Error: Invalid data type";
    }else {
        if(givenPassword.length < 8){
            return false;
        }else if(!givenPassword.match(/[A-Z]/g)){
            return false;
        }else if(!givenPassword.match(/[a-z]/g)){
            return false;
        }else if(!givenPassword.match(/[0-9]/g)){
            return false;
        }else{
            return true;
        }
    }
}

//console.log(isValidPassword("Prasetya123"));
console.log(isValidPassword("prasetya123"));
