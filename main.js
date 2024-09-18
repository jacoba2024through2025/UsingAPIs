document.addEventListener("DOMContentLoaded", function () {
    const eldritchButton = document.getElementById("eldritch-blast");
    const impButton = document.getElementById("imp");
    const contentDiv = document.getElementById("content");
    const dndLogo = document.getElementById("dnd-logo");
    const backButton = document.getElementById("back-button")
    const tableContent = document.getElementById("table-content")
    const disintegrateButton = document.getElementById("disintegrate")
    const dragonButton = document.getElementById("adult-black-dragon") 
    const alterSelf = document.getElementById("alter-self")
    const awakenedTree = document.getElementById("awakened-tree")
    

    /*SpelLs*/
    eldritchButton.addEventListener("click", function () {
        tableContent.style.display = "none";
        backButton.style.display = "block";
        dndLogo.style.display = "none";
        
        axios
            .get("https://www.dnd5eapi.co/api/spells/eldritch-blast")
            .then((response) => {
                contentDiv.innerHTML = `<h1>Name: Eldritch Blast</h1>
                <p><strong>Level:</strong> ${response.data.level}</p>
                <p><strong>Description:</strong> ${response.data.desc}</p>
                <img src="spell.jpg" width="50%" class="normal"/>`
            });

            
            
    });

    disintegrateButton.addEventListener("click", function () {
        tableContent.style.display = "none";
        backButton.style.display = "block";
        dndLogo.style.display = "none";
        axios
            .get("https://www.dnd5eapi.co/api/spells/disintegrate")
            .then((response) => {
                contentDiv.innerHTML = `><h1>Name: Disintegrate</h1>
                <p><strong>Level:</strong> ${response.data.level}</p>
                <p><strong>Description:</strong> ${response.data.desc}</p>
                <img src="Disintegratepng.png" width="50%" class="normal"/>`
            });

            
            
    });

    alterSelf.addEventListener("click", function () {
        tableContent.style.display = "none";
        backButton.style.display = "block";
        dndLogo.style.display = "none";
        axios
            .get("https://www.dnd5eapi.co/api/spells/alter-self")
            .then((response) => {
                contentDiv.innerHTML = `<h1>Name: Alter Self</h1>
                <p><strong>Level:</strong> ${response.data.level}</p>
                <p><strong>Description:</strong> ${response.data.desc}</p>
                <img src="alterself.jpg" width="50%" class="normal"/>`
            });

            
            
    });

    /*Monsters*/

    impButton.addEventListener("click", function () {
        tableContent.style.display = "none";
        backButton.style.display = "block";
        dndLogo.style.display = "none";
        axios
            .get("https://www.dnd5eapi.co/api/monsters/imp")
            .then((response) => {
                contentDiv.innerHTML = `<div class="warp"><ul class="option"><h1>Monster: Imp</h1>
                <p>Hit Points: ${response.data.hit_points}</p>
                <p>Strength: ${response.data.strength}</p>
                <p>Dexterity: ${response.data.dexterity}</p>
                <p>Constitution: ${response.data.constitution}</p>
                <p>Intelligence: ${response.data.intelligence}</p>
                <p>Wisdom: ${response.data.wisdom}</p>
                <p>Charisma: ${response.data.charisma}</ul></p>
                <img src="imp.png" width="50%" class="defined image-define"/></div>`
                
            });

            
            
    });

    dragonButton.addEventListener("click", function () {
        tableContent.style.display = "none";
        backButton.style.display = "block";
        dndLogo.style.display = "none";
        axios
            .get("https://www.dnd5eapi.co/api/monsters/adult-black-dragon")
            .then((response) => {
                contentDiv.innerHTML = `<div class="warp"><ul class="option"><h1>Monster: Adult Black Dragon</h1>
                <p>Hit Points: ${response.data.hit_points}</p>
                <p>Strength: ${response.data.strength}</p>
                <p>Dexterity: ${response.data.dexterity}</p>
                <p>Constitution: ${response.data.constitution}</p>
                <p>Intelligence: ${response.data.intelligence}</p>
                <p>Wisdom: ${response.data.wisdom}</p>
                <p>Charisma: ${response.data.charisma}</ul></p>
                <img src="adultdragon.jpg" width="50%" class="defined image-define"/></div>`
                
            });

            
            
    });

    awakenedTree.addEventListener("click", function () {
        tableContent.style.display = "none";
        backButton.style.display = "block";
        dndLogo.style.display = "none";
        axios
            .get("https://www.dnd5eapi.co/api/monsters/awakened-tree")
            .then((response) => {
                contentDiv.innerHTML = `<div class="warp"><ul class="option"><h1>Monster: Awakened Tree</h1>
                <p>Hit Points: ${response.data.hit_points}</p>
                <p>Strength: ${response.data.strength}</p>
                <p>Dexterity: ${response.data.dexterity}</p>
                <p>Constitution: ${response.data.constitution}</p>
                <p>Intelligence: ${response.data.intelligence}</p>
                <p>Wisdom: ${response.data.wisdom}</p>
                <p>Charisma: ${response.data.charisma}</ul></p>
                <img src="awakened.jpg" width="50%" class="defined image-define"/></div>`
                
            });

            
            
    });


    /*Back*/
    backButton.addEventListener("click", function () {
        dndLogo.style.display = "block"; 
        backButton.style.display = "none"; 
        contentDiv.innerHTML = ""; 
        tableContent.style.display = "block";
    });

})