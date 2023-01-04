window.onload = function () {
    const form = document.querySelector("#search-form");
    const input = document.querySelector("#search-btn");
  
    const stringToSearch = document.querySelector("main").innerHTML;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const searchTerm = input.value;
  
      const regex = new RegExp(searchTerm, 'g');
  
      var result1 = regex.exec(stringToSearch);
  
      const matches = stringToSearch.match(regex);
      const occurrenceNumber = matches.length;
  
      const match = regex.test(stringToSearch);
  
      if (match){
        alert("Stringu (" + result1 + ") u gjend \n" + "Ky string u shfaq " + occurrenceNumber + " here");
      }
    })
  }