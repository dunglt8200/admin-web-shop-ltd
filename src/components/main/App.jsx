import React from "react";
import MasterLayout from "./MasterLayout";
import {Routes, Route} from "react-router-dom";
import { ROUTERS } from "../../routers/RouterPath";
import Home from "../../pages/home/Home";
import Category from "../../pages/category/Category";

const renderComponent = [
    {
        path: ROUTERS.HOME,
        component: <Home />
    },
    {
        path: ROUTERS.CATEGORY,
        component: <Category />
    }
]
function App() {
    return (
        <MasterLayout>
            <Routes>
                {renderComponent.map((component, index) => (
                    <Route key={index} path={component.path} element={component.component}/>
                ))}                                    
            </Routes>
        </MasterLayout>
    )
}

export default App