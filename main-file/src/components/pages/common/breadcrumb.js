import { Link } from 'react-router-dom';
import breadCrumbBg from "../../assets/img/page/breadcrumb.jpg";

const BreadCrumb = ({title, innerTitle}) => {
    return (
        <div className="breadcrumb__area" style={{backgroundImage: `url(${breadCrumbBg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb__area-content">
                            <h2>{title}</h2>
                            <ul>
                                <li><Link to="/">Home</Link><i className="fa-regular fa-angle-right"></i></li>
                                <li>{innerTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;