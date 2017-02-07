var React = require('react');

var MovieDetails = React.createClass({

  render: function() {
    return (
      <div className="details col-sm-4">
        <h3><a href="#" className="btn btn-success" onClick={this.loadMoreMoviesClicked}>Load More Movies!</a></h3>
        <div className="row">
          <div className="col-sm-6">
            <img className="poster img-responsive" role="presentation" src={this.state.currentMovie.poster} />
          </div>
          <div className="col-sm-6">
            <h3>{this.state.currentMovie.title}</h3>
            <p className="rating">{this.state.currentMovie.rating}</p>
            <p><strong>Genre:</strong> {this.state.currentMovie.genre}</p>
            <p><strong>Runtime:</strong> {this.state.currentMovie.runtime}</p>
            <p><strong>Released:</strong> {this.state.currentMovie.released}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h4>Summary</h4>
            <p>{this.state.currentMovie.plot}</p>
            <h4>Cast</h4>
            <p>{this.state.currentMovie.cast}</p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MovieDetails;
