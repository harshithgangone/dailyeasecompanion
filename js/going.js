        // Function to toggle the menu
        function toggleMenu() {
            var options = document.querySelector('.options');
            options.classList.toggle('show');
        }

        // Function to add an item to the shopping list
        function addItem() {
            var itemName = document.getElementById("itemName").value;
            var quantity = document.getElementById("quantity").value;
            if (itemName && quantity) {
                var shoppingList = document.getElementById("shoppingList");
                var itemDiv = document.createElement("div");
                itemDiv.classList.add("item");
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.onchange = function () {
                    itemDiv.classList.toggle("done", this.checked);
                    updateLocalStorage();
                };
                var itemNameInput = document.createElement("input");
                itemNameInput.type = "text";
                itemNameInput.value = itemName;
                itemNameInput.disabled = true;
                var quantityInput = document.createElement("input");
                quantityInput.type = "text";
                quantityInput.value = quantity;
                quantityInput.disabled = true;
                var deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.onclick = function () {
                    itemDiv.remove();
                    updateLocalStorage();
                };
                itemDiv.appendChild(checkbox);
                itemDiv.appendChild(itemNameInput);
                itemDiv.appendChild(quantityInput);
                itemDiv.appendChild(deleteBtn);
                shoppingList.appendChild(itemDiv);

                // Save to local storage
                saveToLocalStorage(itemName, quantity);

                // Clear input fields
                document.getElementById("itemName").value = "";
                document.getElementById("quantity").value = "";
            }
        }

        // Function to save item to local storage
        function saveToLocalStorage(itemName, quantity) {
            var shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) || [];
            shoppingItems.push({ itemName: itemName, quantity: quantity });
            localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
        }

        // Function to update local storage when checkbox is toggled or item is deleted
        function updateLocalStorage() {
            var shoppingItems = [];
            var items = document.querySelectorAll(".item");
            items.forEach(function (item) {
                var itemName = item.querySelector("input[type='text']").value;
                var quantity = item.querySelector("input[type='number']").value;
                var done = item.classList.contains("done");
                shoppingItems.push({ itemName: itemName, quantity: quantity, done: done });
            });
            localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
        }

        // Function to load items from local storage
        function loadFromLocalStorage() {
            var shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) || [];
            var shoppingList = document.getElementById("shoppingList");
            shoppingItems.forEach(function (item) {
                var itemDiv = document.createElement("div");
                itemDiv.classList.add("item");
                if (item.done) {
                    itemDiv.classList.add("done");
                }
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = item.done;
                checkbox.onchange = function () {
                    itemDiv.classList.toggle("done", this.checked);
                    updateLocalStorage();
                };
                var itemNameInput = document.createElement("input");
                itemNameInput.type = "text";
                itemNameInput.value = item.itemName;
                itemNameInput.disabled = true;
                var quantityInput = document.createElement("input");
                quantityInput.type = "text";
                quantityInput.value = item.quantity;
                quantityInput.disabled = true;
                var deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.onclick = function () {
                    itemDiv.remove();
                    updateLocalStorage();
                };
                itemDiv.appendChild(checkbox);
                itemDiv.appendChild(itemNameInput);
                itemDiv.appendChild(quantityInput);
                itemDiv.appendChild(deleteBtn);
                shoppingList.appendChild(itemDiv);
            });
        }

        // Function to clear all items from the shopping list and local storage
        function clearAll() {
            // Show confirmation dialog
            if (confirm("Are you sure you want to clear all items?")) {
                var shoppingList = document.getElementById("shoppingList");
                shoppingList.innerHTML = "";
                updateTotal();
                localStorage.clear();
            }
        }

        // Load items from local storage on page load
        window.onload = function () {
            loadFromLocalStorage();
        };