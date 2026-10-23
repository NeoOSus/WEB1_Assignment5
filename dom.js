// Task 2
document.getElementById("change-text").addEventListener("click", function () {
    document.getElementById("message").textContent = "The text has been changed!";
});

// Task 3
let styleBox = document.getElementById("style-box");

document.getElementById("change-color").addEventListener("click", function () {
    styleBox.style.backgroundColor = "lightblue";
});

document.getElementById("change-size").addEventListener("click", function () {
    styleBox.style.fontSize = "24px";
});

// Task 4
let items = document.getElementById("items");

document.getElementById("add-item").addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = "Item " + (items.children.length + 1);
    items.appendChild(item);
});

document.getElementById("remove-item").addEventListener("click", function () {
    if (items.lastElementChild) {
        items.lastElementChild.remove();
    }
});
