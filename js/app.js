let today = () => {
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getUTCMonth() < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1,
        day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();

    return `${year}-${month}-${day}`;
};

let ReservationsManager = {
    reservations: {
        getAll: () => {
            LocalStorageManager('reservationsData').exemplaryData.get();
        },
        get: (day) => {
            for (let reservation of ExemplaryData) {
                if (reservation.day === day) {
                    return reservation;
                }
            }
        },
        add: (reservation) => {
            LocalStorageManager('reservationsData').addReservation(reservation);
            DOMElements.$tableContainer.innerHTML = renderReservations();
        }
    }
};

let DOMElements = {
    form: {
        $form: document.getElementById('form'),
        $inputName: document.getElementById('form-name'),
        $inputEmail: document.getElementById('form-email'),
        $inputTelephone: document.getElementById('form-telephone'),
        $inputDate: document.getElementById('form-date'),
        $inputStart: document.getElementById('form-start'),
        $inputStop: document.getElementById('form-stop'),
        $formElement: document.querySelectorAll('.reservation-form .form-control')
    },
    $exemplaryDataButtonInstall: document.getElementById('exemplary-data-button-install'),
    $exemplaryDataButtonClear: document.getElementById('exemplary-data-button-clear'),
    $tableContainer: document.getElementById('table-container'),
    $tableReservations: document.getElementById('table-reservations'),
    $rangesContainer: document.getElementById('ranges-container')
};

let renderLanes = () => {
    let ranges = LocalStorageManager('reservationsData').getData();

    if (LocalStorageManager('reservationsData').exemplaryData.isInstalled()) {
        return `${ranges.map(range => `
            <div class="range m-${range.type}">
                <div class="label text-center"><h2 class="text-primary">25m</h2></div>
                <div class="lanes">
                    ${range.lanes.map(lane => `<div class="lane"><div class="position">${lane.number}</div></div>`).join('')}
                </div>
            </div>`
        ).join('')}`;
    } else {
        return `<div class="alert alert-warning">No reservations yet. Please Install Exemplary Data.</div>`
    }
};


let initEvents = () => {
    DOMElements.$exemplaryDataButtonInstall.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager('reservationsData').exemplaryData.install();
    });

    DOMElements.$exemplaryDataButtonClear.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager('reservationsData').exemplaryData.clear();
    });

    DOMElements.$rangesContainer.innerHTML = renderLanes();


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

let App = {
    init: () => {
        initEvents();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    App.init();
}, false);