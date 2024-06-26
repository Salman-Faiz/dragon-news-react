import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import RightNavbar from '../Shared/RightNavbar/RightNavbar';

const NewsDetails = () => {
    const  {id } =useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h4>newsDetails {id}</h4>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>details news</div>
                <div><RightNavbar></RightNavbar></div>
            </div>
        </div>
    );
};

export default NewsDetails;