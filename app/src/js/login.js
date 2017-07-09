import DataKeys from './DataKeys';

export default function (e) {
    e.preventDefault();

    let name = document.getElementById('form-login-name').value;
    localStorage.setItem(DataKeys.name, name);
}
