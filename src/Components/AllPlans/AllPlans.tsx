import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { allPlans } from "../../Redux/Reducers/Plans";
import ItemLong from "../ItemLongComp/ItemLong";
import { useNavigate } from "react-router-dom";

const AllPlans = () => {
    const plans = useSelector((state: RootState) => state.local.plans.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(allPlans());
    }, [dispatch]); // Fixed dependency issue

    return (
        <div>
            <h1 className="text-center fs-1 fw-bold lh-lg">All Plans</h1>
            <div className="row d-flex justify-content-evenly p-5">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="col-md-3 my-3"
                        onClick={() => navigate(`/plan/${plan.id}`)}
                    >
                        <ItemLong
                            image={plan.image}
                            heading={plan.heading}
                            subType={plan.subType}
                            // description={plan.description}
                            // keyPoints={plan.keyPoints}
                            benefits={plan.benefits}
                            // targetAudience={plan.targetAudience}
                            duration={plan.duration}
                            // oldPrice={plan.oldPrice}
                            effectivePrice={plan.newPrice}
                            buttons={
                                <div className="row">
                                    <button className="btn btn-success fw-bold px-4 py-2">
                                        Add to Cart
                                    </button>
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
