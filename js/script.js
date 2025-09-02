const imgHangman1 = document.getElementById("imgHangman1");
const imgHangman2 = document.getElementById("imgHangman2");
const imgHangman3 = document.getElementById("imgHangman3");

const words = document.querySelectorAll('.word');
const dropzones = document.querySelectorAll('.dropzone');


let draggedWord = null;


words.forEach(word => {
    word.addEventListener('dragstart', e => {
        draggedWord = word;
        word.classList.add('dragging');
    });
    word.addEventListener('dragend', e => {
        word.classList.remove('dragging');
    });

    // Soporte táctil
    word.addEventListener('touchstart', function(e) {
        draggedWord = word;
        word.classList.add('dragging');
        e.target.touchDragging = true;
    }, {passive: true});
    word.addEventListener('touchend', function(e) {
        word.classList.remove('dragging');
        e.target.touchDragging = false;
    }, {passive: true});
});


dropzones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault();
    });
    zone.addEventListener('drop', e => {
        e.preventDefault();
    if (draggedWord) {
            zone.textContent = draggedWord.textContent;
        if (draggedWord.textContent === zone.dataset.answer) {
            zone.classList.add('correct');
            zone.classList.remove('incorrect');
        } else {
            zone.classList.add('incorrect');
            zone.classList.remove('correct');
        }
            draggedWord.remove();
        }
    });

    // Soporte táctil
    zone.addEventListener('touchmove', function(e) {
        if (draggedWord && draggedWord.touchDragging) {
            e.preventDefault();
        }
    }, {passive: false});
    zone.addEventListener('touchend', function(e) {
        if (draggedWord && draggedWord.touchDragging) {
            zone.textContent = draggedWord.textContent;
            if (draggedWord.textContent === zone.dataset.answer) {
                zone.classList.add('correct');
                zone.classList.remove('incorrect');
            } else {
                zone.classList.add('incorrect');
                zone.classList.remove('correct');
            }
            draggedWord.remove();
            draggedWord.touchDragging = false;
        }
    }, {passive: false});
});

var fails1 = localStorage.getItem("fails1");
if (fails1 === null) {
    fails1 = 0;
    document.getElementById("txtFails1").innerHTML = "Fails: " + fails1;
} else {
    document.getElementById("txtFails1").innerHTML = "Fails: " + fails1;
    if (fails1 == 1) {
        imgHangman1.src = "./images/hangman1.jpg";
    } else if (fails1 == 2) {
        imgHangman1.src = "./images/hangman2.jpg";
    } else if (fails1 == 3) {
        imgHangman1.src = "./images/hangman3.jpg";
    } else if (fails1 == 4) {
        imgHangman1.src = "./images/hangman4.jpg";
        document.getElementById("hint1").innerHTML = "Hint: Work together";
    } else if (fails1 == 5) {
        imgHangman1.src = "./images/hangman5.jpg";
        document.getElementById("hint1").innerHTML = "Hint: Work together";
    } else if (fails1 == 6) {
        imgHangman1.src = "./images/hangman6.jpg";
        document.getElementById("hint1").innerHTML = "Hint: Work together";
    } else if (fails1 == 7) {
        imgHangman1.src = "./images/hangman7.jpg";
        document.getElementById("hint1").innerHTML = "Hint: Work together";
        document.getElementById("btnCheckChar1").classList.add("disabled");
    }
}

