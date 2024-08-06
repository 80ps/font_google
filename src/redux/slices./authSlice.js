import { createSlice } from '@reduxjs/toolkit'; //1. create slice

const initialState = {
  //2. 초기상태 정의
  userName: null,
  userEmail: null,
  userImage: null,
  userToken: null,
};

export const authSlice = createSlice({
  //3. slice 생성
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // state에 있는 counter 들어오느느 action 값에
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userImage = action.payload.userImage;
      state.userToken = action.payload.payload.userToken;
    },
    logout: (state, action) => {
      state.userName = null;
      state.userEmail = null;

      state.userImage = null;
      state.userToken = null;
    },
  },
});
const a = { abc: 1, def: 2 };
const { abc, def } = a;

// export const authAction = authSliceSlice.actions;
export const { login, logout } = authSlice.actions;

export default authSlice.reducer; //4. export 된 ㄹ함수들을 store에 등록
