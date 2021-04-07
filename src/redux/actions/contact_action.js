import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from 'emailjs-com';

const defaultState = { name:'', email: '', comment: '', emailSuccess: '', human: false };

const SERVICE_ID = 'service_y0u33m5';
const TEMPLATE_ID = 'template_fsdwp5a';
const USER_ID = "user_kJ31ZNgUTivz7VW9mm4OJ";

export const sendEmail = createAsyncThunk(
  'contact/emailStatus',
  async (target,thunkApi)=> {
    const content = { "user_name": target[0],
                      "user_email": target[1],
                      "message": target[2],
                    };

    const response = await emailjs.send( SERVICE_ID, TEMPLATE_ID, content,USER_ID );
    return response
  }
)


const contactSlice = createSlice({
  name: 'contact',
  initialState: defaultState,
  reducers:{
    isVarified(state){
      state.human = true;
    },
    changeName:{
      reducer:(state, action)=>{
        state.name  = action.payload
      },
      prepare:(value)=>{
        return{payload: value.target.value}
      }
    },
    changeEmail: {
      reducer:(state, action)=>{
        state.email  = action.payload
      },
      prepare:(value)=>{
        return{payload: value.target.value}
      }
    },
    changeComment: {
      reducer:(state, action)=>{
        state.comment  = action.payload
      },
      prepare:(value)=>{
        return{payload: value.target.value}
      }
    },
  },
  extraReducers:{
    [sendEmail.fulfilled]: (state,action)=>{
      console.log('Email Success');
      state.emailSuccess= 'email sent';
    },
    [sendEmail.rejected]: (state,action)=>{
      console.log('Email Failed');
      state.emailSuccess= 'email fail';
    },
  }
});

export const {changeName,changeEmail,changeComment,isVarified } = contactSlice.actions;
export default contactSlice;
