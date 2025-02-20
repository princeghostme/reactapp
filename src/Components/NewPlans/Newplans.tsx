import { useDispatch, useSelector } from 'react-redux';
import ItemLong from '../ItemLongComp/ItemLong';
import { RootState } from '../../Redux/store';
import { useEffect } from 'react';
import { newPlans } from '../../Redux/Reducers/Plans';
import { Link } from 'react-router-dom';

const NewPlans = () => {
    const plans = useSelector((state: RootState) => state.local.plans.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newPlans());
    }, []);

    return (
        <div>
            <div>
                <h1 className='text-center fs-1 fw-bold lh-lg'>All New Medication Plans</h1>
            </div>
            <div className='row d-flex justify-content-around p-5'>
                {plans.map((val, index) => (
                    <div key={index} className="col-md-3 m-3">
                        <ItemLong
                            image={val.image}
                            heading={val.heading}
                            subType={val.subType}
                            description={val.description}
                            keyPoints={val.keyPoints}
                            oldPrice={val.oldPrice}
                            effectivePrice={val.newPrice}
                            buttons={
                                <div className='mt-4 d-flex justify-content-between'>
                                    <button className="btn btn-success fw-bold px-2 py-2">
                                        Add to Cart
                                    </button>
                                    <Link to={`/plan/${val.id}`} className="btn btn-secondary fw-bold px-2 py-2">
                                        View Details
                                    </Link>
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
