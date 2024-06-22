
import sight1 from '../../../assets/editorsInsight1.png'
import sight2 from '../../../assets/editorsInsight2.png'
import sight3 from '../../../assets/editorsInsight3.png'
import { FaCalendarDays } from "react-icons/fa6";
import moment from 'moment';


const CardsNews = () => {
    return (
        <div>
             <div className="space-y-3">
            <img className="w-full" src={sight1} alt="" />
            <h3 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex justify-between text-xs">
                <p>sport</p>
                <div className="flex gap-2">
                <FaCalendarDays></FaCalendarDays>
                <p>{moment().format(" MMM D YYYY")}</p>
                </div>
            </div>
           </div>
           <div className="space-y-3">
            <img className="w-full" src={sight2} alt="" />
            <h3 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex justify-between text-xs">
                <p>sport</p>
                <div className="flex gap-2">
                <FaCalendarDays></FaCalendarDays>
                <p>{moment().format(" MMM D YYYY")}</p>
                </div>
            </div>
           </div>
           <div className="space-y-3">
            <img className="w-full" src={sight3} alt="" />
            <h3 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex justify-between text-xs">
                <p>sport</p>
                <div className="flex gap-2">
                <FaCalendarDays></FaCalendarDays>
                <p>{moment().format(" MMM D YYYY")}</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default CardsNews;