import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ROCKETS_API = 'https://api.spacexdata.com/v3/rockets';

const getRocketsFromAPI = async () => {
  const response = await fetch(ROCKETS_API);
  const data = await response.json();
  return data;
};

const GET_ROCKETS = 'space-travellers/rockets/GET_ROCKETS';
const initialState = [];

const fetchRockets = createAsyncThunk(
  GET_ROCKETS,
  async () => {
    const response = await getRocketsFromAPI();
    return response;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => (action.payload));
  },
});

export default rocketsSlice.reducer;
export { fetchRockets };
