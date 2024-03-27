async function fetchMovies() {
    try {
      const response = await fetch("./movies.json");
      const jsonData = await response.json();
    
      console.log(jsonData);
    return jsonData; 
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle errors gracefully, e.g., return an empty array or throw a custom error
    }
  }
  var i=1;
  fetchMovies().then((movies) => {
    for (const movie of movies) {
        renderMovie(movie);
        i++;
    }
  });

  function renderMovie(movie) {
    const movieElement = document.getElementsByTagName("tbody");
    
    const imdbRating = movie.imdb.rating;
    const tomatoRating = movie.tomatoes.viewer.rating * 2; 

    const combinedRating = (imdbRating + tomatoRating) / 2;
    
    movieElement[0].innerHTML += `
      <tr>
      <th scope="row">${i}</th>
      <td>${movie.title}</td>
      <td>${movie.imdb.rating}</td>
      <td>${movie.tomatoes.viewer.rating}</td>
      <td>${combinedRating}</td>
      <td>${movie.plot}</td>
    </tr>
    `;
  
    // Assuming a container for movie elements
    // document.getElementById('movies-container').appendChild(movieElement);
  }