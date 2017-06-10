let today = () => {
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getUTCMonth() < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1,
        day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();

    return `${year}-${month}-${day}`;
};

let App = {
    init: () => {
        initEvents();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    App.init();
}, false);