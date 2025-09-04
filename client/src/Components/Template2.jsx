import "./Template2.css";
import html2pdf from "html2pdf.js/dist/html2pdf.min.js";

import { useRef } from "react";
const Template2 = ({ data }) => {
  const resumeRef = useRef();
  const handleDownload = () => {
    const element = resumeRef.current;

    html2pdf()
      .set({
        filename: `${data.name}_resumee.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { format: [300, 400], orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <>
      <div className="content" ref={resumeRef}>
        <div className="content2">
          <header>
            <h1>
              {data.name} {data.lastName}
            </h1>
            <p id="cntct">
              {data.email} | {data.number}
            </p>
          </header>
        </div>
        <br></br>
        <div className="bdy">
          <h2>About:</h2>
          <p>{data.about}</p>
          <hr></hr>
          <br></br>
          <h2>Education:</h2>
          <ul>
            {(data.education || "")
              .split("\n")
              .filter(Boolean)
              .map((edu, ind) => (
                <li key={ind}>{edu.trim()}</li>
              ))}
          </ul>
          <hr></hr>
          <br></br>
          <h2>Professional Experience</h2>
          <ul>
            {(data.experience || "")
              .split("\n")
              .filter(Boolean)
              .map((exp, ind) => (
                <li key={ind}>{exp.trim()}</li>
              ))}
          </ul>
          <hr></hr>
          <br></br>
          <h2>Projects:</h2>
          <ul>
            {(data.Projects || "")
              .split("\n")
              .filter(Boolean)
              .map((exp, ind) => (
                <li key={ind}>{exp.trim()}</li>
              ))}
          </ul>
          <hr></hr>
          <br></br>
          <h2>Skills:</h2>
          <ul>
            {(data.skills || "")
              .split("\n")
              .filter(Boolean)
              .map((exp, ind) => (
                <li key={ind}>{exp.trim()}</li>
              ))}
          </ul>
          <hr></hr>
          <br></br>
          <h2>Achievments:</h2>
          <ul>
            {(data.Achievments || "")
              .split("\n")
              .filter(Boolean)
              .map((exp, ind) => (
                <li key={ind}>{exp.trim()}</li>
              ))}
          </ul>
          <hr></hr>
          <br></br>
          <h2>Hobbies:</h2>
          <ul>
            {(data.hobbies || "")
              .split("\n")
              .filter(Boolean)
              .map((exp, ind) => (
                <li key={ind}>{exp.trim()}</li>
              ))}
          </ul>
          <hr></hr>
          <br></br>
        </div>
      </div>
      <button onClick={handleDownload} className="download-btn">
        Download Resume as PDF
      </button>
    </>
  );
};
export default Template2;
