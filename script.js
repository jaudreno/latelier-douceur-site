
document.querySelectorAll('[data-page]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(page).classList.add('active');
  });
});
