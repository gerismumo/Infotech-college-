import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

  export const  coursesDetails = [
    {
      id: 1,
      name: 'Accounts CPA SEC 1-6',
      examiner: 'KASNEB',
      duration: '6 Months',
      entry: 'C+',
      fees: '3,500',
    },
    {
      id: 2,
      name: 'Accounts ADT 1-3',
      examiner: 'KASNEB',
      duration: '6 Months',
      entry: 'C-',
      fees: '3,500',
    },
    {
      id: 3,
      name: 'Diploma in Business Management',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'C-',
      fees: '3,500',
    },
    {
      id: 4,
      name: 'Craft Cert in Business Management',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D & D+',
      fees: '3,000',
    },
    {
      id: 5,
      name: 'Artisan in Business Management',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D- & Below',
      fees: '3,000',
    },
    {
      id: 6,
      name: 'Diploma in Human Resource',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'C-',
      fees: '3,500',
    },
    {
      id: 7,
      name: 'Craft Cert in Human Resource',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D & D+',
      fees: '3,000',
    },
    {
      id: 8,
      name: 'Artisan in Human Resource',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D-',
      fees: '3,000',
    },
    {
      id: 9,
      name: 'Diploma in Sales & Marketing',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'C-',
      fees: '3,500',
    },
    {
      id: 10,
      name: 'Craft Cert in Sales & Marketing',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D & D+',
      fees: '3,000',
    },
    {
      id: 11,
      name: 'Artisan in Sales & Marketing',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D-',
      fees: '3,000',
    },
    {
      id: 12,
      name: 'Diploma in Community Development',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'C-',
      fees: '3,500',
    },
    {
      id: 13,
      name: 'Craft Cert in Community Development',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D & D+',
      fees: '3,000',
    },
    {
      id: 14,
      name: 'Artisan in Community Development',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D-',
      fees: '3,000',
    },
    {
      id: 15,
      name: 'Diploma in ICT/IT',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'C-',
      fees: '3,500',
    },
    {
      id: 16,
      name: ' Craft Cert in ICT/IT',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D & D+',
      fees: '3,000',
    },
    {
      id: 17,
      name: 'Diploma in Secretarial',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'C',
      fees: '3,500',
    },
    {
      id: 18,
      name: 'Certificate in Secretarial',
      examiner: 'KNEC',
      duration: '6 Months',
      entry: 'D & D+',
      fees: '3,000',
    }
  ]

  export const otherCourses = [
    {
      id: 1,
      name: 'English, Kiswahili, French, German, Spanish',
      fees: '2,000',
      image: '../../infotech images/IMG-20231220-WA0787.jpg',
    },
    {
      id: 2,
      name: '12 Computer Packages',
      fees: '4,500',
      image: '../../images/computerStudis.jpg',
    },
    {
      id: 3,
      name: 'Graphics Program: Core Draw, Photoshop, Illustrator',
      fees: '2,000 Each',
      image: '../../images/graphics.jpg',
    },
    {
      id: 4,
      name: 'KCSE/KCPE Private Candidates',
      fees: '3000',
      image: '../../images/tutions.jpg',
      
    },
    {
      id: 5,
      name: 'Tuition for Primary and Secondary',
      fees: '',
      image: '../../images/tution.jpg',
    }
  ]
