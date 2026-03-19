// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Slettet tabID og tilføjet scroller til sektionen

//Scroller den til sektionen og luk hambermenu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }

        // Luk navbar på mobil
        const navbar = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
        bsCollapse.hide();
    });
});
const rows = document.querySelectorAll('.scrolly-row');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

rows.forEach(row => observer.observe(row));

// et wack hack - som ikke virker - fra gpt - så vi hindre i at den reloader når vi bruger submit , men stadig nødt til at "sende" svarene
/* When clicked on quiz button, then grab the form inside the .quiz-options.
 * token gets the anti-forgery token that ASP.NET uses to prevent CSRF attacks - this is required for any POST requests to the "server""
 * FormData is a builtin- JS object for sending form-like data in POST request
 * append() add the key/value like html form submission
 * fetch() is the modern way to make HTTP requests in JS.

 * "" → current page URL (so it posts back to the same Razor Page).
 *
 * method: "POST" → same as a normal form submission.
 *
 * body: formData → sends all your quiz data, including the anti-forgery token.
 *
 * This replaces the normal form submission, so the page does not reload.
 *
 *
 *
 * res.text() → gets the raw HTML returned by the server.
 * DOMParser().parseFromString() → converts the HTML string into a document object so we can query it like a normal DOM.
 *
 * doc.querySelector("#modul4") → grabs the quiz section from the server response.
 *
 * document.querySelector("#modul4").innerHTML = ... → replaces the current quiz section on your page with the new HTML from the server.
 *
 * This means the quiz updates without reloading the page, so the scroll stays put.
 *
 *
 * If anything goes wrong (network issue, server error, etc.), it logs the error to the console.
 *
 * Helps debugging if the quiz doesn’t update correctly.
 *
 */
function submitAnswer(answer) {
    const form = document.querySelector('.quiz-options form');
    const token = form.querySelector('input[name="__RequestVerificationToken"]').value;
    const questionIndex = form.querySelector('input[name="questionIndex"]').value;
    const score = form.querySelector('input[name="score"]').value;

    const formData = new FormData();
    formData.append("__RequestVerificationToken", token);
    formData.append("selectedAnswer", answer);
    formData.append("questionIndex", questionIndex);
    formData.append("score", score);

    fetch("", { method: "POST", body: formData })
        .then(res => res.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            document.querySelector("#modul4").innerHTML = doc.querySelector("#modul4").innerHTML;
        })
        .catch(err => console.error(err));
}