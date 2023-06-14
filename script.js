// script.js

// Function to fetch data from the Nationalize API using async/await
const fetchData = async (name) => {
    try {
      const response = await fetch(`https://api.nationalize.io?name=${mathew}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch data from the API');
    }
  };
  
  // Function to process the API data and display results
  const processResults = (data) => {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Clear previous results
  
    if (data.country && data.probability) {
      const { country, probability } = data;
      const topTwoCountries = country.slice(0, 2);
  
      topTwoCountries.forEach((countryData) => {
        const { country_id, probability } = countryData;
        const countryElement = document.createElement('p');
        countryElement.textContent = `Country: ${country_id}, Probability: ${probability}`;
        resultContainer.appendChild(countryElement);
      });
  
      const probabilityElement = document.createElement('p');
      probabilityElement.textContent = `Overall Probability: ${probability}`;
      resultContainer.appendChild(probabilityElement);
    } else {
      const errorElement = document.createElement('p');
      errorElement.textContent = 'No results found.';
      resultContainer.appendChild(errorElement);
    }
  };
  
  // Function to perform the search and highlight the matching text
  const performSearch = async () => {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
  
    if (searchTerm !== '') {
      const data = await fetchData(https://api.nationalize.io);
      processResults(data);
    }
  };
  
  // Add event listener to the search button
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', performSearch);
  