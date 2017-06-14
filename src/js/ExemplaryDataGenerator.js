let currentDay = (days) => {
    let oneDay = 86400000,
        daysCount = days === 0 ? 0 : days * oneDay,
        today = new Date(Date.now() + daysCount),
        getYear = (date) => date.getFullYear(),
        getMonth = (date) => date.getUTCMonth() < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1,
        getDay = (date) => date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate(),
        getFullDate = (date) => `${getYear(date)}-${getMonth(date)}-${getDay(date)}`;

    return getFullDate(today);
};

export default function() {
    return [
        {
            name: "range-1",
            size: "25",
            lanes: [
                {
                    "lane": "lane-1",
                    "number": "1",
                    reservations: [
                        {
                            "day": currentDay(-1),
                            "reservations": [
                                {
                                    "fullname": "John Wick",
                                    "telephone": "111222333",
                                    "email": "john.wick@example.com",
                                    "start": "10:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "John Rambo",
                                    "telephone": "111222333",
                                    "email": "john.rambo@example.com",
                                    "start": "14:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Encino Man",
                                    "email": "encino.man@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(0),
                            "reservations": [
                                {
                                    "fullname": "Ron Swanson",
                                    "telephone": "111222333",
                                    "email": "i.do.not.have.an@email.com",
                                    "start": "09:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "Captain America",
                                    "telephone": "111222333",
                                    "email": "captain.america@example.com",
                                    "start": "13:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Fruity Rudy",
                                    "telephone": "111222333",
                                    "email": "fruity.rudy@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                },
                                {
                                    "fullname": "Sam Fisher",
                                    "telephone": "111222333",
                                    "email": "sam.fisher@example.com",
                                    "start": "15:00",
                                    "stop": "16:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(1),
                            "reservations": [
                                {
                                    "fullname": "Rocky Balboa",
                                    "telephone": "111222333",
                                    "email": "rocky.balboa@example.com",
                                    "start": "12:00",
                                    "stop": "13:00"
                                },
                                {
                                    "fullname": "Private Ryan",
                                    "telephone": "111222333",
                                    "email": "private.ryan@example.com",
                                    "start": "09:00",
                                    "stop": "10:00"
                                }
                            ]
                        }
                    ]
                },
                {
                    "lane": "lane-2",
                    "number": "2",
                    reservations: [
                        {
                            "day": currentDay(-1),
                            "reservations": [
                                {
                                    "fullname": "John Wick",
                                    "telephone": "111222333",
                                    "email": "john.wick@example.com",
                                    "start": "10:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "John Rambo",
                                    "telephone": "111222333",
                                    "email": "john.rambo@example.com",
                                    "start": "14:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Encino Man",
                                    "email": "encino.man@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(0),
                            "reservations": [
                                {
                                    "fullname": "Ron Swanson",
                                    "telephone": "111222333",
                                    "email": "i.do.not.have.an@email.com",
                                    "start": "09:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "Captain America",
                                    "telephone": "111222333",
                                    "email": "captain.america@example.com",
                                    "start": "13:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Fruity Rudy",
                                    "telephone": "111222333",
                                    "email": "fruity.rudy@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                },
                                {
                                    "fullname": "Sam Fisher",
                                    "telephone": "111222333",
                                    "email": "sam.fisher@example.com",
                                    "start": "15:00",
                                    "stop": "16:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(1),
                            "reservations": [
                                {
                                    "fullname": "Rocky Balboa",
                                    "telephone": "111222333",
                                    "email": "rocky.balboa@example.com",
                                    "start": "12:00",
                                    "stop": "13:00"
                                },
                                {
                                    "fullname": "Private Ryan",
                                    "telephone": "111222333",
                                    "email": "private.ryan@example.com",
                                    "start": "09:00",
                                    "stop": "10:00"
                                }
                            ]
                        }
                    ]
                },
                {
                    "lane": "lane-3",
                    "number": "3",
                    reservations: [
                        {
                            "day": currentDay(-1),
                            "reservations": [
                                {
                                    "fullname": "John Wick",
                                    "telephone": "111222333",
                                    "email": "john.wick@example.com",
                                    "start": "10:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "John Rambo",
                                    "telephone": "111222333",
                                    "email": "john.rambo@example.com",
                                    "start": "14:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Encino Man",
                                    "email": "encino.man@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(0),
                            "reservations": [
                                {
                                    "fullname": "Ron Swanson",
                                    "telephone": "111222333",
                                    "email": "i.do.not.have.an@email.com",
                                    "start": "09:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "Captain America",
                                    "telephone": "111222333",
                                    "email": "captain.america@example.com",
                                    "start": "13:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Fruity Rudy",
                                    "telephone": "111222333",
                                    "email": "fruity.rudy@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                },
                                {
                                    "fullname": "Sam Fisher",
                                    "telephone": "111222333",
                                    "email": "sam.fisher@example.com",
                                    "start": "15:00",
                                    "stop": "16:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(1),
                            "reservations": [
                                {
                                    "fullname": "Rocky Balboa",
                                    "telephone": "111222333",
                                    "email": "rocky.balboa@example.com",
                                    "start": "12:00",
                                    "stop": "13:00"
                                },
                                {
                                    "fullname": "Private Ryan",
                                    "telephone": "111222333",
                                    "email": "private.ryan@example.com",
                                    "start": "09:00",
                                    "stop": "10:00"
                                }
                            ]
                        }
                    ]
                },
                {
                    "lane": "lane-4",
                    "number": "4",
                    reservations: [
                        {
                            "day": currentDay(-1),
                            "reservations": [
                                {
                                    "fullname": "John Wick",
                                    "telephone": "111222333",
                                    "email": "john.wick@example.com",
                                    "start": "10:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "John Rambo",
                                    "telephone": "111222333",
                                    "email": "john.rambo@example.com",
                                    "start": "14:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Encino Man",
                                    "email": "encino.man@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(0),
                            "reservations": [
                                {
                                    "fullname": "Ron Swanson",
                                    "telephone": "111222333",
                                    "email": "i.do.not.have.an@email.com",
                                    "start": "09:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "Captain America",
                                    "telephone": "111222333",
                                    "email": "captain.america@example.com",
                                    "start": "13:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Fruity Rudy",
                                    "telephone": "111222333",
                                    "email": "fruity.rudy@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                },
                                {
                                    "fullname": "Sam Fisher",
                                    "telephone": "111222333",
                                    "email": "sam.fisher@example.com",
                                    "start": "15:00",
                                    "stop": "16:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(1),
                            "reservations": [
                                {
                                    "fullname": "Rocky Balboa",
                                    "telephone": "111222333",
                                    "email": "rocky.balboa@example.com",
                                    "start": "12:00",
                                    "stop": "13:00"
                                },
                                {
                                    "fullname": "Private Ryan",
                                    "telephone": "111222333",
                                    "email": "private.ryan@example.com",
                                    "start": "09:00",
                                    "stop": "10:00"
                                }
                            ]
                        }
                    ]
                },
                {
                    "lane": "lane-5",
                    "number": "5",
                    reservations: [
                        {
                            "day": currentDay(-1),
                            "reservations": [
                                {
                                    "fullname": "John Wick",
                                    "telephone": "111222333",
                                    "email": "john.wick@example.com",
                                    "start": "10:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "John Rambo",
                                    "telephone": "111222333",
                                    "email": "john.rambo@example.com",
                                    "start": "14:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Encino Man",
                                    "email": "encino.man@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(0),
                            "reservations": [
                                {
                                    "fullname": "Ron Swanson",
                                    "telephone": "111222333",
                                    "email": "i.do.not.have.an@email.com",
                                    "start": "09:00",
                                    "stop": "12:00"
                                },
                                {
                                    "fullname": "Captain America",
                                    "telephone": "111222333",
                                    "email": "captain.america@example.com",
                                    "start": "13:00",
                                    "stop": "15:00"
                                },
                                {
                                    "fullname": "Fruity Rudy",
                                    "telephone": "111222333",
                                    "email": "fruity.rudy@example.com",
                                    "start": "17:00",
                                    "stop": "19:00"
                                },
                                {
                                    "fullname": "Sam Fisher",
                                    "telephone": "111222333",
                                    "email": "sam.fisher@example.com",
                                    "start": "15:00",
                                    "stop": "16:00"
                                }
                            ]
                        },
                        {
                            "day": currentDay(1),
                            "reservations": [
                                {
                                    "fullname": "Rocky Balboa",
                                    "telephone": "111222333",
                                    "email": "rocky.balboa@example.com",
                                    "start": "12:00",
                                    "stop": "13:00"
                                },
                                {
                                    "fullname": "Private Ryan",
                                    "telephone": "111222333",
                                    "email": "private.ryan@example.com",
                                    "start": "09:00",
                                    "stop": "10:00"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
};



const exemplaryReservationNow = {
    "day": currentDay(1),
    "reservations": {
        "fullname": "Musashi Miyamoto",
        "telephone": "111222333",
        "email": "gorinnosho@example.com",
        "start": "19:00",
        "stop": "20:00"
    }
};

const exemplaryReservation = {
    "day": currentDay(3),
        "reservations": {
            "fullname": "Musashi Miyamoto",
            "telephone": "111222333",
            "email": "gorinnosho@example.com",
            "start": "19:00",
            "stop": "20:00"
        }
};
