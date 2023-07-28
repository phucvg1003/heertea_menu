// Get all the checkboxes.
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const selectedDishes = document.getElementById("selectedDishes");

function copyClipboard() {
  const x = document.getElementById("showHideModal");

    const s = document.getElementById("success_mess");
    const f = document.getElementById("fail_mess");

    if (x.style.display === "none") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }

    // Loop through the checkboxes and copy their values to an array.
    const values = [];

    for (let checkbox of checkboxes) {
        if (checkbox.checked === true) {
            values.push(checkbox.value);
            if (s.style.display === "none") {
                s.style.display = "none";
              } else {
                s.style.display = "block";
                f.style.display = "none";
              }
        } else {
            if (f.style.display === "none") {
                f.style.display = "none";
              } else {
                f.style.display = "block";
              }
        }
    } 

    // Copy the array to the clipboard.
    navigator.clipboard.writeText(values.join("\n"));
    selectedDishes.innerHTML = values.join("<br>");
}

// Add an event listener to the copy button.
// copyButton.addEventListener("click", () => {
//     const x = document.getElementById("showHideModal");

//     const s = document.getElementById("success_mess");
//     const f = document.getElementById("fail_mess");

//     if (x.style.display === "none") {
//         x.style.display = "none";
//       } else {
//         x.style.display = "block";
//       }

//     // Loop through the checkboxes and copy their values to an array.
//     const values = [];

//     for (let checkbox of checkboxes) {
//         if (checkbox.checked === true) {
//             values.push(checkbox.value);
//             if (s.style.display === "none") {
//                 s.style.display = "none";
//               } else {
//                 s.style.display = "block";
//                 f.style.display = "none";
//               }
//         } else {
//             if (f.style.display === "none") {
//                 f.style.display = "none";
//               } else {
//                 f.style.display = "block";
//               }
//         }
//     } 

//     // Copy the array to the clipboard.
//     navigator.clipboard.writeText(values.join(", "+"\n\n"));
//     selectedDishes.innerHTML = values.join("<br>");
// });