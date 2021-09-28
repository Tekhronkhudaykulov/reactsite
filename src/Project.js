import React from 'react';
import Header_top from './component/Header_top';
import Main_top from './component/main_top';
import Main_top_footer from './component/main_top_footer';
import Main_center from './component/main_center';
import Main_center_footer from './component/main_center_footer';
import Main_footer_top from './component/Main_footer_top';
import Main_footer_footer from './component/main_footer_footer';
import Footer_top from './component/Footer_top';
import Footer_footer from './component/Footer_footer';

const Project = () => {
    return (
        <>
        <Header_top />
        <Main_top />
        <Main_top_footer/>
        <Main_center/>
        <Main_center_footer/>
        <Main_footer_top/>
        <Main_footer_footer/>
        <Footer_top/>
        <Footer_footer/>
        </>
        
    );
};

export default Project;