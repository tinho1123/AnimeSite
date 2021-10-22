const fetchmain = (chave) => {
    const url = fetch(`https://api.themoviedb.org/3/movie/550?api_key=${chave}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    return url
}

module.exports = fetchmain;