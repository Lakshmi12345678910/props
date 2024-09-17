import React from 'react'
import './Course1.css';

const CourseCard = (props) => {
  return (
    <div className="course-card">
      <h2>{props.title}</h2>
      <hr/>
      <p>{props.description}</p>
      <p>Reviews: {props.reviews} </p>
      <b>Ratings:{props.rating}</b>
    </div>
  );
};


const App = () => {
  const course =[
    {
  title:"Angular Development Course",
  description:"Angular is popular for making dynamic applications....",
  reviews:274,
  rating:5.0
},
{
  title:"React Development Course",
  description:"React js is made web page...",
  reviews:292,
  rating:5.0
},
{
  title:"Mean Stack Development Course",
  description:"Mean Stack Front to back...",
  reviews:196,
  rating:5.0
},
{
  title:"Mern Stack Development Course",
  description:"Mern stack front to back in this...",
  reviews:184,
  rating:5.0
},
{
  title:"Web Development Course",
  description:"with achievers it's ui development...",
  reviews:284,
  rating:5.0
},
{
  title:"Digital Marketing Course",
  description:"the future for digital marketing is promising...",
  reviews:234,
  rating:5.0
},
{
  title:"React Native  Development Course",
  description:"full stack development is defined is defined as...",
  reviews:295,
  rating:5.0
},
{
  title:"Ionic Development Course",
  description:"ionic 4 & 5 that you can immediatley implement to ...",
  reviews:234,
  rating:5.0
},
]
return(
  <div>
    <h1>Trending Courses</h1>
    <div className="coursecard">
      {course.map((course,index) => (
        <CourseCard key={index}
        title={course.title}
        description={course.description}
        reviews={course.reviews}
        rating={course.rating}
        />
      ))}
    </div>
  </div>
);
};
// export  default App