let score = 0;
let selectedVerbs = []; // Liste des verbes sélectionnés
let currentVerb = {}; // Verbe actuel pour le jeu
let mode = 1; // Mode par défaut (Infinitif)
let verbsData = []; // Stocker les verbes chargés depuis le fichier JSON
let gameMode = "inf";
// Charger les verbes depuis le fichier JSON
async function loadVerbs() {
    try {
        // Vérifier si les verbes sont déjà dans localStorage
        const storedVerbs = localStorage.getItem('verbes');
        if (storedVerbs) {
            verbsData = JSON.parse(storedVerbs); // Charger depuis localStorage
        } else {
            // Charger depuis le fichier JSON
            const response = await fetch('public/verbes.json');
            verbsData = await response.json();
            // Stocker dans localStorage
            localStorage.setItem('verbes', JSON.stringify(verbsData));
        }

        // Afficher les verbes
        displayVerbAccordion(verbsData);
    } catch (error) {
        console.error('Erreur lors du chargement des verbes :', error);
    }
}
// Afficher ou masquer la liste des verbes
function displayVerbs() {
    document.getElementById('verb-list').classList.remove('hidden');
    document.getElementById('jeu').classList.add('hidden');
}

// Afficher les verbes sous forme d'accordéon avec des cases à cocher
function displayVerbAccordion(verbs) {
    const accordionContainer = document.getElementById('selection-verbes');
    accordionContainer.innerHTML = ''; // Vider le conteneur

    verbs.forEach(verb => {
        const verbItem = document.createElement('div');
        verbItem.className = 'verb-item';

        const verbHeader = document.createElement('div');
        verbHeader.className = 'verb-header';
        verbHeader.innerHTML = `
            <span class="delete-icon" onclick="deleteVerb('${verb.inf}')">🗑️</span> <!-- Icône de poubelle -->
            <input type="checkbox" checked="true" id="${verb.inf}" value="${verb.inf}">
            <label for="${verb.inf}">${verb.inf}</label>
            <span class="toggle-icon">▼</span>
        `;

        // Gestion du clic sur l'en-tête pour dérouler les détails
        verbHeader.addEventListener('click', (event) => {
            // Empêcher la propagation du clic si l'utilisateur clique sur la case à cocher
            if (event.target.tagName !== 'INPUT') {
                toggleVerbDetails(verbItem);
            }
        });

        const verbDetails = document.createElement('div');
        verbDetails.className = 'verb-details';
        verbDetails.innerHTML = `
            <strong>Prétérit :</strong> ${verb.pret.join(', ')}<br>
            <strong>Participe passé :</strong> ${verb.part.join(', ')}<br>
            <strong>Traduction :</strong> ${verb.trad.join(', ')}
        `;
        verbDetails.style.display = 'none'; // Masquer les détails par défaut

        verbItem.appendChild(verbHeader);
        verbItem.appendChild(verbDetails);
        accordionContainer.appendChild(verbItem);
    });
}

// Afficher ou masquer les détails d'un verbe
function toggleVerbDetails(verbItem) {
    const verbDetails = verbItem.querySelector('.verb-details');
    const toggleIcon = verbItem.querySelector('.toggle-icon');
    if (verbDetails.style.display === 'none') {
        verbDetails.style.display = 'block'; // Afficher les détails
        toggleIcon.textContent = '▲'; // Changer l'icône
    } else {
        verbDetails.style.display = 'none'; // Masquer les détails
        toggleIcon.textContent = '▼'; // Changer l'icône
    }
}

// Démarrer le jeu avec les verbes sélectionnés
function startGameWithSelectedVerbs() {
    const checkboxes = document.querySelectorAll('#selection-verbes input[type="checkbox"]:checked');
    selectedVerbs = Array.from(checkboxes).map(checkbox => {
        return verbsData.find(verb => verb.inf === checkbox.value);
    });

    if (selectedVerbs.length === 0) {
        alert('Veuillez sélectionner au moins un verbe.');
        return;
    }

    // Masquer la liste des verbes et afficher la section de jeu
    document.getElementById('verb-list').classList.add('hidden');
    document.getElementById('jeu').classList.remove('hidden');
    newWord();
}

function setMode(newMode) {
    mode = newMode;
    document.getElementById('mode1').classList.toggle('active', mode === 1);
    document.getElementById('mode2').classList.toggle('active', mode === 2);
    newWord();
}

function checkAnswers() {
    // Réinitialiser les classes CSS pour les champs de réponse
    document.getElementById("answer1").classList.remove("correct", "incorrect");
    document.getElementById("answer2").classList.remove("correct", "incorrect");
    document.getElementById("answer3").classList.remove("correct", "incorrect");

    let ans1 = document.getElementById("answer1").value.trim().toLowerCase();
    let ans2 = document.getElementById("answer2").value.trim().toLowerCase();
    let ans3 = document.getElementById("answer3").value.trim().toLowerCase();
    let correct1, correct2, correct3;

    if (mode === 1) {
        correct1 = currentVerb.pret;
        correct2 = currentVerb.part;
        correct3 = currentVerb.trad;
    } else if (mode === 2) {
        correct1 = gameMode !== "pret" ? currentVerb.pret : currentVerb.inf;
        correct2 = gameMode !== "part" ? currentVerb.part : currentVerb.inf;
        correct3 = gameMode !== "trad" ? currentVerb.trad : currentVerb.inf;
    }

    let allCorrect = true;

    if (Array.isArray(correct1) ? correct1.includes(ans1) : ans1 === correct1) {
        document.getElementById("answer1").classList.add("correct");
    } else {
        document.getElementById("answer1").classList.add("incorrect");
        allCorrect = false;
    }
    
    if (Array.isArray(correct2) ? correct2.includes(ans2) : ans2 === correct2) {
        document.getElementById("answer2").classList.add("correct");
    } else {
        document.getElementById("answer2").classList.add("incorrect");
        allCorrect = false;
    }
    
    if (Array.isArray(correct3) ? correct3.includes(ans3) : ans3 === correct3) {
        document.getElementById("answer3").classList.add("correct");
    } else {
        document.getElementById("answer3").classList.add("incorrect");
        allCorrect = false;
    }

    if (allCorrect) {
        document.getElementById("result").textContent = "Bravo ! Réponse correcte.";
        score += 1; // Ajoutez 10 points pour une réponse correcte
        document.getElementById("score").textContent = `Score: ${score}`;
        setTimeout(newWord, 1000); // Lancer une nouvelle question après 1 seconde
        document.getElementById("answer1").focus();
    } else {
        document.getElementById("result").textContent = `Incorrect. Réponses : ${correct1}, ${correct2}, ${correct3}`;
    }
}

// Vider les champs de réponse
function clearInputFields() {
    document.getElementById('answer1').value = '';
    document.getElementById('answer2').value = '';
    document.getElementById('answer3').value = '';
}

function newWord() {
    currentVerb = selectedVerbs[Math.floor(Math.random() * selectedVerbs.length)];
    if (mode === 1) {
        gameMode = "inf";
        document.getElementById("question-label").textContent = `Infinitif : ${currentVerb.inf}`;
        document.getElementById("answer1").placeholder = "Prétérit";
        document.getElementById("answer2").placeholder = "Participe passé";
        document.getElementById("answer3").placeholder = "Traduction";
    } else if (mode === 2) {
        gameMode = ["inf", "pret", "part", "trad"][Math.floor(Math.random() * 4)];
        let questionText = gameMode === "inf" ? currentVerb.inf :
                          gameMode === "pret" ? currentVerb.pret :
                          gameMode === "part" ? currentVerb.part :
                          currentVerb.trad;
        document.getElementById("question-label").textContent = `Mot donné : ${questionText}`;

        document.getElementById("answer1").placeholder = gameMode !== "pret" ? "Prétérit" : "Infinitif";
        document.getElementById("answer2").placeholder = gameMode !== "part" ? "Participe passé" : "Infinitif";
        document.getElementById("answer3").placeholder = gameMode !== "trad" ? "Traduction" : "Infinitif";
    }
    document.getElementById("answer1").value = "";
    document.getElementById("answer2").value = "";
    document.getElementById("answer3").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("answer1").classList.remove("correct", "incorrect");
    document.getElementById("answer2").classList.remove("correct", "incorrect");
    document.getElementById("answer3").classList.remove("correct", "incorrect");
}

