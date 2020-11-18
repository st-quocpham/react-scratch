import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleCurrentNote, toggleDelete } from '../../store/slicer/portal';
import { setCurrentNote } from '../../store/slicer/note';

const BoxNote = ({ content, time, color, id }: any) => {
  const dispatch = useDispatch();

  // Show chosen Note
  const showNote = () => {
    dispatch(setCurrentNote(id));
    dispatch(toggleCurrentNote());
  };

  const showDeleteConfirm = (e: any) => {
    e.stopPropagation();
    
    dispatch(setCurrentNote(id));
    dispatch(toggleDelete());
  };
  return (
    <section className="box" style={{ backgroundColor: color }} onClick={showNote}>
      <div className="box-inner">
        <div className="box-content">
          {content.length > 280 ? `${content.slice(0, 280)}...` : content}
        </div>
        <div className="box-bottom">
          <div className="box-time">{time}</div>
          <button title="Edit Note" className="box-btn btn-reset" onClick={showDeleteConfirm}>
            <i className="fas fa-minus-circle icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoxNote;
