document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupButton = document.getElementById('popupButton');
    const closePopup = document.getElementById('closePopup');
  
    // Show popup
    popupButton.addEventListener('click', () => {
      popup.classList.add('show');
      popup.setAttribute('aria-hidden', 'false');
    });
  
    // Close popup
    closePopup.addEventListener('click', () => {
      popup.classList.remove('show');
      popup.setAttribute('aria-hidden', 'true');
    });
  
    // Close popup if clicked outside of it
    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.classList.remove('show');
        popup.setAttribute('aria-hidden', 'true');
      }
    });
  });
  