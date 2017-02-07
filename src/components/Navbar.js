var React = require('react');

var Navbar = React.createClass({

  render: function() {
    return (
      <div className="sort row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <li className="active"><a href="#">Latest Releases</a></li>
            <li><a href="#">A-Z</a></li>
            <li className="nav-text pull-right">{this.state.movies.length} movies</li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
