import React, { Component } from 'react';
import Link from 'next/link';

class RecentPost extends Component {

    render() {

        return (
            <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                    <h3 className="sidebar__widget-title">Recent posts</h3>
                </div>
                <div className="sidebar__widget-content">
                    <div className="rc__post-wrapper">
                        <div className="rc__post d-flex align-items-center">
                            <div className="rc__thumb mr-20">
                            <Link href="/blog-details"><img src="assets/img/blog/sm/blog-sm-1.jpg" alt="img not found"/></Link>
                            </div>
                            <div className="rc__content">
                            <div className="rc__meta">
                                <span>October 15, 2021</span>
                            </div>
                                <h6 className="rc__title"><Link href="/blog-details">The Importance  Intrinsic Motivation.</Link></h6>
                            </div>
                        </div>
                        <div className="rc__post d-flex align-items-center">
                            <div className="rc__thumb mr-20">
                                <Link href="/blog-details"><img src="assets/img/blog/sm/blog-sm-2.jpg" alt="img not found"/></Link>
                            </div>
                            <div className="rc__content">
                            <div className="rc__meta">
                                <span>March 26, 2021</span>
                            </div>
                                <h6 className="rc__title"><Link href="/blog-details">A Better Alternative To Grading Student.</Link></h6>
                            </div>
                        </div>
                        <div className="rc__post d-flex align-items-center">
                            <div className="rc__thumb mr-20">
                                <Link href="/blog-details"><img src="assets/img/blog/sm/blog-sm-3.jpg" alt="img not found"/></Link>
                            </div>
                            <div className="rc__content">
                            <div className="rc__meta">
                                <span>October 15, 2021</span>
                            </div>
                                <h6 className="rc__title"><Link href="/blog-details">Strategic Social Media & Evolution of Visual</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentPost;