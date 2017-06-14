import DOMElements from './DOMElements';
import Render from './Render';
import LocalStorageManager from './LocalStorageManager';
import DataKeys from './DataKeys';

export default function () {
    DOMElements.$exemplaryDataButtonInstall.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager(DataKeys.ranges).exemplaryData.install();
    });

    DOMElements.$exemplaryDataButtonClear.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager(DataKeys.ranges).exemplaryData.clear();
    });

    DOMElements.$rangesContainer.innerHTML = Render.ranges();
    DOMElements.$rangesTimeline.innerHTML = Render.timeline('09:00', '20:00');


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

        console.log(reservationData);

        ReservationsManager.reservations.add(reservationData);
    });
};
