// Function to handle search submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value from the search input
    var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    // Perform your search logic here (e.g., redirect to search results page or filter content)
    // For demonstration, let's just log the search query to the console
    console.log('Search query:', searchQuery);

    // Clear the search input field (optional)
    document.getElementById('searchInput').value = '';
});
