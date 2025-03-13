import { createSlice } from "@reduxjs/toolkit"
import allProduct, { AllProductProp } from "../../Data/allProducts"

interface initialValueProp{
    value:AllProductProp[];
}

const initalValue:initialValueProp = {
    value: []
}

const plansSlice = createSlice({
    name : "newPlan",
    initialState : initalValue,
    reducers : {
        newPlans : (state)=>{
            state.value = allProduct.filter(x=>x.category == "newPlan");
        },
        popularPlans : (state)=>{
            state.value = allProduct.filter(x=>x.category == "popularPlan");
        },
        allPlans : (state)=>{
            state.value = allProduct;
        }
    }
})

export const { newPlans , popularPlans,allPlans } = plansSlice.actions;

export default plansSlice.reducer;