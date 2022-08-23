var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(change) {
    bestCustomer = change;
}
const leastFavoriteCustomer = "Elon Musk";
function changeLeastFavoriteCustomer(change) {
    leastFavoriteCustomer = change;
}
