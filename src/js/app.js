import getToday from './getToday';
import DOMElements from './DOMElements';
import ReservationsManager from './ReservationsManager';
import LocalStorageManager from './LocalStorageManager';
import DataKeys from './DataKeys';
import RangesManager from './RangesManager';
import Render from './Render';
import ExemplaryDataGenerator from './ExemplaryDataGenerator';

import initEvents from './initEvents';

console.log('');

const App = {
    init: () => {
        initEvents();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    App.init();
}, false);