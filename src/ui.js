class UI {
  constructor() {
    this.quote = document.querySelector("#quotes");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".quote-submit");
    this.forState = "add";
  }

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
}

export const ui = new UI();