var fails2 = localStorage.getItem("fails2");
if (fails2 === null) {
    fails2 = 0;
    document.getElementById("txtFails2").innerHTML = "Fails: " + fails2;
} else {
    document.getElementById("txtFails2").innerHTML = "Fails: " + fails2;
    if (fails2 == 1) {
        imgHangman2.src = "./images/hangman1.jpg";
    } else if (fails2 == 2) {
        imgHangman2.src = "./images/hangman2.jpg";
    } else if (fails2 == 3) {
        imgHangman2.src = "./images/hangman3.jpg";
    } else if (fails2 == 4) {
        imgHangman2.src = "./images/hangman4.jpg";
        document.getElementById("hint2").innerHTML = "Hint: Group work (Plural)";
    } else if (fails2 == 5) {
        imgHangman2.src = "./images/hangman5.jpg";
        document.getElementById("hint2").innerHTML = "Hint: Group work (Plural)";
    } else if (fails2 == 6) {
        imgHangman2.src = "./images/hangman6.jpg";
        document.getElementById("hint2").innerHTML = "Hint: Group work (Plural)";
    } else if (fails2 == 7) {
        imgHangman2.src = "./images/hangman7.jpg";
        document.getElementById("hint2").innerHTML = "Hint: Group work (Plural)";
        document.getElementById("btnCheckChar2").classList.add("disabled");
    }
}

var fails3 = localStorage.getItem("fails3");
if (fails3 === null) {
    fails3 = 0;
    document.getElementById("txtFails3").innerHTML = "Fails: " + fails3;
} else {
    document.getElementById("txtFails3").innerHTML = "Fails: " + fails3;
    if (fails3 == 1) {
        imgHangman3.src = "./images/hangman1.jpg";
    } else if (fails3 == 2) {
        imgHangman3.src = "./images/hangman2.jpg";
    } else if (fails3 == 3) {
        imgHangman3.src = "./images/hangman3.jpg";
    } else if (fails3 == 4) {
        imgHangman3.src = "./images/hangman4.jpg";
    } else if (fails3 == 5) {
        imgHangman3.src = "./images/hangman5.jpg";
        document.getElementById("hint3").innerHTML = "Hint: Tires";
    } else if (fails3 == 6) {
        imgHangman3.src = "./images/hangman6.jpg";
        document.getElementById("hint3").innerHTML = "Hint: Tires";
    } else if (fails3 == 7) {
        imgHangman3.src = "./images/hangman7.jpg";
        document.getElementById("hint3").innerHTML = "Hint: Tires";
        document.getElementById("btnCheckChar3").classList.add("disabled");
    }
}

var currentWord1 = "";
var currentWord2 = "";
var currentWord3 = "";

try {
    var estadoJuego = localStorage.getItem("estadoJuego");
    if (estadoJuego === "f") {
        alert("Sorry, ¡you lost!");
    }
} catch (error) {}

