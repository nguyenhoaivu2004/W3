const folderList = document.getElementById('nav');

folderList.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    const sectionId = event.target.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
});