import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const urlMissions = 'https://api.spacexdata.com/v3/missions';
const FETCH = 'FETCH';
const MISSIONS = 'missions';
const initialState = {
  missions: [],
  status: null,
};

const refactorList = (obj) => {
  let result = {};
  obj.forEach((item) => {
    result = {
      ...result,
      [item.mission_id]:
      {
        description: item.description,
        mission_name: item.mission_name,
        reserved: false,
      },
    };
  });
  return result;
};

const fetchMissionsAPI = async () => {
  const response = await fetch(urlMissions);
  const data = await response.json();
  return refactorList(data);
};

export const fetchMissions = createAsyncThunk(
  FETCH,
  async () => {
    const response = await fetchMissionsAPI();
    return response;
  },
);

const missionsSlice = createSlice({
  name: MISSIONS,
  initialState,
  reducers: {
    updateMission: (state, action) => ({
      ...state,
      missions: {
        ...state.missions,
        [action.payload]: {
          ...state.missions[action.payload],
          reserved: !state.missions[action.payload].reserved,
        },
      },
    }),
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchMissions.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      missions: action.payload,
    }),
    [fetchMissions.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default missionsSlice.reducer;
export const { updateMission } = missionsSlice.actions;
