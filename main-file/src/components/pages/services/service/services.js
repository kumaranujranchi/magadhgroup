import { Link } from 'react-router-dom';
import servicesData from '../../../data/services-data';

const ServicesMain = () => {
    return (
        <>
        <div className="services__page section-padding-three">
            <div className="container">
                <div className="row">
                    {servicesData?.map((data, id) => (
                        <div className="col-lg-4 col-md-6 mt-25" key={id}>
                            <div className="services__one-item">
                                {data.icon}
                                <h4><Link to={`/services/${data.id}`}>{data.title}</Link></h4>
                                <Link className="more_btn" to={`/services/${data.id}`}>Read More<i className="flaticon-right-up"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default ServicesMain;