import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import noItemImg from  '../../public/assets/images/not_exist.png';
import CustomModal  from '../../components/Modal/Modal';



export default function Categories({simiplified}) {
    const [loading, setLoading] = useState(false);
    const [allcategories, setAllCategories] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const [currentId, setCurrentId] = useState('');

    
  useEffect(() => {
    setLoading(true);
    fetch('https://61167dbc1c592d0017bb7f4c.mockapi.io/categories',{
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
         return response.json();
    }).then(data => {
        setAllCategories(data);
        setLoading(false);
    })
    .catch(error => {
        setLoading(false);
        console.log(error)
    })
   }, [])

   const triggerModal = (categoryId,index) => {
       setCurrentId(categoryId);
       setIsOpen(true);
   }

   const handleDelete = (catId) => {
       console.log(catId,'catId');
        setIsOpen(false);
        setLoading(true);
        fetch(`https://61167dbc1c592d0017bb7f4c.mockapi.io/${catId.toString()}`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            // setAllCategories(data);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        })
   }

   const closeModal = () => setIsOpen(false);
    
   const limit = simiplified ? 7 : -1;

    return (
        <>
        <div className="row g-3 mb-2 mt-3">
             {loading === false && allcategories ? allcategories.slice(0,limit).map((category,index) => {
                if(!category){
                    return (<div className="jumbotron">
                        <div className="noitem--img">
                            <Image src={noItemImg} width=""  />
                        </div>
                        <a className="d-flex align-items-center">
                            <i className="fas fa-plus"></i>
                            <span>Create a Category</span> 
                        </a>
                        </div>)
                }
                return(
                <div className="col-12 col-md-4  col-lg-3" key={category.id}>
                    <a className="card" onClick={() => triggerModal(category.id,index)}>
                        <div className="card-body">
                            <div className="card--description">
                                <h5 className="display-4">{category.name}</h5>
                                <span>
                                   <i className="fas fa-plus"></i>
                                </span>
                            </div>
                        </div>
                    </a>
           
                </div>
                )
            }) :  (
            <div  className="jumbotron">
                <span className="p-4">
                    Loading....
                </span>
            </div>
        ) }
             
        </div>


        {isOpen && (<CustomModal
                      open={isOpen}
                      onClose={closeModal}
                      text={currentId}
                    >
                        <div className="col-12 action--trigger">
                            <Link href={`/categories/add-category?_id=${currentId}&edit=true`}><button className="btn btn-primary w-100">Edit</button></Link>
                            <button className="btn btn-danger w-100" onClick={() => handleDelete(currentId)}>Delete</button>
                        </div>
                        
                    </CustomModal>)
                 
         }  
    </>

    )
}
 