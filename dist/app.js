(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    ranges: 'rangesData'
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return [{
        name: "range-1",
        size: "25",
        lanes: [{
            "lane": "lane-1",
            "number": "1",
            reservations: [{
                "day": currentDay(-1),
                "reservations": [{
                    "fullname": "John Wick",
                    "telephone": "111222333",
                    "email": "john.wick@example.com",
                    "start": "10:00",
                    "stop": "12:00"
                }, {
                    "fullname": "John Rambo",
                    "telephone": "111222333",
                    "email": "john.rambo@example.com",
                    "start": "14:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Encino Man",
                    "email": "encino.man@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }]
            }, {
                "day": currentDay(0),
                "reservations": [{
                    "fullname": "Ron Swanson",
                    "telephone": "111222333",
                    "email": "i.do.not.have.an@email.com",
                    "start": "09:00",
                    "stop": "12:00"
                }, {
                    "fullname": "Captain America",
                    "telephone": "111222333",
                    "email": "captain.america@example.com",
                    "start": "13:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Fruity Rudy",
                    "telephone": "111222333",
                    "email": "fruity.rudy@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }, {
                    "fullname": "Sam Fisher",
                    "telephone": "111222333",
                    "email": "sam.fisher@example.com",
                    "start": "15:00",
                    "stop": "16:00"
                }]
            }, {
                "day": currentDay(1),
                "reservations": [{
                    "fullname": "Rocky Balboa",
                    "telephone": "111222333",
                    "email": "rocky.balboa@example.com",
                    "start": "12:00",
                    "stop": "13:00"
                }, {
                    "fullname": "Private Ryan",
                    "telephone": "111222333",
                    "email": "private.ryan@example.com",
                    "start": "09:00",
                    "stop": "10:00"
                }]
            }]
        }, {
            "lane": "lane-2",
            "number": "2",
            reservations: [{
                "day": currentDay(-1),
                "reservations": [{
                    "fullname": "John Wick",
                    "telephone": "111222333",
                    "email": "john.wick@example.com",
                    "start": "10:00",
                    "stop": "12:00"
                }, {
                    "fullname": "John Rambo",
                    "telephone": "111222333",
                    "email": "john.rambo@example.com",
                    "start": "14:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Encino Man",
                    "email": "encino.man@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }]
            }, {
                "day": currentDay(0),
                "reservations": [{
                    "fullname": "Ron Swanson",
                    "telephone": "111222333",
                    "email": "i.do.not.have.an@email.com",
                    "start": "09:00",
                    "stop": "12:00"
                }, {
                    "fullname": "Captain America",
                    "telephone": "111222333",
                    "email": "captain.america@example.com",
                    "start": "13:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Fruity Rudy",
                    "telephone": "111222333",
                    "email": "fruity.rudy@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }, {
                    "fullname": "Sam Fisher",
                    "telephone": "111222333",
                    "email": "sam.fisher@example.com",
                    "start": "15:00",
                    "stop": "16:00"
                }]
            }, {
                "day": currentDay(1),
                "reservations": [{
                    "fullname": "Rocky Balboa",
                    "telephone": "111222333",
                    "email": "rocky.balboa@example.com",
                    "start": "12:00",
                    "stop": "13:00"
                }, {
                    "fullname": "Private Ryan",
                    "telephone": "111222333",
                    "email": "private.ryan@example.com",
                    "start": "09:00",
                    "stop": "10:00"
                }]
            }]
        }, {
            "lane": "lane-3",
            "number": "3",
            reservations: [{
                "day": currentDay(-1),
                "reservations": [{
                    "fullname": "John Wick",
                    "telephone": "111222333",
                    "email": "john.wick@example.com",
                    "start": "10:00",
                    "stop": "12:00"
                }, {
                    "fullname": "John Rambo",
                    "telephone": "111222333",
                    "email": "john.rambo@example.com",
                    "start": "14:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Encino Man",
                    "email": "encino.man@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }]
            }, {
                "day": currentDay(0),
                "reservations": [{
                    "fullname": "Ron Swanson",
                    "telephone": "111222333",
                    "email": "i.do.not.have.an@email.com",
                    "start": "09:00",
                    "stop": "12:00"
                }, {
                    "fullname": "Captain America",
                    "telephone": "111222333",
                    "email": "captain.america@example.com",
                    "start": "13:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Fruity Rudy",
                    "telephone": "111222333",
                    "email": "fruity.rudy@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }, {
                    "fullname": "Sam Fisher",
                    "telephone": "111222333",
                    "email": "sam.fisher@example.com",
                    "start": "15:00",
                    "stop": "16:00"
                }]
            }, {
                "day": currentDay(1),
                "reservations": [{
                    "fullname": "Rocky Balboa",
                    "telephone": "111222333",
                    "email": "rocky.balboa@example.com",
                    "start": "12:00",
                    "stop": "13:00"
                }, {
                    "fullname": "Private Ryan",
                    "telephone": "111222333",
                    "email": "private.ryan@example.com",
                    "start": "09:00",
                    "stop": "10:00"
                }]
            }]
        }, {
            "lane": "lane-4",
            "number": "4",
            reservations: [{
                "day": currentDay(-1),
                "reservations": [{
                    "fullname": "John Wick",
                    "telephone": "111222333",
                    "email": "john.wick@example.com",
                    "start": "10:00",
                    "stop": "12:00"
                }, {
                    "fullname": "John Rambo",
                    "telephone": "111222333",
                    "email": "john.rambo@example.com",
                    "start": "14:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Encino Man",
                    "email": "encino.man@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }]
            }, {
                "day": currentDay(0),
                "reservations": [{
                    "fullname": "Ron Swanson",
                    "telephone": "111222333",
                    "email": "i.do.not.have.an@email.com",
                    "start": "09:00",
                    "stop": "12:00"
                }, {
                    "fullname": "Captain America",
                    "telephone": "111222333",
                    "email": "captain.america@example.com",
                    "start": "13:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Fruity Rudy",
                    "telephone": "111222333",
                    "email": "fruity.rudy@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }, {
                    "fullname": "Sam Fisher",
                    "telephone": "111222333",
                    "email": "sam.fisher@example.com",
                    "start": "15:00",
                    "stop": "16:00"
                }]
            }, {
                "day": currentDay(1),
                "reservations": [{
                    "fullname": "Rocky Balboa",
                    "telephone": "111222333",
                    "email": "rocky.balboa@example.com",
                    "start": "12:00",
                    "stop": "13:00"
                }, {
                    "fullname": "Private Ryan",
                    "telephone": "111222333",
                    "email": "private.ryan@example.com",
                    "start": "09:00",
                    "stop": "10:00"
                }]
            }]
        }, {
            "lane": "lane-5",
            "number": "5",
            reservations: [{
                "day": currentDay(-1),
                "reservations": [{
                    "fullname": "John Wick",
                    "telephone": "111222333",
                    "email": "john.wick@example.com",
                    "start": "10:00",
                    "stop": "12:00"
                }, {
                    "fullname": "John Rambo",
                    "telephone": "111222333",
                    "email": "john.rambo@example.com",
                    "start": "14:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Encino Man",
                    "email": "encino.man@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }]
            }, {
                "day": currentDay(0),
                "reservations": [{
                    "fullname": "Ron Swanson",
                    "telephone": "111222333",
                    "email": "i.do.not.have.an@email.com",
                    "start": "09:00",
                    "stop": "12:00"
                }, {
                    "fullname": "Captain America",
                    "telephone": "111222333",
                    "email": "captain.america@example.com",
                    "start": "13:00",
                    "stop": "15:00"
                }, {
                    "fullname": "Fruity Rudy",
                    "telephone": "111222333",
                    "email": "fruity.rudy@example.com",
                    "start": "17:00",
                    "stop": "19:00"
                }, {
                    "fullname": "Sam Fisher",
                    "telephone": "111222333",
                    "email": "sam.fisher@example.com",
                    "start": "15:00",
                    "stop": "16:00"
                }]
            }, {
                "day": currentDay(1),
                "reservations": [{
                    "fullname": "Rocky Balboa",
                    "telephone": "111222333",
                    "email": "rocky.balboa@example.com",
                    "start": "12:00",
                    "stop": "13:00"
                }, {
                    "fullname": "Private Ryan",
                    "telephone": "111222333",
                    "email": "private.ryan@example.com",
                    "start": "09:00",
                    "stop": "10:00"
                }]
            }]
        }]
    }];
};

var currentDay = function currentDay(days) {
    var oneDay = 86400000,
        daysCount = days === 0 ? 0 : days * oneDay,
        today = new Date(Date.now() + daysCount),
        getYear = function getYear(date) {
        return date.getFullYear();
    },
        getMonth = function getMonth(date) {
        return date.getUTCMonth() < 10 ? "0" + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1;
    },
        getDay = function getDay(date) {
        return date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate();
    },
        getFullDate = function getFullDate(date) {
        return getYear(date) + "-" + getMonth(date) + "-" + getDay(date);
    };

    return getFullDate(today);
};

;

var exemplaryReservationNow = {
    "day": currentDay(1),
    "reservations": {
        "fullname": "Musashi Miyamoto",
        "telephone": "111222333",
        "email": "gorinnosho@example.com",
        "start": "19:00",
        "stop": "20:00"
    }
};

var exemplaryReservation = {
    "day": currentDay(3),
    "reservations": {
        "fullname": "Musashi Miyamoto",
        "telephone": "111222333",
        "email": "gorinnosho@example.com",
        "start": "19:00",
        "stop": "20:00"
    }
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _default(key) {
    var saveData = function saveData(data) {
        localStorage.setItem(key, JSON.stringify(data));
    };

    var exemplaryDataInstalled = function exemplaryDataInstalled() {
        return localStorage.getItem(key) === null;
    };

    return {
        exemplaryData: {
            install: function install() {
                saveData(ExemplaryData());

                if (localStorage.getItem(key) === JSON.stringify(ExemplaryData())) {
                    console.log('%cExemplary data has been installed', 'color: green');
                }
            },
            clear: function clear() {
                localStorage.removeItem(key);

                if (exemplaryDataInstalled) {
                    console.log('%cExemplary data has been removed', 'color: blue');
                }
            },
            get: function get() {
                if (exemplaryDataInstalled) {
                    console.log('%cData not installed', 'color: red');
                } else {
                    console.table(ExemplaryData());
                }
            },
            isInstalled: function isInstalled() {
                return !exemplaryDataInstalled();
            }
        },
        getData: function getData() {
            return JSON.parse(localStorage.getItem(key));
        },
        addReservation: function addReservation(reservation) {
            var daysData = JSON.parse(localStorage.getItem(key));

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = daysData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var day = _step.value;

                    if (day.day === reservation.day) {
                        day.reservations.push(reservation.reservations);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            saveData(daysData);
        },

        collection: function collection(_collection) {
            return {
                getAll: function getAll() {
                    return JSON.parse(localStorage.getItem(_collection));
                }
            };
        },
        string: function string(key) {
            return {
                read: function read() {
                    return localStorage.getItem(key);
                },
                write: function write(value) {
                    localStorage.setItem(key, value);
                }
            };
        }
    };
}
exports.default = _default;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    ranges: {
        getAll: function getAll() {
            if (!LocalStorageManager(DataKeys.ranges).exemplaryData.isInstalled()) {
                return false;
            }

            var ranges = LocalStorageManager().collection(DataKeys.ranges).getAll();
            var rangeData = function rangeData(range) {
                return 'Range: ' + range.name + ',\nLength: ' + range.size + ',\nLanes: ' + range.lanes.length + ',';
            };
            var reservationsData = function reservationsData(lanes) {
                return 'Reservations on: ' + lanes.reservations.map(function (day) {
                    return day.day;
                }) + '\n';
            };
            var lanesData = function lanesData(range) {
                return 'Lanes Data:\n' + range.lanes.map(function (lane) {
                    return lane.number + ': ' + reservationsData(lane);
                }).join('');
            };

            var output = '' + ranges.map(function (range) {
                return rangeData(range) + '\n' + lanesData(range);
            }).join('');

            console.log(ranges);
            console.log(output);
        }
    }
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LocalStorageManager = require('./LocalStorageManager');

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _DataKeys = require('./DataKeys');

var _DataKeys2 = _interopRequireDefault(_DataKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    ranges: function ranges() {
        var ranges = (0, _LocalStorageManager2.default)(_DataKeys2.default.ranges).getData();
        var percentage = function percentage() {
            var percent = Math.floor(Math.random() * 100);
            return '\n            <div class="progress">\n                <div class="progress-bar" role="progressbar" aria-valuenow="' + percent + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + percent + '%;">\n                    ' + percent + '%\n                </div>\n            </div>';
        };

        if ((0, _LocalStorageManager2.default)(_DataKeys2.default.ranges).exemplaryData.isInstalled()) {
            return '' + ranges.map(function (range) {
                return '\n            <div class="range m-' + range.size + '">\n                <div class="label text-center"><h2 class="text-primary">' + range.size + 'm</h2></div>\n                <div class="lanes">\n                    ' + range.lanes.map(function (lane) {
                    return '<div class="lane"><div class="position">' + lane.number + '</div>' + percentage() + '</div>';
                }).join('') + '\n                </div>\n            </div>';
            }).join('');
        } else {
            return '<div class="alert alert-warning">No reservations yet. Please Install Exemplary Data.</div>';
        }
    },
    timeline: function timeline(start, end) {
        var template = function template(timeFrom, timeTo) {
            return '\n            <a data-time-from="' + timeFrom + '" data-time-to="' + timeTo + '" href="#" class="list-group-item">\n                <h4 class="list-group-item-heading timeline-time"><span class="label-time text-center">' + timeFrom + ' - ' + timeTo + '</span></h4>\n                <h4 class="list-group-item-heading">&nbsp;</h4>\n            </a>';
        };

        var hours = function hours() {
            start = parseInt(start.replace(':', ''));
            end = parseInt(end.replace(':', ''));
            var hoursArray = [];

            var integerToTime = function integerToTime(integer) {
                integer = integer.toString();

                if (integer.length <= 3) {
                    integer = integer.substr(0, 0) + '0' + integer.substr(0);
                }

                var time = integer.substr(0, 2) + ':' + integer.substr(2);

                return time.replace('50', '30');
            };

            for (var i = start; i <= end; i += 50) {
                hoursArray.push(integerToTime(i));
            }

            return hoursArray;
        };

        var timelineHTML = function timelineHTML() {
            var hoursArray = hours('09:00', '20:00');

            return '' + hoursArray.map(function (hour, index) {
                if (index <= hoursArray.length - 2) {
                    return template(hour, hoursArray[index + 1]);
                }
            }).join('');
        };

        return timelineHTML();
    }
};

},{"./DataKeys":2,"./LocalStorageManager":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LocalStorageManager = require('./LocalStorageManager');

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _DataKeys = require('./DataKeys');

var _DataKeys2 = _interopRequireDefault(_DataKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    reservations: {
        getAll: function getAll() {
            (0, _LocalStorageManager2.default)(_DataKeys2.default.ranges).exemplaryData.get();
        },
        get: function get(day) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = ExemplaryData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var reservation = _step.value;

                    if (reservation.day === day) {
                        return reservation;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        add: function add(reservation) {
            (0, _LocalStorageManager2.default)(_DataKeys2.default.ranges).addReservation(reservation);
            DOMElements.$tableContainer.innerHTML = renderReservations();
        }
    }
};

},{"./DataKeys":2,"./LocalStorageManager":4}],8:[function(require,module,exports){
'use strict';

var _getToday = require('./getToday');

var _getToday2 = _interopRequireDefault(_getToday);

var _DOMElements = require('./DOMElements');

var _DOMElements2 = _interopRequireDefault(_DOMElements);

var _ReservationsManager = require('./ReservationsManager');

var _ReservationsManager2 = _interopRequireDefault(_ReservationsManager);

var _LocalStorageManager = require('./LocalStorageManager');

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _DataKeys = require('./DataKeys');

var _DataKeys2 = _interopRequireDefault(_DataKeys);

var _RangesManager = require('./RangesManager');

var _RangesManager2 = _interopRequireDefault(_RangesManager);

var _Render = require('./Render');

var _Render2 = _interopRequireDefault(_Render);

var _ExemplaryDataGenerator = require('./ExemplaryDataGenerator');

var _ExemplaryDataGenerator2 = _interopRequireDefault(_ExemplaryDataGenerator);

var _initEvents = require('./initEvents');

var _initEvents2 = _interopRequireDefault(_initEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('');

var App = {
    init: function init() {
        (0, _initEvents2.default)();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    App.init();
}, false);

},{"./DOMElements":1,"./DataKeys":2,"./ExemplaryDataGenerator":3,"./LocalStorageManager":4,"./RangesManager":5,"./Render":6,"./ReservationsManager":7,"./getToday":9,"./initEvents":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getUTCMonth() < 10 ? "0" + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1,
        day = date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate();

    return year + "-" + month + "-" + day;
};

;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    _DOMElements2.default.$exemplaryDataButtonInstall.addEventListener('click', function (event) {
        event.preventDefault();
        (0, _LocalStorageManager2.default)(DataKeys.ranges).exemplaryData.install();
    });

    _DOMElements2.default.$exemplaryDataButtonClear.addEventListener('click', function (event) {
        event.preventDefault();
        (0, _LocalStorageManager2.default)(DataKeys.ranges).exemplaryData.clear();
    });

    _DOMElements2.default.$rangesContainer.innerHTML = _Render2.default.ranges();
    _DOMElements2.default.$rangesTimeline.innerHTML = _Render2.default.timeline('09:00', '20:00');

    _DOMElements2.default.form.$form.addEventListener('submit', function (event) {
        event.preventDefault();
        var reservationData = {
            day: _DOMElements2.default.form.$inputDate.value,
            reservations: {
                fullname: _DOMElements2.default.form.$inputName.value,
                telephone: _DOMElements2.default.form.$inputTelephone.value,
                email: _DOMElements2.default.form.$inputEmail.value,
                start: _DOMElements2.default.form.$inputStart.value,
                stop: _DOMElements2.default.form.$inputStop.value
            }
        };

        console.log(reservationData);

        ReservationsManager.reservations.add(reservationData);
    });
};

var _DOMElements = require('./DOMElements');

var _DOMElements2 = _interopRequireDefault(_DOMElements);

var _Render = require('./Render');

var _Render2 = _interopRequireDefault(_Render);

var _LocalStorageManager = require('./LocalStorageManager');

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

},{"./DOMElements":1,"./LocalStorageManager":4,"./Render":6}]},{},[8]);
