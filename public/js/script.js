const verbs = [
    { inf: "go", pret: "went", part: "gone", trad: "aller" },
    { inf: "see", pret: "saw", part: "seen", trad: "voir" },
    { inf: "take", pret: "took", part: "taken", trad: "prendre" }
    // Ajoutez d'autres verbes irréguliers ici
];

const binId = '67af642be41b4d34e48df6a6'; // Remplacez par votre ID de bin JSONBin
const binSecret = '$2a$10$Yvacf4mLaeeYh/JWNGIc0.HTPPKR1Mxf5PxqdaA3pEAvFNWobFaxO'; // Remplacez par votre secret JSONBin

let currentVerb;
let mode = "infinitif";
let gameMode = 1; // 1 pour Mode 1, 2 pour Mode 2
let score = 0;
let playerName = localStorage.getItem('playerName');

async function fetchLeaderboard() {
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
            headers: {
                'X-Master-Key': binSecret
            }
        });
        const data = await response.json();
        return data.record.leaderboard || [];
    } catch (error) {
        console.error('Erreur lors de la récupération du classement:', error);
        return [];
    }
}

async function updateLeaderboard(leaderboard) {
    try {
        await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': binSecret
            },
            body: JSON.stringify({ leaderboard })
        });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du classement:', error);
    }
}

function login() {
    playerName = document.getElementById("username").value.trim();
    if (playerName) {
        localStorage.setItem('playerName', playerName);
        document.getElementById("login-section").style.display = "none";
        document.getElementById("game-section").style.display = "block";
        newWord();
        displayLeaderboard();
        console.log('Nom enregistré :', localStorage.getItem('playerName'));
    } else {
        alert("Veuillez entrer votre nom.");
    }
}

function setMode(newMode) {
    gameMode = newMode;
    newWord();
}

function newWord() {
    currentVerb = verbs[Math.floor(Math.random() * verbs.length)];
    if (gameMode === 1) {
        mode = "inf";
        document.getElementById("question-label").textContent = `Infinitif : ${currentVerb.inf}`;
        document.getElementById("answer1").placeholder = "Prétérit";
        document.getElementById("answer2").placeholder = "Participe passé";
        document.getElementById("answer3").placeholder = "Traduction";
    } else if (gameMode === 2) {
        mode = ["inf", "pret", "part", "trad"][Math.floor(Math.random() * 4)];
        let questionText = mode === "inf" ? currentVerb.inf :
                          mode === "pret" ? currentVerb.pret :
                          mode === "part" ? currentVerb.part :
                          currentVerb.trad;
        document.getElementById("question-label").textContent = `Mot donné : ${questionText}`;
        document.getElementById("answer1").placeholder = mode !== "pret" ? "Prétérit" : "Infinitif";
        document.getElementById("answer2").placeholder = mode !== "part" ? "Participe passé" : "Infinitif";
        document.getElementById("answer3").placeholder = mode !== "trad" ? "Traduction" : "Infinitif";
    }
    document.getElementById("answer1").value = "";
    document.getElementById("answer2").value = "";
    document.getElementById("answer3").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("answer1").classList.remove("correct", "incorrect");
    document.getElementById("answer2").classList.remove("correct", "incorrect");
    document.getElementById("answer3").classList.remove("correct", "incorrect");
}

async function checkAnswers() {
    let ans1 = document.getElementById("answer1").value.trim().toLowerCase();
    let ans2 = document.getElementById("answer2").value.trim().toLowerCase();
    let ans3 = document.getElementById("answer3").value.trim().toLowerCase();
    let correct1, correct2, correct3;

    if (gameMode === 1) {
        correct1 = currentVerb.pret;
        correct2 = currentVerb.part;
        correct3 = currentVerb.trad;
    } else if (gameMode === 2) {
        correct1 = mode !== "pret" ? currentVerb.pret : currentVerb.inf;
        correct2 = mode !== "part" ? currentVerb.part : currentVerb.inf;
        correct3 = mode !== "trad" ? currentVerb.trad : currentVerb.inf;
    }

    let allCorrect = true;

    if (ans1 === correct1) {
        document.getElementById("answer1").classList.add("correct");
    } else {
        document.getElementById("answer1").classList.add("incorrect");
        allCorrect = false;
    }

    if (ans2 === correct2) {
        document.getElementById("answer2").classList.add("correct");
    } else {
        document.getElementById("answer2").classList.add("incorrect");
        allCorrect = false;
    }

    if (ans3 === correct3) {
        document.getElementById("answer3").classList.add("correct");
    } else {
        document.getElementById("answer3").classList.add("incorrect");
        allCorrect = false;
    }

    if (allCorrect) {
        document.getElementById("result").textContent = "Bravo ! Réponse correcte.";
        score += 10; // Ajoutez 10 points pour une réponse correcte
        document.getElementById("score").textContent = `Score: ${score}`;
        await updateLeaderboard();
        setTimeout(newWord, 1000); // Lancer une nouvelle question après 1 seconde
    } else {
        document.getElementById("result").textContent = `Incorrect. Réponses : ${correct1}, ${correct2}, ${correct3}`;
    }
}

async function displayLeaderboard() {
    const leaderboard = await fetchLeaderboard();
    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;
        leaderboardList.appendChild(listItem);
    });
}

if (playerName) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("game-section").style.display = "block";
    newWord();
    displayLeaderboard();
}
