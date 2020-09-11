const submitButton = document.querySelector(".submit_button");
const header = document.querySelector(".header");
const imageswitch = "https://images.unsplash.com/photo-1599765625246-5c661338b722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
const image = document.querySelector(".image");

submitButton.addEventListener("click",()=>{
    alert("Congrats!");
    header.textContent = "Hello!"
    image.src = imageswitch;
})