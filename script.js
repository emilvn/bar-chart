"use strict";
/* ========== importing modules ========== */
import { setBarHeight, handleBarHover } from "./modules/barStyling.js";
import { getQueueData, getNumberOfCustomers } from "./modules/createArray.js";
import { addAnimation, removeAnimation } from "./modules/animations.js";
/* ========== runs main on window load ========== */
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