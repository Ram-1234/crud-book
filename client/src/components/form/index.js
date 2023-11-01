import React, { useState } from 'react';
import { useForm} from "react-hook-form";
import * as yup from "yup";


const validationSchema = yup.object().shape({
    title: yup.string().required('Book title required'),
    auther: yup.string().required('Book Auther required'),
    summary: yup.string().required("Book Summary required!"),
});

function Farm(props) {
  const {title, summary, auther, setUpdateBook, update,_id}=props;
  const [submited, setSubmitted]= useState(false);

    const {  handleSubmit, formState: { errors }, watch,reset,register,setValue } = useForm({
      defaultValues:{title:title, auther:auther, summary:summary},
        validationSchema,
    });
  
    const onChange = ()=>{
      setSubmitted(false);
    }

    /** submit book */
    const onSubmit = async (formData) => {
        try {
          console.log('form Data', formData);
          if(update){
            const resp = await fetch("/updatebook",{
              method:"POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify( {_id:_id, updateData:formData}),
            })

            if (resp.ok) {
              alert('Form data updated successfully');
              setSubmitted(true)
                reset(()=>({title:"", auther:"", summary:""}))
                setUpdateBook(false);
            } else {
              console.error('Error submitting form data');
              setSubmitted(true)
            }
            return 
          }


          const response = await fetch("/addbook", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( formData),
          });



          if (response.ok) {
            alert('Form data submitted successfully');
            setSubmitted(true)
              reset(()=>({title:"", auther:"", summary:""}))
              setUpdateBook(false);
          } else {
            console.error('Error submitting form data');
            setSubmitted(true)
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }

    return (
        <>
        <div className='container col-6 border border-grey m-auto mt-2'>
            <h4 className='header mb-3 mt-2'>Book Details</h4>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div className="mb-3">
                    <label  className="form-label">Book Title</label>
                        <input type="text" className="form-control text-center" onChange={onChange} id="title" {...register("title")} name="title" aria-describedby="booktitleHelp" required />
                    {/* <div id="booktitleHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Book Auther</label>
                        <input type="text" {...register('auther')} onChange={onChange} className="form-control text-center" id="auther" name="auther" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Book Summary</label>
                        <textarea className="form-control" {...register('summary')} onChange={onChange} id="summary" name="summary" rows="4" cols="50"  required={true} />
                </div>
                  {submited && <p style={{font:"12px", color:"green", margin:"0", padding:"0"}}>Form Successfuly submitted</p>}
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Farm;

