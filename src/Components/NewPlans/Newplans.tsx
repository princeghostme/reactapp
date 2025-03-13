import { useDispatch, useSelector } from 'react-redux';
import ItemLong from '../ItemLongComp/ItemLong';
import { RootState } from '../../Redux/store';
import { useEffect } from 'react';
import { newPlans } from '../../Redux/Reducers/Plans';
import { Link } from 'react-router-dom';
import { addSubscription } from '../../Redux/Reducers/Subscriptions';

const NewPlans = () => {
    const subscribeCart = useSelector((state: RootState) => state.local.subscribtions.value);
    console.log(subscribeCart);
    const plans = useSelector((state: RootState) => state.session.plans.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newPlans());
    }, [dispatch]);

    return (
        <div>
            <div>
                <h1 className='text-center fs-1 fw-bold lh-lg'>All New Medication Plans</h1>
            </div>
            <div className='row d-flex justify-content-around'>
                {plans.map((val, index) => (
                    <div key={index} className="col-md-3 my-3 p-0 m-0">
                        <ItemLong
                            id = {val.id}
                            image={val.image}
                            heading={val.heading}
                            duration={val.duration}
                            oldPrice={val.oldPrice}
                            effectivePrice={val.newPrice}
                            buttons={
                                <div className='row mt-4 d-flex justify-content-between'>
                                    <div className='col-md-6 my-2'>
                                        <Link to={`/plan/${val.id}`} className="btn btn-outline-secondary fw-bold px-2 py-2 w-100">
                                            View
                                        </Link>
                                    </div>
                                    {
                                        !subscribeCart.includes(val.id) && <div className='col-md-6 my-2'>
                                            <button className="btn btn-outline-success fw-bold px-2 py-2 w-100" onClick={()=>{
                                                dispatch(addSubscription(val.id))
                                            }}>
                                                Subscribe
                                            </button>
                                        </div>
                                    }
                                    
                                </div>
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewPlans;