/* Parte del ahorcado 1 */
document
    .getElementById("checkchar1")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        var char1 = document.getElementById("char1").value;
        if (char1.trim() !== "") {
            let char = char1.split("");
            if (char.length > 1) {
                $("#WrongModal2").modal("show");
            } else {
                if (char.includes("t") || char.includes("T")) {
                    document.getElementById("c11").innerHTML = "T";
                    currentWord1 += "t";
                } else if (char.includes("e") || char.includes("E")) {
                    document.getElementById("c12").innerHTML = "E";
                    currentWord1 += "e";
                } else if (char.includes("a") || char.includes("A")) {
                    document.getElementById("c13").innerHTML = "A";
                    currentWord1 += "a";
                } else if (char.includes("m") || char.includes("M")) {
                    document.getElementById("c14").innerHTML = "M";
                    currentWord1 += "m";
                } else {
                    fails1++;
                    localStorage.setItem("fails1", fails1);
                    if (fails1 === 1) {
                        imgHangman1.src = "./images/hangman1.jpg";
                        $("#WrongModal3").modal("show");
                    } else if (fails1 === 2) {
                        imgHangman1.src = "./images/hangman2.jpg";
                        $("#WrongModal4").modal("show");
                    } else if (fails1 === 3) {
                        imgHangman1.src = "./images/hangman3.jpg";
                        $("#WrongModal6").modal("show");
                    } else if (fails1 === 4) {
                        imgHangman1.src = "./images/hangman4.jpg";
                        document.getElementById("hint1").innerHTML = "Hint: Work together";
                        $("#WrongModal7").modal("show");
                    } else if (fails1 === 5) {
                        imgHangman1.src = "./images/hangman5.jpg";
                        document.getElementById("hint1").innerHTML = "Hint: Work together";
                        $("#WrongModal8").modal("show");
                    } else if (fails1 === 6) {
                        imgHangman1.src = "./images/hangman6.jpg";
                        document.getElementById("hint1").innerHTML = "Hint: Work together";
                        $("#WrongModal9").modal("show");
                    } else if (fails1 >= 7) {
                        imgHangman1.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                        document.getElementById("btnCheckChar1").classList.add("disabled");
                        localStorage.setItem("estadoJuego", "f");
                    }
                    document.getElementById("txtFails1").innerHTML = "Fails: " + fails1;
                }
                if (
                    currentWord1.includes("t") &&
                    currentWord1.includes("e") &&
                    currentWord1.includes("a") &&
                    currentWord1.includes("m")
                ) {
                    $("#CorrectModal2").modal("show");
                    imgHangman1.src = "./images/hangman8.jpg";
                    document.getElementById("btnCheckChar1").classList.add("disabled");
                }
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

/* Parte del ahorcado 2 */
document
    .getElementById("checkchar2")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        var char2 = document.getElementById("char2").value;
        if (char2.trim() !== "") {
            let char = char2.split("");
            if (char.length > 1) {
                $("#WrongModal2").modal("show");
            } else {
                if (char.includes("p") || char.includes("P")) {
                    document.getElementById("c21").innerHTML = "P";
                    currentWord2 += "p";
                } else if (char.includes("r") || char.includes("R")) {
                    document.getElementById("c22").innerHTML = "R";
                    currentWord2 += "r";
                } else if (char.includes("o") || char.includes("O")) {
                    document.getElementById("c23").innerHTML = "O";
                    currentWord2 += "o";
                } else if (char.includes("j") || char.includes("J")) {
                    document.getElementById("c24").innerHTML = "J";
                    currentWord2 += "j";
                } else if (char.includes("e") || char.includes("E")) {
                    document.getElementById("c25").innerHTML = "E";
                    currentWord2 += "e";
                } else if (char.includes("c") || char.includes("C")) {
                    document.getElementById("c26").innerHTML = "C";
                    currentWord2 += "c";
                } else if (char.includes("t") || char.includes("T")) {
                    document.getElementById("c27").innerHTML = "T";
                    currentWord2 += "t";
                } else if (char.includes("s") || char.includes("S")) {
                    document.getElementById("c28").innerHTML = "S";
                    currentWord2 += "s";
                } else {
                    fails2++;
                    localStorage.setItem("fails2", fails2);
                    if (fails2 === 1) {
                        imgHangman2.src = "./images/hangman1.jpg";
                        $("#WrongModal3").modal("show");
                    } else if (fails2 === 2) {
                        imgHangman2.src = "./images/hangman2.jpg";
                        $("#WrongModal4").modal("show");
                    } else if (fails2 === 3) {
                        imgHangman2.src = "./images/hangman3.jpg";
                        $("#WrongModal6").modal("show");
                    } else if (fails2 === 4) {
                        imgHangman2.src = "./images/hangman4.jpg";
                        document.getElementById("hint2").innerHTML = "Hint: Group work (Plural)";
                        $("#WrongModal7").modal("show");
                    } else if (fails2 === 5) {
                        imgHangman2.src = "./images/hangman5.jpg";
                        document.getElementById("hint2").innerHTML = "Hint: Group work (Plural)";
                        $("#WrongModal8").modal("show");
                    } else if (fails2 === 6) {
                        imgHangman2.src = "./images/hangman6.jpg";
                        document.getElementById("hint2").innerHTML = "Hint: Group work (Plural)";
                        $("#WrongModal9").modal("show");
                    } else if (fails2 >= 7) {
                        imgHangman2.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                        document.getElementById("btnCheckChar2").classList.add("disabled");
                        localStorage.setItem("estadoJuego", "f");
                        document.getElementById("txtFails2").innerHTML = "Fails: " + fails2;
                    }
                    document.getElementById("txtFails2").innerHTML = "Fails: " + fails2;
                }
                if (
                    currentWord2.includes("p") &&
                    currentWord2.includes("r") &&
                    currentWord2.includes("o") &&
                    currentWord2.includes("j") &&
                    currentWord2.includes("e") &&
                    currentWord2.includes("c") &&
                    currentWord2.includes("t") &&
                    currentWord2.includes("s")
                ) {
                    $("#CorrectModal2").modal("show");
                    imgHangman2.src = "./images/hangman8.jpg";
                    document.getElementById("btnCheckChar2").classList.add("disabled");
                }
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

/* Parte del ahorcado 3 */
document
    .getElementById("checkchar3")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        var char3 = document.getElementById("char3").value;
        if (char3.trim() !== "") {
            let char = char3.split("");
            if (char.length > 1) {
                $("#WrongModal2").modal("show");
            } else {
                if (char.includes("m") || char.includes("M")) {
                    document.getElementById("c31").innerHTML = "M";
                    currentWord3 += "m";
                } else if (char.includes("e") || char.includes("E")) {
                    document.getElementById("c32").innerHTML = "E";
                    document.getElementById("c33").innerHTML = "E";
                    currentWord3 += "e";
                } else if (char.includes("t") || char.includes("T")) {
                    document.getElementById("c34").innerHTML = "T";
                    currentWord3 += "t";
                } else if (char.includes("i") || char.includes("I")) {
                    document.getElementById("c35").innerHTML = "I";
                    currentWord3 += "i";
                } else if (char.includes("n") || char.includes("N")) {
                    document.getElementById("c36").innerHTML = "N";
                    currentWord3 += "n";
                } else if (char.includes("g") || char.includes("G")) {
                    document.getElementById("c37").innerHTML = "G";
                    currentWord3 += "g";
                } else {
                    fails3++;
                    localStorage.setItem("fails3", fails3);
                    if (fails3 === 1) {
                        imgHangman3.src = "./images/hangman1.jpg";
                        $("#WrongModal3").modal("show");
                    } else if (fails3 === 2) {
                        imgHangman3.src = "./images/hangman2.jpg";
                        $("#WrongModal4").modal("show");
                    } else if (fails3 === 3) {
                        imgHangman3.src = "./images/hangman3.jpg";
                        $("#WrongModal6").modal("show");
                    } else if (fails3 === 4) {
                        imgHangman3.src = "./images/hangman4.jpg";
                        document.getElementById("hint3").innerHTML = "Hint: Work session";
                        $("#WrongModal7").modal("show");
                    } else if (fails3 === 5) {
                        imgHangman3.src = "./images/hangman5.jpg";
                        document.getElementById("hint3").innerHTML = "Hint: Work session";
                        $("#WrongModal8").modal("show");
                    } else if (fails3 === 6) {
                        imgHangman3.src = "./images/hangman6.jpg";
                        document.getElementById("hint3").innerHTML = "Hint: Work session";
                        $("#WrongModal9").modal("show");
                    } else if (fails3 >= 7) {
                        imgHangman3.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                        document.getElementById("btnCheckChar3").classList.add("disabled");
                        document.getElementById("txtFails3").innerHTML = "Fails: " + fails3;
                        localStorage.setItem("estadoJuego", "f");
                    }
                    document.getElementById("txtFails3").innerHTML = "Fails: " + fails3;
                }
                if (
                    currentWord3.includes("m") &&
                    currentWord3.includes("e") &&
                    currentWord3.includes("t") &&
                    currentWord3.includes("i") &&
                    currentWord3.includes("n") &&
                    currentWord3.includes("g")
                ) {
                    $("#CorrectModal2").modal("show");
                    imgHangman3.src = "./images/hangman8.jpg";
                    document.getElementById("btnCheckChar3").classList.add("disabled");
                }
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });
