import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleNewNote } from '../../store/slicer/portal';
import { updateNoteArr } from '../../store/slicer/note';
import { getRandom } from '../../store/slicer/boxColor';
import { setStorage } from '../../shared/shareFunc';

const NewNote = () => {
  const portalRef = useRef<HTMLHeadingElement>(null);
  const dispatch = useDispatch();
  const [noteContent, setNoteContent] = useState('');
  const noteArr = useSelector((state: any) => state.note.value);
  const boxColor = useSelector((state: any) => state.boxColor.color);
  const random = useSelector((state: any) => state.boxColor.random);

  useEffect((): any => {
    // add smooth effect from fade to show
    portalRef.current ? portalRef.current.classList.add('visible') : null;
  });

  // Handle input of textarea
  const handleOnChange = (e: any) => {
    setNoteContent(e.target.value);
  };

  // Save new Note to localstorage
  const saveNote = (content: string) => {
    try {
      if (!noteArr) {
        setStorage([{ content: content }]);
      } else {
        setStorage([{ content: content }, ...noteArr]);
      }
    } finally {
      dispatch(getRandom());
      dispatch(updateNoteArr());
      dispatch(toggleNewNote());
    }
  };

  //Cancel new Note
  const cancelNote = () => {
    dispatch(toggleNewNote());
    dispatch(getRandom());
  };

  return (
    <div className="portal">
      <div
        ref={portalRef}
        className="portal-inner"
        style={{
          backgroundColor: `rgba(${boxColor[random]},0.8)`,
        }}
      >
        <h3 className="portal-title">CREATE YOUR NEW NOTE</h3>
        <textarea className="portal-textarea" onChange={handleOnChange} />
        <div className="portal-groupBtn">
          <button className="portal-btn btn-reset" onClick={() => saveNote(noteContent)}>
            Save
          </button>
          <button className="portal-btn btn-reset" onClick={() => cancelNote()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
