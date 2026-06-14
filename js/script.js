// ============================================
// main.js – Portfolio Zahra Naila
// ============================================
 
document.addEventListener('DOMContentLoaded', () => {
 
  // ── Fade-in animation on load ──────────────
  const heroText = document.querySelector('.hero-text');
  const heroCard = document.querySelector('.hero-card');
 
  if (heroText) {
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(24px)';
    heroText.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    setTimeout(() => {
      heroText.style.opacity = '1';
      heroText.style.transform = 'translateY(0)';
    }, 100);
  }
 
  if (heroCard) {
    heroCard.style.opacity = '0';
    heroCard.style.transform = 'translateY(24px)';
    heroCard.style.transition = 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s';
    setTimeout(() => {
      heroCard.style.opacity = '1';
      heroCard.style.transform = 'translateY(0)';
    }, 100);
  }
 
  // ── Smooth hover wobble on profile card ────
  const card = document.querySelector('.card');
  if (card) {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      card.style.transform = 'rotate(1deg) translateY(-4px)';
      card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotate(0deg) translateY(0)';
      card.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
    });
  }
 
});