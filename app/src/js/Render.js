import LocalStorageManager from './LocalStorageManager';
import DataKeys from './DataKeys';
import alertTemplate from  './templates/alert.template'
import dataManager from './data/manager';

export default {
    ranges: () => {
        let ranges = LocalStorageManager(DataKeys.ranges).getData();

        if (!dataManager.isExemplaryDataInstalled(DataKeys.ranges)) {
            return `${ranges.map(range => `
                <ul class="list-group range m-${range.size}">
                    ${range.lanes.map(lane => `
                        <li class="list-group-item lane" data-lanenumber="${lane.number}" data-rangename="${range.name}">
                            Lane ${lane.number}
                        </li>
                    `).join('')}
                </ul>`
            ).join('')}`;
        } else {
            return alertTemplate('No reservations yet. Please Install Exemplary Data', 'warning');
        }
    },
    timeline: (start, end) => {
        let template = (timeFrom, timeTo) => {
            return `
            <div href="#" class="timeline-element list-group-item" data-time="${timeFrom}-${timeTo}">
                <h5 class="timeline-time list-group-item-heading"><span class="label-time text-center">${timeFrom} - ${timeTo}</span></h5>
                <h5 class="timeline-fullname list-group-item-heading"><span class="label-fullname">&nbsp;</span></h5>
            </div>`;
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
