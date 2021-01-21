function BMI(w,h){
    let bmi = w / (h * h)
    return bmi;
}
let w = parseInt(prompt("enter your witght:  "))
let h = parseInt(prompt("enter your height: "))
alert(BMI(w , h))