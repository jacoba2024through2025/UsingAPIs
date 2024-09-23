document.addEventListener("DOMContentLoaded", function () {
  const eldritchButton = document.getElementById("eldritch-blast");
  const impButton = document.getElementById("imp");
  const contentDiv = document.getElementById("content");
  const dndLogo = document.getElementById("dnd-logo");
  const backButton = document.getElementById("back-button");
  const tableContent = document.getElementById("table-content");
  const disintegrateButton = document.getElementById("disintegrate");
  const dragonButton = document.getElementById("adult-black-dragon");
  const alterSelf = document.getElementById("alter-self");
  const awakenedTree = document.getElementById("awakened-tree");

  /*SpelLs*/
  eldritchButton.addEventListener("click", function () {
    tableContent.style.display = "none";
    backButton.style.display = "block";
    dndLogo.style.display = "none";

    axios
      .get("https://www.dnd5eapi.co/api/spells/eldritch-blast")
      .then((response) => {
        contentDiv.innerHTML = `<h1 class="welcome">Name: Eldritch Blast</h1>
                <p class="join"><strong>Level:</strong> ${response.data.level}</p>
                <p class="join"><strong>Description:</strong> ${response.data.desc}</p>
                <img src="images/spell.jpg" width="50%" class="normal"/>`;
      });
  });

  disintegrateButton.addEventListener("click", function () {
    tableContent.style.display = "none";
    backButton.style.display = "block";
    dndLogo.style.display = "none";
    axios
      .get("https://www.dnd5eapi.co/api/spells/disintegrate")
      .then((response) => {
        contentDiv.innerHTML = `><h1 class="welcome">Name: Disintegrate</h1>
                <p class="join"><strong>Level:</strong> ${response.data.level}</p>
                <p class="join"><strong>Description:</strong> ${response.data.desc}</p>
                <img src="images/Disintegratepng.png" width="50%" class="normal"/>`;
      });
  });

  alterSelf.addEventListener("click", function () {
    tableContent.style.display = "none";
    backButton.style.display = "block";
    dndLogo.style.display = "none";
    axios
      .get("https://www.dnd5eapi.co/api/spells/alter-self")
      .then((response) => {
        contentDiv.innerHTML = `<h1 class="welcome">Name: Alter Self</h1>
                <p class="join"><strong>Level:</strong> ${response.data.level}</p>
                <p class="join"><strong>Description:</strong> ${response.data.desc}</p>
                <img src="images/alterself.jpg" width="50%" class="normal"/>`;
      });
  });

  /*Monsters*/

  impButton.addEventListener("click", function () {
    tableContent.style.display = "none";
    backButton.style.display = "block";
    dndLogo.style.display = "none";
    axios.get("https://www.dnd5eapi.co/api/monsters/imp").then((response) => {
      contentDiv.innerHTML = `<div class="warp"><ul class="option"><h1 class="welcome">Monster: Imp</h1>
                <p class="join">Hit Points: ${response.data.hit_points}</p>
                <p class="join">Strength: ${response.data.strength}</p>
                <p class="join">Dexterity: ${response.data.dexterity}</p>
                <p class="join">Constitution: ${response.data.constitution}</p>
                <p class="join">Intelligence: ${response.data.intelligence}</p>
                <p class="join">Wisdom: ${response.data.wisdom}</p>
                <p class="join">Charisma: ${response.data.charisma}</ul></p>
                <img src="images/imp.png" width="50%" class="defined image-define"/></div>`;
    });
  });

  dragonButton.addEventListener("click", function () {
    tableContent.style.display = "none";
    backButton.style.display = "block";
    dndLogo.style.display = "none";
    axios
      .get("https://www.dnd5eapi.co/api/monsters/adult-black-dragon")
      .then((response) => {
        contentDiv.innerHTML = `<div class="warp"><ul class="option"><h1 class="welcome">Monster: Adult Black Dragon</h1>
                <p class="join">Hit Points: ${response.data.hit_points}</p>
                <p class="join">Strength: ${response.data.strength}</p>
                <p class="join">Dexterity: ${response.data.dexterity}</p>
                <p class="join">Constitution: ${response.data.constitution}</p>
                <p class="join">Intelligence: ${response.data.intelligence}</p>
                <p class="join">Wisdom: ${response.data.wisdom}</p>
                <p class="join">Charisma: ${response.data.charisma}</ul></p>
                <img src="images/adultdragon.jpg" width="50%" class="defined image-define"/></div>`;
      });
  });

  awakenedTree.addEventListener("click", function () {
    tableContent.style.display = "none";
    backButton.style.display = "block";
    dndLogo.style.display = "none";
    axios
      .get("https://www.dnd5eapi.co/api/monsters/awakened-tree")
      .then((response) => {
        contentDiv.innerHTML = `<div class="warp"><ul class="option"><h1 class="welcome">Monster: Awakened Tree</h1>
                <p class="join">Hit Points: ${response.data.hit_points}</p>
                <p class="join">Strength: ${response.data.strength}</p>
                <p class="join">Dexterity: ${response.data.dexterity}</p>
                <p class="join">Constitution: ${response.data.constitution}</p>
                <p class="join">Intelligence: ${response.data.intelligence}</p>
                <p class="join">Wisdom: ${response.data.wisdom}</p>
                <p class="join">Charisma: ${response.data.charisma}</ul></p>
                <img src="images/awakened.jpg" width="50%" class="defined image-define"/></div>`;
      });
  });

  /*Back*/
  backButton.addEventListener("click", function () {
    dndLogo.style.display = "block";
    backButton.style.display = "none";
    contentDiv.innerHTML = "";
    tableContent.style.display = "block";
  });
});
