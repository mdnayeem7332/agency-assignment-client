import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { name, email, photoURL } = loggedInUser;

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: name,
            email: email
        }
    });

    const onSubmit = data => {
   
        fetch('https://fierce-cliffs-21804.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order has been send successfully.');
                }
            })
    }

    return (
        <div className="row">

            <Sidebar/>

            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>
                <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1 >Order</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>
                <form className="FormStyle" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" className="form-control form-control-lg" placeholder="Your email address" />
                        {errors.email && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceName" className="form-control form-control-lg" placeholder="Graphic Design" />
                        {errors.serviceName && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="6" placeholder="Project Details"></textarea>
                        {errors.details && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="number" ref={register({ required: true })} name="price" className="form-control form-control-lg" placeholder="Price" />
                                {errors.price && <span className="text-danger">This field is required</span>}
                            </div>
                            <div class="col">
                                <button type="file" className="btn btn-success w-100 form-control-lg btnUploadFile"> Upload project file </button>
                                <span className="text-secondary">*Optional</span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btnSubmit" >Submit</button>
                </form>
            </div>
        </div>

    );
};

export default OrderForm;