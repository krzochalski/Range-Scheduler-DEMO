import {getDay} from '../../utils/date.util';

export default [
    {
        name: "range-1",
        size: "25",
        lanes: [
            {
                "lane": "lane-1",
                "number": "1",
                reservations: [
                    {
                        "day": getDay(-1),
                        "reservations": [
                            {
                                "fullname": "John Wick",
                                "telephone": "111222333",
                                "email": "john.wick@example.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "John Rambo",
                                "telephone": "111222333",
                                "email": "john.rambo@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]

                            },
                            {
                                "fullname": "Encino Man",
                                "email": "encino.man@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            }
                        ]
                    },
                    {
                        "day": getDay(0),
                        "reservations": [
                            {
                                "fullname": "Ron Swanson",
                                "telephone": "111222333",
                                "email": "i.do.not.have.an@email.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "Captain America",
                                "telephone": "111222333",
                                "email": "captain.america@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Fruity Rudy",
                                "telephone": "111222333",
                                "email": "fruity.rudy@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            },
                            {
                                "fullname": "Sam Fisher",
                                "telephone": "111222333",
                                "email": "sam.fisher@example.com",
                                "times": ["15:00-15:30", "15:30-16:00"]
                            }
                        ]
                    },
                    {
                        "day": getDay(1),
                        "reservations": [
                            {
                                "fullname": "Rocky Balboa",
                                "telephone": "111222333",
                                "email": "rocky.balboa@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Private Ryan",
                                "telephone": "111222333",
                                "email": "private.ryan@example.com",
                                "times": ["09:00-09:30"]
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
                        "day": getDay(-1),
                        "reservations": [
                            {
                                "fullname": "John Wick",
                                "telephone": "111222333",
                                "email": "john.wick@example.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "John Rambo",
                                "telephone": "111222333",
                                "email": "john.rambo@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]

                            },
                            {
                                "fullname": "Encino Man",
                                "email": "encino.man@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            }
                        ]
                    },
                    {
                        "day": getDay(0),
                        "reservations": [
                            {
                                "fullname": "James Bond",
                                "telephone": "111222333",
                                "email": "zero.zero.seven@email.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "Strielok",
                                "telephone": "111222333",
                                "email": "strielok@example.com",
                                "times": ["11:00-11:30", "11:30-12:00"]
                            },
                            {
                                "fullname": "Fruity Rudy",
                                "telephone": "111222333",
                                "email": "fruity.rudy@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            },
                            {
                                "fullname": "Sam Fisher",
                                "telephone": "111222333",
                                "email": "sam.fisher@example.com",
                                "times": ["15:00-15:30", "15:30-16:00"]
                            }
                        ]
                    },
                    {
                        "day": getDay(1),
                        "reservations": [
                            {
                                "fullname": "Tommy Vercetti",
                                "telephone": "111222333",
                                "email": "tommy.vercetti@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Private Ryan",
                                "telephone": "111222333",
                                "email": "private.ryan@example.com",
                                "times": ["09:00-09:30"]
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
                        "day": getDay(-1),
                        "reservations": [
                            {
                                "fullname": "John Wick",
                                "telephone": "111222333",
                                "email": "john.wick@example.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "John Rambo",
                                "telephone": "111222333",
                                "email": "john.rambo@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]

                            },
                            {
                                "fullname": "Encino Man",
                                "email": "encino.man@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            }
                        ]
                    },
                    {
                        "day": getDay(0),
                        "reservations": [
                            {
                                "fullname": "Ron Swanson",
                                "telephone": "111222333",
                                "email": "i.do.not.have.an@email.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "Tommy Vercetti",
                                "telephone": "111222333",
                                "email": "tommy.vercetti@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Fruity Rudy",
                                "telephone": "111222333",
                                "email": "fruity.rudy@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            },
                            {
                                "fullname": "Sam Fisher",
                                "telephone": "111222333",
                                "email": "sam.fisher@example.com",
                                "times": ["15:00-15:30", "15:30-16:00"]
                            }
                        ]
                    },
                    {
                        "day": getDay(1),
                        "reservations": [
                            {
                                "fullname": "Rocky Balboa",
                                "telephone": "111222333",
                                "email": "rocky.balboa@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Private Ryan",
                                "telephone": "111222333",
                                "email": "private.ryan@example.com",
                                "times": ["09:00-09:30"]
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
                        "day": getDay(-1),
                        "reservations": [
                            {
                                "fullname": "John Wick",
                                "telephone": "111222333",
                                "email": "john.wick@example.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "John Rambo",
                                "telephone": "111222333",
                                "email": "john.rambo@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]

                            },
                            {
                                "fullname": "Encino Man",
                                "email": "encino.man@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            }
                        ]
                    },
                    {
                        "day": getDay(0),
                        "reservations": [
                            {
                                "fullname": "Ron Swanson",
                                "telephone": "111222333",
                                "email": "i.do.not.have.an@email.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "Captain America",
                                "telephone": "111222333",
                                "email": "captain.america@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Fruity Rudy",
                                "telephone": "111222333",
                                "email": "fruity.rudy@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            },
                            {
                                "fullname": "Sam Fisher",
                                "telephone": "111222333",
                                "email": "sam.fisher@example.com",
                                "times": ["15:00-15:30", "15:30-16:00"]
                            }
                        ]
                    },
                    {
                        "day": getDay(1),
                        "reservations": [
                            {
                                "fullname": "Rocky Balboa",
                                "telephone": "111222333",
                                "email": "rocky.balboa@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Private Ryan",
                                "telephone": "111222333",
                                "email": "private.ryan@example.com",
                                "times": ["09:00-09:30"]
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
                        "day": getDay(-1),
                        "reservations": [
                            {
                                "fullname": "John Wick",
                                "telephone": "111222333",
                                "email": "john.wick@example.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "John Rambo",
                                "telephone": "111222333",
                                "email": "john.rambo@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]

                            },
                            {
                                "fullname": "Encino Man",
                                "email": "encino.man@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            }
                        ]
                    },
                    {
                        "day": getDay(0),
                        "reservations": [
                            {
                                "fullname": "Ron Swanson",
                                "telephone": "111222333",
                                "email": "i.do.not.have.an@email.com",
                                "times": ["10:00-10:30", "10:30-11:00"]
                            },
                            {
                                "fullname": "Captain America",
                                "telephone": "111222333",
                                "email": "captain.america@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Fruity Rudy",
                                "telephone": "111222333",
                                "email": "fruity.rudy@example.com",
                                "times": ["14:00-14:30", "15:00-15:30"]
                            },
                            {
                                "fullname": "Sam Fisher",
                                "telephone": "111222333",
                                "email": "sam.fisher@example.com",
                                "times": ["15:00-15:30", "15:30-16:00"]
                            }
                        ]
                    },
                    {
                        "day": getDay(1),
                        "reservations": [
                            {
                                "fullname": "Rocky Balboa",
                                "telephone": "111222333",
                                "email": "rocky.balboa@example.com",
                                "times": ["12:00-12:30", "12:30-13:00"]
                            },
                            {
                                "fullname": "Private Ryan",
                                "telephone": "111222333",
                                "email": "private.ryan@example.com",
                                "times": ["09:00-09:30"]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];



const exemplaryReservationNow = {
    "day": getDay(1),
    "reservations": {
        "fullname": "Musashi Miyamoto",
        "telephone": "111222333",
        "email": "gorinnosho@example.com",
        "start": "19:00",
        "stop": "20:00"
    }
};

const exemplaryReservation = {
    "day": getDay(3),
        "reservations": {
            "fullname": "Musashi Miyamoto",
            "telephone": "111222333",
            "email": "gorinnosho@example.com",
            "start": "19:00",
            "stop": "20:00"
        }
};
