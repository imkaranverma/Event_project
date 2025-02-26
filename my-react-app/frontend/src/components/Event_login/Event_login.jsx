import './Event_login.css';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';
//  import { useHistory } from 'react-router-dom'; 
 import { Link } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';

export default function Event_login() {

  // console.log("helloooo from loginn")
  const navigate = useNavigate();


  const formikstep1 = useFormik({
    initialValues: {
      uniqueId: '',
      Password: '',
    },

    validationSchema: Yup.object({
      uniqueId: Yup.string(),
      Password: Yup.string(),
    }),

    onSubmit: async (values) => {

      try {
        
        console.log("values");
        const response = await axios.post('http://localhost:3000/api/loginevents/loginhere', values);
        // const response = await axios.post('http://localhost:3000/api/events/create', values);
        console.log(values);
        console.log(response)
        console.log("respomse : " , response.data)

        // Handle successful authentication, e.g., redirect to the dashboard
        navigate('/dashboard', { state: { eventId: values.uniqueId, password: values.Password } });
        // history.push('/dashboard');
        // history.push('/dashboard', { eventId: values.uniqueId, password: values.Password});
        console.log('Authentication successsssful', response.data);




        // history.push('/dashboard');
      } catch (error) {
        // Handle authentication error
        console.error('Authentication failed', error);
      }
    },
  });


  const handleAboutUniqueIDClick = (e) => {
    e.preventDefault();
    alert('Event ID is : "Your Email id (without "@gmail.com") + "_" + Your event name with no space."');
  };


    return (
        <>

<div className="form">

<div className="form-container">

<form  onSubmit={formikstep1.handleSubmit}>

    <div className="stp step-1  ">
        <div className='stp-content'>
      <div className="header">
        <h1 className="title">LOGIN INTO YOUR EVENT</h1>
        <p className="exp">
          Please enter the <a href="#" onClick={handleAboutUniqueIDClick}>Unique Event ID</a> for your Event and the password
        </p>
      </div>
      <div className='form-section'>



  {/* ^^^^^^^^ onSubmit={handleSubmit} ^^^^^^^*/}

        {/* <Questions classnam={'planner_name'}  label={'Name'} input_type={'text'} placeholder={'e.g. Karan Verma'}/>
        <Questions classnam={'planner_email'} label={'Email Address'} input_type={'text'} placeholder={'e.g. karan@sample.com'}/>
      <Questions classnam={'planner_number'}  label={'Phone Number'} input_type={'tel'} placeholder={'e.g. +123 4567 890'}/> */}

        <div className="label">
          <label htmlFor="eventcode">Event UniqueID</label>
          {/* {formikstep1.touched.fullname && formikstep1.errors.fullname && (
         <p className="error">{formikstep1.errors.fullname}</p>
         )}  */}

        </div>
        <input  className='input'
          required=""
          type="text"
          name="uniqueId"
          id="eventcode"
          placeholder="e.g. karanverma_Aaina"
          // onChange={formik.handleChange}
          onChange={formikstep1.handleChange}
          onBlur={formikstep1.handleBlur}
          value= {formikstep1.values.uniqueId}
          />
      
      
        <div className="label">
          <label htmlFor="eventpassword">Password</label>
          {/* {formikstep1.touched.email && formikstep1.errors.email && (
         <p className="error">{formikstep1.errors.email}</p>
        )}  */}

        </div>
        <input  className=' input'
          required=""
          type="password"
          name="Password"
          id="eventpassword"
          placeholder="*********"
          onChange={formikstep1.handleChange}
          onBlur={formikstep1.handleBlur}
          value= {formikstep1.values.Password}
          />

          <a href='#' className='forgotpassword'>Forgot Password?</a>
      
      
        {/* <div className="label">
          <label htmlFor="name">Phone Number</label>
          {formikstep1.touched.phone && formikstep1.errors.phone && (
         <p className="error">{formikstep1.errors.phone}</p>
        )}

          
        </div>
        <input  className='input'
          required=""
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. Phone Number"
          // onChange={formikstep1.handleChange}
          // onBlur={formikstep1.handleBlur}
          // value= {formikstep1.values.phone}
        /> */}


      
      
      </div>
      
                </div>
                
                

      <div className="btnss btns-stp1">
      <button className="register_event" type="button">
         Haven't registered Event yet?
        </button>
         {/* <Link to="/dashboard"> */}
        <button className="login-stp" type="submit" >
          Login
        </button>
    {/* </Link> */}

      </div>

      </div>
      </form>
      </div>
      </div>
        </>
    );
}


