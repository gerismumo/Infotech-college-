import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const About = () => {
  return (
    <>
    <Header />
        <div className="about-page">
            <div className="about-page-content">
                <div className="about-title">
                    <h2>About</h2>
                </div>
                <div className="about-side-title">
                    <span></span>
                    <p>about Us</p>
                </div>
                <div className="text-image">
                    <div className="text-about">
                        <p>Welcome to <span>Infotech Institute of professional studied</span>, a place where persons from any station in life can realize their fullest potential!
                            To prospective students (and their parents), we want you to know that if you are looking for a solid education that will fully prepare you to succeed in a career and even more importantly in life in general, that you have come to the right place. IPS is for you! It is our firm commitment to offer our students excellence in higher education that is firmly grounded in positive moral values that are consistent with the best of the Christian tradition. we have a global outlook at IPS, with the best local and international faculty available. We have in any given academic term, students from other counties of origin. Among the exciting things happening at IPS that you would have an opportunity to look forward to are: Student and Faculty competitions, Experiential Learning activities, Career Services support, Mentorship and Leadership training, training in Design Thinking during the Impact Week, along with participation in many activities like Business Week, Impact Week, Culture Week, Holiness Week and so much more!
                            To our continuing students, thank you for choosing IPS. We want to serve you well. Let us know how we are doing. This opportunity you have to study at this level is a gift from God. Be a good steward of it!
                            To our alumni scattered all over the nation, we are so proud of you! You are making a difference and your success is a daily confirmation that we are producing what the market wants and needs. Check out our Alumni page and other social media for all the great ways to stay connected with your colleagues and your alma Mater.
                            To our friends and well-wishers, sponsors, and donors around the nation, thank you for believing in Infotech Institute of professional studied and for investing in the lives of some of the greatest young minds and hearts in the nation.
                            Indeed, what begins here transforms the nation!
                            
                        </p>
                        <div className="write-info">
                            <p>Prof. Daniel Odhiambo</p>
                            <p>Director of studies – Academic Affairs</p>
                        </div>
                    </div>
                    <div className="about-values">
                        <h2>Core Values</h2>
                        <div className="values">
                                <p><FontAwesomeIcon icon={faAngleRight} className='valueIcon' />Professionalism and integrity.</p>
                                <p><FontAwesomeIcon icon={faAngleRight} className='valueIcon' />Respect to rule of law.</p>
                                <p><FontAwesomeIcon icon={faAngleRight} className='valueIcon' />Innovativeness.</p>
                                <p><FontAwesomeIcon icon={faAngleRight} className='valueIcon' />Teamwork.</p>
                                <p><FontAwesomeIcon icon={faAngleRight} className='valueIcon' />Confidentiality.</p>
                                <p><FontAwesomeIcon icon={faAngleRight} className='valueIcon' />Honesty.</p>
                                <p><FontAwesomeIcon icon={faAngleRight} className='valueIcon' />Courtesy and diligence</p>
                        </div>
                        {/* <img src="../../../images/german.jpg" alt="" /> */}
                    </div>
                </div>
                <div className="motto-slogan">
                    <div className="motto">
                        <p>Motto</p>
                        <p>" We believe. You belong here!! "</p>
                    </div>
                    <div className="slogan">
                        <p>Slogan</p>
                        <p>" Education for Citizenship "</p>
                    </div>
                </div>
            </div>
        </div>
    <Footer />    
    </>
    
  )
}

export default About