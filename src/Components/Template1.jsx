import "./Template1.css";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
const Template1 = ({ data }) => {
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
      <div ref={resumeRef} className="template-container">
        <header className="template-header">
          <h1>
            {data?.name} {data?.lastName}
          </h1>
          <p>
            {data?.email} | {data?.number}
          </p>
        </header>

        <main className="template-main">
          <div>
            <section className="template-section">
              <h2>Education</h2>
              <ul>
                {(data?.education || "")
                  .split("\n")
                  .filter(Boolean)
                  .map((edu, i) => (
                    <li key={i}>{edu.trim()}</li>
                  ))}
              </ul>
            </section>

            <section className="template-section">
              <h2>Skills</h2>
              <ul>
                {(data?.skills || "")
                  .split(",")
                  .filter(Boolean)
                  .map((skill, i) => (
                    <li key={i}>{skill.trim()}</li>
                  ))}
              </ul>
            </section>
          </div>

          <div>
            <section className="template-section">
              <h2>Experience</h2>
              <ul>
                {(data?.experience || "")
                  .split("\n")
                  .filter(Boolean)
                  .map((exp, i) => (
                    <li key={i}>{exp.trim()}</li>
                  ))}
              </ul>
            </section>

            <section className="template-section">
              <h2>Projects</h2>
              <ul>
                {(data?.Projects || "")
                  .split("\n")
                  .filter(Boolean)
                  .map((pro, i) => (
                    <li key={i}>{pro.trim()}</li>
                  ))}
              </ul>
            </section>

            <section className="template-section">
              <h2>Hobbies</h2>
              <ul>
                {(data?.hobbies || "")
                  .split("\n")
                  .filter(Boolean)
                  .map((hobby, i) => (
                    <li key={i}>{hobby.trim()}</li>
                  ))}
              </ul>
            </section>

            <section className="template-section">
              <h2>Achievements</h2>
              <ul>
                {(data?.Achievments || "")
                  .split("\n")
                  .filter(Boolean)
                  .map((ach, i) => (
                    <li key={i}>{ach.trim()}</li>
                  ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
      <br></br>
      <button onClick={handleDownload} className="download-btn">
        Download Resume as PDF
      </button>
    </>
  );
};

export default Template1;
