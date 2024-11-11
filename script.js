// script.js

function toggleBox(boxId) {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');
    
    // Loop through each box and collapse it if it's not the selected one
    boxes.forEach((box) => {
        if (box.id !== boxId) {
            box.classList.remove('expanded');
        }
    });
    
    // Toggle the 'expanded' class on the selected box
    const selectedBox = document.getElementById(boxId);
    selectedBox.classList.toggle('expanded');
}

