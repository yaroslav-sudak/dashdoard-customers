sidebarItems = document.getElementsByClassName("sidebar__item");
sidebarActiveItem = 3;
setActiveSidebarItem(sidebarActiveItem);

paginationItems = document.getElementsByClassName("pagination__item");
paginationActiveItem = 2;
setActivePaginationItem(paginationActiveItem);
paginationFirst = 1;

searchInput = document.getElementById("search");
searchRows = document.getElementsByClassName("customer-list__row");

(() => {
  const loader = document.getElementById("loader");
  console.log(loader);

  setTimeout(() => {
    // Delete loader
    loader.remove();
    

  }, 3000);
})();

function setActiveSidebarItem(number) {
  sidebarItems[sidebarActiveItem - 1].children[0].classList.remove("menu--active");
  sidebarItems[number - 1].children[0].classList.add("menu--active");
  sidebarActiveItem = number;
}

for (let i = 0; i < sidebarItems.length; i++) {
  sidebarItems[i].children[0].addEventListener("click", () => {
    if (sidebarActiveItem != i + 1) {
      setActiveSidebarItem(i + 1);
    }
  });
}

function setActivePaginationItem(number) {
  paginationItems[paginationActiveItem - 1].classList.remove("pagination__item--active");
  paginationItems[number - 1].classList.add("pagination__item--active");
  paginationActiveItem = number;
}

for (let i = 0; i < paginationItems.length; i++) {
  if (i == 0) {
    paginationItems[i].addEventListener("click", () => {
      if (paginationActiveItem != 2) {
        setActivePaginationItem(paginationActiveItem - 1);
      } else {
        paginationSwitch(1);
      }
    });

  } else if (i == paginationItems.length - 1) {
    paginationItems[i].addEventListener("click", () => {
      if (paginationActiveItem != 5) {
        setActivePaginationItem(paginationActiveItem + 1);
      } else {
        paginationSwitch(4);
      }
    });
  } else {
    paginationItems[i].addEventListener("click", () => {
      if (paginationActiveItem != i + 1) {
        setActivePaginationItem(i + 1);
      }
      paginationSwitch(i);
    });
  }
}

function paginationSwitch(i) {
  if (i == 1) {
    if (paginationFirst != 1) {
      for (let j = 1; j <= 4; j++) {
        paginationItems[j].children[0].innerText = paginationFirst - 4 + j;
      }
      paginationFirst = paginationFirst - 3;
      setActivePaginationItem(5);

    }
  } else if (i == 4) {
    if (paginationFirst != 37) {
      for (let j = 1; j <= 4; j++) {
        paginationItems[j].children[0].innerText = paginationFirst + 2 + j;
      }
      paginationFirst = paginationFirst + 3;
      setActivePaginationItem(2);
    }
  }
}

searchInput.addEventListener("input", () => {
  for (let i = 1; i < searchRows.length; i++) {
    for (let j = 0; j < searchRows[i].children.length; j++) {
      console.log(searchRows[i].children[j].innerText.toLowerCase().includes(searchInput.value.toLowerCase()));
      if (searchRows[i].children[j].innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
        searchRows[i].style.display = "";
        break;
      } else {
        searchRows[i].style.display = "none";
      }
    }
  }
})