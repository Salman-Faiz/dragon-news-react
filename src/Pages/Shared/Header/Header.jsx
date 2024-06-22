import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center pt-10 space-y-3'>
        <img className='mx-auto' src={logo} alt="" />
        <h1 className='text-xl'>Journalism Without Fear or Favour</h1>
        <p className='text-xl'>{moment().format("dddd, MMMM D YYYY")}</p>
    </div>
    );
};

export default Header;