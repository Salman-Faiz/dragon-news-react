import user from '../../assets/user.png'
import demo from '../../assets/editorsInsight2.png'
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import { FaEye } from "react-icons/fa";

const MainContent = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold">Dragon News Home</h3>
            <div className='flex gap-3 mt-3 p-3 bg-slate-100 rounded-t-lg items-center'>
                <img className='w-10 rounded-full' src={user}    alt="" />
                <div className='flex-grow'>
                    <h1>salman faiz</h1>
                    <p>date</p>
                </div>
                <div className='flex gap-2 text-2xl'>
                    <FaRegBookmark/>
                    <IoShareSocialOutline/>
                </div>
            </div>
           <div className='px-5 border-x-2 border-b-2'>
           <div>
                <h2 className='text-3xl font-bold'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>

                <img  className='pt-5 w-full' src={demo} alt="" />
                <p className='pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus odit nesciunt totam illum, culpa aperiam ad praesentium id eligendi sint incidunt alias sapiente maxime veniam accusantium quia error veritatis soluta?</p>
                <p>Read More</p>
                <hr />
                <div className='flex items-center py-4'>
                   <div className='flex items-center flex-grow'> <LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid><LiaStarSolid></LiaStarSolid>
                   <p className='ps-3'>4.9</p>
                   </div>
                   
                   <div className='flex gap-3 items-center'>
                    <FaEye></FaEye>
                    <p className=''>499</p>
                   </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default MainContent;