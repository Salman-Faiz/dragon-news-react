import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Navbar/Navbar';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RightNavbar from '../Shared/RightNavbar/RightNavbar';

const NewsDetails = () => {
    const news = useLoaderData();
    console.log(news);
    const { id } = useParams();
    console.log(id);
    // const intId = parseInt(id);
    const singleNews = news.find(singleNews => singleNews._id === id)
    console.log(singleNews);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className='grid grid-cols-4'>

                <div className='col-span-3'>
                    <h4 className='text-3xl font-bold py-5'>Dragom News</h4>
                    <div className='border'>
                       <div className='p-6'>
                       <img src={singleNews.image_url} alt="" />
                        <p className='pt-5'>{singleNews.details}</p>
                        <Link to={'/'}><button className='btn btn-secondary mt-5'>All news in the category</button></Link>
                       </div>
                    </div>

                </div>

                <div>
                    <RightNavbar></RightNavbar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;