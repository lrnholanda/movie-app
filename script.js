const title = "spider"
const container = document.getElementById("container")
getMovies()

async function getMovies(name) {
    try {
        const movie = await fetch (`https://www.omdbapi.com/?s=${title}&apikey=307360c5`);
        const json = await movie.json();
        const movies = json;
        if(movies.Response === "True") DisplayMovie(movies.Search); 
        console.log(movies.Search[0].Year)

    } catch (err) {
    console.error(err);
    }
}

function DisplayMovie(movie) {
    container.innerHTML = "";
    const ul = document.createElement("ul");
    for(let i = 0; i < movie.length; i++) {
      console.log(`${movie[i].Title}`)
      const li = document.createElement("li");
      li.innerHTML = movie[i].Title;
      ul.appendChild(li);
    }
 container.appendChild(ul);
}
