import React from 'react';
import { useSelector } from 'react-redux';

import NewNote from '../components/newNote';
import CurrentNote from '../components/CurrentNote';
import DeleteNote from '../components/deleteNote';

const Portal = () => {
  const newNoteState = useSelector((state: any) => state.portal.portalNewNote);
  const currentNoteState = useSelector((state: any) => state.portal.portalCurrentNote);
  const deleteState = useSelector((state: any) => state.portal.portalDelete);

  return (
    <>
      {/* Portal new Note */}
      {newNoteState ? <NewNote /> : null}

      {/* Portal current Note */}
      {currentNoteState ? <CurrentNote /> : null}

      {/* Confirm delete note or not */}
      {deleteState ? <DeleteNote /> : null}
    </>
  );
};

export default Portal;
