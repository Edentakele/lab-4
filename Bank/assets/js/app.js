var accounts = [100, 267, 978, 234]

function deposit(amount, accountNumber){
    accounts[accountNumber] += amount
    console.log("Deposited to : " + accountNumber + " Deposited Amount: " + amount + " total balance : " + accounts[accountNumber])
    return true
}
function withdraw(amount, accountNumber){
    if (amount < accounts[accountNumber]){
        if(amount < 100){
            accounts[accountNumber] -= amount
            console.log("Withdrawn from : "+ accountNumber + " Withdrawn Amount: " + amount + " total balance : " + accounts[accountNumber])
            return true
        }else{
            alert("you cannot withdraw more than $100")
        }
    } else{
        alert("you have insufficient money to withdrow")
    }
    return false
}

function balance(accountNumber){
    alert("Your Balance is " + accounts[accountNumber])
}

function transfer(from, to, amount){
    if (withdraw(amount, from)){
        deposit(amount, to)
    }
}

(
    function(){
        service = parseInt(prompt("What do you want to do today: \n 1: Deposit \n 2: Withdraw \n 3: Inquire Balance \n 4: transfer"))
        console.log(accounts)
        switch (service) {
            case 1:
                deposit(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
                break;
            case 2:
                withdraw(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
                break;
            case 3:
                balance(parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
                break;
            case 4:
                transfer(parseInt(prompt("Enter account to debt from Number(between 0 and "+(accounts.length-1)+"): ")),parseInt(prompt("Enter account to deposit into Number(between 0 and "+(accounts.length-1)+"): ")), parseInt(prompt("Enter amount: ")));
                break;
            default:
                alert("Invalid Input");
                break;
        }
    }
)();