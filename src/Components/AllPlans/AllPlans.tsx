import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { allPlans } from "../../Redux/Reducers/Plans";
import ItemLong from "../ItemLongComp/ItemLong";
// import { addSubscription } from "../../Redux/Reducers/Subscriptions";
import { Link } from "react-router-dom";

const AllPlans = () => {
    const plans = useSelector((state: RootState) => state.session.plans.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allPlans());
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-center fs-1 fw-bold lh-lg">All Plans</h1>

            <div className="row d-flex justify-content-evenly p-5">
                {plans.map((plan, index) => (
                    <div key={index} className="col-md-3 my-3">
                        <ItemLong
                            id = {plan.id}
                            image={plan.image}
                            heading={plan.heading}
                            subType={plan.subType}
                            // benefits={plan.benefits}
                            duration={plan.duration}
                            oldPrice={plan.oldPrice}
                            effectivePrice={plan.newPrice}
                            buttons={
                                <div className="row">
                                    <div className="col-md-12">
                                        <Link to={`/plan/${plan.id}`} className="btn btn-success fw-bold px-2 py-2 w-100">
                                            View
                                        </Link>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlans;
