import { useState } from "react";
import "./ResumeBuilder.css";

import { useLocation, useNavigate } from "react-router-dom";
const ResumeBuilder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(
    location.state || {
      name: "",
      lastName: "",
      email: "",
      number: "",
      about: "",
      education: "",
      experience: "",
      skills: "",
      Projects: "",
      Achievments: "",
      hobbies: "",
    }
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/choose-template", { state: data });
    console.log(data);
  };
  return (
    <>
      <p className="Heading text-6xl text-center font-bold  text-blue-600 ">
        Build Your Resume Here
      </p>
      <form onSubmit={handleSubmit}>
        <div className="container container-fade-in flex flex-col items-center justify-center">
          <p className="heading text-3xl text-center font-bold  text-blue-600 ">
            {" "}
            Fill Out The Details:
          </p>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            required
            placeholder="First Name"
            className="border p-2 rounded"
          />
          <br></br>
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleChange}
            required
            className="w-lg border p-2 rounded"
          ></input>
          <br></br>
          <label htmlFor="name" id="em">
            Email:
          </label>
          <input
            type="email"
            value={data.email}
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
            className="w-lg border p-2 rounded"
          ></input>
          <br></br>
          <label htmlFor="name">Number:</label>
          <input
            type="tel"
            name="number"
            placeholder="Enter Your Mobile Number"
            value={data.number}
            onChange={handleChange}
            required
            className="w-lg border p-2 rounded"
          ></input>
          <br></br>
          <label htmlFor="name">About:</label>
          <textarea
            name="about"
            value={data.about}
            placeholder="Introduction"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            cols={20}
            rows={6}
            required
          />
          <br></br>
          <label htmlFor="name">Education:</label>
          <textarea
            name="education"
            value={data.education}
            placeholder="Education"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            cols={20}
            rows={6}
            required
          />
          <br></br>
          <label htmlFor="name">Experience:</label>
          <textarea
            name="experience"
            value={data.experience}
            placeholder="Enter each experience on a new line"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            rows={6}
            required
          />
          <br></br>
          <label htmlFor="name" id="skill">
            Skills:
          </label>
          <textarea
            name="skills"
            placeholder="Skills"
            value={data.skills}
            className="w-full border p-2 rounded"
            onChange={handleChange}
            rows={6}
            required
          />
          <br></br>
          <label htmlFor="name">Projects:</label>
          <textarea
            name="Projects"
            value={data.Projects}
            placeholder="Enter Your Projects"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            rows={6}
            required
          ></textarea>
          <br></br>{" "}
          <label htmlFor="name" id="ach">
            Achievments:
          </label>
          <textarea
            name="Achievments"
            value={data.Achievments}
            placeholder="Enter Your Achievments"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={6}
          ></textarea>
          <br></br>
          <label htmlFor="name">Hobbies:</label>
          <textarea
            name="hobbies"
            value={data.hobbies}
            placeholder="Enter Your Hobbies"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={6}
          ></textarea>
          <br></br>
          <button className="font-bold bg-blue-600 p-4 text-white rounded hover:bg-blue-700  pl-10 pr-10">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ResumeBuilder;
