var React = require('react')
var Movie = require('./Movie')

var MovieList = React.createClass({
  render: function() {
    return (
      <div className="movies col-sm-8">
        <div className="row">
          {this.props.movies.map(function(movie) {
            return (
              <Movie key={movie.id}
                     movie={movie} />
            )
          })}
        </div>
      </div>
    )
  }
})

module.exports = MovieList
