const usernameF = document.getElementById('usernameF');
const submitBtnF = document.getElementById('submitF');

submitBtnF.addEventListener('click', () => {
    console.log(1)
    localStorage.setItem('firstPlayerUsername', usernameF.value);
});



