add = document.getElementById('choice1');
guess = new URLSearchParams(window.location.search);
answer = guess.get('q');

if (answer == "2007") {
    check.innerHTML = '👍 Correct!! You answered: ' + answer;
} else {
    check.innerHTML = 'Nope.... :( You Answered: ' + answer;
}