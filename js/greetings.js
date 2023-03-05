const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greetings = document.querySelector("#greeting")

const HIDDEN = "hidden";
const LOGIN_KEY = "username";

function usernameSubmit (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN)
    const username = loginInput.value;
    localStorage.setItem(LOGIN_KEY, username);
    showGreetings(username);
}

function showGreetings(username) {
    greetings.classList.remove(HIDDEN)
    greetings.innerText = `반가워요, ${username}!`;
}

const usernameSaved = localStorage.getItem(LOGIN_KEY);

if (usernameSaved === null) {
    loginForm.classList.remove(HIDDEN)
    loginForm.addEventListener("submit", usernameSubmit);
} else {
    loginForm.classList.add(HIDDEN)
    showGreetings(usernameSaved);
}