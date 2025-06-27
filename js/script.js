  // Create floating particles
  function createParticles() {
    const particleContainer = document.getElementById('particles');
    
    setInterval(() => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random horizontal position
      particle.style.left = Math.random() * 100 + '%';
      
      // Random animation duration
      particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
      
      particleContainer.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    }, 200);
  }

  createParticles();

  // Add interactive sparkle effects
  let sparkleCooldown = 0;
  document.addEventListener('mousemove', function(e) {
    if (sparkleCooldown === 0 && Math.random() > 0.9) {
      createSparkle(e.clientX, e.clientY);
      sparkleCooldown = 5;
    }
  });

  setInterval(() => {
    if (sparkleCooldown > 0) sparkleCooldown--;
  }, 20);

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '3px';
    sparkle.style.height = '3px';
    sparkle.style.background = '#ffd700';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';

    document.body.appendChild(sparkle);

    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 1000);
  }
