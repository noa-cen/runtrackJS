function bisextile() {
    let annee = new Date();
    if (annee.getFullYear() % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
bisextile();
console.log(bisextile());