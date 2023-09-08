import React from 'react';
import { Route, Routes, Navigate} from "react-router-dom";
import {routes} from '../routes/routes'


const AppRouter = () => {
    return (
        
        <Routes>
            {routes.map(r => <Route key = {r.path} path = {r.path} element={<r.element/>}/>)}
            <Route path="/*" element={<Navigate to="/git-search" replace  />} />
        </Routes>
            
    );
};

export default AppRouter;
