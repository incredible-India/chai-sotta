
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
 

  // set event and the function for calculation 

  calculateBtn.addEventListener('click', (event) => {

    let numberofperson =[];//for the chart we need this
    let perPersonCost=[];//for the making the chart we need this
    //calculate total number of tea nd ammount of all persons

      Var grandTotal =0;
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
        teaPrices = 0;//total price of tea of one indivisula person will be zero if user did not enter the data
        teaPrice=0;//total number of tea (in this case it will considered as zero)
      }
      else {

        teaPrices = (teaPrice * TeaPrice);// this is calculation of price of one tea multiply by number of total teas..
      }


      if (sottaprices == "") {
        sottapricess = 0;//total price of sotta of one indivisula person will be zero if user did not enter the data
        sottaprices=0;//total number of sottas (in this case it will considered as zero)

      } else {
        sottapricess = (sottaprices * sottaPrice); //total price of sotta of one indivisula person
      }


      if (otherprices == "") {
        otherprices = 0;//price of other 
      }



      let totalSum = teaPrices + sottapricess + parseInt(otherprices);

      grandTotal=grandTotal+totalSum;

      // now we will add the data in that blank array which is declared above 
      numberofperson.push(document.getElementById(`${i + 1}p`).value);//this will append the number of person.(for graph we need it)
      perPersonCost.push(totalSum);//this is the per person total cost ,it is for the graph

//this table will show the data of indivisual and total of thier respective data
      insertData.innerHTML += `    <tr>
  <th scope="row">${document.getElementById(`${i + 1}p`).value}</th>
  <td>5 x ${teaPrice}= ${teaPrices}</td>
  <td>20 x ${sottaprices}= ${sottapricess}</td>
  <td>${otherprices}</td>
  <td>${totalSum}</td>
</tr>
`

//this table will show the grand total and per person ammount which is to be paid
document.getElementsByClassName('GRNDTTL')[0].innerHTML = `   <table class="table table-dark table-hover">  
<thead>
  <tr>
    <th scope="col">Grand Total =  ${grandTotal} ₹</th>
   
    <th scope="col">Per Person = ${(grandTotal/nbrPersn).toFixed(2)} ₹</th>


    <th><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Graph
  </button></th>


  </tr>
</thead>
</table>`//this the element where the grand toatl and per person data will be shown

    }//for loop`s excution  ends here 

//now we will set the event for the graphical views button which is shown in grand total`s table 

//set the graph accoding to the given data and with help of chart.js library


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: numberofperson,
        datasets: [{
            label: 'Graphical Data',
            backgroundColor: 'rgb(255, 100, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: perPersonCost
        }]
    },

    // Configuration options go here
    options: {}
});


  })//the second number calculate button event end here (warning color bootstrap)


})//first number of calculate button`s event end here ....which is in blue color .



///end///
