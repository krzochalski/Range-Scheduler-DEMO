import DOMElements from './DOMElements';
import Render from './Render';
import LocalStorageManager from './LocalStorageManager';
import DataKeys from './DataKeys';
import exemplaryDataInstaller from './data/exemplary/installer';
import {getDay} from './utils/date.util';

let displayReservations = e => {
    let reservations = LocalStorageManager()
        .collection(DataKeys.ranges)
        .getAll()
        .find(range => range.name === e.target.dataset.rangename)
        .lanes
        .find(lane => lane.number === e.target.dataset.lanenumber)
        .reservations;

    console.log(e.target.classList.add('bg-danger'));
    // console.log(getDay('today'));



    (() => {
        setTimeout(() => {
            let timelineElements = document.getElementsByClassName('timeline-element');

            for (let i = 0; i < reservations.length; i++) {
                if (reservations[i].day === getDay(localStorage.getItem(DataKeys.day))) {
                    for (let reservation of reservations[i].reservations) {
                        for (let time of reservation.times) {
                            console.log(reservation);
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

        }, 100);
    })();
};

export default function () {
    DOMElements.$exemplaryDataButtonInstall.addEventListener('click', (event) => {
        event.preventDefault();
        exemplaryDataInstaller.install();
    });

    DOMElements.$exemplaryDataButtonClear.addEventListener('click', (event) => {
        event.preventDefault();
        exemplaryDataInstaller.clear();
    });

    DOMElements.$rangesContainer.innerHTML = Render.ranges();
    DOMElements.$rangesTimeline.innerHTML = Render.timeline('09:00', '20:00');

    for (let i = 0; i < DOMElements.$lane.length; i++) {
        DOMElements.$lane[i].addEventListener('click', displayReservations);
    }

    DOMElements.form.$form.addEventListener('submit', (event) => {
        event.preventDefault();
        let reservationData = {
            day: DOMElements.form.$inputDate.value,
            reservations: {
                fullname: DOMElements.form.$inputName.value,
                telephone: DOMElements.form.$inputTelephone.value,
                email: DOMElements.form.$inputEmail.value,
                start: DOMElements.form.$inputStart.value,
                stop: DOMElements.form.$inputStop.value
            }
        };

        ReservationsManager.reservations.add(reservationData);
    });
};
