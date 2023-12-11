import React, { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Footer from './Footer';
import Header from './Header';

const Home = () => {

      
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
    
          for (let i = initialText.length; i >= 0; i--) {
            if (!isMounted) break;
            setDisplayText(initialText.substring(0, i));
            await new Promise(resolve => setTimeout(resolve, 100));
          }
          if (isMounted) {
            animateText();
          }
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
      {
        id:4,
        name: 'Diploma in Business Management',
        image: '../../images/businessmanagemnet.jpg',
      },
      {
        id: 5,
        name: 'Certificate in Digital Marketing',
        image: '../../images/Digitalmarket.jpg'
      }
    ]
      
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
                            <img style={{ width: '100%' }} src={fadeImage.url} />
                            <h2>{fadeImage.caption}</h2>
                        </div>
                        ))}
                    </Fade>
                </div>
                <div className="site-info">
                    <h1>{displayText}</h1>
                    <p>Welcome All</p>
                    <button>Apply Now</button>
                </div>
            </div>
            <div className="about">
                <div className="about-content">
                    <h2>What we Do</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ullam temporibus culpa ea minus quasi quia beatae! Saepe doloremque inventore sequi ad recusandae explicabo, quas consectetur eligendi molestias nulla ipsam.
                     nesciunt?
                   </p>
                </div>
                <div className="vision">
                    <h2>Vision</h2>
                    <p>To be the college of choice for developing professionals</p>
                </div>
                <div className="mission">
                    <h2>Mission</h2>
                    <p>To offer quality training and development for professionals</p>
                </div>
            </div>
            <div className="number-measures">
                <div className="number-dialog">
                    <div className="students">
                        <h2>500</h2>
                        <p>Students</p>
                    </div>
                    <div className="tutors">
                        <h2>100</h2>
                        <p>Tutors</p>
                    </div>
                    <div className="courses">
                        <h2>18</h2>
                        <p>Courses</p>
                    </div>
                </div>
            </div>
            <div className="courses-data">
                <div className="courses-info">
                    {courses.map((course) => (
                        <div key={course.id}className="course-card">
                            <div className="course-image">
                                <img src={course.image} alt="" />
                            </div>
                            <div className="course-name">
                                <p>{course.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Home