import LocalStorageManager from './LocalStorageManager';
import DataKeys from './DataKeys';
import progressBarTemplate from './templates/progressBar.template';
import alertTemplate from  './templates/alert.template'
import dataManager from './data/manager.data';

export default {
    ranges: () => {
        let ranges = LocalStorageManager(DataKeys.ranges).getData();

        if (!dataManager.isExemplaryDataInstalled(DataKeys.ranges)) {
            return `${ranges.map(range => `
            <div class="range m-${range.size}">
                <div class="label text-center"><h2 class="text-primary">${range.size}m</h2></div>
                <div class="lanes" >
                    ${range.lanes.map(lane => `
                        <div class="lane" data-lanenumber="${lane.number}" data-rangename="${range.name}">
                            <div class="position">${lane.number}</div>
                            ${progressBarTemplate(Math.floor(Math.random() * 100))}
                        </div>
                    `).join('')}
                </div>
            </div>`
            ).join('')}`;
        } else {
            return alertTemplate('No reservations yet. Please Install Exemplary Data', 'warning');
        }
    },
    timeline: (start, end) => {
        let template = (timeFrom, timeTo) => {
            return `
            <a data-time-from="${timeFrom}" data-time-to="${timeTo}" href="#" class="list-group-item">
                <h4 class="list-group-item-heading timeline-time"><span class="label-time text-center">${timeFrom} - ${timeTo}</span></h4>
                <h4 class="list-group-item-heading">&nbsp;</h4>
            </a>`;
        };

        let hours = () => {
            start = parseInt(start.replace(':', ''));
            end = parseInt(end.replace(':', ''));
            let hoursArray = [];

            let integerToTime = (integer) => {
                integer = integer.toString();

                if (integer.length <= 3) {
                    integer = (integer.substr(0, 0) + '0') + integer.substr(0)
                }

                const time = integer.substr(0, 2) + ':' + integer.substr(2);

                return time.replace('50', '30');
            };

            for (let i = start; i <= end; i += 50) {
                hoursArray.push(integerToTime(i));
            }

            return hoursArray;
        };

        let timelineHTML = () => {
            let hoursArray = hours('09:00', '20:00');

            return `${hoursArray.map((hour, index) => {
                if (index <= hoursArray.length - 2) {
                    return template(hour, hoursArray[index + 1])
                }
            }).join('')}`;

        };

        return timelineHTML();
    }
};
