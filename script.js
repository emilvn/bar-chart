"use strict";
window.addEventListener("load", main);

function main() {
    const customers = [];
    for (let i = 0; i < 40; i++){
        customers[i] = getNumberOfCustomers();
    }
    setInterval(() => {
        const queueSize = getNumberOfCustomers();
        customers.push(queueSize);
        customers.shift();
        setBarHeight(customers);
    }, 1000);
}

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}

function setBarHeight(customers) {
    for (let i = 0; i < customers.length; i++){
        document.querySelector(`#bar${i}`).style.height = `${customers[i]*4}px`;
    }
}