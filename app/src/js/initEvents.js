import DOMElements from './DOMElements';
import Render from './Render';
import LocalStorageManager from './LocalStorageManager';
import DataKeys from './DataKeys';
import exemplaryDataInstaller from './data/exemplary/installer';
import {getDay} from './utils/date.util';
import login from './login';

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
};

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

    if (localStorage.getItem(DataKeys.ranges)) {
        DOMElements.$lane[0].click();
    }

    // DOMElements.form.$formLogin.addEventListener('submit', login);

    if (localStorage.getItem(DataKeys.name)) {
        DOMElements.$userName.innerText = localStorage.getItem(DataKeys.name);
    }

    document.getElementById('navbar-toggle-button').addEventListener('click', toggleSidebar);
};
