function checkEmail(email){
    if(email==null){
        return "Error: Parameter is empty. Please give the parameter";
    }else if(typeof email !== "string"){
        return "Error: Invalid data type";
    }else {
        if(!email.match(/@/)){
            return `Error: ${email} is not an email`;
        }else{
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(email.match(emailPattern)){
                return `EMAIL ${email} VALID`;
            }else{
                return `EMAIL ${email} TIDAK VALID`;
            }
        }
    }
}

console.log(checkEmail("fajar@binar.id"));