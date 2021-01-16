
//first we will know number of persons
let NoPerButton = document.getElementsByTagName('button')[0];//this is the button named  calculate initially
var  nbrPersn=0;
NoPerButton.addEventListener('click', () => {

     nbrPersn = document.getElementById('form').value;//this will tell how much number of person are there


     let crtInput = document.getElementsByClassName('startcounting')[0];//we will make number of inputs inside this div tag

     crtInput.innerHTML = ""
     
     for (let i = 0; i < nbrPersn; i++) {
     
         crtInput.innerHTML += `          <input type="text" class="form-control" value ="${i+1} person" > 
         <input type="number" class="form-control" placeholder="tea" id='${1+1}stea' >
         <input type="number" class="form-control" placeholder="sotta" id='${1+1}ssotta'>
         <input type="number" class="form-control" placeholder="other" id='${1+1}sother'>`
     }


})

//now we will create number of input box as per persons
