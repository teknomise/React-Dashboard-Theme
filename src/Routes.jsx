import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'

const HomePage = React.lazy(() => import('./pages/Homepage'))
const AppRoutes = () => {
    return(
    
          <Suspense fallback={<div className='is-center'><div className='loader'></div></div>}>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes