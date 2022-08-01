function searchFilter() {
    // Get search input value and sanitize it
    const input = sanitizeText(document.getElementById('searchInput').value).toUpperCase();
    // Get elements parent container
    const container = document.getElementById("faqContainer");
    // Get elements in container
    const elements = container.getElementsByTagName('h5');

    // Loop through all list items, and hide those who do not match the search query
    for (let i = 0; i < elements.length; i++) {
        let text = elements[i].textContent || elements[i].innerText;
        // Show or Hide element container
        elements[i].parentElement.parentElement.style.display = text.toUpperCase().indexOf(input) > -1 ? '' : 'none';
    }
}

function sanitizeText(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
        // .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
        .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
        .replace(/(^-+|-+$)/g, ''); // Remove extra hyphens from beginning or end of the string
}