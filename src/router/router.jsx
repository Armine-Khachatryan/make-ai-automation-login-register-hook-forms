import React from "react";
import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { REGISTER, LOGIN, HOME } from "./route-path";
import {Registration, Login, Home} from '../pages'
import Layout from "../components/Layout/Layout.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={HOME} element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            <Route
                path={REGISTER}
                element={<Registration/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={LOGIN}
                element={<Login/>}
                handle={{ scrollMode: "pathname"}}
            />
        </>
    )
);

export default router;
