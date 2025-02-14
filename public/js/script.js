const verbs = [
    { inf: "awake", pret: ["awoke"], part: ["awoken"], trad: ["se réveiller"] },
    { inf: "be", pret: ["was", "were"], part: ["been"], trad: ["être"] },
    { inf: "bear", pret: ["bore"], part: ["borne", "born"], trad: ["porter", "supporter", "naître"] },
    { inf: "beat", pret: ["beat"], part: ["beaten"], trad: ["battre"] },
    { inf: "become", pret: ["became"], part: ["become"], trad: ["devenir"] },
    { inf: "begin", pret: ["began"], part: ["begun"], trad: ["commencer"] },
    { inf: "bend", pret: ["bent"], part: ["bent"], trad: ["plier"] },
    { inf: "bet", pret: ["bet"], part: ["bet"], trad: ["parier"] },
    { inf: "bid", pret: ["bid", "bade"], part: ["bid", "bidden"], trad: ["offrir"] },
    { inf: "bite", pret: ["bit"], part: ["bitten"], trad: ["mordre"] },
    { inf: "bleed", pret: ["bled"], part: ["bled"], trad: ["saigner"] },
    { inf: "blow", pret: ["blew"], part: ["blown"], trad: ["souffler"] },
    { inf: "break", pret: ["broke"], part: ["broken"], trad: ["casser"] },
    { inf: "breed", pret: ["bred"], part: ["bred"], trad: ["élever"] },
    { inf: "bring", pret: ["brought"], part: ["brought"], trad: ["apporter"] },
    { inf: "build", pret: ["built"], part: ["built"], trad: ["construire"] },
    { inf: "burn", pret: ["burnt", "burned"], part: ["burnt", "burned"], trad: ["brûler"] },
    { inf: "burst", pret: ["burst"], part: ["burst"], trad: ["éclater"] },
    { inf: "buy", pret: ["bought"], part: ["bought"], trad: ["acheter"] },
    { inf: "can", pret: ["could"], part: ["could"], trad: ["pouvoir"] },
    { inf: "cast", pret: ["cast"], part: ["cast"], trad: ["jeter"] },
    { inf: "catch", pret: ["caught"], part: ["caught"], trad: ["attraper"] },
    { inf: "choose", pret: ["chose"], part: ["chosen"], trad: ["choisir"] },
    { inf: "come", pret: ["came"], part: ["come"], trad: ["venir"] },
    { inf: "cost", pret: ["cost"], part: ["cost"], trad: ["coûter"] },
    { inf: "cut", pret: ["cut"], part: ["cut"], trad: ["couper"] },
    { inf: "deal", pret: ["dealt"], part: ["dealt"], trad: ["distribuer"] },
    { inf: "dig", pret: ["dug"], part: ["dug"], trad: ["creuser"] },
    { inf: "do", pret: ["did"], part: ["done"], trad: ["faire"] },
    { inf: "draw", pret: ["drew"], part: ["drawn"], trad: ["dessiner"] },
    { inf: "dream", pret: ["dreamt", "dreamed"], part: ["dreamt", "dreamed"], trad: ["rêver"] },
    { inf: "drink", pret: ["drank"], part: ["drunk"], trad: ["boire"] },
    { inf: "drive", pret: ["drove"], part: ["driven"], trad: ["conduire"] },
    { inf: "eat", pret: ["ate"], part: ["eaten"], trad: ["manger"] },
    { inf: "fall", pret: ["fell"], part: ["fallen"], trad: ["tomber"] },
    { inf: "feed", pret: ["fed"], part: ["fed"], trad: ["nourrir"] },
    { inf: "feel", pret: ["felt"], part: ["felt"], trad: ["sentir"] },
    { inf: "fight", pret: ["fought"], part: ["fought"], trad: ["se battre"] },
    { inf: "find", pret: ["found"], part: ["found"], trad: ["trouver"] },
    { inf: "fling", pret: ["flung"], part: ["flung"], trad: ["lancer"] },
    { inf: "fly", pret: ["flew"], part: ["flown"], trad: ["voler"] },
    { inf: "forbid", pret: ["forbade"], part: ["forbidden"], trad: ["interdire"] },
    { inf: "forget", pret: ["forgot"], part: ["forgotten", "forgot"], trad: ["oublier"] },
    { inf: "forgive", pret: ["forgave"], part: ["forgiven"], trad: ["pardonner"] },
    { inf: "freeze", pret: ["froze"], part: ["frozen"], trad: ["geler"] },
    { inf: "get", pret: ["got"], part: ["gotten", "got"], trad: ["obtenir"] },
    { inf: "give", pret: ["gave"], part: ["given"], trad: ["donner"] },
    { inf: "go", pret: ["went"], part: ["gone"], trad: ["aller"] },
    { inf: "grow", pret: ["grew"], part: ["grown"], trad: ["grandir"] },
    { inf: "hang", pret: ["hung"], part: ["hung"], trad: ["pendre"] },
    { inf: "have", pret: ["had"], part: ["had"], trad: ["avoir"] },
    { inf: "hear", pret: ["heard"], part: ["heard"], trad: ["entendre"] },
    { inf: "hide", pret: ["hid"], part: ["hidden"], trad: ["cacher"] },
    { inf: "hit", pret: ["hit"], part: ["hit"], trad: ["frapper"] },
    { inf: "hold", pret: ["held"], part: ["held"], trad: ["tenir"] },
    { inf: "hurt", pret: ["hurt"], part: ["hurt"], trad: ["blesser"] },
    { inf: "keep", pret: ["kept"], part: ["kept"], trad: ["garder"] },
    { inf: "know", pret: ["knew"], part: ["known"], trad: ["savoir"] },
    { inf: "lay", pret: ["laid"], part: ["laid"], trad: ["poser"] },
    { inf: "lead", pret: ["led"], part: ["led"], trad: ["mener"] },
    { inf: "lean", pret: ["leant", "leaned"], part: ["leant", "leaned"], trad: ["s'incliner"] },
    { inf: "leap", pret: ["leapt", "leaped"], part: ["leapt", "leaped"], trad: ["sauter"] },
    { inf: "learn", pret: ["learnt"], part: ["learnt"], trad: ["apprendre"] },
    { inf: "leave", pret: ["left"], part: ["left"], trad: ["quitter"] },
    { inf: "lend", pret: ["lent"], part: ["lent"], trad: ["prêter"] },
    { inf: "let", pret: ["let"], part: ["let"], trad: ["permettre"] },
    { inf: "lie", pret: ["lay"], part: ["lain"], trad: ["s'allonger"] },
    { inf: "lose", pret: ["lost"], part: ["lost"], trad: ["perdre"] },
    { inf: "make", pret: ["made"], part: ["made"], trad: ["fabriquer"] },
    { inf: "mean", pret: ["meant"], part: ["meant"], trad: ["signifier"] },
    { inf: "meet", pret: ["met"], part: ["met"], trad: ["rencontrer"] },
    { inf: "pay", pret: ["paid"], part: ["paid"], trad: ["payer"] },
    { inf: "put", pret: ["put"], part: ["put"], trad: ["mettre"] },
    { inf: "read", pret: ["read"], part: ["read"], trad: ["lire"] },
    { inf: "rend", pret: ["rent"], part: ["rent"], trad: ["déchirer"] },
    { inf: "rid", pret: ["rid"], part: ["rid"], trad: ["débarrasser"] },
    { inf: "ride", pret: ["rode"], part: ["ridden"], trad: ["monter"] },
    { inf: "ring", pret: ["rang"], part: ["rung"], trad: ["sonner"] },
    { inf: "rise", pret: ["rose"], part: ["risen"], trad: ["se lever"] },
    { inf: "run", pret: ["ran"], part: ["run"], trad: ["courir"] },
    { inf: "saw", pret: ["saw", "sawed"], part: ["sawn", "sawed"], trad: ["scier"] },
    { inf: "say", pret: ["said"], part: ["said"], trad: ["dire"] },
    { inf: "see", pret: ["saw"], part: ["seen"], trad: ["voir"] },
    { inf: "seek", pret: ["sought"], part: ["sought"], trad: ["chercher"] },
    { inf: "sell", pret: ["sold"], part: ["sold"], trad: ["vendre"] },
    { inf: "send", pret: ["sent"], part: ["sent"], trad: ["envoyer"] },
    { inf: "set", pret: ["set"], part: ["set"], trad: ["fixer"] },
    { inf: "shake", pret: ["shook"], part: ["shaken"], trad: ["secouer"] },
    { inf: "shoot", pret: ["shot"], part: ["shot"], trad: ["tirer"] },
    { inf: "show", pret: ["showed"], part: ["shown"], trad: ["montrer"] },
    { inf: "shut", pret: ["shut"], part: ["shut"], trad: ["fermer"] },
    { inf: "sing", pret: ["sang"], part: ["sung"], trad: ["chanter"] },
    { inf: "sink", pret: ["sank", "sunk"], part: ["sunk", "sunken"], trad: ["couler"] },
    { inf: "sit", pret: ["sat"], part: ["sat"], trad: ["s'asseoir"] },
    { inf: "slay", pret: ["slew"], part: ["slain"], trad: ["tuer"] },
    { inf: "sleep", pret: ["slept"], part: ["slept"], trad: ["dormir"] },
    { inf: "slide", pret: ["slid"], part: ["slid"], trad: ["glisser"] },
    { inf: "smell", pret: ["smelt"], part: ["smelt"], trad: ["sentir"] },
    { inf: "sow", pret: ["sowed"], part: ["sown", "sowed"], trad: ["semer"] },
    { inf: "speak", pret: ["spoke"], part: ["spoken"], trad: ["parler"] },
    { inf: "spell", pret: ["spelt"], part: ["spelt"], trad: ["épeler"] },
    { inf: "spend", pret: ["spent"], part: ["spent"], trad: ["dépenser"] },
    { inf: "spill", pret: ["spilt", "spilled"], part: ["spilt", "spilled"], trad: ["renverser"] },
    { inf: "spin", pret: ["spun"], part: ["spun"], trad: ["tourner"] },
    { inf: "split", pret: ["split"], part: ["split"], trad: ["fendre"] },
    { inf: "spoil", pret: ["spoilt"], part: ["spoilt"], trad: ["gâcher"] },
    { inf: "spread", pret: ["spread"], part: ["spread"], trad: ["répandre"] },
    { inf: "stand", pret: ["stood"], part: ["stood"], trad: ["être debout"] },
    { inf: "steal", pret: ["stole"], part: ["stolen"], trad: ["voler"] },
    { inf: "stick", pret: ["stuck"], part: ["stuck"], trad: ["coller"] },
    { inf: "sting", pret: ["stung"], part: ["stung"], trad: ["piquer"] },
    { inf: "stink", pret: ["stank"], part: ["stunk"], trad: ["puer"] },
    { inf: "strike", pret: ["struck"], part: ["stricken", "struck"], trad: ["frapper"] },
    { inf: "swear", pret: ["swore"], part: ["sworn"], trad: ["jurer"] },
    { inf: "sweat", pret: ["sweat", "sweated"], part: ["sweat", "sweated"], trad: ["suer"] },
    { inf: "sweep", pret: ["swept"], part: ["swept"], trad: ["balayer"] },
    { inf: "swell", pret: ["swelled", "sweated"], part: ["swollen"], trad: ["gonfler"] },
    { inf: "swim", pret: ["swam"], part: ["swum"], trad: ["nager"] },
    { inf: "swing", pret: ["swung"], part: ["swung"], trad: ["se balancer"] },
    { inf: "take", pret: ["took"], part: ["taken"], trad: ["prendre"] },
    { inf: "teach", pret: ["taught"], part: ["taught"], trad: ["enseigner"] },
    { inf: "tear", pret: ["tore"], part: ["torn"], trad: ["déchirer"] },
    { inf: "tell", pret: ["told"], part: ["told"], trad: ["dire"] },
    { inf: "think", pret: ["thought"], part: ["thought"], trad: ["penser"] },
    { inf: "throw", pret: ["threw"], part: ["thrown"], trad: ["jeter"] },
    { inf: "understand", pret: ["understood"], part: ["understood"], trad: ["comprendre"] },
    { inf: "wake", pret: ["woke"], part: ["woken"], trad: ["réveiller"] },
    { inf: "wear", pret: ["wore"], part: ["worn"], trad: ["porter"] },
    { inf: "win", pret: ["won"], part: ["won"], trad: ["gagner"] },
    { inf: "write", pret: ["wrote"], part: ["written"], trad: ["écrire"] }
];
let currentVerb;
let mode = "infinitif";
let gameMode = 1; // 1 pour Mode 1, 2 pour Mode 2
let score = 0;
let playerName = localStorage.getItem('playerName');

function login() {
    playerName = document.getElementById("username").value.trim();
    if (playerName) {
        localStorage.setItem('playerName', playerName);
        document.getElementById("login-section").style.display = "none";
        document.getElementById("game-section").style.display = "block";
        newWord();
    } else {
        alert("Veuillez entrer votre nom.");
    }
}

function setMode(newMode) {
    gameMode = newMode;
    document.getElementById('mode1').classList.toggle('active', gameMode === 1);
    document.getElementById('mode2').classList.toggle('active', gameMode === 2);
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

function checkAnswers() {
    // Réinitialiser les classes CSS pour les champs de réponse
    document.getElementById("answer1").classList.remove("correct", "incorrect");
    document.getElementById("answer2").classList.remove("correct", "incorrect");
    document.getElementById("answer3").classList.remove("correct", "incorrect");

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
        score += 10; // Ajoutez 10 points pour une réponse correcte
        document.getElementById("score").textContent = `Score: ${score}`;
        setTimeout(newWord, 1000); // Lancer une nouvelle question après 1 seconde
    } else {
        document.getElementById("result").textContent = `Incorrect. Réponses : ${correct1}, ${correct2}, ${correct3}`;
    }
}

if (playerName) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("game-section").style.display = "block";
    newWord();
}
