// React
var React = require('react')
var ReactDOM = require('react-dom')

// Sample data
var movieData = require('./movie-data.json') // 12 movies
var lotsMoreMovies = require('./lots-more-movies.json') // lots more

// Components
var Header = require('./components/Header')
var Movie = require('./components/Movie')
var MovieList = require('./components/MovieList')
var Navbar = require('./components/Navbar')
var MovieDetails = require('./components/MovieDetails')

var App = React.createClass({
  movieClicked: function(movie) {
    this.setState({
      currentMovie: movie
    })
  },
  loadMoreMoviesClicked: function() {
    var allTheMovies = movieData.concat(lotsMoreMovies)
    this.setState({
      movies: allTheMovies
    })
  },
  getInitialState: function() {
    return {
      movies: movieData,
      currentMovie: movieData[0]
    }
  },
  render: function() {
    return (
      <div>
        <div className="header row">
          <div className="col-sm-9">
            <h1>Buyflix</h1>
          </div>
          <Header name={this.props.name} />
        </div>
        <Navbar movieCount={this.state.movies.length} />
        <div className="main row">
          <MovieList movieClicked={this.movieClicked} movies={this.state.movies} />
          <MovieDetails />
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App name="Jeff" />, document.getElementById("app"))
