import { createSlice } from '@reduxjs/toolkit';

interface PortalState {
  portalNewNote: boolean;
  portalCurrentNote: boolean;
  portalDelete: boolean;
}

const initialState: PortalState = {
  portalNewNote: false,
  portalCurrentNote: false,
  portalDelete: false,
};

const portalSlice = createSlice({
  name: 'portal',
  initialState,
  reducers: {
    toggleNewNote: (state) => {
      state.portalNewNote = !state.portalNewNote;
    },
    toggleCurrentNote: (state) => {
      state.portalCurrentNote = !state.portalCurrentNote;
    },
    toggleDelete: (state) => {
      state.portalDelete = !state.portalDelete;
    },
  },
});

export const { toggleNewNote, toggleCurrentNote, toggleDelete } = portalSlice.actions;

export default portalSlice.reducer;
