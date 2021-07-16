
let fssync = require( 'fs' );
let crypto = require('crypto');
let path = require('path')
let { v4: uuidv4 } = require( "uuid"  )

crypto.createHash( 'md5' ).update( "Ange" ).digest( 'hex' );

// console.log( "From apiRoutes.js = " + __dirname );

module.exports = (app) =>
   {
    console.log("API Routes Base Direcotry = " + __dirname )

    let read_notes = function( )
       {
        let notes_file = fssync.readFileSync( path.join( __dirname, "../../models/db/notes.json" ), "utf-8" );

        return notes_file ? JSON.parse( notes_file ) : [ ];
       };

    app.get('/assets', function( req, res )
       {
        res.contentType( "index.js"  );
        res.sendFile(path.join(__dirname, '../../public/assets/js', 'index.js'));
       }
     );

    app.get('/assets/css/styles.css', function(req, res)
       {
        res.contentType( "styles.css"  );
        res.sendFile(path.join(__dirname, '../../public/assets/css', 'styles.css'));
       }
     );

    app.post('/api/notes', function( req, res )
       {
        const body = { ...req.body, id: JSON.stringify( crypto.createHash( 'md5' ).
            update( JSON.stringify ( req.body ) ).digest( 'hex' ) ) };

        const data = JSON.stringify( read_notes( ).concat( body ), null, 2 );

        fssync.writeFileSync( path.join( __dirname, "../../models/db/notes.json" ), data, "utf-8" );
        res.send( body );
       }
     );

    app.delete( '/api/notes/:id', function( req, res )
       {
        let { id } = req.params;
        let filtered = JSON.stringify( read_notes( ).filter( o => o.id !== id ) );

        fssync.writeFileSync( path.join( __dirname, "../../models/db/notes.json" ), filtered, "utf-8" );
        res.send( "success" );
       }
     );

    app.get('/notes', function( _, res )
       {
        res.sendFile(path.join(__dirname, '../../public', 'notes.html'));
       }
     );

    app.get('/api/notes', function( _, res )
       {
        res.json( read_notes( ) );
       }
     );

    app.get('/', function( _, res )
       {
        res.sendFile(path.join(__dirname, '../../public', 'index.html'));
       }
     );

    app.get( '/index.js', function( req, res )
       {
       res.contentType( "index.js"  );
       res.sendFile(path.join(__dirname, '../../public/assets/js', 'index.js'));
       }
     );

    app.get( '*', function( req, res )
       {
        res.sendFile(path.join(__dirname, '../../public', 'index.html'));
       }
     );
   };
