import React,{useState} from 'react';
import {useRouter} from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function AddCategory() {
    const router = useRouter()
    const query = router.query;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const formik = useFormik({
        initialValues: {
          categoryName: '',
          isFavorite: false
        },
        validationSchema: Yup.object({
            categoryName: Yup.string()
            .required('Must add a category name'),
        }),
        onSubmit: values => {
            handleAddSubmit(values);
        },
      });


      const handleAddSubmit = (data) =>{
          console.log(data,'data')
          setLoading(true);
          fetch('https://61167dbc1c592d0017bb7f4c.mockapi.io/categories',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  
                name: data.categoryName,  
                isFavorite: data.isFavorite 
            })
        })
        .then(response => {
            setLoading(false);
            console.log(response)

            if(response.status=== 201 || response.status=== 200){
                return router.push('/categories')
            } 
            
        })
        .catch(error => {
            setLoading(false);
            setError('Error Ocurred,Try again');
            console.log(error)
        })

      }

      const handleUpdateSubmit = (data) =>{
        console.log(data,'data')
        setLoading(true);
        fetch('https://61167dbc1c592d0017bb7f4c.mockapi.io/categories',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  
                name: data.categoryName,  
                isFavorite: data.isFavorite 
            })
        })
        .then(response => {
            setLoading(false);
            console.log(response)
        })
        .catch(error => {
            setLoading(false);
            setError('Error Ocurred,Try again');
            console.log(error)
        })

    }

      return (
          <div className="app-add--category mt-2">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Alert!</strong> You should fill up the field below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

              <div className="container ">

              <form className="form needs-validation" method="POST" onSubmit={formik.handleSubmit}>
                <fieldset disabled={loading ? true : false}>
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4">
                           <div className="cat--cover">
                           </div>
                        </div>
                        <div className="col-12 col-lg-6 pe-0 pt-0">

                           <div className="mb-3">
                           {formik.touched.categoryName && formik.errors.categoryName ? (
                                <><div className="alert alert-danger pt-2 pb-2" role="alert">{formik.errors.categoryName}</div></>
                            ) : null}

                            <label className="form-label" htmlFor="categoryName">Category Name</label>
                            <input
                                className="form-control"
                                id="categoryName"
                                name="categoryName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.categoryName}
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
