(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    ranges: 'rangesData',
    day: 'selectedDay',
    name: 'name'
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _default(key) {
    return {
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LocalStorageManager = require('./LocalStorageManager');

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _DataKeys = require('./DataKeys');

var _DataKeys2 = _interopRequireDefault(_DataKeys);

var _alert = require('./templates/alert.template');

var _alert2 = _interopRequireDefault(_alert);

var _manager = require('./data/manager');

var _manager2 = _interopRequireDefault(_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    ranges: function ranges() {
        var ranges = (0, _LocalStorageManager2.default)(_DataKeys2.default.ranges).getData();

        if (!_manager2.default.isExemplaryDataInstalled(_DataKeys2.default.ranges)) {
            return '' + ranges.map(function (range) {
                return '\n                <ul class="list-group range m-' + range.size + '">\n                    ' + range.lanes.map(function (lane) {
                    return '\n                        <li class="list-group-item lane" data-lanenumber="' + lane.number + '" data-rangename="' + range.name + '">\n                            Lane ' + lane.number + '\n                        </li>\n                    ';
                }).join('') + '\n                </ul>';
            }).join('');
        } else {
            return (0, _alert2.default)('No reservations yet. Please Install Exemplary Data', 'warning');
        }
    },
    timeline: function timeline(start, end) {
        var template = function template(timeFrom, timeTo) {
            return '\n            <div href="#" class="timeline-element list-group-item" data-time="' + timeFrom + '-' + timeTo + '">\n                <h5 class="timeline-time list-group-item-heading"><span class="label-time text-center">' + timeFrom + ' - ' + timeTo + '</span></h5>\n                <h5 class="timeline-fullname list-group-item-heading"><span class="label-fullname">&nbsp;</span></h5>\n            </div>';
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

},{"./DataKeys":1,"./LocalStorageManager":2,"./data/manager":7,"./templates/alert.template":9}],4:[function(require,module,exports){
'use strict';

var _initEvents = require('./initEvents');

var _initEvents2 = _interopRequireDefault(_initEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = {
    init: function init() {
        (0, _initEvents2.default)();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    App.init();
}, false);

},{"./initEvents":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _date = require("../../utils/date.util");

exports.default = [{
    name: "range-1",
    size: "25",
    lanes: [{
        "lane": "lane-1",
        "number": "1",
        reservations: [{
            "day": (0, _date.getDay)(-1),
            "reservations": [{
                "fullname": "John Wick",
                "telephone": "111222333",
                "email": "john.wick@example.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "John Rambo",
                "telephone": "111222333",
                "email": "john.rambo@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]

            }, {
                "fullname": "Encino Man",
                "email": "encino.man@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }]
        }, {
            "day": (0, _date.getDay)(0),
            "reservations": [{
                "fullname": "Ron Swanson",
                "telephone": "111222333",
                "email": "i.do.not.have.an@email.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "Captain America",
                "telephone": "111222333",
                "email": "captain.america@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Fruity Rudy",
                "telephone": "111222333",
                "email": "fruity.rudy@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }, {
                "fullname": "Sam Fisher",
                "telephone": "111222333",
                "email": "sam.fisher@example.com",
                "times": ["15:00-15:30", "15:30-16:00"]
            }]
        }, {
            "day": (0, _date.getDay)(1),
            "reservations": [{
                "fullname": "Rocky Balboa",
                "telephone": "111222333",
                "email": "rocky.balboa@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Private Ryan",
                "telephone": "111222333",
                "email": "private.ryan@example.com",
                "times": ["09:00-09:30"]
            }]
        }]
    }, {
        "lane": "lane-2",
        "number": "2",
        reservations: [{
            "day": (0, _date.getDay)(-1),
            "reservations": [{
                "fullname": "John Wick",
                "telephone": "111222333",
                "email": "john.wick@example.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "John Rambo",
                "telephone": "111222333",
                "email": "john.rambo@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]

            }, {
                "fullname": "Encino Man",
                "email": "encino.man@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }]
        }, {
            "day": (0, _date.getDay)(0),
            "reservations": [{
                "fullname": "James Bond",
                "telephone": "111222333",
                "email": "zero.zero.seven@email.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "Strielok",
                "telephone": "111222333",
                "email": "strielok@example.com",
                "times": ["11:00-11:30", "11:30-12:00"]
            }, {
                "fullname": "Fruity Rudy",
                "telephone": "111222333",
                "email": "fruity.rudy@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }, {
                "fullname": "Sam Fisher",
                "telephone": "111222333",
                "email": "sam.fisher@example.com",
                "times": ["15:00-15:30", "15:30-16:00"]
            }]
        }, {
            "day": (0, _date.getDay)(1),
            "reservations": [{
                "fullname": "Tommy Vercetti",
                "telephone": "111222333",
                "email": "tommy.vercetti@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Private Ryan",
                "telephone": "111222333",
                "email": "private.ryan@example.com",
                "times": ["09:00-09:30"]
            }]
        }]
    }, {
        "lane": "lane-3",
        "number": "3",
        reservations: [{
            "day": (0, _date.getDay)(-1),
            "reservations": [{
                "fullname": "John Wick",
                "telephone": "111222333",
                "email": "john.wick@example.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "John Rambo",
                "telephone": "111222333",
                "email": "john.rambo@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]

            }, {
                "fullname": "Encino Man",
                "email": "encino.man@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }]
        }, {
            "day": (0, _date.getDay)(0),
            "reservations": [{
                "fullname": "Ron Swanson",
                "telephone": "111222333",
                "email": "i.do.not.have.an@email.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "Tommy Vercetti",
                "telephone": "111222333",
                "email": "tommy.vercetti@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Fruity Rudy",
                "telephone": "111222333",
                "email": "fruity.rudy@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }, {
                "fullname": "Sam Fisher",
                "telephone": "111222333",
                "email": "sam.fisher@example.com",
                "times": ["15:00-15:30", "15:30-16:00"]
            }]
        }, {
            "day": (0, _date.getDay)(1),
            "reservations": [{
                "fullname": "Rocky Balboa",
                "telephone": "111222333",
                "email": "rocky.balboa@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Private Ryan",
                "telephone": "111222333",
                "email": "private.ryan@example.com",
                "times": ["09:00-09:30"]
            }]
        }]
    }, {
        "lane": "lane-4",
        "number": "4",
        reservations: [{
            "day": (0, _date.getDay)(-1),
            "reservations": [{
                "fullname": "John Wick",
                "telephone": "111222333",
                "email": "john.wick@example.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "John Rambo",
                "telephone": "111222333",
                "email": "john.rambo@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]

            }, {
                "fullname": "Encino Man",
                "email": "encino.man@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }]
        }, {
            "day": (0, _date.getDay)(0),
            "reservations": [{
                "fullname": "Ron Swanson",
                "telephone": "111222333",
                "email": "i.do.not.have.an@email.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "Captain America",
                "telephone": "111222333",
                "email": "captain.america@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Fruity Rudy",
                "telephone": "111222333",
                "email": "fruity.rudy@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }, {
                "fullname": "Sam Fisher",
                "telephone": "111222333",
                "email": "sam.fisher@example.com",
                "times": ["15:00-15:30", "15:30-16:00"]
            }]
        }, {
            "day": (0, _date.getDay)(1),
            "reservations": [{
                "fullname": "Rocky Balboa",
                "telephone": "111222333",
                "email": "rocky.balboa@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Private Ryan",
                "telephone": "111222333",
                "email": "private.ryan@example.com",
                "times": ["09:00-09:30"]
            }]
        }]
    }, {
        "lane": "lane-5",
        "number": "5",
        reservations: [{
            "day": (0, _date.getDay)(-1),
            "reservations": [{
                "fullname": "John Wick",
                "telephone": "111222333",
                "email": "john.wick@example.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "John Rambo",
                "telephone": "111222333",
                "email": "john.rambo@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]

            }, {
                "fullname": "Encino Man",
                "email": "encino.man@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }]
        }, {
            "day": (0, _date.getDay)(0),
            "reservations": [{
                "fullname": "Ron Swanson",
                "telephone": "111222333",
                "email": "i.do.not.have.an@email.com",
                "times": ["10:00-10:30", "10:30-11:00"]
            }, {
                "fullname": "Captain America",
                "telephone": "111222333",
                "email": "captain.america@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Fruity Rudy",
                "telephone": "111222333",
                "email": "fruity.rudy@example.com",
                "times": ["14:00-14:30", "15:00-15:30"]
            }, {
                "fullname": "Sam Fisher",
                "telephone": "111222333",
                "email": "sam.fisher@example.com",
                "times": ["15:00-15:30", "15:30-16:00"]
            }]
        }, {
            "day": (0, _date.getDay)(1),
            "reservations": [{
                "fullname": "Rocky Balboa",
                "telephone": "111222333",
                "email": "rocky.balboa@example.com",
                "times": ["12:00-12:30", "12:30-13:00"]
            }, {
                "fullname": "Private Ryan",
                "telephone": "111222333",
                "email": "private.ryan@example.com",
                "times": ["09:00-09:30"]
            }]
        }]
    }]
}];


var exemplaryReservationNow = {
    "day": (0, _date.getDay)(1),
    "reservations": {
        "fullname": "Musashi Miyamoto",
        "telephone": "111222333",
        "email": "gorinnosho@example.com",
        "start": "19:00",
        "stop": "20:00"
    }
};

var exemplaryReservation = {
    "day": (0, _date.getDay)(3),
    "reservations": {
        "fullname": "Musashi Miyamoto",
        "telephone": "111222333",
        "email": "gorinnosho@example.com",
        "start": "19:00",
        "stop": "20:00"
    }
};

},{"../../utils/date.util":10}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _manager = require('../manager');

var _manager2 = _interopRequireDefault(_manager);

var _DataKeys = require('../../DataKeys');

var _DataKeys2 = _interopRequireDefault(_DataKeys);

var _generator = require('./generator.data');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExemplaryDataInstaller = function () {
    function ExemplaryDataInstaller() {
        _classCallCheck(this, ExemplaryDataInstaller);
    }

    _createClass(ExemplaryDataInstaller, [{
        key: 'install',
        value: function install() {
            localStorage.setItem(_DataKeys2.default.ranges, JSON.stringify(_generator2.default));
            localStorage.setItem(_DataKeys2.default.day, 'today');

            if (localStorage.getItem(_DataKeys2.default.ranges) === JSON.stringify(_generator2.default)) {
                console.log('%cExemplary data has been installed', 'color: green');
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            localStorage.removeItem(_DataKeys2.default.ranges);

            if (_manager2.default.isExemplaryDataInstalled) {
                console.log('%cExemplary data has been removed', 'color: blue');
            }
        }
    }, {
        key: 'reinstall',
        value: function reinstall() {
            this.clear();
            this.install();
        }
    }, {
        key: 'get',
        value: function get() {
            if (_manager2.default.isExemplaryDataInstalled) {
                console.log('%cData not installed', 'color: red');
            } else {
                console.table(_generator2.default);
            }
        }
    }]);

    return ExemplaryDataInstaller;
}();

exports.default = new ExemplaryDataInstaller();

},{"../../DataKeys":1,"../manager":7,"./generator.data":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    isExemplaryDataInstalled: function isExemplaryDataInstalled(key) {
        return localStorage.getItem(key) === null;
    }
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    DOMElements.$exemplaryDataButtonInstall.addEventListener('click', function (event) {
        event.preventDefault();
        _installer2.default.reinstall();
        location.reload();
    });

    DOMElements.$exemplaryDataButtonClear.addEventListener('click', function (event) {
        event.preventDefault();
        _installer2.default.clear();
        location.reload();
    });

    DOMElements.$rangesContainer.innerHTML = _Render2.default.ranges();
    DOMElements.$rangesTimeline.innerHTML = _Render2.default.timeline('09:00', '20:00');

    for (var i = 0; i < DOMElements.$lane.length; i++) {
        DOMElements.$lane[i].addEventListener('click', displayReservations);
    }

    // DOMElements.form.$formLogin.addEventListener('submit', login);

    if (localStorage.getItem(_DataKeys2.default.name)) {
        DOMElements.$userName.innerText = localStorage.getItem(_DataKeys2.default.name);
    }

    document.getElementById('navbar-toggle-button').addEventListener('click', toggleSidebar);

    setupAppInterface();

    document.getElementById('go-back-button').addEventListener('click', function () {
        return showSheduleContainer('ranges');
    });
    document.getElementById('go-next-button').addEventListener('click', function () {
        return showSheduleContainer('form');
    });

    showSheduleContainer();

    setTimeout(function () {
        Promise.resolve(setTimeout(function () {
            return disableLoadingScreen();
        }, 700)).then(setTimeout(function () {
            return disableOverlay();
        }, 1300));
    }, 800);
};

var _Render = require('./Render');

var _Render2 = _interopRequireDefault(_Render);

var _LocalStorageManager = require('./LocalStorageManager');

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _DataKeys = require('./DataKeys');

var _DataKeys2 = _interopRequireDefault(_DataKeys);

var _installer = require('./data/exemplary/installer');

var _installer2 = _interopRequireDefault(_installer);

var _date = require('./utils/date.util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DOMElements = {
    form: {
        $formLogin: document.getElementById('form-login'),
        $formLoginNameInput: document.getElementById('form-name')
    },
    $exemplaryDataButtonInstall: document.getElementById('exemplary-data-button-install'),
    $exemplaryDataButtonClear: document.getElementById('exemplary-data-button-clear'),
    $tableContainer: document.getElementById('table-container'),
    $tableReservations: document.getElementById('table-reservations'),
    $rangesContainer: document.getElementById('ranges-container'),
    $lanesContainer: document.getElementsByClassName('lanes'),
    $lane: document.getElementsByClassName('lane'),
    $rangesTimeline: document.getElementById('ranges-timeline'),
    $userName: document.getElementById('user-name')
};

var displayReservations = function displayReservations(e) {
    var reservations = (0, _LocalStorageManager2.default)().collection(_DataKeys2.default.ranges).getAll().find(function (range) {
        return range.name === e.target.dataset.rangename;
    }).lanes.find(function (lane) {
        return lane.number === e.target.dataset.lanenumber;
    }).reservations;
    var timelineElements = document.getElementsByClassName('timeline-element');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = e.target.parentElement.getElementsByClassName('lane')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var sibling = _step.value;
            sibling.classList.remove('active');
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

    e.target.classList.add('active');

    for (var i = 0; i < reservations.length; i++) {
        if (reservations[i].day === (0, _date.getDay)(localStorage.getItem(_DataKeys2.default.day))) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = reservations[i].reservations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var reservation = _step2.value;
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = reservation.times[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var time = _step3.value;

                            for (var _i = 0; _i < timelineElements.length; _i++) {
                                if (time === timelineElements[_i].dataset.time) {
                                    timelineElements[_i].classList.add('bg-primary', 'occupied');
                                    timelineElements[_i].querySelector('.label-fullname').innerText = reservation.fullname;
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }

    showSheduleContainer('timeline');
    showButtonsContainer(true);
    highlightButton('back');
};

function showSheduleContainer(container) {
    var sidebarWidth = 0;

    switch (container) {
        case 'ranges':
            document.getElementById('content-inner').style.left = sidebarWidth + 'px';
            break;
        case 'timeline':
            document.getElementById('content-inner').style.left = document.getElementsByClassName('scheduler-container')[0].offsetWidth * -1 + sidebarWidth + 'px';
            break;
        case 'form':
            document.getElementById('content-inner').style.left = document.getElementsByClassName('scheduler-container')[0].offsetWidth * -1 * 2 + sidebarWidth + 'px';
            break;
        default:
            document.getElementById('content-inner').style.left = sidebarWidth + 'px';
    }
}

function showButtonsContainer(condition) {
    var $buttonsContainer = document.getElementById('navigation-buttons-container');
    return condition ? $buttonsContainer.classList.add('active') : $buttonsContainer.classList.remove('active');
}

function highlightButton(button) {
    switch (button) {
        case 'back':
            document.getElementById('go-back-button').classList.add('btn-highlighted');
            document.getElementById('go-next-button').classList.remove('btn-highlighted');
            break;
        case 'next':
            document.getElementById('go-back-button').classList.remove('btn-highlighted');
            document.getElementById('go-next-button').classList.add('btn-highlighted');
            break;
        default:
            document.getElementById('go-back-button').classList.add('btn-highlighted');
            document.getElementById('go-next-button').classList.remove('btn-highlighted');
    }
}

function disableOverlay() {
    document.getElementById('overlay').classList.add('is-hidden');
}

function disableLoadingScreen() {
    var $loader = document.getElementById('loader');
    $loader.style.top = '-' + window.innerWidth * 1.5 + 'px';
    setTimeout(function () {
        return delete $loader.parentNode.removeChild($loader);
    }, 1500);
}

var toggleSidebar = function toggleSidebar(e) {
    e.preventDefault();

    if (!document.getElementById('layout').classList.contains('sidebar-opened')) {
        document.getElementById('layout').classList.add('sidebar-opened');
        document.body.classList.add('scrolling-disabled');
    } else {
        document.getElementById('layout').classList.remove('sidebar-opened');
        document.body.classList.remove('scrolling-disabled');
    }
};

var setupAppInterface = function setupAppInterface() {
    var contentWidth = document.getElementById('content-inner').offsetWidth;
    var $schedulerContainers = document.getElementsByClassName('scheduler-container');

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = $schedulerContainers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var $schedulerContainer = _step4.value;

            $schedulerContainer.style.width = contentWidth + 'px';
            document.getElementById('content-inner').style.width = contentWidth * $schedulerContainers.length + 'px';
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
};

;

},{"./DataKeys":1,"./LocalStorageManager":2,"./Render":3,"./data/exemplary/installer":6,"./utils/date.util":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (message, type) {
    type = type || 'info';

    return '\n        <div class="alert alert-' + type + '">' + message + '</div>\n    ';
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDay = getDay;
function getDay(dayCount) {
    if (dayCount === 'today') {
        dayCount = 0;
    }

    if (!Number.isInteger(dayCount)) {
        console.error('Error: getDay() argument should be a number');
        return false;
    }

    var oneDayInMs = 86400000,
        daysCount = dayCount === 0 ? 0 : dayCount * oneDayInMs,
        today = new Date(Date.now() + daysCount),
        getYear = function getYear(date) {
        return date.getFullYear();
    },
        getMonth = function getMonth(date) {
        return date.getUTCMonth() < 10 ? '0' + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1;
    },
        getDay = function getDay(date) {
        return date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate();
    },
        getFullDate = function getFullDate(date) {
        return getYear(date) + '-' + getMonth(date) + '-' + getDay(date);
    };

    return getFullDate(today);
}

},{}]},{},[4]);
