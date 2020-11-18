import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BoxNote from '../components/boxNote';
import { updateNoteArr } from '../../store/slicer/note';
import { toggleNewNote } from '../../store/slicer/portal';
import { getRandom } from '../../store/slicer/boxColor';

function Main() {
  const dispatch = useDispatch();

  const boxColor = useSelector((state: any) => state.boxColor.color);
  const noteArr = useSelector((state: any) => state.note.value);

  useEffect(() => {
    dispatch(getRandom());
    dispatch(updateNoteArr());
  }, []);

  return (
    <main className="main">
      <div className="main-inner">
        {noteArr && noteArr.length >= 1 ? (
          noteArr.map((el: string, i: number) => (
            <BoxNote
              key={i}
              content={noteArr[i].content}
              time={'Nov 17 2020'}
              color={`rgba(${boxColor[i % boxColor.length]},1)`}
              id={i}
            />
          ))
        ) : (
          <div>
            There's no Note. Add new{' '}
            <a className="main-link" onClick={() => dispatch(toggleNewNote())}>
              here
            </a>
            !
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
