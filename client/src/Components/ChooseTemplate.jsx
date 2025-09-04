import { useLocation, useNavigate } from "react-router-dom";
import "./ChooseTemplate.css";
const ChooseTemplate = () => {
  const location = useLocation();
  const formData = location.state;
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

      <div className="mainContent1">
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
        <div className="temp3">
          <img src="Template3.PNG" alt="Template1"></img>
          <button
            className="rder p-4 m-4 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => handleSelectTemplate("template3")}
          >
            {" "}
            Template 3
          </button>
        </div>
        <div className="temp3">
          <img src="Template4.PNG" alt="Template1"></img>
          <button
            className="rder p-4 m-4 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => handleSelectTemplate("template4")}
          >
            {" "}
            Template 4
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
