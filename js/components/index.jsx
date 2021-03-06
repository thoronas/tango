/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var getPosts = require( './shared/get-posts.jsx' ),
	Content = require( './content.jsx' ),
	Sidebar = require( './sidebar.jsx' );

/**
 * 
 */
module.exports = React.createClass( {
	mixins: [getPosts],
	render: function() {
		var loop = this.state.posts.map( function( post ) {
			return (
				<Content key={ post.id } post={ post } />
			);
		});

		return (
			<div>
				<div id="primary" className="content-area">
					<main id="main" className="site-main" role="main">
						{ loop }
					</main>
				</div>
				<Sidebar />
			</div>
		);
	}
} );
