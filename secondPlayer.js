const usernameS = document.getElementById('usernameS');
const submitBtnS = document.getElementById('submitS');


submitBtnS.addEventListener('click', () => {
    localStorage.setItem('secondPlayerUsername', usernameS.value);
});