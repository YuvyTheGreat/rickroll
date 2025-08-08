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
                document.getElementById('rickrollcount').innerHTML = `Rickrolls: ${result.data.up_count} <br> <a href="HelloHathi.com">hellohathi.com</a>`;
          })
          .catch(error => {
                console.error('Error tracking page view:', error);
                document.getElementById('rickrollcount').textContent = 'Rickrolls: error';
          });

  });
