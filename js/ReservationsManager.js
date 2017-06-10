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