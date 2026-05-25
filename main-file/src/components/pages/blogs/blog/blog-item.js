import { Link } from 'react-router-dom';
import React from 'react';

const BlogItem = ({currentBlogItems}) => {
    return (
        <>
            {currentBlogItems?.map((data, id) => (
				<div className="col-lg-6 mt-25" key={id}>
					<div className="blog__three-item mt-25">
                        <div className="blog__three-item-image">
							<Link to={`/blog/${data.id}`}><img src={data.image} alt="image" /></Link>						
                        </div>
                        <div className="blog__three-item-content">
                            <div className="meta">
                                <ul>
									<li><Link to="#"><i className="far fa-user"></i>By-Admin</Link></li>
									<li><Link to="#"><i className="far fa-comment-dots"></i>Comments ({data.comment})</Link></li>
                                </ul>
                            </div>
							<h4><Link to={`/blog/${data.id}`}>{data.title}</Link></h4>
							<Link className="more_btn" to={`/blog/${data.id}`}>Read More<i className="flaticon-right-up"></i></Link>
                        </div>
                    </div>
				</div>
            ))}            
        </>
    );
};

export default BlogItem;