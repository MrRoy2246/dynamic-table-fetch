// document.addEventListener("DOMContentLoaded", () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => {
//       const limitedData = data.slice(0, 5);
//       console.log(limitedData);
//     });
// });

// from my own json file

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let placeholder = document.querySelector("#data-output");

    let out = "";
    for (let product of data) {
      let statusColor = product.completed ? "green" : "red";
      out += `
        <tr>
            <td>${product.userId}</td>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td style="color: ${statusColor}; font-weight: bold;">
            ${product.completed}</td>
        </tr>
        `;
    }
    placeholder.innerHTML = out;
  });

//data fetch from json placeholder api

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     const limitedData = data.slice(10, 20);

//     let placeholder = document.querySelector("#data-output");

//     let out = "";
//     for (let product of limitedData) {
//       let statusColor = product.completed ? "green" : "red";

//       out += `
//         <tr>
//             <td>${product.userId}</td>
//             <td>${product.id}</td>
//             <td>${product.title}</td>
//             <td style="color: ${statusColor}; font-weight: bold;">
//             ${product.completed}</td>
//         </tr>
//         `;
//     }
//     placeholder.innerHTML = out;
//   })
//   .catch(function (error) {
//     console.error("Error fetching data:", error);
//   });

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format hours with leading zero if necessary
  const hoursString = String(hours).padStart(2, "0");

  // Create time string in 12-hour format
  const timeString = `${hoursString}:${minutes}:${seconds} ${period}`;
  document.getElementById("current_time").innerText = timeString;
}

setInterval(updateTime, 1000);
window.onload = updateTime;
