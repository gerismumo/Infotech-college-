import { faArrowRight, faBook, faBullseye, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons';
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
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'First Slide'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Second Slide'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Third Slide'
        },
      ];

      const initialText = 'INSTITUTE OF PROFESSIONAL STUDIES';
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
        image: '../../images/computerStudis.jpg'
      },
      {
        id: 2,
        name: 'Diploma in Human Resources',
        image: '../../images/human.jpg',
      },
      {
        id: 3,
        name: 'Certificate in Secretarial',
        image: '../../images/secretarial.jpg',
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
                              <h1>{displayText}</h1>
                              <p>Welcome All</p>
                              <button>Apply Now</button>
                          </div>
                        </div>
                        ))}
                    </Fade>
                </div>
                
            </div> 
            <div className="about">
                <div className="about-content">
                <FontAwesomeIcon icon={faGraduationCap}  className='iconAbout'/>
                    <h2>What we Do</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ullam temporibus culpa ea minus quasi quia beatae! Saepe doloremque inventore sequi ad recusandae explicabo, quas consectetur eligendi molestias nulla ipsam.
                     nesciunt?
                   </p>
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
                        <p>To offer quality training and development for professionals</p>
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
        </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Home