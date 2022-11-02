//JavaScript Document
/* here is read more and read less */
const gallery1 = document.querySelector("#gallery1"); //tilføje variable, finder elementer fra html
const gallery2 = document.querySelector("#gallery2");
const showMoreButton = document.querySelector("#moreButton");

showMoreButton.addEventListener("click", showMore); //tilføje eventlistener, when we click eventlistener, we will run the function

function showMore() {
  gallery1.classList.toggle("hidden"); //show one , hidde theother i will find gallery1, if it has class hidden, remove it,
  gallery2.classList.toggle("hidden"); //it is an instruction which says when click the but, show the hidden and hidde the displayed
}
/* here is image gallery*/
const bigImg = document.querySelector("#galleryPhoto");
const photoList = [
  "gallery_04 1",
  "exams-image2",
  "exams-image3",
  "exams-image4",
]; // holder Array med billed file navn

let index = 0; //we used it several place
let newPhoto;
const arrowRight = document.querySelector("#next");
const arrowLeft = document.querySelector("#previous");

document.querySelector("#next").addEventListener("click", skift);
document.querySelector("#previous").addEventListener("click", skift);

function skift() {
  if (this.getAttribute("id") === "next") {
    if (index < photoList.length - 1) {
      index++;
    }
  } else {
    if (index > 0) {
      index--;
    }
  }
  newPhoto = "images/" + photoList[index] + ".png"; //here i used concatenation
  bigImg.setAttribute("src", newPhoto); //setAttribute will change the value

  if (index === 0) {
    arrowLeft.style.display = "none";
  } else if (index === photoList.length - 1) {
    arrowRight.style.display = "none";
  } else {
    arrowLeft.style.display = "block";
    arrowRight.style.display = "block";
  }
}

//form validation

const form = document.querySelector("#subscribeForm"); //tilføje variable og kigger til selve documenter(html)
const errorMessage = document.querySelector("#message");
const emailTest =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", validate); //when we click an eventlistener, we will run the function

function validate(e) {
  //e is function parameter
  const email = e.target.elements.email.value;
  const name = e.target.elements.name.value;
  const message = e.target.elements.message.value;
  if (name.length === 0) {
    //same value, same data type
    errorMessage.innerHTML = "name is requred";
    e.preventDefault();
    return false;
  }
  if (email.length === 0) {
    errorMessage.innerHTML = "email is requred";
    e.preventDefault();
    return false;
  }

  if (!emailTest.test(email)) {
    errorMessage.innerHTML = "incorrect email! ";
    e.preventDefault();
    return false;
  }
  if (message.length === 0) {
    errorMessage.innerHTML = "message is requred";
    e.preventDefault();
    return false;
  }
}
//create a mobilepay
function name() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const mobilePay = document.querySelector("#mobilePay");
  mobilePay.innerHTML =
    "Name: " +
    name +
    "<br>" +
    "Email: " +
    email +
    "<br>" +
    "Message: " +
    message;
}
