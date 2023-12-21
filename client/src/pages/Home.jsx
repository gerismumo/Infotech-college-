import { faArrowRight, faBook, faBullseye, faGraduationCap, faHouse, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
  const navigate = useNavigate();
      const fadeImages = [
        {
          url: '../../../infotech images/IMG-20231220-WA0803.jpg',
          caption: 'First Slide'
        },
        {
          url: '../../../infotech images/IMG-20231220-WA0789.jpg',
          caption: 'Second Slide'
        },
        {
          url: '../../../infotech images/IMG-20231220-WA0804.jpg',
          caption: 'Third Slide'
        },
      ];

      const initialText = 'INFOTECH INSTITUTE OF PROFESSIONAL STUDIES';
      const [displayText, setDisplayText] = useState('');
    
      useEffect(() => {
        let isMounted = true;
    
        const animateText = async () => {
          for (let i = 0; i <= initialText.length; i++) {
            if (!isMounted) break;
            setDisplayText(initialText.substring(0, i));
            await new Promise(resolve => setTimeout(resolve, 100));
          }
    
          await new Promise(resolve => setTimeout(resolve, 2000)); 
    
        //   for (let i = initialText.length; i >= 0; i--) {
        //     if (!isMounted) break;
        //     setDisplayText(initialText.substring(0, i));
        //     await new Promise(resolve => setTimeout(resolve, 100));
        //   }
        //   if (isMounted) {
        //     animateText();
        //   }
        };
    
        animateText();
    
        return () => {
          isMounted = false;
        };
      }, [initialText]);

      const courses = [{
        id: 1,
        name: 'Certificate in Computer Studies',
        image: '../../infotech images/IMG-20231220-WA0796.jpg'
      },
      {
        id: 2,
        name: 'Diploma in Human Resources',
        image: '../../infotech images/IMG-20231220-WA0789.jpg',
      },
      {
        id: 3,
        name: 'Certificate in Secretarial',
        image: '../../infotech images/IMG-20231220-WA0803.jpg',
      },
    //   {
    //     id:4,
    //     name: 'Diploma in Business Management',
    //     image: '../../images/businessmanagemnet.jpg',
    //   },
    //   {
    //     id: 5,
    //     name: 'Certificate in Digital Marketing',
    //     image: '../../images/Digitalmarket.jpg'
    //   }
    ]
    const [isVisible, setIsVisible] = useState(false);

    const onVisibilityChange = (visible) => {
      if (visible) {
        setIsVisible(true);
      }
    };

    const MoveToCourses = () => {
      navigate('/courses');
    }

    const AboutText = `Welcome to Infotech Institute of professional studied, a place where persons from any station in life can realize their fullest potential!
    To prospective students (and their parents), we want you to know that if you are looking for a solid education that will fully prepare you to succeed in a career and even more importantly in life in general, that you have come to the right place. IPS is for you! It is our firm commitment to offer our students excellence in higher education that is firmly grounded in positive moral values that are consistent with the best of the Christian tradition. we have a global outlook at IPS, with the best local and international faculty available. We have in any given academic term, students from other counties of origin. Among the exciting things happening at IPS that you would have an opportunity to look forward to are: Student and Faculty competitions, Experiential Learning activities, Career Services support, Mentorship and Leadership training, training in Design Thinking during the Impact Week, along with participation in many activities like Business Week, Impact Week, Culture Week, Holiness Week and so much more!
    To our continuing students, thank you for choosing IPS. We want to serve you well. Let us know how we are doing. This opportunity you have to study at this level is a gift from God. Be a good steward of it!
    To our alumni scattered all over the nation, we are so proud of you! You are making a difference and your success is a daily confirmation that we are producing what the market wants and needs. Check out our Alumni page and other social media for all the great ways to stay connected with your colleagues and your alma Mater.
    To our friends and well-wishers, sponsors, and donors around the nation, thank you for believing in Infotech Institute of professional studied and for investing in the lives of some of the greatest young minds and hearts in the nation.
    Indeed, what begins here transforms the nation!
    Prof. Daniel Odhiambo
    Director of studies – Academic Affairs`;

    const truncateText = (start, end) => {
     const truncate = AboutText.substring(start, end);
     return truncate
    }

    const handleAbout = () => {
      navigate('/about');
    }

  return (
    <>
    <Header />
    <div className="home-page">
        <div className="home-content">
          <div className="slide-options">
                <div className="slide-container">
                    <Fade duration={1000}>
                        {fadeImages.map((fadeImage, index) => (
                        <div key={index} className='slide'>
                            <img  src={fadeImage.url} />
                            <div className="site-info">
                              <div className="site-name">
                                <h1>{displayText}</h1>
                              </div>
                              <button>Apply Now</button>
                          </div>
                        </div>
                        ))}
                    </Fade>
                </div>
                
            </div> 
            <div className="about">
              <div className="about-content-details">
                <div className="welcome-info">
                    <FontAwesomeIcon icon={faHouse} className='iconHome' size='2x'/>
                    <h2>WELCOME TO OUR COLLEGE</h2>
                    <p>In 2018 <span>INFOTECH INSTITUTE OF PROFESSIONAL STUDIES College</span>  
                         was established.
                      The College has several  well-established 
                      Schools  namely; School of Business, School of Humanilities, School of computing
                    </p>
                </div>
                <div className="about-content">
                  <FontAwesomeIcon icon={faGraduationCap}  className='iconAbout'/>
                      <h2>What we Do</h2>
                      <p>
                        {truncateText(0, 295) + '....'}  <button className='read-more' onClick={handleAbout}>Read More</button>
                      </p>

                  </div>
              </div>
                <div className="vision-mission">
                    <div className="vision about-more" >
                    <FontAwesomeIcon icon={faBook} className='iconAbout' />
                        <h2>Vision</h2>
                        <p>To be the college of choice for developing professionals</p>
                    </div>
                    <div className="mission about-more">
                    <FontAwesomeIcon icon={faBullseye} className='iconAbout' />
                        <h2>Mission</h2>
                        <p>To offer quality training and development for professionals</p>
                    </div>
                    <div className="goals about-more">
                    <FontAwesomeIcon icon={faLightbulb} className='iconAbout' />
                        <h2>Goals</h2>
                        <p>
                        Promote the development and expansion of
                         higher education opportunities through 
                         initiation of new programmes and alternat
                         ive modes of delivery using, among others
                         , modern technologies.
                        </p>
                    </div>
                </div>
            </div>
            <div className="number-measures">
                    <VisibilitySensor onChange={onVisibilityChange} partialVisibility offset={{ bottom: 200 }}>
                        <div className="students">
                        <h2>{isVisible ? <CountUp end={500} duration={2} separator="," /> : '0'}</h2>
                        <p>Students</p>
                        </div>
                    </VisibilitySensor>
                    <VisibilitySensor onChange={onVisibilityChange} partialVisibility offset={{ bottom: 200 }}>
                        <div className="tutors">
                            <h2>{isVisible ? <CountUp end={100} duration={2} separator="," /> : '0'}</h2>
                            <p>Tutors</p>
                        </div>
                    </VisibilitySensor>
                    <VisibilitySensor onChange={onVisibilityChange} partialVisibility offset={{ bottom: 200 }}>
                        <div className="courses">
                            <h2>{isVisible ? <CountUp end={18} duration={2} separator="," /> : '0' }</h2>
                            <p>Courses</p>
                        </div>
                    </VisibilitySensor>
                    
                
            </div>
            <div className="courses-name">
                <span></span>
                <p>Popular Courses</p>
            </div>
            <div className="courses-data">
                <div className="courses-info">
                    {courses.map((course) => (
                        <div key={course.id}className="course-card">
                            <div className="course-image">
                                <img src={course.image} alt="" />
                            </div>
                            <div className="view-course">
                                <button>View</button>
                            </div>
                            <div className="course-name">
                                <p>{course.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="more-courses">
                    <p onClick={MoveToCourses}>More courses <FontAwesomeIcon icon={faArrowRight} className='moreIcon'/></p>
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

export default Home