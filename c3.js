// Handle search functionality (Google Search)
document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('google-search-bar').value;
    if (query) {
        // Redirect to Google search
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search query.");
    }
});
