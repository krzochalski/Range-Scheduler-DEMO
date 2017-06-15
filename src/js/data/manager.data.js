export default {
    isExemplaryDataInstalled: (key) => {
        return localStorage.getItem(key) === null;
    }
}
