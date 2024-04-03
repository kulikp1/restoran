const orderButton = document.querySelector('.button');
const closeButton = document.querySelector('.modal-btn');

orderButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    openBackdrop(); 
});

  
closeButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    closeBackdrop(); 
});


function openBackdrop() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.add('is-open');
}
  
function closeBackdrop() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.remove('is-open');
}



 


