let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-image");

// Funzione per mostrare la slide attuale
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active"); // Rimuove la classe "active" da tutte le immagini
        if (i === index) {
            slide.classList.add("active"); // Aggiunge la classe "active" solo all'immagine corrente
        }
    });
}

// Funzione per la slide successiva
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Ritorna alla prima immagine dopo l'ultima
    showSlide(slideIndex);
}

// Funzione per la slide precedente
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Ritorna all'ultima immagine se si va indietro dalla prima
    showSlide(slideIndex);
}

// Funzione per cambiare slide automaticamente
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 2500); // Cambia immagine ogni 2.5 secondi
}

// Avvia il carosello automatico
autoSlide();


function openPopupWithEffect() {
    const width = 400;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    window.open('form.html', 'popup', `width=${width},height=${height},left=${left},top=${top}`);
}



// Funzione per alternare il testo
function toggleText() {
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const originalText = document.getElementById('originalText');
            const newText = document.getElementById('newText');

            if (originalText.style.display === 'none') {
                originalText.style.display = 'block';
                newText.style.display = 'none';
            } else {
                originalText.style.display = 'none';
                newText.style.display = 'block';
            }
        });
    });
}

// Funzione per cambiare immagine di sfondo
function changeBackgroundImage() {
    const cover = document.getElementById('cover');
    const images = [
        'Immagini/my24-multistrada-v2s-thrilling-black-streetgray-005-uc525921-high-min-1687179850.jpg',
        'Immagini/my24-multistrada-v2s-thrilling-black-streetgray-005-uc525921-high-min-1687179850.jpg',
        'Immagini/2.jpg',
        'Immagini/4.jpg',
        'Immagini/3.jpg',
        'Immagini/6.jpg',
        'Immagini/7.jpg',
        'Immagini/5.jpg',
    ];
    let currentImageIndex = 0;

    document.getElementById('changeImageButton').addEventListener('click', function(event) {
        event.preventDefault();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        cover.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    });
}

// Inizializza le funzioni
toggleText();
changeBackgroundImage();





// Contenuto da visualizzare nel popup
const featureContent = {
    "ergonomia": {
        title: "Ergonomia",
        text: "Queste modifiche conferiscono sicurezza a moto ferma e migliorano la confidenza durante le manovre a bassa velocità anche con passeggero e borse cariche. Inoltre, nel catalogo Ducati Performance sono disponibili la sella bassa e il kit sospensioni ribassate che, combinati, permettono di arrivare ad un'altezza sella di soli 790mm. Inoltre è stata incrementata fino a 490 mm la distanza sella - pedana pilota in modo da garantire una maggiore abitabilità ai piloti di statura più alta, che possono, ora, guidare in maniera più confortevole anche per molte ore."
    },
    "riduzione-peso": {
        title: "Riduzione peso",
        text: "L’importante lavoro di alleggerimento svolto sulla moto ha permesso di ottenere un peso a secco finale di 199 kg (202 kg per la versione S), con una riduzione di 5 kg rispetto alla Multistrada 950. Il motore ha perso circa 2 kg. Tra i componenti di veicolo spiccano i nuovi cerchi (-1,7 kg), insieme agli specchietti (-0,7 kg), entrambi di derivazione Multistrada V4, e le flange disco del freno anteriore, ora in alluminio (- 0,5 kg). Relativamente ai cerchi ruota, inoltre, sono disponibili come accessorio nuovi cerchi a raggi anch’essi alleggeriti in maniera importante."
    },
    "telaio": {
        title: "Telaio",
        text: "Lo schema adottato per la ciclistica della Multistrada V2 prevede un telaio a traliccio anteriore insieme a due telaietti laterali fusi, chiusi da un elemento portante posteriore."
    },
    "sospensioni-freni": {
        title: "Sospensioni e freni",
        text: "La Multistrada V2 è equipaggiata con una forcella anteriore a steli rovesciati da 48 mm di diametro da 170 mm di escursione, piedino fuso dedicato, regolabile in tutte le caratteristiche precarico molla, freno idraulico in estensione e compressione. La molla è progressiva, con conseguente aumento del comfort di guida anche con veicolo a pieno carico. L’escursione della ruota posteriore è di 170 mm. Nella versione S, la Multistrada V2 è dotata di serie anche del sistema Ducati Skyhook Suspension EVO, che si basa su una forcella da 48 mm e un ammortizzatore posteriore entrambi di tipo elettronico, con la possibilità di regolare il freno idraulico in compressione ed estensione in maniera continua secondo un approccio di controllo semi-attivo capace di garantire l'equilibrio ideale del veicolo e aumentare in maniera significativa sicurezza e comfort. L’intera famiglia Multistrada V2 è dotata di freni Brembo con funzione di ABS Cornering. L’impianto anteriore è caratterizzato dalla presenza delle pinze radiali monoblocco Brembo M4-32 a 4 pistoncini da 32 mm di diametro e 2 pastiglie, pompa radiale con leve regolabili e doppio disco anteriore da 320 mm con flange in alluminio. Al posteriore troviamo invece un singolo disco da 265 mm di diametro su cui lavora una pinza flottante, sempre Brembo."
    }
};

