import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNavbar = () => {
    const [categories,setCategories] = useState([]);
 
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data =>setCategories(data))
    },[])

    return (
        <div>
           <div className="py-3">
            <h2 className="text-2xl font-semibold ">All Category</h2>
           <div className=" pt-4">
            {
                categories.map(category => <Link to={`/category/${category.id}`} key={category.id}>
                    <h3 className="w-full py-3 px-4 font-semibold ">{category.name}</h3>
                    </Link>)
            }
           
           </div>
           </div>
        </div>
    );
};

export default LeftNavbar;