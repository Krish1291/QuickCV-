import { useLocation, useNavigate } from "react-router-dom";
import "./ChooseTemplate.css";
const ChooseTemplate = () => {
  const location = useLocation();
  const formData = location.state; // resume form data from ResumeBuilder
  const navigate = useNavigate();

  const handleSelectTemplate = (templateName) => {
    navigate("/preview", {
      state: {
        ...formData,
        selectedTemplate: templateName,
      },
    });
  };

  return (
    <div className="text-center mt-10 ">
      <h1 className="text-7xl font-bold mb-6  text-blue-600 tt">
        Choose Your Template
      </h1>

      <div className="mainContent">
        <div className="temp1">
          <img src="Template.PNG" alt="Template1"></img>
          <button
            className="border p-4 m-4 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => handleSelectTemplate("template1")}
          >
            Template 1
          </button>
        </div>

        <div className="temp2">
          <img src="wer.PNG" alt="Template1"></img>
          <button
            className="rder p-4 m-4 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => handleSelectTemplate("template2")}
          >
            Template 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
