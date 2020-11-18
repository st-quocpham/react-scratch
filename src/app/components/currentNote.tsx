import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCurrentNote } from '../../store/slicer/portal';

const CurrentNote = () => {
  const portalRef = useRef<HTMLHeadingElement>(null);
  const dispatch = useDispatch();

  const noteArr = useSelector((state: any) => state.note.value);
  const currentNote = useSelector((state: any) => state.note.current);
  const color = useSelector((state: any) => state.boxColor.color);

  // add smooth effect from fade to show
  useEffect((): any => {
    return portalRef.current ? portalRef.current.classList.add('visible') : null;
  });

  return (
    <div className="portal">
      <div
        ref={portalRef}
        className="portal-inner"
        style={{ backgroundColor: `rgb(${color[currentNote % color.length]})` }}
      >
        <h3 className="portal-title">YOUR NOTE</h3>
        <p className="portal-content">{noteArr[currentNote].content}</p>
        <div className="portal-groupBtn">
          <button className="portal-btn btn-reset"onClick={() => dispatch(toggleCurrentNote())}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentNote;
