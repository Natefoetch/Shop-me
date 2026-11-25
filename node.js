class LoginForm {
    constructor() {
        this.form = document.getElementsByClassName('container')[0];

        const usernameWrapper = document.getElementsByClassName('username')[0];
        const passwordWrapper = document.getElementsByClassName('password')[0];
        const logerWrapper = document.getElementsByClassName('loger')[0];

        this.usernameInput = usernameWrapper.getElementsByTagName('input')[0];
        this.passwordInput = passwordWrapper.getElementsByTagName('input')[0];
        this.loginButton = logerWrapper.getElementsByTagName('input')[0];

        this.initEvents();
    }

    initEvents() {
        this.loginButton.addEventListener('click', () => this.handleLogin());

        this.form.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.handleLogin();
            }
        });
    }

    validate(username, password) {
        if (!username) {
            alert('Please enter your username.');
            this.usernameInput.focus();
            return false;
        }

        if (!password) {
            alert('Please enter your password.');
            this.passwordInput.focus();
            return false;
        }

        return true;
    }

    handleLogin() {
        const username = this.usernameInput.value.trim();
        const password = this.passwordInput.value.trim();

        if (!this.validate(username, password)) {
            return;
        }

        alert(`Welcome back, ${username}!`);
        this.form.reset();
    }
}

const appLogin = new LoginForm();