function allFilled() {
    return ((document.getElementById("answer1").value.trim()!="") && (document.getElementById("answer2").value.trim()!="") && ((document.getElementById("answer3").value.trim()!="")))
}

function displayAddVerb() {
    document.getElementById('add-verb-form').classList.remove('hidden');
    document.getElementById('selection').classList.add('hidden');
    document.getElementById('add-verbe').classList.add('hidden');
    document.getElementById("result-verbe").textContent = "";
}
function unDisplayAddVerb() {
    document.getElementById('add-verb-form').classList.add('hidden');
    document.getElementById('selection').classList.remove('hidden');
    document.getElementById('add-verbe').classList.remove('hidden');
    document.getElementById("result-verbe").textContent = "";
}

function addVerb() {
    const inf = document.getElementById('verb-inf').value.trim();
    const pret = document.getElementById('verb-pret').value.trim().split(',');
    const part = document.getElementById('verb-part').value.trim().split(',');
    const trad = document.getElementById('verb-trad').value.trim().split(',');

    if (!inf || pret.length === 0 || part.length === 0 || trad.length === 0) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    const verbs = JSON.parse(localStorage.getItem('verbes')) || [];
    const verbExists = verbs.some(verb => verb.inf === inf);
    if (verbExists) {
        document.getElementById('verb-inf').value = '';
        document.getElementById('verb-pret').value = '';
        document.getElementById('verb-part').value = '';
        document.getElementById('verb-trad').value = '';
        alert(`Le verbe "${inf}" existe déjà.`);
        return;
    }
    // Ajouter le verbe à localStorage
    const newVerb = {
        inf,
        pret: pret.map(s => s.trim()),
        part: part.map(s => s.trim()),
        trad: trad.map(s => s.trim()),
    };

    verbs.push(newVerb);
    verbs.sort((a, b) => a.inf.localeCompare(b.inf));
    localStorage.setItem('verbes', JSON.stringify(verbs));

    displayVerbAccordion(verbs);
    document.getElementById("result-verbe").textContent = `Verbe "${inf}" ajouté.`;
    // Réinitialiser le formulaire
    document.getElementById('verb-inf').value = '';
    document.getElementById('verb-pret').value = '';
    document.getElementById('verb-part').value = '';
    document.getElementById('verb-trad').value = '';
}

function deleteVerb(inf) {
    if (verbsData.length>1) {
        let verbs = JSON.parse(localStorage.getItem('verbes')) || [];
        const initialLength = verbs.length;
        verbs = verbs.filter(verb => verb.inf !== inf);
        if (verbs.length < initialLength) {
            localStorage.setItem('verbes', JSON.stringify(verbs));
        }
        // Supprimer le verbe de l'affichage
        const verbItem = document.querySelector(`#${inf}`).closest('.verb-item');
        if (verbItem) {
            verbItem.remove();
        }
    } else {
        alert("Il faut au moins un verbe à étudier !")
    }
}

document.getElementById("answer1").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut (ex: saut de ligne dans un textarea)
        if (document.getElementById("answer1").value.trim()!="") {
            document.getElementById("answer2").focus();
            if (allFilled()) {
                checkAnswers();
            }
        }
    }
});
document.getElementById("answer2").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut (ex: saut de ligne dans un textarea)
        if (document.getElementById("answer2").value.trim()!="") {
            document.getElementById("answer3").focus();
            if (allFilled()) {
                checkAnswers();
            }
        }
    }
});

document.getElementById("answer3").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut (ex: saut de ligne dans un textarea)*
        if (allFilled()) {
            checkAnswers();
        }
    }
});

// Initialisation
loadVerbs();
startGameWithSelectedVerbs();