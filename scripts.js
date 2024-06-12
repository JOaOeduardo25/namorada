let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

window.onload = function() {
    showSlides();

    let audio = document.getElementById('background-audio');
    if (audio) {
        audio.volume = 0;
        audio.play().then(() => {
            setTimeout(() => {
                audio.volume = 1;
            }, 1000); // Define um atraso de 1 segundo para aumentar o volume
        }).catch(error => {
            console.log('Autoplay failed:', error);
        });
    } else {
        console.log('Elemento de áudio não encontrado.');
    }

    // Adiciona o ouvinte de evento ao botão de reprodução
    document.getElementById('play-button').addEventListener('click', function() {
        var audio = document.getElementById('background-audio');
        if (audio) {
            audio.play();
        } else {
            console.log('Elemento de áudio não encontrado.');
        }
    });
}
