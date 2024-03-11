import React from "react";
import "../../../../../assets/css/aboutevents.css";

const About = (props) => {
  console.log("Props:", props);

  const redirectToForm = (heading) => {
    let link;
    switch (heading) {
      case "RoboSoccer":
        link = "https://docs.google.com/forms/d/e/1FAIpQLSfDar2JxF1Fs0DerASpff-rVpGE4q8ecpSL4f37FjcO7qeahg/viewform";
        break;
      case "Pixar":
        link = "https://docs.google.com/forms/d/e/1FAIpQLSePcx7P0PRtxz_83g6QSVK4ckuwHINGt7wJuC6rOy_Mt-shMg/formrestricted";
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
      case "SynthAI":
        link = "https://forms.gle/zCNwxp8MwcALcbq56";
        break;

      default:
        console.error("Unknown heading:", heading);
        return;
    }
    window.open(link);
  };
  const redirectToForm_rule = (heading) => {
    let link;
    switch (heading) {
      case "RoboSoccer":
        link = "https://docs.google.com/document/d/1cqo_mUjCIGM89ZdL6rt7XeLntAxoOOoMyKKeIp66FRE/edit";
        break;
      case "Pixar":
        link = "https://docs.google.com/document/d/1ndZRYSdi32LhCzim6McjvFzTJEbqlwHe9dL9FgiSDMw/edit";
        break;
      case "Maze Up":
        link = "https://docs.google.com/document/d/1BHn-sl1rGv-mPiBAuAawSAj0AYgtPb-RZcbn1yYEsv0/edit";
        break;
      case "Bit Coding":
        link = "https://docs.google.com/document/d/1nnJuXiLjmrUFyviQuD5IDnOxw9zit05rWpRIiHn5mLE/edit";
        break;
      case "Simulator":
        link = "https://docs.google.com/document/d/11RgONkHEAYruFKIEXi7Jrx9bBJctSxkRuhCvqmBvUsM/edit";
        break;
      case "SynthAI":
        link = "https://drive.google.com/file/d/1qiNShhRQtuV6ucuCRELkjvZNjbkIN2OZ/view";
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
          <button onClick={() => redirectToForm_rule(props.heading)} className="rule-button">RULE BOOK</button>
        </div>
      </div>
    </div>
  );
};

export default About;
