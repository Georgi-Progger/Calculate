var inputs = [].slice.call(document.querySelectorAll('input[type="text"]'));
buttonSubmit = document.querySelector('button');
buttonClear = document.querySelector('button[id="clearButton"]');
let form = document.querySelector('form[id="secondForm"]');



inputs.forEach(function(el){
  el.addEventListener('input', checkInputs, false);
});
function checkInputs(){
	var empty = inputs.filter(function(el){
    return el.value.trim() === '';
  }).length;
   buttonSubmit.disabled = empty !== 0;
   clearButton.disabled = empty === 3;
}
checkInputs();

buttonClear.onclick = function() {
  inputs.value = "";
  document.querySelector('input[id="activity-minimal"]').checked = true;
  document.querySelector('input[id="gender-male"]').checked = true;
  buttonSubmit.disabled = true;
  form.classList.add("hideSecondForm");
}

function cislo(){
    if (event.keyCode < 47 || event.keyCode > 57)
    event.returnValue= false;
}



submitButton.onclick = function() {

    let gender = document.querySelector('input[name="gender"]:checked').value;
    let age = document.querySelector('input[id="age"]').value ;
    let height = document.querySelector('input[id="height"]').value ;
    let weight = document.querySelector('input[id="weight"]').value ;

    let activity = document.querySelector('input[name="activity"]:checked').value;
    

    
    let loseWeight = document.querySelector('p[id="loseWeight"]'); 
    let keepWeight = document.querySelector('p[id="keepWeight"]'); 
    let getWeight = document.querySelector('p[id="getWeight"]'); 
    let n = weight* 10 + height* 6.25 - age* 5;

    if (gender == "male") {
      n+= 5
    }
    else{
      n -= 161;
    }

    switch(activity){
      case "min":
        n*=1.2;
        break;
      case "low":
         n*=1.375;
         break;
      case "medium":
        n*=1.55;
        break;
      case "high":
        n*=1.725;
        break;
      case "max":
        n*=1.9;
        break;      
    }
    loseWeight.innerHTML = Math.round(n*0.85) + ' ккал';
    keepWeight.innerHTML = Math.round(n) + ' ккал';
    getWeight.innerHTML = Math.round(n*1.15) + ' ккал';
    form.classList.remove("hideSecondForm");
    return false;
  };

inputs.oninput = () => checkInput()


document.getElementById("clearSubmit").onclick = function(e) {
    document.getElementById('input[type="text"]').value = "";
  }