// Code your solution in this file!
let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = (drivers) => {
    let firstDrivers = drivers.slice(0,2)
    return firstDrivers
}
const returnLastTwoDrivers = (drivers) => {
    let firstDrivers = drivers.slice(-2)
    return firstDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (price) => {
    return total => total = (Math.pow(price, 2))
}

const fareDoubler = (price) => {
    return total => total = (price * 2)
}

const fareTripler = (price) => {
    return total => total = (price *3)
}