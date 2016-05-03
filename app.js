console.log('js attached!')

$('#jaws').on('click', function() {


$.ajax({
  url: 'http://www.omdbapi.com/?s=judged',
  method: 'get'
}).done(function(movies){

    movies.Search.forEach(function(movie){
      var $newMovie = $('<p>').text(movie.Title);
      $('.moviesList').append($newMovie);
      var $newPoster = $('<img>').attr('src', movie.Poster);
      $('.moviesList').append($newPoster);
    });
  });
});
