function toggleMenu() {
    var options = document.querySelector('.options');
    options.classList.toggle('show');
}

function savePassword() {
    var title = document.getElementById("title").value;
    var password = document.getElementById("password").value;
    if (title && password) {
        var savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
        savedPasswords.push({ title: title, password: password });
        localStorage.setItem("passwords", JSON.stringify(savedPasswords));
        document.getElementById("title").value = "";
        document.getElementById("password").value = "";
        viewPasswords();
    }
}

function viewPasswords() {
    var passwordsDiv = document.getElementById("passwords");
    passwordsDiv.innerHTML = "";
    var savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
    if (savedPasswords.length > 0) {
        var table = document.createElement("table");
        table.classList.add("password-table");
        var headerRow = table.createTHead().insertRow(0);
        var titleHeader = document.createElement("th");
        titleHeader.innerText = "Title";
        var passwordHeader = document.createElement("th");
        passwordHeader.innerText = "Password";
        var actionsHeader = document.createElement("th");
        actionsHeader.innerText = "Actions";
        headerRow.appendChild(titleHeader);
        headerRow.appendChild(passwordHeader);
        headerRow.appendChild(actionsHeader);

        savedPasswords.forEach(function (password, index) {
            var row = table.insertRow();
            var titleCell = row.insertCell(0);
            titleCell.innerText = password.title;
            var passwordCell = row.insertCell(1);
            passwordCell.innerText = password.password;
            var actionsCell = row.insertCell(2);
            var editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("edit-btn");
            editBtn.onclick = function () {
                editPassword(index);
            };
            actionsCell.appendChild(editBtn);
            var deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = function () {
                savedPasswords.splice(index, 1);
                localStorage.setItem("passwords", JSON.stringify(savedPasswords));
                viewPasswords();
            };
            actionsCell.appendChild(deleteBtn);
        });

        passwordsDiv.appendChild(table);
    } else {
        passwordsDiv.innerHTML = "<p>No passwords saved yet.</p>";
    }
}

function editPassword(index) {
    var savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
    var password = savedPasswords[index];
    if (password) {
        var title = prompt("Enter new title:", password.title);
        var newPassword = prompt("Enter new password:", password.password);
        if (title !== null && newPassword !== null) {
            savedPasswords[index] = { title: title, password: newPassword };
            localStorage.setItem("passwords", JSON.stringify(savedPasswords));
            viewPasswords();
        }
    }
}

viewPasswords();