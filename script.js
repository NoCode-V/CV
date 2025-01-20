function toggleLinks(id) {
  const elements = document.querySelectorAll('.project-links');
  elements.forEach(element => {
    if (element.id === id) {
      if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
        element.style.opacity = '1';
      } else {
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.display = 'none';
        }, 300); // Match this duration with the CSS transition duration
      }
    } else {
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.display = 'none';
      }, 300); // Match this duration with the CSS transition duration
    }
  });
}
