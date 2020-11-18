import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleDelete } from '../../store/slicer/portal';
import { updateNoteArr } from '../../store/slicer/note';
import { setStorage } from '../../shared/shareFunc';

const DeleteNote = () => {
  const portalRef = useRef<HTMLHeadingElement>(null);
  const dispatch = useDispatch();

  const noteArr = useSelector((state: any) => state.note.value);
  const currentNote = useSelector((state: any) => state.note.current);

  // add smooth effect from fade to show
  useEffect((): any => {
    return portalRef.current ? portalRef.current.classList.add('visible') : null;
  });

  // Delete Note
  const handleDeleteNote = () => {
    const newNoteArr = [...noteArr];
    newNoteArr.splice(currentNote, 1);
    setStorage(newNoteArr);

    // Update note array
    dispatch(updateNoteArr());
    dispatch(toggleDelete());
  };

  return (
    <div className="portal">
      <div ref={portalRef} className="portal-inner" style={{ backgroundColor: 'gray' }}>
        <div className="portal-title"> DELETE THIS NOTE?</div>
        <div className="portal-groupBtn">
          <button className="portal-btn btn-reset" onClick={handleDeleteNote}>
            Yes
          </button>
          <button className="portal-btn btn-reset" onClick={() => dispatch(toggleDelete())}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNote;
