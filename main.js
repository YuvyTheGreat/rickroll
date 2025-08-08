document.addEventListener('DOMContentLoaded', ()=> {
        const audio = document.getElementById('rickroll');
        const videoContainer = document.querySelector('.videodiv');
        
        videoContainer.addEventListener('animationend', ()=> {
                audio.play().catch(err=> {
                        console.log("The stupid greedy person's audio didn't play, they might need to interact with the video XD.");
                    });
            });
    });

  document.addEventListener('DOMContentLoaded', function() {          
          const counter = new Counter({ workspace: 'rickroll-counting' });

        counter.up('rickroll')
        .then(result => {
                console.log(result); // ← Add this line temporarily to debug
                document.getElementById('rickrollcount').innerHTML = `Rickrolls: ${result.data.up_count} <br> <a href="HelloHathi.com">https://hellohathi.com</a>`;
          })
          .catch(error => {
                console.error('Error tracking page view:', error);
                document.getElementById('rickrollcount').textContent = 'Rickrolls: error';
          });

  });

document.getElementById('overlay').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('.videodiv').style.animation = 'expandVideo 1.5s ease-out forwards';
  document.getElementById('rickrollcount').style.display = "block"
});

document.querySelector('.videodiv').addEventListener('animationend', () => {
    const audio = document.getElementById('rickroll');
    audio.play().catch(err => {
    console.error("Autoplay blocked again!");
  });
})
