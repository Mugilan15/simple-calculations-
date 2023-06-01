var main_div=document.getElementById("main_div");
var div1=document.getElementById("div1");



var button1=document.getElementById("but1");
button1.addEventListener("click",function(){
    var input1=document.getElementById("num1").value;
    var input2=document.getElementById("num2").value;
    if((input1==='')&&(input2==='')){
        alert("please enter number")
        return false;
    }
    var sum=Number(input1)+Number(input2);
    console.log(input1);
    var para1=document.getElementById("para1");
   para1.textContent=`addition is  : ${sum}`; 
   var div1 = document.getElementById("div1")
   div1.style.display="block"
})

//sub
    var button2=document.getElementById("but2");
button2.addEventListener("click",function(){
    var input1=document.getElementById("num1").value;
    var input2=document.getElementById("num2").value;
    if((input1==='')&&(input2==='')){
        alert("please enter number")
        return false;
    }
    var sub=Number(input1)-Number(input2);
    var para2=document.getElementById("para2");
    para2.textContent=`Subraction is = ${sub}`;});
//mul
    var button3=document.getElementById("but3");
    button3.addEventListener("click",function(){
        var input1=document.getElementById("num1").value;
        var input2=document.getElementById("num2").value;
        if((input1==='')&&(input2==='')){
            alert("please enter number")
            return false;
        }
        var mul=Number(input1)*Number(input2);
        var para3=document.getElementById("para3");
       para3.textContent=`Multiplication is  : ${mul}`;  });
    //divsion
        var button4=document.getElementById("but4");
    button4.addEventListener("click",function(){
        var input1=document.getElementById("num1").value;
        var input2=document.getElementById("num2").value;
        if((input1==='')&&(input2==='')){
            alert("please enter number")
            return false;
        }
        var div=Number(input1)/Number(input2);
        var para4=document.getElementById("para4");
        para4.textContent=`Divsion is : ${div}`;});


    

      //  var button5=document.getElementById("but5");
           