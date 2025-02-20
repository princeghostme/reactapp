import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import ItemLong from "../Components/ItemLongComp/ItemLong";

const PlanDetail = () => {
    const { id } = useParams(); // Get the dynamic plan ID from URL
    const plans = useSelector((state: RootState) => state.local.plans.value);
    const [selectedPlan, setSelectedPlan] = useState<any>(null);

    useEffect(() => {
        if (id) {
            const plan = plans.find((p) => p.id === id || p.name === id); // Match by ID or name
            setSelectedPlan(plan);
        }
    }, [id, plans]);

    if (!selectedPlan) {
        return <h2 className="text-center mt-5">Plan Not Found</h2>;
    }

    return (
        <div className="container my-5">
            {/* <h1 className="text-center fs-1 fw-bold">{selectedPlan.heading}</h1> */}
            <div className="d-flex justify-content-center">
                <div className="col-md-12">
                    <ItemLong
                        image={selectedPlan.image}
                        heading={selectedPlan.heading}
                        subType={selectedPlan.subType}
                        description={selectedPlan.description}
                        keyPoints={selectedPlan.keyPoints}
                        benefits={selectedPlan.benefits}
                        targetAudience={selectedPlan.targetAudience}
                        duration={selectedPlan.duration}
                        oldPrice={selectedPlan.oldPrice}
                        effectivePrice={selectedPlan.newPrice}
                        buttons={
                            <button className="btn btn-success fw-bold px-4 py-2">
                                Subscribe Now
                            </button>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default PlanDetail;
