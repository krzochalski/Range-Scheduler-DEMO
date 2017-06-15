export function getDay (dayCount) {
    if (dayCount === 'today') {
        dayCount = 0;
    }

    let oneDayInMs = 86400000,
        daysCount = dayCount === 0 ? 0 : dayCount * oneDayInMs,
        today = new Date(Date.now() + daysCount),
        getYear = (date) => date.getFullYear(),
        getMonth = (date) => date.getUTCMonth() < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1,
        getDay = (date) => date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate(),
        getFullDate = (date) => `${getYear(date)}-${getMonth(date)}-${getDay(date)}`;

    return getFullDate(today);
}
