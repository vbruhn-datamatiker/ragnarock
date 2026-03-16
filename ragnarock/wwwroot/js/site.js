// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tablinks");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            document.querySelectorAll(".tabcontent").forEach(content => {
                content.style.display = "none";
            });

            const tabId = this.getAttribute("tab");
            document.getElementById(tabId).style.display = "block";
        });
    });
});