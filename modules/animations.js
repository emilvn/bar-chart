"use strict";
/* ========== functions for smooth sliding animation of chart ========== */
export function addAnimation(customers) {
    for (let i = 0; i < customers.length; i++){
        document.querySelectorAll("#barChart div")[i].classList.add("slide");
    }
}
export function removeAnimation(customers) {
    for (let i = 0; i < customers.length; i++){
        const bar = document.querySelectorAll("#barChart div")[i];
        bar.classList.remove("slide");
        bar.offsetHeight;
    }
}