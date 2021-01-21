function addtwonumbers(num1,num2){
    return num1 + num2
}

function addMultiplenumbers(arr){
    sum = 0
    for(let i=0;i< arr.length;i++){
        sum += arr[i]
    }
    return sum
}

function substraction(num1,num2){
    return num1-num2
}


function multplication(num1,num2){
    return num1*num2
}

function multiplyMultiplenumbers(arr){
    let product = 1

    for(let i=0;i< arr.length;i++){
        product = product * arr[i]
    }
    return product
}

function division(num1,num2){
    return num1/num2
}

(function(){
    let num1;
    let num2;
    let service = parseInt(prompt("choose operation: \n 1: Add two numbers \n 2: add multiple numbers \n 3: Subtract two numbers \n 4: multiply two numbers \n 5: multiply multiple numbers \n 6: Divide two numbers:  "));
    switch (service) {
        case 1:
            alert(addtwonumbers(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
            break;
        case 2:
            let length = prompt("Enter the number of Numbers you want to add: ")
            array = new Array()
            for(let i=0; i<length; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            } 
            alert(addMultiplenumbers(array))
            break;
        case 3:
            alert(substraction(parseInt(prompt("Enter first Number: ")) ,parseInt(prompt("Enter second Number: "))))
            break;
        case 4:
            alert(multplication(parseInt(prompt("Enter first Number: ") ),parseInt(prompt("Enter second Number: "))))
            break;
        case 5:
            var nums = prompt("Enter the number of Numbers you want to multiply: ")
            array = new Array()
            for(let i=0; i<nums; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            }
            alert(multiplyMultiplenumbers(array))
            break;
        case 6:
            let num1 = prompt("Enter first Number: ") 
            let num2 = prompt("Enter second Number: ")
            if (b == 0){alert("Wrong input second number cannot be zero(0)")}
            else{
                alert(division(num1,num2))
            }
            break;
        default:
            alert("Invalid input")
            break;
    }

})();
function addtwonumbers(num1,num2){
    return num1+num2;
}

function addMultiplenumbers(arr){
    sum = 0
    for(let i=0;i< arr.length;i++){
        sum += arr[i]
    }
    return sum
}

function substraction(num1,num2){
    return num1-num2
}


function multplication(num1,num2){
    return num1*num2
}

function multiplyMultiplenumbers(arr){
    let product = 1

    for(let i=0;i< arr.length;i++){
        product = product * arr[i]
    }
    return product
}

function division(num1,num2){
    return num1/num2
}

(function(){
    let num1;
    let num2;
    let service = parseInt(prompt("What you want to do today: \n 1: Add 2 numbers \n 2: add multiple numbers \n 3: Subtract \n 4: multiply 2 numbers \n 5: multiply multiple numbers \n 6: Divide 2 numbers:  "));
    switch (service) {
        case 1:
            alert(addtwonumbers(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
            break;
        case 2:
            let length = prompt("Enter the number of Numbers you want to add: ")
            array = new Array()
            for(let i=0; i<length; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            } 
            alert(addMultiplenumbers(array))
            break;
        case 3:
            alert(substraction(parseInt(prompt("Enter first Number: ")) ,parseInt(prompt("Enter second Number: "))))
            break;
        case 4:
            alert(multplication(parseInt(prompt("Enter first Number: ") ),parseInt(prompt("Enter second Number: "))))
            break;
        case 5:
            var nums = prompt("Enter the number of Numbers you want to multiply: ")
            array = new Array()
            for(let i=0; i<nums; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            }
            alert(multiplyMultiplenumbers(array))
            break;
        case 6:
            let num1 = prompt("Enter first Number: ") 
            let num2 = prompt("Enter second Number: ")
            if (num2 == 0){alert("Wrong input second number cannot be zero(0)")}
            else{
                alert(division(num1,num2))
            }
            break;
        default:
            alert("Invalid input")
            break;
    }

})();



