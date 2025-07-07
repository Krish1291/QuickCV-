import { useLocation, useNavigate } from "react-router-dom";
import Template1 from "./Template1";
import { useEffect } from "react";
import Template2 from "./Template2";
import Template3 from "./Template3";
const Preview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (!data) {
      navigate("/builder");
    }
  }, [data, navigate]);

  const selectedTemplate = data?.selectedTemplate;

  const handleBack = () => {
    navigate("/builder", { state: data });
  };

  return (
    <div className="my-10 px-6">
      <button
        onClick={handleBack}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back to Edit
      </button>
      {selectedTemplate === "template1" && <Template1 data={data} />}
      {selectedTemplate === "template2" && <Template2 data={data} />}
      {selectedTemplate == "template3" && <Template3 data={data} />}
    </div>
  );
};

export default Preview;
