
//first we will know number of persons
let NoPerButton = document.getElementsByTagName('button')[0];//this is the button named  calculate initially
let showdataInDiv = document.getElementsByClassName('showadatainTable')[0];//inside this tag of div we will put the data of calculation
var nbrPersn = 0;
NoPerButton.addEventListener('click', () => {

  nbrPersn = document.getElementById('form').value;//this will tell how much number of person are there


  let crtInput = document.getElementsByClassName('startcounting')[0];//we will make number of inputs inside this div tag

  crtInput.innerHTML = "";//input box will be created inside this tag
  showdataInDiv.innerHTML = "";//table wala hai
  document.getElementsByClassName('GRNDTTL')[0].innerHTML=""//grand total`s data will be shown here

  for (let i = 0; i < nbrPersn; i++) {

    crtInput.innerHTML += ` <input type="text" class="form-control" value ="${i + 1} person" id="${i + 1}p" title="You Can change the name "> 
         <div class="input-group mb-3">
         <span class="input-group-text">5.00</span>
         <span class="input-group-text">x</span>
  <input type="number" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Tea" id="${i + 1}c">
</div>
<div class="input-group mb-3">
<span class="input-group-text">20.00</span>
  <span class="input-group-text">x</span>

  <input type="number" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Sotta" id="${i + 1}s">
</div>
        
       
<div class="input-group mb-3">


  <input type="number" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="other (Ammount only)" id="${i + 1}o">
</div>
<hr>
`
  }//for loop excution end here

  if (nbrPersn > 0) {
    crtInput.innerHTML += '<button class="btn btn-warning" style="margin-top: 10px;" id="doSum">Calculate</button>'
  }









  //now we will create number of input box as per persons

  //now we will add indivisually per person and show thwm in table and finally add them for total sum

  let calculateBtn = document.getElementById('doSum');//button of calculation in yellow color

  // now fix the price of sottas and tea 
  var TeaPrice = 5;
  var sottaPrice = 20;
  var grandTotal =0;

  // set event and the function for calculation 

  calculateBtn.addEventListener('click', (event) => {

    //calculate total number of tea nd ammount of all persons


    showdataInDiv.innerHTML = `   <table class="table caption-top">
    <caption class="display-6">Calculated Data</caption>
    <thead>
      <tr>
        <th scope="col">Persons <i class="fas fa-user"></th>
        <th scope="col">Tea</th>
        <th scope="col">Sotta <i class="fas fa-smoking"></th>
        <th scope="col">other</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody id="insertdata">
   
    </tbody>
  </table>`;//initially we will keep it blank;

    let insertData = document.getElementById('insertdata');//table body element

    for (let i = 0; i < nbrPersn; i++) {


      let teaPrice = (document.getElementById(`${i + 1}c`).value);
      let sottaprices = (document.getElementById(`${i + 1}s`).value);
      let otherprices = (document.getElementById(`${i + 1}o`).value);

      if (teaPrice == "")//if user did not enter any number of that ammount ;
      {
        teaPrices = 0;
        teaPrice=0;
      }
      else {

        teaPrices = (teaPrice * TeaPrice);
      }


      if (sottaprices == "") {
        sottapricess = 0;
        sottaprices=0;

      } else {
        sottapricess = (sottaprices * sottaPrice);
      }


      if (otherprices == "") {
        otherprices = 0;
      }



      let totalSum = teaPrices + sottapricess + parseInt(otherprices);

      grandTotal=grandTotal+totalSum;


      insertData.innerHTML += `    <tr>
  <th scope="row">${document.getElementById(`${i + 1}p`).value}</th>
  <td>${teaPrice} x 5= ${teaPrices}</td>
  <td>${sottaprices} x 20 = ${sottapricess}</td>
  <td>${otherprices}</td>
  <td>${totalSum}</td>
</tr>`

document.getElementsByClassName('GRNDTTL')[0].innerHTML = `   <table class="table table-dark table-hover">
<thead>
  <tr>
    <th scope="col">Grand Total =  ${grandTotal} ₹</th>
   
    <th scope="col">Per Person = ${(grandTotal/nbrPersn).toFixed(2)} ₹</th>
  </tr>
</thead>
</table>`

    }
  })


})



