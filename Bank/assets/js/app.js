var account = [12300, 24567, 1978, 5234, 8045, 45284975]

function deposit(amount, accNumber){
    account[accNumber] += amount
    console.log("Dear customer your account : " + accNumber + " has been creadited with ETB: " + amount + " your current balance is : " + account[accNumber])
    return true
}
function withdraw(amount, accNumber){
    if (amount < account[accNumber]){
        if(amount < 1000){
            account[accNumber] -= amount
            console.log("Dear customer your account : "+ accNumber + " has been debted with: " + amount + " your current balance is : " + account[accNumber])
            return true
        }else{
            alert("withdrowal of more than 1000.00 birr is not allowed")
        }
    } else{
        alert("your balance is insufficient for this service")
    }
    return false
}

function balance(accNumber){
    alert("Your Balance is " + account[accNumber])
}

function transfer(from, to, amount){
    if (withdraw(amount, from)){
        deposit(amount, to)
    }
}

(
    function(){
        choice = parseInt(prompt(": which service do you want \n 1: Deposit \n 2: Withdraw \n 3: Check your Balance \n 4: Transfer"));
        console.log(account);
        switch (choice) {
            case 1:
                deposit(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(account.length-1)+"): ")));
                break;
            case 2:
                withdraw(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(account.length-1)+"): ")));
                break;
            case 3:
                balance(parseInt(prompt("Enter your account Number(between 0 and "+(account.length-1)+"): ")));
                break;
            case 4:
                transfer(parseInt(prompt("Enter your account to debt from Number(between 0 and "+(account.length-1)+"): ")),parseInt(prompt("Enter the account to deposit into Number(between 0 and "+(account.length-1)+"): ")), parseInt(prompt("Enter amount: ")));
                break;
            default:
                alert("Invalid Input");
                break;
        }
    }
)();