const selectedFilterList = [
  {
    id: 1,
    type: "brand",
    name: "Samsung",
  },
  {
    id: 2,
    type: "color",
    name: "White",
  },
  {
    id: 3,
    type: "range",
    name: "$250-$900",
  },
  {
    id: 4,
    type: "status",
    name: "On Sale",
  },
];

const paramsList = document.getElementById("paramsList");

function showParamsList() {
  paramsList.innerHTML = selectedFilterList
    .map(
      (item) =>
        `<div key=${item.id} class="param-item">
                  <span class="param-item-title" >${item.name}</span>
                  <div class="remove-param" data-id=${item.id}>
                  x
                  </div>
                </div>`
    )
    .join("");
  console.log(selectedFilterList);
}
function handleDeleteAllFilter() {
  for (let i = 0; i < selectedFilterList.length; i++) {
    selectedFilterList.splice(i, selectedFilterList.length);
  }
  showParamsList();
}

function handleRemoveParam(id) {
  for (let i = 0; i < selectedFilterList.length; i++) {
    if (selectedFilterList[i].id === Number(id)) {
      selectedFilterList.splice(i, 1);
    }
  }
  showParamsList();
}

paramsList.onclick = function (e) {
  if (e.target && e.target.classList.contains("clear-all")) {
    handleDeleteAllFilter();
  } else if (e.target && e.target.classList.contains("remove-param")) {
    handleRemoveParam(e.target.dataset.id);
  }
};

//dropdown-base
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".show-drop-base")) {
    var dropdowns = document.getElementsByClassName("dropdown-base");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//dropdown-search
function myFunctionSearch() {
  document.getElementById("myDropdownSearch").classList.toggle("show-search");
}

window.onclick = function (event) {
  if (!event.target.matches(".show-drop-search")) {
    var dropdowns = document.getElementsByClassName("dropdown-search");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-search")) {
        openDropdown.classList.remove("show-search");
      }
    }
  }
};
//dropdown-model
function handleDropModel() {
  document.getElementById("dropModel").classList.toggle("show-model");
}

window.onclick = function (event) {
  if (!event.target.matches(".menu-left-item-title")) {
    var dropdowns = document.getElementsByClassName("container-content-items");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-model")) {
        openDropdown.classList.remove("show-model");
      }
    }
  }
};
//dropdown-product type
function handleDropProductType() {
  document.getElementById("productType").classList.toggle("show-product-type");
}

window.onclick = function (event) {
  if (!event.target.matches(".menu-left-item-title")) {
    var dropdowns = document.getElementsByClassName("container-content-items");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-product-type")) {
        openDropdown.classList.remove("show-product-type");
      }
    }
  }
};

showParamsList();
