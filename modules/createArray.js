"use strict";

/* ========== functions for creating array from random numbers ========== */
export function getQueueData() {
    const customers = [];
    for (let i = 0; i < 40; i++) {
        customers[i] = getNumberOfCustomers();
    }
    return customers;
}
export function getNumberOfCustomers() {
    return Math.ceil(Math.random() * 32);
}