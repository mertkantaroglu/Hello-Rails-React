
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/greetings';

const initialState = {
  greetingsList: [],
  error: null,
}

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data.message;
  } catch (error) {
    return error.message
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getGreetings.fulfilled,
      (state, action) => {
        state.greetingsList = state.greetingsList.concat(action.payload);
      }
    );
    builder.addCase(
      getGreetings.rejected,
      (state, action) => {
        state.error = action.error.message;
      }
    );
  },
});

export default greetingsSlice.reducer;