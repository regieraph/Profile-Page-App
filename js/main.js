var body = document.getElementById('body');
var button = document.getElementById('button');

// DIVS TO PLACE answers
var intro = document.createElement('div');
body.appendChild(intro);
var intro2 = document.createElement('div');
body.appendChild(intro2);
var firstNameDiv = document.createElement('div');
body.appendChild(firstNameDiv);
var lastNameDiv = document.createElement('div');
body.appendChild(lastNameDiv);
var genderDiv = document.createElement('div');
body.appendChild(genderDiv);
var phoneNumberDiv = document.createElement('div');
body.appendChild(phoneNumberDiv);
var emailDiv = document.createElement('div');
body.appendChild(emailDiv);

//DIV ID's
intro.setAttribute('id', 'introDiv');
intro2.setAttribute('id', 'introDiv2')
genderDiv.setAttribute('id', 'genderDiv');
firstNameDiv.setAttribute('id', 'firstNameDiv');
lastNameDiv.setAttribute('id', 'lastNameDiv');
phoneNumberDiv.setAttribute('id', 'phoneNumberDiv');
emailDiv.setAttribute('id', 'emailDiv');


function validate(){
  //Intro
  document.getElementById('introDiv').textContent = 'Welcome to the Gurren Lagann Corps!!!'
  //Intro 2
  document.getElementById('introDiv2').textContent = 'Please review that your information is correct'


  //FIRST NAME INPUT***********
  var input = document.getElementById('firstName').value;
  //regular Expression to validate First Name.
  var regexFirstName = /[a-z]{4,15}/
  //log onto console the test for the regular Expression
  if(regexFirstName.test(input) == false){
    alert('First Name must be 4-15 characters')
  } else {
    document.getElementById('firstNameDiv').innerHTML = document.getElementById('firstName').value;
  }

  //LAST NAME INPUT************
  var input2 = document.getElementById('lastName').value;
  //regular Expression to validate Last Name.
  var regexLastName = /[a-z]{4,15}/
  //log onto console the test for the regular Expression
  if(regexLastName.test(input2) == false){
    alert('Last Name must be 4-15 characters');
  } else {
    document.getElementById('lastNameDiv').innerHTML = document.getElementById('lastName').value;
  }


  //CHECKBOX INPUT***********
  //If the male checkbox is checked
  var male = document.getElementById('male').checked;
  //If the female checkbox is checked
  var female = document.getElementById('female').checked;
  //If Male or Female are not checked alert them by telling them to check one**
  if(male== false && female== false){
    alert('Please Select a Gender')

  }
  //If Male equals true and Female equals true, alert "Choose One Gender"
  if(male==true && female==true){
    alert('Choose Only One Gender');
    return
  }
  //If male equals true, write Male
  if(male==true){
    document.getElementById('genderDiv').textContent = 'male';
  }
  //If female equals true, write Female
  if(female==true){
    document.getElementById('genderDiv').textContent = 'female';
  }

  //PHONE NUMBER INPUT***********
  //Variable for Phone NUMBER value
  var phoneNumber= document.getElementById('phoneNumber').value
  var regExPhone= /\d{3}-\d{3}-\d{4}/
  //IF Phone number is False, alert write phone number as*****
  if(regExPhone.test(phoneNumber) ==  false){
    alert('Please Enter Phone Number ###-###-####')
  } else {
  //Write onto Div the value inside phone number
  document.getElementById('phoneNumberDiv').innerHTML = document.getElementById('phoneNumber').value;
  }

  //EMAIL ADDRESS INPUT*************
  //Variable for Email Address
  var emailAddress= document.getElementById('emailAddress').value;
  var regExEmailAddress= /^[a-z0-9._%-]+@[a-z0-9._%-]+\.[a-z]{2,5}$/
  //If Regular Expression for email is false, write "Write Email Address"
  if(regExEmailAddress.test(emailAddress)== false){
    alert('Write Email Address');
  } else {
    //Write onto Div the value inside email Address
  document.getElementById('emailDiv').innerHTML = document.getElementById('emailAddress').value;
    }
  }

button.addEventListener('click', validate, false )
