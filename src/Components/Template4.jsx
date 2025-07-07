import "./Template4.css";
import html2pdf from "html2pdf.js/dist/html2pdf.min.js";
import { useRef } from "react";

const Template4 = ({ data }) => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    html2pdf()
      .set({
        filename: `${data.name}_resume.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { format: [300, 400], orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <>
      <div className="resume-container" ref={resumeRef}>
        <header className="resume-header">
          <div>
            <h1>
              {data.name} <span className="highlight">{data.lastName}</span>
            </h1>
          </div>
          <div className="contact-info">
            <p>{data.number}</p>
            <p>{data.email}</p>
            <p>{data.address}</p>
          </div>
        </header>

        <section className="summary">
          <h2>SUMMARY</h2>
          <p>{data.about}</p>
        </section>

        <div className="grid-layout">
          <div className="left-column">
            <section>
              <h3>EDUCATION</h3>
              <ul>
                {(data.education || "").split("\n").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>SKILLS</h3>
              <ul>
                {(data.skills || "").split("\n").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>ACHIEVMENTS</h3>
              <ul>
                {(data.Achievments || "").split("\n").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3>HOBBIES</h3>
              <ul>
                {(data.hobbies || "").split("\n").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="right-column">
            <section>
              <h3>PROFESSIONAL EXPERIENCE</h3>
              <ul>
                {(data.experience || "").split("\n").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <button onClick={handleDownload} className="download-btn">
        Download PDF
      </button>
    </>
  );
};

export default Template4;
