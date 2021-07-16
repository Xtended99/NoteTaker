


   let noteTitle;
   let noteText;
   let saveNoteBtn;
   let newNoteBtn;
   let noteList;
   let delNoteBtn;

   console.log( "Path 0 Name = " + window.location.pathname )

   if ( window.location.pathname === '/notes')
     {
      noteTitle = document.querySelector( '.note-title' );
      noteText = document.querySelector( '.note-textarea' );
      saveNoteBtn = document.querySelector( '.save-note' );
      newNoteBtn = document.querySelector( '.new-note' );
      noteList = document.querySelectorAll( '.list-container .list-group' );
      delBtn = document.querySelector( '.del-note' );
     }

   const show = function( elem )
      {
       elem.style.display = 'inline';
      };

   const hide = function( elem )
      {
       elem.style.display = 'none';
      };

   let activeNote = { };

   const getNotes = ( ) =>
     fetch('/api/notes',
        {
         method: 'GET',
         headers: {
         'Content-Type': 'application/json',
        },
       }
      );

   const saveNote = ( note ) =>
    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( note ),
    });

   const deleteNote = ( id ) =>
     fetch(`/api/notes/${id}`, {
       method: 'DELETE',
       headers: {
         'Content-Type': 'application/json',
       },
         angel: console.log( id )
     });

   const renderActiveNote = function( )
      {
        hide( saveNoteBtn );

        if ( activeNote.id )
          {
           noteTitle.setAttribute('readonly', true );
           noteText.setAttribute('readonly', true );
           noteTitle.value = activeNote.title;
           noteText.value = activeNote.text;
          }
         else
          {
           noteTitle.removeAttribute('readonly' );
           noteText.removeAttribute('readonly' );
           noteTitle.value = '';
           noteText.value = '';
          }
      };

   const handleNoteSave = function( )
      {
       const newNote =
          {
           title: noteTitle.value,
           text: noteText.value,
          };
       saveNote(newNote).then( function( )
          {
           getAndRenderNotes();
           renderActiveNote();
          }
        );
       console.log( noteTitle.value + " " + noteText.value )
      };

   const handleNoteDelete = function( e )
      {
       e.stopPropagation();

       const note = e.target;
       const noteId = JSON.parse( note.parentElement.getAttribute( 'data-note' ) ).id;

       if (activeNote.id === noteId)
         {
          activeNote = {};
         }

       deleteNote(noteId).then( function( )
          {
           getAndRenderNotes();
           renderActiveNote();
          }
         );
      };

   const handleNoteView = function( e )
      {
       e.preventDefault();
       activeNote = JSON.parse( e.target.parentElement.getAttribute( 'data-note' ) );
       renderActiveNote( );
      };

   const handleNewNoteView = function( e )
      {
       activeNote = {};
       renderActiveNote( );
      };

   const handleRenderSaveBtn = function( )
      {
       if ( !noteTitle.value.trim( ) || !noteText.value.trim( ) )
         {
          hide( saveNoteBtn );
         }
        else
         {
          show( saveNoteBtn );
         }
      };

   const renderNoteList = async function (notes)
      {
       let jsonNotes = await notes.json( );

       if ( window.location.pathname === '/notes' )
         {
          noteList.forEach( ( el ) => ( el.innerHTML = '' ) );
         }

       let noteListItems = [ ];

       const createLi = function ( text, delBtn = true )
            {
             const liEl = document.createElement( 'li' );
             liEl.classList.add( 'list-group-item' );

             const spanEl = document.createElement( 'span' );
             spanEl.classList.add( 'list-item-title' );
             spanEl.innerText = text;
             spanEl.addEventListener( 'click', handleNoteView );

             liEl.append( spanEl );

             if (delBtn)
               {
                const delBtnEl = document.createElement( 'i' );

                delBtnEl.classList.add(
                 'fas',
                 'fa-trash-alt',
                 'float-right',
                 'text-danger',
                 'delete-note'
                );

               delBtnEl.addEventListener(  'click', handleNoteDelete );

               liEl.append( delBtnEl );
             }

             return liEl;
            };

       if ( jsonNotes.length === 0 )
         {
          noteListItems.push( createLi( 'No saved Notes', false ) );
         }

       jsonNotes.forEach( function( note )
          {
           const li = createLi( note.title );
           li.dataset.note = JSON.stringify( note );

           noteListItems.push( li );
          }
         );

       if ( window.location.pathname === '/notes' )
         {
          noteListItems.forEach( ( note ) => noteList[ 0 ].append( note ) );
         }
      };

   const getAndRenderNotes = function( ) { getNotes( ).then( renderNoteList ) };

   console.log( "Path 1 Name = " + window.location.pathname )

   if ( window.location.pathname === '/notes' )
     {
      saveNoteBtn.addEventListener( 'click', handleNoteSave );
      newNoteBtn.addEventListener( 'click', handleNewNoteView );
      noteTitle.addEventListener( 'keyup', handleRenderSaveBtn );
      noteText.addEventListener( 'keyup', handleRenderSaveBtn );
      delBtn.addEventListener( 'click', handleNoteDelete );
     }

   getAndRenderNotes( );

