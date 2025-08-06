const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchQuery = 'hilarious';
const rating = 'g';
const url = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&rating=${rating}&api_key=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });