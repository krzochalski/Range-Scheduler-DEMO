import Render from './Render';
import LocalStorageManager from './LocalStorageManager';
import DataKeys from './DataKeys';
import exemplaryDataInstaller from './data/exemplary/installer';
import {getDay} from './utils/date.util';
import login from './login';

let DOMElements = {
    form: {
        $formLogin: document.getElementById('form-login'),
        $formLoginNameInput: document.getElementById('form-name'),
    },
    $exemplaryDataButtonInstall: document.getElementById('exemplary-data-button-install'),
    $exemplaryDataButtonClear: document.getElementById('exemplary-data-button-clear'),
    $tableContainer: document.getElementById('table-container'),
    $tableReservations: document.getElementById('table-reservations'),
    $rangesContainer: document.getElementById('ranges-container'),
    $lanesContainer: document.getElementsByClassName('lanes'),
    $lane: document.getElementsByClassName('lane'),
    $rangesTimeline: document.getElementById('ranges-timeline'),
    $userName: document.getElementById('user-name')
};

let displayReservations = e => {
    let reservations = LocalStorageManager()
        .collection(DataKeys.ranges)
        .getAll()
        .find(range => range.name === e.target.dataset.rangename)
        .lanes
        .find(lane => lane.number === e.target.dataset.lanenumber)
        .reservations;
    let timelineElements = document.getElementsByClassName('timeline-element');

    for (let sibling of e.target.parentElement.getElementsByClassName('lane')) {sibling.classList.remove('active')}
    e.target.classList.add('active');


    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].day === getDay(localStorage.getItem(DataKeys.day))) {
            for (let reservation of reservations[i].reservations) {
                for (let time of reservation.times) {
                    for (let i = 0; i < timelineElements.length; i++) {
                        if (time === timelineElements[i].dataset.time) {
                            timelineElements[i].classList.add('bg-primary', 'occupied');
                            timelineElements[i].querySelector('.label-fullname').innerText = reservation.fullname;
                        }
                    }
                }
            }
        }
    }

    showSheduleContainer('timeline');
    showButtonsContainer(true);
    highlightButton('back');
};

function showSheduleContainer(container) {
    const sidebarWidth = 54;

    switch (container) {
        case 'ranges':
            document.getElementById('content-inner').style.left = `${sidebarWidth}px`;
            break;
        case 'timeline':
            document.getElementById('content-inner').style.left = `${document.getElementsByClassName('scheduler-container')[0].offsetWidth * -1 + sidebarWidth}px`;
            break;
        case 'form':
            document.getElementById('content-inner').style.left = `${document.getElementsByClassName('scheduler-container')[0].offsetWidth * -1 * 2 + sidebarWidth}px`;
            break;
        default:
            console.log('default');
            document.getElementById('content-inner').style.left = `${sidebarWidth}px`;
    }
}

function showButtonsContainer(condition) {
    let $buttonsContainer = document.getElementById('navigation-buttons-container');
    return condition ? $buttonsContainer.classList.add('active') : $buttonsContainer.classList.remove('active');
}

function highlightButton(button) {
    switch (button) {
        case 'back':
            document.getElementById('go-back-button').classList.add('btn-highlighted');
            document.getElementById('go-next-button').classList.remove('btn-highlighted');
            break;
        case 'next':
            document.getElementById('go-back-button').classList.remove('btn-highlighted');
            document.getElementById('go-next-button').classList.add('btn-highlighted');
            break;
        default:
            document.getElementById('go-back-button').classList.add('btn-highlighted');
            document.getElementById('go-next-button').classList.remove('btn-highlighted');
    }
}

let toggleSidebar = e => {
    e.preventDefault();

    if (!document.getElementById('layout').classList.contains('sidebar-opened')) {
        document.getElementById('layout').classList.add('sidebar-opened');
        document.body.classList.add('scrolling-disabled');
    } else {
        document.getElementById('layout').classList.remove('sidebar-opened');
        document.body.classList.remove('scrolling-disabled');
    }
};

let setupAppInterface = () => {
    let contentWidth = document.getElementById('content-inner').offsetWidth;
    let $schedulerContainers = document.getElementsByClassName('scheduler-container');

    for (let $schedulerContainer of $schedulerContainers) {
        $schedulerContainer.style.width = `${contentWidth}px`;
        document.getElementById('content-inner').style.width = `${contentWidth * $schedulerContainers.length}px`;
    }
};

export default function () {
    DOMElements.$exemplaryDataButtonInstall.addEventListener('click', (event) => {
        event.preventDefault();
        exemplaryDataInstaller.reinstall();
        location.reload();
    });

    DOMElements.$exemplaryDataButtonClear.addEventListener('click', (event) => {
        event.preventDefault();
        exemplaryDataInstaller.clear();
        location.reload();
    });

    DOMElements.$rangesContainer.innerHTML = Render.ranges();
    DOMElements.$rangesTimeline.innerHTML = Render.timeline('09:00', '20:00');

    for (let i = 0; i < DOMElements.$lane.length; i++) {
        DOMElements.$lane[i].addEventListener('click', displayReservations);
    }

    // DOMElements.form.$formLogin.addEventListener('submit', login);

    if (localStorage.getItem(DataKeys.name)) {
        DOMElements.$userName.innerText = localStorage.getItem(DataKeys.name);
    }

    document.getElementById('navbar-toggle-button').addEventListener('click', toggleSidebar);

    setupAppInterface();

    document.getElementById('go-back-button').addEventListener('click', () => showSheduleContainer('ranges'));
    document.getElementById('go-next-button').addEventListener('click', () => showSheduleContainer('form'));

    showSheduleContainer();
};
