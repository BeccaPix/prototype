// const sheetId = "1als6q4Y1rZrACikcNAApVUxV6_65v7czAAPoqesPe6Q";
// const sheetName = "Sheet1";
// const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;

// async function fetchData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     const currentCommand = data[0].Command;
//     const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//     if (currentCommand === "SHOW_TIME") {
//       document.getElementById("msg").textContent = "Current Time:";
//       document.getElementById("time").textContent = time;
//     } else {
//       document.getElementById("msg").textContent = data[0].Message || "Waiting...";
//       document.getElementById("time").textContent = "--:--";
//     }

//     document.getElementById("battery").textContent = data[0].Battery || "--%";
//   } catch (err) {
//     console.error("Erreur de chargement:", err);
//   }
// }

// // Mise à jour toutes les 5 secondes
// setInterval(fetchData, 5000);
// fetchData();
