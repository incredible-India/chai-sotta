
//first we will know number of persons
let NoPerButton = document.getElementsByTagName('button')[0];//this is the button named  calculate initially
var  nbrPersn=0;
NoPerButton.addEventListener('click', () => {

     nbrPersn = document.getElementById('form').value;//this will tell how much number of person are there


     let crtInput = document.getElementsByClassName('startcounting')[0];//we will make number of inputs inside this div tag

     crtInput.innerHTML = ""
     
     for (let i = 0; i < nbrPersn; i++) {
     
         crtInput.innerHTML += `          <input type="text" class="form-control" value ="${i+1} person" > 
         <div class="input-group mb-3">
         <span class="input-group-text">5.00</span>
         <span class="input-group-text">x</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Tea" id="${i+1}c">
</div>
<div class="input-group mb-3">
<span class="input-group-text">20.00</span>
  <span class="input-group-text">x</span>

  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Sotta" id="${i+1}s">
</div>
        
       
<div class="input-group mb-3">


  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="other" id="${i+1}o">
</div>
<hr>
`
     }//for loop excution end here

    if(nbrPersn > 0)
    {
        crtInput.innerHTML += '    <button class="btn btn-warning" style="margin-top: 10px;">Calculate</button>'
    }
    



})



//now we will create number of input box as per persons
