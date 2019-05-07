const apiRoot = 'https://2019.europe.wordcamp.org/wp-json';

processAndRenderData = ( data ) => {
	console.log( data ); // TODO sort and filter data, then render it.
};

init = () => {
	Promise.all([
		fetch( apiRoot + '/wp/v2/sessions?status=publish&per_page=100' ).then( response => response.json() ),
		fetch( apiRoot + '/wp/v2/speakers?status=publish&per_page=100' ).then( response => response.json() ),
		fetch( apiRoot + '/wp/v2/session_track?status=publish&per_page=100' ).then( response => response.json() ),
	])
	.then( data => {
		processAndRenderData( {
			sessions: data[0],
			speakers: data[1],
			tracks: data[2],
		} );
	})
	.catch( error => {
		console.log( 'Error: ', err );
	});
};
init();