const Courses = () => {
  const navigate = useNavigate();

  //   const courses = [
  //     {
  //     id: 1,
  //     name: 'Certificate in Computer Studies',
  //     image: '../../images/computerStudis.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Diploma in Human Resources',
  //     image: '../../images/human.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'Certificate in Secretarial',
  //     image: '../../images/secretarial.jpg',
  //   },
  //   {
  //     id:4,
  //     name: 'Diploma in Business Management',
  //     image: '../../images/businessmanagemnet.jpg',
  //   },
  //   {
  //     id: 5,
  //     name: 'Certificate in Digital Marketing',
  //     image: '../../images/Digitalmarket.jpg'
  //   },
  //   {
  //     id: 6,
  //     name: 'Certificate in Computer Studies',
  //     image: '../../images/computerStudis.jpg'
  //   },
  //   {
  //     id: 7,
  //     name: 'Diploma in Human Resources',
  //     image: '../../images/human.jpg',
  //   },
  //   {
  //     id: 8,
  //     name: 'Certificate in Secretarial',
  //     image: '../../images/secretarial.jpg',
  //   },
  //   {
  //     id:9,
  //     name: 'Diploma in Business Management',
  //     image: '../../images/businessmanagemnet.jpg',
  //   },
  //   {
  //     id: 10,
  //     name: 'Certificate in Digital Marketing',
  //     image: '../../images/Digitalmarket.jpg'
  //   },
  //   {
  //     id: 11,
  //     name: 'Certificate in Computer Studies',
  //     image: '../../images/computerStudis.jpg'
  //   },
  //   {
  //     id: 12,
  //     name: 'Diploma in Human Resources',
  //     image: '../../images/human.jpg',
  //   },
  //   {
  //     id: 13,
  //     name: 'Certificate in Secretarial',
  //     image: '../../images/secretarial.jpg',
  //   },
  //   {
  //     id:14,
  //     name: 'Diploma in Business Management',
  //     image: '../../images/businessmanagemnet.jpg',
  //   },
  //   {
  //     id: 15,
  //     name: 'Certificate in Digital Marketing',
  //     image: '../../images/Digitalmarket.jpg'
  //   },
  //   {
  //     id: 16,
  //     name: 'Certificate in Computer Studies',
  //     image: '../../images/computerStudis.jpg'
  //   },
  //   {
  //     id: 17,
  //     name: 'Diploma in Human Resources',
  //     image: '../../images/human.jpg',
  //   },
  //   {
  //     id: 18,
  //     name: 'Certificate in Secretarial',
  //     image: '../../images/secretarial.jpg',
  //   },
  //   {
  //     id: 19,
  //     name: 'Diploma in Business Management',
  //     image: '../../images/businessmanagemnet.jpg',
  //   },
  //   {
  //     id: 20,
  //     name: 'Certificate in Digital Marketing',
  //     image: '../../images/Digitalmarket.jpg'
  //   }
  // ]

  const handleEnroll = () => {
    navigate('/enroll');
    window.scroll(0, 0);
  }

  return (
    <>
    <Header />
      <div className='courses-page'>
        <div className="courses-page-content">
          <div className="courses-title">
            <h1>Courses</h1>
          </div>
            <div className="courses-table">
              <div className="courses-table-details">
                <table>
                  <thead>
                    <th>COURSE</th>
                    <th>EXAMINER</th>
                    <th>DURATION</th>
                    <th>MIN ENTRY</th>
                    <th>FEES</th>
                  </thead>
                  <tbody>
                    {coursesDetails.map((course) => (
                      <tr key={course.id}>
                        <td>{course.name}</td>
                        <td>{course.examiner}</td>
                        <td>{course.duration}</td>
                        <td>{course.entry}</td>
                        <td>{course.fees}</td>
                        <td><button onClick={handleEnroll}>Enroll</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> 
            </div>
          
          <div className="other-title">
            <span></span>
            <p>Other Courses</p>
          </div>
          <div className="other-courses">
              <div className="courses-data">
                    <div className="courses-info">
                        {otherCourses.map((course) => (
                            <div key={course.id}className="course-card">
                                <div className="course-image">
                                    <img src={course.image} alt="" />
                                </div>
                                <div className="view-course">
                                  <div className="enroll-button">
                                    <button onClick={handleEnroll}>Enroll</button>
                                  </div>
                                    
                                </div>
                                <div className="course-name">
                                    <p>{course.name}</p>
                                    <p>{course.fees ? `Fees: ${course.fees}`: ''}</p>
                                </div>
                            </div>
                        ))}
                    </div>
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

export default Courses
