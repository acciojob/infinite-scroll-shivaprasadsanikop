document.addEventListener("DOMContentLoaded", function () {
    const ol = document.getElementById("infi-list");
    
    function addListItems(count) {
        for (let i = 0; i < count; i++) {
            const li = document.createElement("li");
            li.textContent = `Item ${ol.children.length + 1}`; // Numbering items based on current count
            ol.appendChild(li);
        }
    }

    // Initially add 10 items
    addListItems(10);

    // Event listener for scroll
    ol.addEventListener("scroll", function () {
        // Check if the user has scrolled to the bottom
        if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight) {
            // Add 2 more items when scrolled to the bottom
            addListItems(2);
        }
    });
});


