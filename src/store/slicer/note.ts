import { createSlice } from '@reduxjs/toolkit';
import { getStorage, setStorage } from '../../shared/shareFunc';

interface NoteState {
  value: string[];
  current: number;
}

const initialState: NoteState = { value: [], current: 0 };

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    updateNoteArr: (state) => {
      state.value = getStorage();
    },
    setCurrentNote: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { updateNoteArr, setCurrentNote } = noteSlice.actions;

export default noteSlice.reducer;
