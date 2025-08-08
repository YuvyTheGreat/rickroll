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
          
          const counter = new Counter({ workspace: 'rickroll-counting' });

        counter.up('rickroll')
        .then(result => {
                console.log(result); // ← Add this line temporarily to debug
                document.getElementById('view-count').textContent = `Rickrolls: ${result.value}`;
          })
          .catch(error => {
                console.error('Error tracking page view:', error);
                document.getElementById('view-count').textContent = 'Rickrolls: error';
          });

  });
