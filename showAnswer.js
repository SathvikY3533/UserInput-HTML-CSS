check = document.getElementById('showAnswer');
guess = new URLSearchParams(window.location.search);
answer = guess.get('q1');

if (answer == "2007") {
    check.innerHTML = 'Correct!! You answered: ' + answer;
} else {
    check.innerHTML = 'Nope.... :( You Answered: ' + answer;
}