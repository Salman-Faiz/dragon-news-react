
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const QZone = () => {
    return (
        <div>
            <div className="bg-slate-200 p-3">
                <h2 className="text-2xl font-semibold py-4">Q-Zone</h2>
                <div className="mb-5">
                    <img src={qZone1} alt="" />
                </div>
                <div className="mb-5">
                    <img src={qZone2} alt="" />
                </div>
                <div className="mb-5">
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QZone;