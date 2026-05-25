
import { Link } from 'react-router-dom';
import blogData from '../../../data/blog-data';

const BlogSidebar = () => {
    return (
        <div className="all__sidebar">
            <div className="all__sidebar-item">
                <h4>Search Here</h4>
                <div className="all__sidebar-item-search">
                    <form action="#">
                        <input type="text" placeholder="Search....." />
                        <button type="submit"><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4>Recent Blog</h4>
                <div className="all__sidebar-item-post">
                    {blogData?.slice(0, 3)?.map((data, id) => (
                        <div className="post__item" key={id}>
                            <div className="post__item-image">
                                <Link to={`/blog/${data.id}`}><img src={data.image} alt="image" /></Link>
                            </div>
                            <div className="post__item-title">
                                <span><i className="far fa-calendar-alt"></i>Mar {data.date}, 2025</span>
                                <h6><Link to={`/blog/${data.id}`}>{data.title}</Link></h6>
                            </div>
                        </div>
                    ))}                        
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4>Popular Tag</h4>
                <div className="all__sidebar-item-tag">
                    <ul>
                        <li><Link to="/blog">Innovation</Link></li>
                        <li><Link to="/blog">Insights</Link></li>
                        <li><Link to="/blog">Resources</Link></li>
                        <li><Link to="/blog">Tips</Link></li>
                        <li><Link to="/blog">Trends</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;