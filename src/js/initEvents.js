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

    console.log(reservations);
    console.log(getDay('today'));
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
