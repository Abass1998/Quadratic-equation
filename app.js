document.querySelector(".submit-parameter").addEventListener("click", function(){
    document.querySelector(".workings").style.display = "block";
    let a = document.querySelector(".value-of-a").value;
    let b = document.querySelector(".value-of-b").value;
    let c = document.querySelector(".value-of-c").value;
    let calculation = (-b + Math.sqrt(((b * b) - (4*a*c)))) / (2*a);
    let calculations = (-b - Math.sqrt(((b * b) - (4*a*c)))) / (2*a);
    if(Number.isNaN(calculation) === true && Number.isNaN(calculations) === true){
      alert("Please, enter valid input");
      document.querySelector(".workings").style.display = "none";
    } else if(a =="" || b =="" || c ==""){
        alert("Please, enter all fields");
        document.querySelector(".workings").style.display = "none";
    }
    else{
        var x = "The value of x is: "
        document.querySelector(".answer").innerHTML = x + calculation.toPrecision(2) + " or " + calculations.toPrecision(2);
        document.querySelector(".answer").style.padding = "1%";
    }
})

document.querySelector(".workings").addEventListener("click", function(){
    document.querySelector(".hide").style.display = "block";
    document.querySelector(".working-container").style.display = "block"
    let a = document.querySelector(".value-of-a").value;
    let b = document.querySelector(".value-of-b").value;
    let c = document.querySelector(".value-of-c").value; 
    let p = a + "x²";
    let n = 1 + "x²";
    let k = "x²";
    let z = -1 + "x²";
    let y = "-x²";
    let q = b + "x";

    if(c.includes("-") && q.includes("-") && n == p){
        p = k;
        document.querySelector(".equationn").innerHTML = p +"  "+ q +"  "+ c + " = " + " 0";
    }
    else if(p.includes("-") && q.includes("-") && !c.includes("-") &&  n != p){
        p = a + "x²";
        document.querySelector(".equationn").innerHTML = p + " " + q+ " + "+ c + " = " + " 0";
    }
    else if(c.includes("-") && q.includes("-") && n != p){
        p = a + "x²";
        document.querySelector(".equationn").innerHTML = p +"  "+ q +"  "+ c + " = " + " 0";
    }
    else if(c.includes("-") && n == p){
        p = k;
        document.querySelector(".equationn").innerHTML = p + " + "+ q+ "  "+ c + " = " + " 0";
    }
    else if(q.includes("-") && n == p){
        p = k;
        document.querySelector(".equationn").innerHTML = p + "  "+ q+ " + "+ c+ " = " + " 0";
    }
    else if(c.includes("-") && n != p){
        p = a + "x²";
        document.querySelector(".equationn").innerHTML = p + " + "+ q+ "  "+ c + " = " + " 0";
    }
    else if(q.includes("-") || n != p){
        p = a + "x²";
        document.querySelector(".equationn").innerHTML = p + " + "+ q+ " + "+ c + " = " + " 0";
    }
    else {
        document.querySelector(".equationn").innerHTML = p + " + "+ q+ " + "+ c + " = " + " 0";
    }

    let _a = document.querySelector(".value-of-a").value;
    let _b = document.querySelector(".value-of-b").value;
    let _c = document.querySelector(".value-of-c").value;
    let _calculation = (-_b + Math.sqrt(((_b * _b) - (4*_a*_c)))) / (2*_a);
    let _calculations = (-_b - Math.sqrt(((_b * _b) - (4*_a*_c)))) / (2*_a);
   
    if(_calculation.toString().includes("-") && _calculations.toString().includes("-")){
     _calculation = _calculation.toString().slice(1, 3);
     _calculations = _calculations.toString().slice(1, 3);
     document.querySelector(".simplification").innerHTML = "(" + "x" + "+" +_calculation + ")" + " or " + "(" + "x"+ "+"+ _calculations +")" + "=" + "0";
    }else if(!_calculation.toString().includes("-") && !_calculations.toString().includes("-")){
        document.querySelector(".simplification").innerHTML = "(" + "x" + "-" +_calculation + ")" + " or " + "(" + "x"+ "-"+ _calculations +")" + "=" + "0";
    }else if(!_calculation.toString().includes("-") && _calculations.toString().includes("-")){
            _calculations = _calculations.toString().slice(1, 4);
            document.querySelector(".simplification").innerHTML = "(" + "x" + "-" + _calculation.toPrecision(2) + ")" + " or " + "(" + "x" +"+" + _calculations +")" + " =" + "0";
    }else if(_calculation.toString().includes("-") && !_calculations.toString().includes("-")){
            _calculation = _calculation.toString().slice(1, 4);
            document.querySelector(".simplification").innerHTML = "(" + "x" + "+" + _calculation + ")" +" or " + "(" + "x" +"-" + _calculations.toPrecision(2) +")" + " =" + "0";
    }
    let aa = document.querySelector(".value-of-a").value;
    let bb = document.querySelector(".value-of-b").value;
    let cc = document.querySelector(".value-of-c").value;
    let calculationFinal = (-bb + Math.sqrt(((bb * bb) - (4*aa*cc)))) / (2*aa);
    let calculationsFinal = (-bb - Math.sqrt(((bb * bb) - (4*aa*cc)))) / (2*aa);
   document.querySelector(".finalValue").innerHTML = "x is: " + calculationFinal.toPrecision(2)+ " or "+calculationsFinal.toPrecision(2);
   document.querySelector(".workings").style.display = "none";
})

document.querySelector(".hide").addEventListener("click", function(){
    document.querySelector(".workings").style.display = "block";
    document.querySelector(".hide").style.display = "none";
    document.querySelector(".working-container").style.display = "none";
})

document.querySelector(".box-final").addEventListener("click", function(){
    document.querySelector(".equation").style.display = "block"
    document.querySelector(".close-box").style.display = "block";
    document.querySelector(".box-final").style.display = "none";
})

document.querySelector(".close-box").addEventListener("click", function(){
    // alert("Closing this box will make you lose all your work. Are you sure you want to exist?")
    document.querySelector(".box-final").style.display = "block"; 
    document.querySelector(".close-box").style.display = "none";
    document.querySelector(".equation").style.display = "none"

})

document.querySelector(".touch").addEventListener("click", function(){
    document.querySelector(".modal-container").style.display = "none";
})
document.querySelector(".proceed").addEventListener("click", function(){
    let name = document.querySelector(".input-your-name").value;
    name = name.slice(0,1).toUpperCase() + name.slice(1, name.length);
    if(name == ""){
        alert("Please, enter your name");
        return;
    }
    else{
        document.querySelector(".modal-container").style.display = "none";
        document.querySelector(".name-of-candidate").innerHTML = name;
    }
})
document.querySelector(".modal-now").addEventListener("click", function(){
    document.querySelector(".modal-container").style.display = "none";
})
 