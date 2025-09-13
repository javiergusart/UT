const clubList = document.getElementById("club-list");
const searchInput = document.getElementById("search");
const clubDetailsContainer = document.getElementById("main");

let clubData = footballClubs;
displayClubs(footballClubs);

function displayClubs(clubs) {
  let htmlString = clubs
    .map((club) => {
      return `
            <div class="club-card" onclick="handleClubClick(this)">
                <img src="${club.image}" alt="${club.name}" style="width: 100%; height: 100px; object-fit: contain;">
                <h3>${club.name}</h3>
            </div>
        `;
    })
    .join("");

  const currentClubList = document.getElementById("club-list");
  if (currentClubList) {
    currentClubList.innerHTML = htmlString;
  }
}

searchInput.addEventListener("input", filterClubs);

function filterClubs() {
  const currentSearchInput = document.getElementById("search");
  let searchTerm = currentSearchInput.value.toLowerCase();
  let filteredClubs = [];

  for (let i = 0; i < footballClubs.length; i++) {
    let club = footballClubs[i];
    let clubInfo =
      club.name.toLowerCase() +
      " " +
      club.league.toLowerCase() +
      " " +
      club.city.toLowerCase() +
      " " +
      club.stadium.toLowerCase();

    if (clubInfo.includes(searchTerm)) {
      filteredClubs.push(club);
    }
  }

  displayClubs(filteredClubs);
}

function handleClubClick(element) {
  let clubName = element.querySelector("h3").textContent;
  let selectedClub = null;
  for (let i = 0; i < clubData.length; i++) {
    if (clubData[i].name === clubName) {
      selectedClub = clubData[i];
      break;
    }
  }

  if (selectedClub) {
    displayClubDetails(selectedClub);
  }
}

function showHomePage() {
  searchInput.value = "";
  clubDetailsContainer.innerHTML = `
    <h1>Football Clubs Database</h1>
    <input type="text" id="search" placeholder="Search for a football club">
    <div id="club-list">
    </div>
  `;

  const newSearchInput = document.getElementById("search");
  newSearchInput.addEventListener("input", filterClubs);
  displayClubs(footballClubs);
}

function displayClubDetails(club) {
  let clubDetailsHTML = `
        <div id="club-details">
            <button onclick="showHomePage()">Back</button>
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name}" style="width: 200px; height: 150px; object-fit: contain;">
            <p><strong>League:</strong> ${club.league}</p>
            <p><strong>City:</strong> ${club.city}</p>
            <p><strong>Stadium:</strong> ${club.stadium}</p>
            <p><strong>Description:</strong> ${club.description}</p>
            <button onclick="viewClubPlayers('${club.name}')">View Players</button>
        </div>
    `;

  clubDetailsContainer.innerHTML = clubDetailsHTML;
}

function viewClubPlayers(clubName) {
  const selectedClub = clubData.find((club) => club.name === clubName);

  let playersHTML = `<div id="club-details">
    <button onclick="showHomePage()">Back</button>
    <h2>${clubName} - Players</h2>`;

  for (let i = 0; i < selectedClub.players.length; i++) {
    let player = selectedClub.players[i];
    playersHTML += `
            <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
                <h3>${player.name}</h3>
                <p><strong>Position:</strong> ${player.position}</p>
                <p><strong>Number:</strong> ${player.number}</p>
                <p><strong>Goals:</strong> ${player.goals}</p>
                <p><strong>Assists:</strong> ${player.assists}</p>
            </div>
        `;
  }

  playersHTML += "</div>";
  clubDetailsContainer.innerHTML = playersHTML;
}
