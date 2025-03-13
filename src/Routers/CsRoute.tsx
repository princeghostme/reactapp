
import { Routes, Route } from 'react-router-dom'
import CsPrivateRoute from './CsPrivateRoute'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Plans from '../Pages/Plans'
import PlanDetail from '../Pages/PlanDetail'
import Signup from '../Components/UserComp/Signup'
import Login from '../Components/UserComp/Login'
import AboutUs from '../Components/AboutUs/AboutUs'
import WhyBiteAndDiet from '../Components/whyBiteAndDiet/WhyBiteAndDiet'

const CsRoute = () => {
    return (
        <Routes>
            <Route path='/login' element={<CsPrivateRoute component={<Login />} />} />
            <Route path='/signup' element={<CsPrivateRoute component={<Signup />} />}></Route>
            <Route path='/reactapp' element={<CsPrivateRoute component={<Home />} />}></Route>
            <Route path='/cart' element={<CsPrivateRoute component={<Cart />} />}></Route>
            <Route path='/allplans' element={<CsPrivateRoute component={<Plans />} />}></Route>
            <Route path='/plan/:id' element={<CsPrivateRoute component={<PlanDetail />} />}></Route>
            <Route path='/aboutus' element={<CsPrivateRoute component={<AboutUs/>} />}></Route>
            <Route path='/whybiteandDiet' element={<CsPrivateRoute component={<WhyBiteAndDiet/>} />}></Route>
            <Route path='*' element={<CsPrivateRoute component={<Home />} />}></Route>
        </Routes>
    )
}

export default CsRoute