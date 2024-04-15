import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../actions/userActions';

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const updatedSlice = createSlice({
  name: 'updated',
  initialState,
  reducers: {},
  // thunk aksiyonunun "pending" / "rejected" / "fulfilled" aksiyonları tetiklendiğine store'u nasıl etkliyeceğini söyleyebilmek için extraReducers kullanılır
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    });
  },
});

export default updatedSlice.reducer;
