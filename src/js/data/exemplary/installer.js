import dataManager from '../manager.data';
import dataKeys from '../../DataKeys';
import exemplaryData from './generator.data'

class ExemplaryDataInstaller {
    install() {
        localStorage.setItem(dataKeys.ranges, JSON.stringify(exemplaryData));
        localStorage.setItem(dataKeys.day, 'today');

        if (localStorage.getItem(dataKeys.ranges) === JSON.stringify(exemplaryData)) {
            console.log('%cExemplary data has been installed', 'color: green');
        }
    }

    clear() {
        localStorage.removeItem(dataKeys.ranges);

        if (dataManager.isExemplaryDataInstalled) {
            console.log('%cExemplary data has been removed', 'color: blue');
        }
    }

    reinstall() {
        this.clear();
        this.install();
    }

    get() {
        if (dataManager.isExemplaryDataInstalled) {
            console.log('%cData not installed', 'color: red');
        } else {
            console.table(exemplaryData);
        }
    }
}

export default new ExemplaryDataInstaller();
