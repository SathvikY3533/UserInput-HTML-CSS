add = document.getElementById('showAnswer2');
search = new URLSearchParams(window.location.search);
answer = search.get('q2');


if (answer == 'Sathvik') {
    add.innerHTML += 'Correct, the answer is ' + answer + '!';
} else {
    add.innerHTML += 'Nope, the answer is not ' + answer + '!';
}
