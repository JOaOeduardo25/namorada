let audio = document.getElementById('background-audio');
let playButton = document.getElementById('play-button');

// Inicialmente, configure o áudio para começar silencioso
audio.volume = 0;

// Adicione um ouvinte de evento para o botão de reprodução
playButton.addEventListener('click', function() {
    // Tente reproduzir o áudio quando o usuário clicar
    audio.play().then(function() {
        // Se a reprodução for bem-sucedida, aumente o volume após 1 segundo
        setTimeout(function() {
            audio.volume = 1;
        }, 1000);
    }).catch(function(error) {
        // Se ocorrer um erro ao reproduzir, imprima o erro no console
        console.log('Autoplay failed:', error);
    });
});

// Função para iniciar o slideshow, colocando-a fora do evento window.onload
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let slideIndex = 0;

    // Função anônima para alterar os slides
    (function changeSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(changeSlide, 3000); // Muda o slide a cada 3 segundos
    })();
}

// Chame a função do slideshow após garantir que o áudio foi encontrado
audio.addEventListener('canplaythrough', function() {
    showSlides();
});


