console.log("test");
// pobranie wartosci z input

var amount1 = document.getElementById("amount1");
var amount2 = document.getElementById("amount2");
var btn1 = document.getElementById("count1");

var amount = document.getElementById("amount");
var btn = document.getElementById("count");

var wylosowana;

btn1.addEventListener('click', function(){

    var show = document.getElementById('a');
    var show2 = document.getElementById('b');
    
    if (show.style.display === 'none') {
        show.style.display = 'block';
        show2.style.display = 'none'
    } else {
        show.style.display = 'none';
        show2.style.display = 'block';
    }
        
    
    wylosowana = Math.ceil(parseInt(amount1.value) + (Math.random()*(parseInt(amount2.value) - parseInt(amount1.value))));
    
    console.log("l: " + wylosowana);
    
});

btn.addEventListener('click', function(){
    
    
    var res = document.getElementById('result');  
        
    if (amount.value == wylosowana){
        
         res.innerHTML = "Wygrales!";
    } 
    
    
    else if (amount.value > wylosowana){
        res.innerHTML = "podales za duza liczbe"
    }
    
     else if (amount.value < wylosowana){
        res.innerHTML = "podales za mala liczbe"
    }
    
    else {
         res.innerHTML = "Sprobuj ponownie";
    }
    
});
