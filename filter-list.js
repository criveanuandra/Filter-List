const onSearch = () => {
  const searchBar = document.getElementById("search-bar");
  const ul = document.getElementById("contacts");
  const listItems = document.getElementsByTagName("li");
  const searchValue = `${searchBar.value}`;

  for (let i = 0; i < listItems.length; i++) {
    // parcurge fiecare contact
    let listItem = listItems[i].innerText;
    let contaisLetter = false;
    let k;
    if (searchValue === "") {
      listItems[i].style.display = "list-item";
    } else {
      // parcurge fiecare litera din contactul curent
      for (k = 0; k < listItem.length; k++) {
        if (listItem[k] === searchValue[0]) {
          contaisLetter = true;
          break;
        }
      }
      k++;

      // parcurge fiecare litera din textul cautat in search bar
      for (let j = 1; j < searchValue.length; j++) {
        //verifica
        // ana
        // Oanasss
        if (searchValue[j] !== listItem[k]) {
          contaisLetter = false;
          break;
        }
        k++;
      }
      if (contaisLetter) {
        listItems[i].style.display = "list-item";
      } else {
        listItems[i].style.display = "none";
      }
    }
  }
};

const button = document.getElementById("my-button");

button.addEventListener("click", function () {
  logError("Mesaj de eroare");
  logError("Mesaj de eroare 2");
  
});

const logError = (mesaj) => {
  console.log(mesaj);
};
