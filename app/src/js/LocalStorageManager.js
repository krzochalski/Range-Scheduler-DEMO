export default function (key) {
    return {
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
