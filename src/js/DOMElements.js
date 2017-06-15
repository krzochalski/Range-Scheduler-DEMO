export default {
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
    $lanesContainer: document.getElementsByClassName('lanes'),
    $lane: document.getElementsByClassName('lane'),
    $rangesTimeline: document.getElementById('ranges-timeline')
};
