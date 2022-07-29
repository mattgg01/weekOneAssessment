let password = "lifesaverrrrrrrrrrrrrrrRrr1"
var character = ''
// function containsNumber(password)

// function containsNumber(str) {
//     return /\d/.test(str);
//   }
  
//   console.log(containsNumber(password)); //  true 




// if (password.length <= 10){
//     console.log('Password is not at least 10 characters long')
// }




 let hasNumbers = false
 hasNumbers = /\d/.test(password)


if (hasNumbers === true && password.length < 10){
    console.log("Password has a number but doesn't have at least 10 characters")
}else if (hasNumbers === false && password.length < 10){
    console.log("Password doesn't have a number and password isn't at least 10 characters long")
}else if (hasNumbers === true && password.length >= 10 && password.length < 20){
    console.log("Password meets character and number requirements. Checking to see if it meets uppercase requirements")
    for(let i = 0; i <= password.length; i++){
        character = password.charAt(i)
        if (character == character.toUpperCase()){
            console.log("Password has at least one uppercase letter. Password is acceptable. SUCCESSS!!")
            break;
        } 
    }
    
}else if (hasNumbers === false && password.length >= 10){
    console.log("Password doesn't have a number but is at least 10 characters long")
}else if (hasNumbers === false && password.length > 20){
    console.log("Password doesn't have a number. Your password exceeds 20 characters")
}else if (hasNumbers === true && password.length > 20){
    console.log("Password does have a number. Your password exceeds 20 characters")
}










// let hasUpper = password.indexOf(password.toUpperCase())
// if (hasUpper === true){
//     console.log("password has an uppercase letter")

// }else if (hasUpper === false){
//     console.log("password doesn't have an uppercase letter")
// }

// let hasUpper = (password === password.toUpperCase())


// console.log(char === char.toUpperCase());