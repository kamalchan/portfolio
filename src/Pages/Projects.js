 import React from "react";
// import { Link } from "react-router-dom";
// import djzaame from "../Data/Portfolioimg/djzaame.png";
// import luxurysteeldoors from "../Data/Portfolioimg/luxurysteeldoors.png";
 import "./Projects.css";
// //import React from "react";
 import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
 import "react-circular-progressbar/dist/styles.css";

const Portfolio = () => {
  const skillsData = [
    { name: "JavaScript", percentage: 90 },
    { name: "React.js", percentage: 70 },
    { name: "SQL", percentage: 60 },
    { name: "HTML", percentage: 70 },
    { name: "CSS", percentage: 70 },
    { name: "Bootstrap", percentage: 70 },
  ];

  return (
    <div id="portfolio">
    <div className="container">
    <div className="row">
      {
        skillsData && skillsData.map((item) => {
          return <>
          <div className="col-lg-2 col-md-3 col-sm-11 offset-sm-1">
          <h3>{item.name}</h3>
          <CircularProgressbar value={item.percentage} text={`${item.percentage}%`} />;
          </div>
          </>
        })
      }
      </div>
    </div>
    </div>
 


  
  
//     // <>
//     //   <div id="portfolio" data-aos="fade-in">
//     //     <div className="container">
//     //       <div className="row">
//     //         <div className="col-sm-11 offset-sm-1">
//     //           <div className="row">
//     //             <div className="col-sm-12">
//     //               <h2>Portfolio</h2>
//     //               <br />
//     //             </div>
//     //             <div className="col-sm-6">
//     //               <a href="https://www.djzaame.com" target="_blank">
//     //                 <div className="imgsec" data-aos="zoom-in">
//     //                   <img src={djzaame} className="img-fluid" alt="1Life" />
//     //                 </div>
//     //               </a>
//     //             </div>
//     //             <div className="col-sm-6">
//     //               <a href="https://luxury-doors.glitch.me/" target="_blank">
//     //                 <div className="imgsec" data-aos="zoom-in">
//     //                   <img
//     //                     src={luxurysteeldoors}
//     //                     className="img-fluid"
//     //                     alt="1Life"
//     //                   />
//     //                 </div>
//     //               </a>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </>




// const Portfolio = () => {
// //   return (
// //     <div className="container">
// //       <h1>Skills</h1>
// //       <div className="progress" style={{ width: '85%', backgroundColor: '#43f94a' }}>
// //         <h3>83<span>%</span></h3>
// //         <h4>HTML</h4>
// //       </div>
// //       <div className="progress" style={{ width: '85%', backgroundColor: '#43f94a' }}>
// //         <h3>83<span>%</span></h3>
// //         <h4>CSS</h4>
// //       </div>
// //       <div className="progress" style={{ width: '85%', backgroundColor: '#43f94a' }}>
// //         <h3>83<span>%</span></h3>
// //         <h4>JavaScript</h4>
// //       </div>
// //     </div>
// //   );
// // };

// export default Portfolio;
// return(
// <div className="d-flex justify-content-center flex-column align-items-center">
// <h1 className="title-text">React Progress Bar</h1>

// <div className="skill-box w-50 mb-3">
//     <span className="title">HTML</span>
//     <div className="skill-bar">
//         <span className="skill-per html">
//             <span className="tooltip">95%</span>
//         </span>
//     </div>
// </div>
// <div className="skill-box w-50">
//     <span className="title">CSS</span>
//     <div className="skill-bar">
//         <span className="skill-per css">
//             <span className="tooltip">80%</span>
//         </span>
//     </div>
// </div>
// <div className="skill-box w-50">
//     <span className="title">JavaScript</span>
//     <div className="skill-bar">
//         <span className="skill-per javascript">
//             <span className="tooltip">60%</span>
//         </span>
//     </div>
// </div>
// <div className="skill-box w-50">
//     <span className="title">NodeJS</span>
//     <div className="skill-bar">
//         <span className="skill-per nodejs">
//             <span className="tooltip">40%</span>
//         </span>
//     </div>
// </div>
// <div className="skill-box w-50">
//     <span className="title">ReactJS</span>
//     <div className="skill-bar">
//         <span className="skill-per reactjs">
//             <span className="tooltip">70%</span>
//         </span>
//     </div>
// </div>
// <div className="skill-box w-50">
//     <span className="title">ExpressJS</span>
//     <div className="skill-bar">
//         <span className="skill-per expressjs">
//             <span className="tooltip">75%</span>
//         </span>
//     </div>
// </div>
// </div>
);
  };

export default Portfolio;