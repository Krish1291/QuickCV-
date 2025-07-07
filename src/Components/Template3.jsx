import "./Template3.css";
import html2pdf from "html2pdf.js";

import { useRef } from "react";
const Template3 = ({ data }) => {
  const resumeRef = useRef();
  const handleDownload = () => {
    const element = resumeRef.current;

    html2pdf()
      .set({
        filename: `${data.name}_Resumee.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { format: [300, 400], orientation: "portrait" },
      })
      .from(element)
      .save();
  };
  return (
    <>
      {" "}
      <div className="template3" ref={resumeRef}>
        <div className="content3">
          <h1>
            {data.name} {data.lastName}
          </h1>
          <div className="contact">
            <p id="heading">Email: </p>
            <p>{data.email}</p>
            <p id="heading">Mobile Number:</p>
            <p>{data.number}</p>
          </div>
        </div>

        <div className="info">
          <p id="heading">ABOUT ME</p>
          <p id="about">{data.about}</p>
        </div>
        <div className="info">
          <p id="heading">EXPERIENCE</p>
          <p id="expe">{data.experience}</p>
        </div>
        <div className="info">
          <p id="heading">EDUCATION</p>
          <p id="edu">{data.education}</p>
        </div>
        <div className="info">
          <p id="heading">SKILLS</p>
          <p id="ski">{data.skills}</p>
        </div>
        <div className="info">
          <p id="heading">ACHIEVMENTS</p>
          <p id="achie">{data.Achievments}</p>
        </div>
        <div className="info">
          <p id="heading">HOBBIES</p>
          <p id="hobb">{data.hobbies}</p>
        </div>
        <div className="info">
          <p id="heading">PROJECTS</p>
          <p id="hobb">{data.Projects}</p>
        </div>
      </div>
      <button onClick={handleDownload} className="download-btn">
        Download Resume as PDF
      </button>
    </>
  );
};
export default Template3;
