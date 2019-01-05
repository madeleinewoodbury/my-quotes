import { ui } from "./ui";
import { http } from "./http";

// Load all quotes in db on DOM load
document.addEventListener("DOMContentLoaded", getQuotes);

// Get Quotes
function getQuotes() {
  http
    .get("http://localhost:3000/quotes")
    .then(data => ui.showQuotes(data))
    .catch(err => console.log(err));
}
