import React,{useState} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import bookplaceholder from  '../../public/assets/images/book_placeholder1.png';

export default function AddBook() {
  const router = useRouter()
  const query = router.query;
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

    const formik = useFormik({
      initialValues: {
        bookName: '',
        isFavorite: false
      },
      validationSchema: Yup.object({
          categoryName: Yup.string()
          .required('Must add a Book name'),
      }),
      onSubmit: values => {
          handleAddSubmit(values);
      },
    });

    const handleAddSubmit = (data) =>{
        console.log(data,'data')
        setLoading(true);
        fetch('https://61167dbc1c592d0017bb7f4c.mockapi.io/books',{
          method:"POST",
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({  
              name: data.bookName,  
              isFavorite: data.isFavorite 
          })
      })
      .then(response => {
          setLoading(false);
          console.log(response)

          if(response.status=== 201 || response.status=== 200){
              return router.push('/books')
          } 
          
      })
      .catch(error => {
          setLoading(false);
          setError('Error Ocurred,Try again');
          console.log(error)
      })

    }

      return (
        <div className="app-add--category mt-2">
       

          <div className="container ">
           <br />
            <form className="form needs-validation" method="POST" onSubmit={formik.handleSubmit}>
              <fieldset disabled={loading ? true : false}>
                  <div className="row align-items-center">
                      <div className="col-12 col-md-4">
                        <div className="cat--cover">
                          <Image src={bookplaceholder} width="" />
                        </div>
                      </div>
                      <div className="col-12  col-md-6 pe-0 pt-0">

                        <div className="mb-3">
                        {formik.touched.bookName && formik.errors.bookName ? (
                              <><div className="alert alert-danger pt-2 pb-2" role="alert">{formik.errors.bookName}</div></>
                          ) : null}

                          <label className="form-label" htmlFor="bookName">Book Name</label>
                          <input
                              className="form-control"
                              id="bookName"
                              name="bookName"
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.bookName}
                              aria-describedby="eHelp"
                          />
                        
                      </div>
                      <div class="form-check">
                          <input className="form-check-input" 
                              type="checkbox" 
                              id="isFavorite" 
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.isFavorite}
                              style={{cursor:'pointer'}}
                          />
                          <label className="form-check-label" htmlFor="isFavorite" style={{cursor:'pointer'}}>
                              Favorite
                          </label>
                      </div>
                          <button className="btn btn-secondary w-100 mt-1" type="submit">
                              Create
                          </button>
                      </div>
                  </div>
              
              </fieldset>

              </form>

          </div>
  </div>
      )
}
