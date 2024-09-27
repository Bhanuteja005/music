// Function to create the starry background
function createStars() {
    const starryBackground = document.querySelector('.starry-background');
  
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 'px';
      const topPosition = Math.random() * 100 + '%';
      const leftPosition = Math.random() * 100 + '%';
      const twinkleTime = Math.random() * 5 + 5 + 's';
  
      star.style.width = size;
      star.style.height = size;
      star.style.top = topPosition;
      star.style.left = leftPosition;
      star.style.opacity = Math.random();
      star.style.animation = `twinkle ${twinkleTime} linear infinite`;
  
      starryBackground.appendChild(star);
    }
  }
  
  // Call the function to add stars
  createStars();
  