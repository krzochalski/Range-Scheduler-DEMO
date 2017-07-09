import initEvents from './initEvents';

const App = {
    init: () => {
        initEvents();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    App.init();
}, false);
