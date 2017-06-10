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
            LocalStorageManager(DataKeys.ranges).exemplaryData.get();
        },
        get: (day) => {
            for (let reservation of ExemplaryData) {
                if (reservation.day === day) {
                    return reservation;
                }
            }
        },
        add: (reservation) => {
            LocalStorageManager(DataKeys.ranges).addReservation(reservation);
            DOMElements.$tableContainer.innerHTML = renderReservations();
        }
    }
};

let RangesManager = {
    ranges: {
        getAll: () => {
            if (!LocalStorageManager(DataKeys.ranges).exemplaryData.isInstalled()) {
                return false;
            }

            let ranges = LocalStorageManager().collection(DataKeys.ranges).getAll();
            let rangeData = (range) => `Range: ${range.name},\nLength: ${range.size},\nLanes: ${range.lanes.length},`;
            let reservationsData = (lanes) => `Reservations on: ${lanes.reservations.map(day => day.day)}\n`;
            let lanesData = (range) => {
                return `Lanes Data:\n${range.lanes.map(lane => `${lane.number}: ${reservationsData(lane)}`).join('')}`;
            };

            const output = `${ranges.map(range =>
                `${rangeData(range)}\n${lanesData(range)}`
            ).join('')}`;

            console.log(ranges);
            console.log(output);
        }
    }
};

RangesManager.ranges.getAll();

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
    $rangesContainer: document.getElementById('ranges-container'),
    $rangesTimeline: document.getElementById('ranges-timeline')
};

const Render = {
    lanes: () => {
        let ranges = LocalStorageManager(DataKeys.ranges).getData();
        let percentage = () => {
            let percent = Math.floor(Math.random() * 100);
            return `
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100" style="width: ${percent}%;">
                    ${percent}%
                </div>
            </div>`;

        };

        if (LocalStorageManager(DataKeys.ranges).exemplaryData.isInstalled()) {
            return `${ranges.map(range => `
            <div class="range m-${range.size}">
                <div class="label text-center"><h2 class="text-primary">${range.size}m</h2></div>
                <div class="lanes">
                    ${range.lanes.map(lane => `<div class="lane"><div class="position">${lane.number}</div>${percentage()}</div>`).join('')}
                </div>
            </div>`
            ).join('')}`;
        } else {
            return `<div class="alert alert-warning">No reservations yet. Please Install Exemplary Data.</div>`
        }
    }
};

let renderTimeline = (start, end) => {
    let template = (timeFrom, timeTo) => {
        return `
            <a data-time-from="${timeFrom}" data-time-to="${timeTo}" href="#" class="list-group-item">
                <h4 class="list-group-item-heading timeline-time"><span class="label-time text-center">${timeFrom} - ${timeTo}</span></h4>
                <h4 class="list-group-item-heading">&nbsp;</h4>
            </a>`;

    };

    let hours = () => {
        start = parseInt(start.replace(':', ''));
        end = parseInt(end.replace(':', ''));
        let hoursArray = [];

        let integerToTime = (integer) => {
            integer = integer.toString();

            if (integer.length <= 3) {
                integer = (integer.substr(0, 0) + '0') + integer.substr(0)
            }

            const time = integer.substr(0, 2) + ':' + integer.substr(2);

            return time.replace('50', '30');
        };

        for (let i = start; i <= end; i += 50) {
            hoursArray.push(integerToTime(i));
        }


        return hoursArray;
    };

    let timelineHTML = () => {
        let hoursArray = hours('09:00', '20:00');

        return `${hoursArray.map((hour, index) => {
            if (index <= hoursArray.length - 2) {
                return template(hour, hoursArray[index + 1])
            }
        }).join('')}`;

    };

    return timelineHTML();
};

let initEvents = () => {
    DOMElements.$exemplaryDataButtonInstall.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager(DataKeys.ranges).exemplaryData.install();
    });

    DOMElements.$exemplaryDataButtonClear.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager(DataKeys.ranges).exemplaryData.clear();
    });

    DOMElements.$rangesContainer.innerHTML = Render.lanes();
    DOMElements.$rangesTimeline.innerHTML = renderTimeline('09:00', '20:00');


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