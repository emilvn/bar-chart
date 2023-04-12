"use strict";
window.addEventListener("load", main);
/* ========== updates chart every 1000 ms ========== */
function main() {
    const customers = getQueueData();
    setInterval(() => {
        updateBarChart(customers);
    }, 1000);
}
/* ========== calls all necessary funcs to update chart ========== */
function updateBarChart(customers) {
    removeAnimation(customers);
    addAnimation(customers);
    addQueueData(customers);
    handleBarHover(customers);
}
/* ========== adds the queue data to array and sets bar heights ========== */
function addQueueData(customers) {
    const queueSize = getNumberOfCustomers();
    customers.push(queueSize);
    customers.shift();
    setBarHeight(customers);
}
/* ========== functions for creating array from random numbers ========== */
function getQueueData() {
    const customers = [];
    for (let i = 0; i < 40; i++) {
        customers[i] = getNumberOfCustomers();
    }
    return customers;
}
function getNumberOfCustomers() {
    return Math.ceil(Math.random() * 32);
}
/* ========== sets bar height and changes the bar text value to it ========== */
function setBarHeight(customers) {
    const containerHeight = 35;
    const maxValue = 32;
    for (let i = 0; i < customers.length; i++){
        const bar = document.querySelectorAll("#barChart div")[i];
        const height = customers[i] / maxValue * containerHeight;
        bar.style.height = `${height}vw`;
        setBarValue(bar, customers, i);
        setBarOpacity(bar, i);
    }
}
function setBarValue(bar, customers, i) {
    bar.querySelector("span").textContent = customers[i];
}
function setBarOpacity(bar, i) {
    const opacityMultiplier = 0.05;
    bar.style.filter = `opacity(${i * opacityMultiplier})`;
}

/* ========== event listeners for showing bar value on mouse hover ========== */
function handleBarHover(customers) {
    for (let i = 0; i < customers.length; i++){
        const bar = document.querySelectorAll("#barChart div")[i];
        const span = bar.querySelector("span");
        bar.addEventListener("mouseover", () => span.style.display = "inline");
        bar.addEventListener("mouseleave", () => span.style.display = "none");
    }
}
/* ========== functions for smooth sliding animation of chart ========== */
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
