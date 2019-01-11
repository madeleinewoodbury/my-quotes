class UI {
  constructor() {
    this.quote = document.querySelector("#quotes");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".quote-submit");
    this.forState = "add";
  }

  // Show all quotes
  showQuotes(quotes) {
    let output = "";

    quotes.forEach(quote => {
      output += `
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${quote.title}</h4>
                    <p class="card-text">${quote.body}</p>
                    <a href="#" class="edit card-link" data-id="${
                      quote.id
                    }"><i class ="fa fa-pencil"></i></a>
                    <a href="#" class="delete card-link" data-id="${
                      quote.id
                    }"><i class ="fa fa-remove"></i></a>
                </div>
            </div>
        `;

      this.quote.innerHTML = output;
    });
  }

  // Show alert message
  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get the parent element
    const container = document.querySelector(".quote-container");
    // Get quotes
    const quotes = document.querySelector("#quotes");
    // Insert div
    container.insertBefore(div, quotes);

    // Timeout for alert message to disappear
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert Message
  clearAlert() {
    // Check if there is an alert
    if (document.querySelector(".alert")) {
      // remove alert
      document.querySelector(".alert").remove();
    }
  }

  // Clera All Input Fields
  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  // Fill form to edit quote
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
  }
}

export const ui = new UI();
