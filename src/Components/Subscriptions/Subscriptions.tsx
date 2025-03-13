import React, { useEffect, useState } from "react";
import "./Subscriptions.css";
import allProduct from "../../Data/allProducts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { removeSubscription } from "../../Redux/Reducers/Subscriptions";

interface TotalPriceProp {
    image: string;
    planId: number;
    name: string;
    weeklyPrice: number;
    prefferedWeek: number;
    duration: number;
    total: number;
}

const Subscriptions: React.FC = () => {
    const subscribeCart = useSelector((state: RootState) => state.local.subscribtions.value);
    const [subscribedProduct, setSubscribedProduct] = useState<TotalPriceProp[]>([]);
    const [total, setTotal] = useState<number>(0);
    const dispatch = useDispatch();

    // Update subscribed products when subscribeCart changes
    useEffect(() => {
        const filteredProducts = allProduct
            .filter((product) => subscribeCart.includes(product.id))
            .map((item) => {
                const weeklyPrice = Number(item.newPrice) / Number(item.duration) || 0;
                const duration = item.duration || 0;
                return {
                    image: item.image || "",
                    planId: item.id || -1,
                    name: item.heading || "",
                    weeklyPrice: weeklyPrice,
                    prefferedWeek: duration,
                    duration: duration,
                    total: weeklyPrice * duration,
                };
            });
        setSubscribedProduct(filteredProducts);
    }, [subscribeCart]);

    // Calculate total price when subscribedProduct changes
    useEffect(() => {
        const grandTotal = subscribedProduct.reduce((acc, item) => acc + item.total, 0);
        setTotal(grandTotal);
    }, [subscribedProduct]);

    // Decrease duration of a subscription
    const decreaseDuration = (id: number) => {
        setSubscribedProduct((prevProduct) =>
            prevProduct.map((item) =>
                item.planId === id
                    ? {
                        ...item,
                        duration: Math.max(0, item.duration - 1),
                        total: item.weeklyPrice * Math.max(0, item.duration - 1),
                    }
                    : item
            )
        );

        const product = subscribedProduct.find((item) => item.planId === id);
        if (product && product.duration === 1) {
            dispatch(removeSubscription(id));
        }
    };

    // Increase duration of a subscription
    const increaseDuration = (id: number) => {
        setSubscribedProduct((prevProduct) =>
            prevProduct.map((item) =>
                item.planId === id
                    ? {
                        ...item,
                        duration: Math.max(0, item.duration + 1),
                        total: item.weeklyPrice * Math.max(0, item.duration + 1),
                    }
                    : item
            )
        );
    };

    const delSubscription = (id:number)=>{
        debugger;
        console.log(id)
        dispatch(removeSubscription(id))
    }

    return (
        <div className="container p-3 text-center">
            {/* Table Header */}
            <div className="row mb-3 d-flex justify-content-around fw-bold">
                <div className="col-md-2">Image</div>
                <div className="col-md-2">Plan</div>
                <div className="col-md-2">Price/Week</div>
                <div className="col-md-2">Duration</div>
                <div className="col-md-2">Total Price</div>
                <div className="col-md-2">Action</div>
            </div>

            {/* Subscription Rows */}
            <div className="row">
                {subscribedProduct.map((item, index) => (
                    <SubscriptionRow
                        key={index}
                        id={item.planId}
                        image={item.image}
                        plan={item.name}
                        weeklyPrice={item.weeklyPrice}
                        duration={item.duration}
                        prefferedWeek={item.prefferedWeek}
                        decreaseDuration={decreaseDuration}
                        increaseDuration={increaseDuration}
                        removeSubscription={delSubscription}
                        total={item.total}
                    />
                ))}
            </div>

            {/* Grand Total */}
            <div className="row fw-bold mt-5 border-top pt-3">
                <div className="col-md-6">Grand Total</div>
                <div className="col-md-6">₹ {total.toFixed(2)}</div>
            </div>
        </div>
    );
};

interface SubscriptionRowProps {
    id: number;
    image: string;
    plan: string;
    weeklyPrice: number;
    duration: number;
    prefferedWeek: number;
    decreaseDuration: (id: number) => void;
    increaseDuration: (id: number) => void;
    removeSubscription:(id:number) => void;
    total: number;
}

const SubscriptionRow: React.FC<SubscriptionRowProps> = ({
    id,
    image,
    plan,
    weeklyPrice,
    prefferedWeek,
    duration,
    decreaseDuration,
    increaseDuration,
    removeSubscription,
    total,
}) => {
    return (
        <div className="row d-flex justify-content-around align-items-center mb-3">
            {/* Image */}
            <div className="col-md-2">
                <img
                    src={image}
                    alt={plan}
                    className="img-fluid img-thumbnail"
                    style={{ height: "4rem", width: "4rem", objectFit: "cover", objectPosition: "center" }}
                />
            </div>

            {/* Plan Name */}
            <div className="col-md-2">{plan}</div>

            {/* Weekly Price */}
            <div className="col-md-2">₹ {weeklyPrice.toFixed(2)}</div>

            {/* Duration Controls */}
            <div className="col-md-2">
                <div className="input-group">
                    <button
                        className="btn btn-outline-danger px-3"
                        onClick={() => decreaseDuration(id)}
                    >
                        -
                    </button>
                    <span
                        className={`form-control px-1 w-25 text-center ${prefferedWeek / duration > 1 ? "bg-danger-subtle" : "bg-success-subtle"
                            }`}
                    >
                        {duration.toString().padStart(2, "0")} / {prefferedWeek.toString().padStart(2, "0")}
                    </span>
                    <button
                        className="btn btn-outline-success px-3"
                        onClick={() => increaseDuration(id)}
                    >
                        +
                    </button>
                </div>

            </div>

            {/* Total Price */}
            <div className="col-md-2">₹ {total.toFixed(2)}</div>
            <div className="col-md-2">
                <button type="button" className="btn btn-danger" onClick={()=> removeSubscription(id)}>Remove</button>
            </div>
        </div>
    );
};

export default Subscriptions;