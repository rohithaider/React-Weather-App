let data = []; // Declare `data` globally to use in both functions

// Fetches and stores country data
async function getData() {
    try {
        // Fetch all countries data
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();

        // Map the response to the desired format
        data = countries.map(country => ({
            location: country.capital && country.capital[0] ? country.capital[0] : country.name.common,
            latitude: country.latlng && country.latlng[0] ? country.latlng[0] : 0,
            longitude: country.latlng && country.latlng[1] ? country.latlng[1] : 0
        }));
        console.log("Fetched data:", data); // Log to verify data
    } catch (error) {
        console.error("Error fetching countries data:", error);
        data = []; // Ensure data is empty on error
    }
}

// Immediately fetch country data on load
(async () => {
    await getData();
})();

function getLocations() {
    // Check if data is loaded; if not, warn
    if (data.length === 0) {
        console.warn("Data is empty. Make sure `getData` is called and completed.");
    }
    return data;
}

// Returns location data by name
function getLocationByName(location) {
    if (!location) return null;

    // Ensure `data` is populated
    if (data.length === 0) {
        console.warn("Data is empty. Did you call getData?");
        return null;
    }

    // Find the matching location
    const filtered = data.filter(item => item.location.toLowerCase() === location.toLowerCase());

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        // Return a default location if not found
        const defaultLocation = {
            location: "Unknown",
            latitude: 0,
            longitude: 0
        };
        return defaultLocation;
    }
}

export { getLocations, getLocationByName };
