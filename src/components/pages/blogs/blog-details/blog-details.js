import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import { getRecentBlogs } from '../../../../utils/blogLoader';

const BlogSingleMain = ({ singleData }) => {
    const recentPosts = getRecentBlogs(3, singleData?.slug);

    return (
        <>
            <div className="blog__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 lg-mb-25">
                            <div className="blog__details-area">

                                {/* Featured image */}
                                {singleData.image && (
                                    <img src={singleData.image} alt={singleData.title} />
                                )}

                                {/* Meta */}
                                <div className="blog__standard-item-content-meta mt-25 mb-15">
                                    <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0, flexWrap: 'wrap' }}>
                                        <li>
                                            <i className="fal fa-user" style={{ marginRight: 6 }}></i>
                                            {singleData.author || 'Magadh Group Team'}
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt" style={{ marginRight: 6 }}></i>
                                            {singleData.day} {singleData.month} 2025
                                        </li>
                                        {singleData.category && (
                                            <li>
                                                <i className="fal fa-folder" style={{ marginRight: 6 }}></i>
                                                {singleData.category}
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <h3 className="mb-20">{singleData.title}</h3>

                                {/* Markdown content */}
                                <div className="blog__markdown-content">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {singleData.markdownContent || singleData.description || ''}
                                    </ReactMarkdown>
                                </div>

                                {/* Tags */}
                                {singleData.tags && singleData.tags.length > 0 && (
                                    <div className="blog__details-area-tag mt-40">
                                        <h5>Related Tags:</h5>
                                        <div className="all__sidebar-item-tag">
                                            <ul>
                                                {singleData.tags.map((tag, i) => (
                                                    <li key={i}>
                                                        <Link to="/blog">{tag}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* CTA */}
                                <div className="blog__details-area-box mt-40">
                                    <i className="fas fa-quote-right"></i>
                                    <div>
                                        <h6>Need construction materials or expert advice? Magadh Group has been serving Bihar and Jharkhand for decades.</h6>
                                        <Link to="/request-quote" className="build_button mt-15" style={{ display: 'inline-flex' }}>
                                            Get a Free Quote <i className="flaticon-right-up"></i>
                                        </Link>
                                    </div>
                                </div>

                                {/* Recent posts */}
                                {recentPosts.length > 0 && (
                                    <div className="mt-50">
                                        <h4 className="mb-25">More Articles</h4>
                                        <div className="row">
                                            {recentPosts.map((post, i) => (
                                                <div className="col-sm-4 mb-20" key={i}>
                                                    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                                        <div style={{
                                                            padding: '16px',
                                                            border: '1px solid var(--border-color-1)',
                                                            borderRadius: '8px',
                                                            transition: '0.3s',
                                                        }}>
                                                            <p style={{ fontSize: '12px', color: 'var(--primary-color-1)', marginBottom: '6px', fontWeight: 600 }}>
                                                                {post.category}
                                                            </p>
                                                            <h6 style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--text-heading-color)' }}>
                                                                {post.title.split(' ').slice(0, 8).join(' ')}...
                                                            </h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="col-lg-4 columns_sticky">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleMain;