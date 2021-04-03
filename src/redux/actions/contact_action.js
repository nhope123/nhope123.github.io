import { createSlice } from '@reduxjs/toolkit';
import emailjs from 'emailjs-com';

const defaultState = { name:'', email: '', comment: '', emailSuccess: '' };

const contactSlice = createSlice({
  name: 'contact',
  initialState: defaultState,
  reducers:{
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
    submitForm:{
      reducer:(state,action)=>{
        state.name =action.payload[0];
        state.email = action.payload[1];
        state.comment = action.payload[2];
        state.emailSuccess = action.payload[3];

      },
      prepare:(event)=>{
        event.preventDefault();
         var t = sendEmail(event.target)
         console.log(t);
         return { payload:t}


      }
    }
  }
});

async function sendEmail(target) {
  var email_status = '';
  const SERVICE_ID = 'service_y0u33m5';
  const TEMPLATE_ID = 'template_fsdwp5a';
  const USER_ID = "user_kJ31ZNgUTivz7VW9mm4OJ";
  const content = { "user_name":target[0].value,
                    "user_email": target[1].value,
                    "message": target[2].value
                  };
  console.log('before: ' +email_status);

  await  emailjs.send( SERVICE_ID, TEMPLATE_ID,content)
        .then((result) => {

          email_status = result.status;
          console.log(' win after: ' +email_status);

        },
                (error) => {

                  email_status = error.status ;
                  console.log(' fail after: ' +email_status);
                 });



    console.log('last: ' + email_status);
    return ((email_status >= 200 && email_status <= 200 )?
           ['','','','email sent'] :
          [
                        target[0].value,
                        target[1].value,
                        target[2].value,
                        'email fail'
                      ]
            );

}

export const {changeName,changeEmail,changeComment, submitForm} = contactSlice.actions;
export default contactSlice;
