(function () {

  var menuData = {
    "00000011": {
      productName: "RAZER DeathAdder V2",
      price: 9
    },
    "00000022": {
      productName: "AMD Ryzen 9 3950X",
      price: 79
    },
    "00000033": {
      productName: "HyperX Alloy Origins Black",
      price: 19
    },
    "00000044": {
      productName: "GeForce RTX 2080TI",
      price: 89
    },
    "00000055": {
      productName: "GigaByte X299X Aorus Xtreme",
      price: 119
    }
  }

  var cardData = {};

  var setMenu = function () {

    for (var sku in menuData) {
      var menuItem = createMenuItem(sku)

      document.getElementById('menu-area').appendChild(menuItem)
    }
  };

  var createMenuItem = function (sku) {
    var data = menuData[sku];

    var menuItem = document.createElement("div")
    menuItem.className = "menu-item"

    var menuText = document.createElement("span")
    menuText.className = "menu-text"
    menuText.innerText = data.productName + " - " + "$" + data.price

    var menuActionSpan = document.createElement("span")
    menuActionSpan.className = "menu-action"

    var menuActionButton = document.createElement('button')
    menuActionButton.innerText = "+"
    menuActionButton.setAttribute("data-sku", sku)

    menuActionButton.onclick = addToCard

    menuActionSpan.appendChild(menuActionButton)

    menuItem.appendChild(menuText)
    menuItem.appendChild(menuActionSpan)

    return menuItem
  }

  var addToCard = function (e) {
    var button = e.target
    var sku = button.getAttribute("data-sku")

    if (sku in cardData) {
      cardData[sku] += 1
    } else {
      cardData[sku] = 1
    }

    console.log(cardData)

    setCard()
  }

  var setCard = function () {
    // var total = 0

    document.getElementById("card-list").innerHTML = ""

    for (var sku in cardData) {
      var cardItem = createCardItem(sku)

      document.getElementById('card-list').appendChild(cardItem)
    }
  }

  var createCardItem = function (sku) {
    var data = menuData[sku]
    var qty = cardData[sku]

    var cardItemDiv = document.createElement('div')
    cardItemDiv.className = "card-item"

    var itemText = document.createElement('span')
    itemText.className = "item-text"
    itemText.innerText = data.productName + " x " + qty

    var itemTotal = document.createElement('span')
    itemTotal.className = "item-total"
    itemTotal.innerText = "$" + data.price * qty

    var removeButton = document.createElement('button')
    removeButton.className = "remove-button"
    removeButton.innerText = "-"
    removeButton.setAttribute("data-sku", sku)

    cardItemDiv.appendChild(itemText)
    cardItemDiv.appendChild(itemTotal)
    cardItemDiv.appendChild(removeButton)

    return cardItemDiv

  }


  setMenu()
})();
