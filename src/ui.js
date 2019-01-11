class UI {
  constructor() {
    this.quote = document.querySelector("#quotes");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.quoteSubmit = document.querySelector(".quote-submit");
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

    this.changeFormState("edit");
  }

  // Clear ID hidden value
  clearIdInput() {
    this.idInput.value = "";
  }

  // Change form state
  changeFormState(type) {
    if (type === "edit") {
      // Change submit button's color and text
      this.quoteSubmit.textContent = "Update Quote";
      this.quoteSubmit.className = "quote-submit btn btn-warning btn-block";

      // Create cancel button
      const cancelBtn = document.createElement("button");
      cancelBtn.className = "quote-cancel btn btn-light btn-block";
      cancelBtn.appendChild(document.createTextNode("Cancel Edit"));
      // Get the parent element
      const cardForm = document.querySelector(".card-form");
      // Get the element to insert before
      const formEnd = document.querySelector(".form-end");
      // Insert cancel button
      cardForm.insertBefore(cancelBtn, formEnd);
    } else {
      // Change submit button's color and text
      this.quoteSubmit.textContent = "Quote It";
      this.quoteSubmit.className = "quote-submit btn btn-primary btn-block";

      // Remove cancel button if it's there
      if (document.querySelector(".quote-cancel")) {
        document.querySelector(".quote-cancel").remove();
      }

      // Clear id from hidden field
      this.clearIdInput();
      // Clear input fields
      this.clearFields();
    }
  }
}

export const ui = new UI();
