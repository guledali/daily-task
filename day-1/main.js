const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');


function checked(event) {
    console.log(event);
}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click' , checked));
