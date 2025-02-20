
import { Routes, Route } from 'react-router-dom'
import CsPrivateRoute from './CsPrivateRoute'
import UnauthroisedAccess from '../Pages/UnauthroisedAccess'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Plans from '../Pages/Plans'
import PlanDetail from '../Pages/PlanDetail'

const CsRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<CsPrivateRoute component={<Home />} />}></Route>
            <Route path='/cart' element={<CsPrivateRoute component={<Cart />} />}></Route>
            <Route path='/allplans' element={<CsPrivateRoute component={<Plans />} />}></Route>
            <Route path='/plan/:id' element={<CsPrivateRoute component={<PlanDetail />} />}></Route>
            <Route path='*' element={<CsPrivateRoute component={<Home />} />}></Route>
        </Routes>
    )
}

export default CsRoute