// Seleziona tutti i bottoni "Continua a leggere"
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Ottieni l'attributo data-feature per identificare la sezione
        const feature = button.getAttribute('data-feature');
        const { title, text } = featureContent[feature];

        // Aggiorna il contenuto del popup
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-text').textContent = text;

        // Mostra il popup
        document.getElementById('popup').style.display = 'flex';
    });
});

// Chiudi il popup quando si clicca sulla "x"
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});



// Seleziona l'icona hamburger e tutti i link del menu
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuLinks = document.querySelectorAll('.header__menu a');

// Aggiungi evento di click all'icona hamburger per aprire/chiudere il menu
hamburgerMenu.addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

// Aggiungi evento di click a ciascun link del menu per chiuderlo
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.body.classList.remove('menu-open');
    });
});


let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        document.querySelector(".header").style.top = "-70px"; // Nasconde l'header
    } else {
        document.querySelector(".header").style.top = "0"; // Mostra l'header
    }
    lastScrollTop = scrollTop;
});





document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").addEventListener("input", validateName);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("contactForm").addEventListener("submit", validateForm);
});

function validateForm(event) {
    event.preventDefault(); // Blocca l'invio del form

    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    // Verifica che entrambi i campi siano validi
    if (isNameValid && isEmailValid) {
        const formSuccess = document.getElementById("formSuccess");
        formSuccess.textContent = "Messaggio inviato con successo!";
        formSuccess.style.color = "green"; // Messaggio di successo in verde

        // Ripulisci i campi del form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } else {
        document.getElementById("formSuccess").textContent = ""; // Rimuovi messaggio di successo
    }
}

function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Il nome è obbligatorio.";
        nameError.style.color = "red"; // Errore in rosso
        return false;
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Il nome deve essere di almeno 3 caratteri.";
        nameError.style.color = "red"; // Errore in rosso
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    if (emailInput.value.trim() === "") {
        emailError.textContent = "L'email è obbligatoria.";
        emailError.style.color = "red"; // Errore in rosso
        return false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        emailError.textContent = "L'email non è valida.";
        emailError.style.color = "red"; // Errore in rosso
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}



function toggleMenu() {
    const dropdown = document.getElementById("videoDropdown");
    const button = document.querySelector(".toggle-button1");

    if (!dropdown.classList.contains("active")) {
        // Apertura del menu
        dropdown.style.visibility = "visible";
        dropdown.style.opacity = "0";
        dropdown.style.maxHeight = "0";

        // Forza il reflow
        dropdown.offsetHeight;

        dropdown.classList.add("active");
        dropdown.style.opacity = "1";
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        button.textContent = "Nascondi Video";
        button.style.marginBottom = "20px";
    } else {
        // Chiusura del menu
        dropdown.style.opacity = "0";
        dropdown.style.maxHeight = "0";

        // Imposta visibility solo dopo il completamento della transizione
        setTimeout(() => {
            dropdown.classList.remove("active");
            dropdown.style.visibility = "hidden";
            button.textContent = "Mostra Video";
            button.style.marginBottom = "0";
        }, 600); // Assicurati che 600 ms corrispondano alla durata della transizione in CSS
    }
}





// Adjust video iframe sizes on window resize
window.addEventListener('resize', () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        if (window.innerWidth <= 768) {
            iframe.style.width = '100%';
            iframe.style.height = '250px';
        } else {
            iframe.style.width = '560px';
            iframe.style.height = '315px';
        }
    });
});




