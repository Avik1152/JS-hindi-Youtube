const accountId = 144553
let accountEmail = "avik22@gmail.com"
var accountpassword = "12345"
accountcity = "Joipur"

let accountState;

// accountId = 2
accountEmail = "av22@gmail.com"
accountpassword = "212121"
accountcity = "Delhi"

/*
preffer not to use var -> because of issue in block scope and functional scope 
*/
console.log(accountEmail);

console.table([accountId, accountEmail, accountpassword, accountcity, accountState])