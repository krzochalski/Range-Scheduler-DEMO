import exemplaryData from './ExemplaryDataGenerator';

export default function (key) {
    let saveData = (data) => {
        localStorage.setItem(key, JSON.stringify(data))
    };

    let exemplaryDataInstalled = () => {
        return localStorage.getItem(key) === null;
    };

    return {
        exemplaryData: {
            install: () => {
                saveData(exemplaryData);

                if (localStorage.getItem(key) === JSON.stringify(exemplaryData)) {
                    console.log('%cExemplary data has been installed', 'color: green');
                }
            },
            clear: () => {
                localStorage.removeItem(key);

                if (exemplaryDataInstalled) {
                    console.log('%cExemplary data has been removed', 'color: blue');
                }
            },
            get: () => {
                if (exemplaryDataInstalled) {
                    console.log('%cData not installed', 'color: red');
                } else {
                    console.table(exemplaryData);
                }
            },
            isInstalled: () => {
                return !exemplaryDataInstalled();
            }
        },

        getData: () => {
            return JSON.parse(localStorage.getItem(key));
        },
        addReservation: (reservation) => {
            let daysData = JSON.parse(localStorage.getItem(key));

            for (let day of daysData) {
                if (day.day === reservation.day) {
                    day.reservations.push(reservation.reservations);
                }
            }

            saveData(daysData);
        },

        collection: (collection) => {
            return {
                getAll: () => {
                    return JSON.parse(localStorage.getItem(collection));
                }
            }
        },
        string: (key) => {
            return {
                read: () => {
                    return localStorage.getItem(key);
                },
                write: (value) => {
                    localStorage.setItem(key, value);
                }
            }
        }
    };
}
