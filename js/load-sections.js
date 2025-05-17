function loadSection(section) {
    const contentDiv = document.getElementById('content');
    
    fetch(`${section}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the section:', error);
            contentDiv.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
}
