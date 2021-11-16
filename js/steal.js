let req = new XMLHttpRequest();
let textInput = document.querySelector('.text-input');
console.log(textInput);

let word = true;
textInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        word = textInput.value;
        req.open("GET", 'https://slovnik-cizich-slov.abz.cz/web.php/slovo/' + word);
        req.send(); 
    }
});