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
    $rangesContainer: document.getElementById('ranges-container')
};

let renderLanes = () => {
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
};

let renderTimeLine = () => {
    let getTimelineArray = (start, end) => {
        let hours = (start, end) => {
            start = parseInt(start.replace(':', ''));
            end = parseInt(end.replace(':', ''));
            let hoursArray = [];
            let integerToTime = (integer) => {
                let time = integer.toString();

                let addZero = () => {
                    return time.length <= 3 ? time.substr(0, 0) + '0' + time.substr(0) : time;
                };

                let addColon = () => {
                    return addZero(time).substr(0, 2) + ':' + addZero(time).substr(2);
                };

                return addColon().replace('50', '30');
            };
            for (let i = start; i <= end; i += 50) {
                hoursArray.push(integerToTime(i));
            }

            return hoursArray;
        };

        let timelineArray = () => {
            let hoursArray = hours('09:00', '20:00');
            return `${hoursArray.map((hour, index) => {
                if (index <= hoursArray.length - 2) {
                    console.log(`${hour}-${hoursArray[index + 1]} :: ${hoursArray.length - 1}`);
                }
            }).join('')}`;
        };

        return timelineArray();
    };

    console.log(getTimelineArray());

    // let item = `
    //     <a href="#" class="list-group-item occupied">
    //         <h3 class="list-group-item-heading timeline-time"><span class="label-time text-center">09:00 - 10:00</span></h3>
    //         <h4 class="list-group-item-heading">John Wick</h4>
    //         <p class="list-group-item-text">Target Practice</p>
    //     </a>`;
    //
    // return `
    //     <div class="list-group timeline">
    //         ${item}
    //     </div>`;
};

renderTimeLine();


let initEvents = () => {
    DOMElements.$exemplaryDataButtonInstall.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager(DataKeys.ranges).exemplaryData.install();
    });

    DOMElements.$exemplaryDataButtonClear.addEventListener('click', (event) => {
        event.preventDefault();
        LocalStorageManager(DataKeys.ranges).exemplaryData.clear();
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