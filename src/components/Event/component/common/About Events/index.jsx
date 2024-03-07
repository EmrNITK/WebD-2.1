// import React from "react";
// import "../../../../../assets/css/aboutevents.css";

// const About = (props) => {
//   const redirectToForm = (link) => {
//     window.open(link);
//   };

//   return (
//     <div className="about-wrapper">
//       <div className="max-width about">
//         <div className="about-title">{props.heading}</div>
//         <div className="about-content">{props.content}</div>
//         <button onClick={() => About(props.glink)} className="register-button">REGISTER NOW </button>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "../../../../../assets/css/aboutevents.css";

const About = (props) => {
  console.log("Props:", props);

  const redirectToForm = (heading) => {
    let link;
    switch (heading) {
      case "RoboSoccer":
        link = "https://www.codechef.com/";
        break;
      case "Pixar":
        link = "https://www.pixar.com/";
        break;
      case "Maze Up":
        link = "https://docs.google.com/forms/d/e/1FAIpQLScRFT9FRZXM3bPneYKxWSDanM22eeMegnfdWBe2e7_-Ds8cgA/viewform";
        break;
      case "Bit Coding":
        link = "https://docs.google.com/forms/d/e/1FAIpQLSdbFZfqtlIFts0UNkfT08lKUKGJd8tkUtEXb1Q1LjCayaRsWg/viewform";
        break;
      case "Simulator":
        link = "https://docs.google.com/forms/d/e/1FAIpQLSexpgJ8na5PsP05n4b_b6yGsAOmpR3oG-2Xw9r09EFSFFS7EQ/viewform";
        break;
     
      default:
        console.error("Unknown heading:", heading);
        return;
    }
    window.open(link);
  };

  return (
    <div className="about-wrapper">
      <div className="max-width about">
        <div className="about-title">{props.heading}</div>
        <div className="about-content">{props.content}</div>
        <div>
          <button onClick={() => redirectToForm(props.heading)} className="register-button">REGISTER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default About;
