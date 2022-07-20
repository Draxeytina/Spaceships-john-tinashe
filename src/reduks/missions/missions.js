import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const urlMissions = 'https://api.spacexdata.com/v3/missions';
const FETCH = 'FETCH';
const initialState = [];

const fetchMissionsAPI = async () => {
  const response = await fetch(urlMissions);
  const data = await response.json();
  return data;
};

const fetchMissions = createAsyncThunk(
  FETCH,
  async () => {
    const response = await fetchMissionsAPI();
    return response;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => (action.payload));
  },
});

export default missionsSlice.reducer;
export { fetchMissions };
