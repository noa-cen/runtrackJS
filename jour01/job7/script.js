let date = new Date;
let joursFeries = ["2025-01-01", "2025-04-21", "2025-05-01", "2025-05-08", "2025-05-29", "2025-06-09", 
    "2025-07-14", "2025-08-15", "2025-11-01", "2025-11-11", "2025-12-25"];

function isWeekEnd() {
    if (date.getDay() == 6 || date.getDay() == 0) {
        return true;
    }
    else {
        return false;
    }
}

function jourTravaille() {
    if (isWeekEnd()) {
        console.log(`Non, ${date} + est un weekend.`);
    }
    else if (joursFeries.includes(date)) {
        console.log(`Non, ${date} est un jour férié.`);
    }
    else {
        console.log(`Oui, ${date} est un jour travaillé.`);
    }
}
jourTravaille();