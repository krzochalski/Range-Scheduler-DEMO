let RangesManager = {
    ranges: {
        getAll: () => {
            if (!LocalStorageManager(DataKeys.ranges).exemplaryData.isInstalled()) {
                return false;
            }

            let ranges = LocalStorageManager().collection(DataKeys.ranges).getAll();
            let rangeData = (range) => `Range: ${range.name},\nLength: ${range.size},\nLanes: ${range.lanes.length},`;
            let reservationsData = (lanes) => `Reservations on: ${lanes.reservations.map(day => day.day)}\n`;
            let lanesData = (range) => {
                return `Lanes Data:\n${range.lanes.map(lane => `${lane.number}: ${reservationsData(lane)}`).join('')}`;
            };

            const output = `${ranges.map(range =>
                `${rangeData(range)}\n${lanesData(range)}`
            ).join('')}`;

            console.log(ranges);
            console.log(output);
        }
    }
};