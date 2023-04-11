"use strict";
window.addEventListener("load", main);

function main() {
    const customers = getQueueData();
    setInterval(() => {
        updateBarChart(customers);
    }, 1000);
}

function updateBarChart(customers) {
    removeAnimation(customers);
    addAnimation(customers);
    addQueueData(customers);
    displayInfoWindow(customers);
}

function addQueueData(customers) {
    const queueSize = getNumberOfCustomers();
    customers.push(queueSize);
    customers.shift();
    setBarHeight(customers);
}

function getQueueData() {
    const customers = [];
    for (let i = 0; i < 40; i++) {
        customers[i] = getNumberOfCustomers();
    }
    return customers;
}

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}

function setBarHeight(customers) {
    for (let i = 0; i < customers.length; i++){
        document.querySelectorAll("#barChart div")[i].style.height = `${customers[i]}vh`;
    }
}

function displayInfoWindow(customers) {
    const infoWindow = document.querySelector("#info-window")
    for (let i = 0; i < customers.length; i++){
        document.querySelectorAll("#barChart div")[i].addEventListener("mouseover", () => {
            infoWindow.textContent = customers[i];
            infoWindow.style.display = "block";
        })
        document.querySelectorAll("#barChart div")[i].addEventListener("mouseout", () => {
            infoWindow.style.display = "none";
        })
    }
}
function addAnimation(customers) {
    for (let i = 0; i < customers.length; i++){
        document.querySelectorAll("#barChart div")[i].classList.add("slide");
    }
}
function removeAnimation(customers) {
    for (let i = 0; i < customers.length; i++){
        const bar = document.querySelectorAll("#barChart div")[i];
        bar.classList.remove("slide");
        bar.offsetHeight;
    }
}