"use strict";

/* ========== sets bar height and changes the bar text value to it ========== */
export function setBarHeight(customers) {
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
export function handleBarHover(customers) {
    for (let i = 0; i < customers.length; i++){
        const bar = document.querySelectorAll("#barChart div")[i];
        const span = bar.querySelector("span");
        bar.addEventListener("mouseover", () => span.style.display = "inline");
        bar.addEventListener("mouseleave", () => span.style.display = "none");
    }
}