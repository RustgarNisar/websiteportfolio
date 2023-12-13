import React from "react"
import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Education from "../pages/Education";
import ContactMe from "../pages/ContactMe";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import { AnimatePresence } from 'framer-motion';

const Router = () => {
    return(
        <AnimatePresence>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactMe />} />
            </Routes>
        </AnimatePresence>
    )
};
export default Router;