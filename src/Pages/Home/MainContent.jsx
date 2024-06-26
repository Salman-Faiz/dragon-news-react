import user from '../../assets/user.png'
import demo from '../../assets/editorsInsight2.png'
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MainContent = ({news}) => {
    return (
        <div>
              <h3 className="text-2xl font-semibold">Dragon News Home</h3>
            {
                news.map(singleNews =>  <div>
                    <div className='flex gap-3 mt-3 p-3 bg-slate-100 rounded-t-lg items-center'>
                                <img className='w-10 rounded-full' src={user}    alt="" />
                                <div className='flex-grow'>
                                    <h1>{singleNews.author.name}</h1>
                                    <p>{singleNews.author.published_date}</p>
                                </div>
                                <div className='flex gap-2 text-2xl'>
                                    <FaRegBookmark/>
                                    <IoShareSocialOutline/>
                                </div>
                            </div>
                           <div className='px-5 border-x-2 border-b-2 pt-4'>
                           <div>
                                <h2 className='text-3xl font-bold'>{singleNews.title}</h2>
                
                                <img  className='pt-5 w-full' src={singleNews.image_url} alt="" />
                                {
                                    singleNews.details.length>200 ? <p className='pt-3'>{singleNews.details.slice(0,200)} <Link to={`newsDetails/${singleNews._id}`} className='text-blue-600 font-bold'>Read More</Link></p>  :  <p className='pt-3'>{singleNews.details}</p>
                                }
                               
                               
                                <hr />
                                <div className='flex items-center py-4'>
                                   <div className='flex items-center flex-grow'> <LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid>
                                   <p className='ps-3'>{singleNews.rating.number}</p>
                                   </div>
                                   
                                   <div className='flex gap-3 items-center'>
                                    <FaEye></FaEye>
                                    <p className=''>{singleNews.total_view}</p>
                                   </div>
                                </div>
                            </div>
                           </div>
                    </div>)
            }
          
   
        </div>
    );
};

export default MainContent;