import styled from "@emotion/styled";
import { useState } from "react";
import { useGlobalState } from "../state";

const StyledForm = styled.form`
  display: grid;
  width: 100%;
  padding: 0 2rem;
  @media (min-width: 800px) {
    padding: 0 2rem;
  }
  p {
    font-size: .9rem;
  }
  margin: 0 auto;
  label {
    font-weight: 100;
    margin-top: 1rem;
  }
  input,
  textarea {
    border: none;
    border-bottom: 1px solid black;
    font-size: 1rem;
    padding-bottom: 5px;
    @media (min-width: 800px) {
      font-size: 2rem;
    }
    margin: 1rem 0 0.5rem;
    color: #aad9e2;
    &:focus {
      outline: none;
      border-bottom: 1px solid #aad9e2;
    }
  }
  textarea {
    resize: none;
    overflow: hidden;
    min-height: 100px;
    max-height: 200px;
  }
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 2.3rem;
    font-size: 1.05em;
    line-height: 1.7;
    cursor: pointer;
    /* padding-top: 10rem; */
  }
  [type="checkbox"]:not(:checked) + label::before,
  [type="checkbox"]:checked + label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #aaa;
    background: white;
    /* border-radius: .2em; */
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 rgba(203, 34, 237, 0.2);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }
  [type="checkbox"]:not(:checked) + label::after,
  [type="checkbox"]:checked + label::after {
    content: "✕";
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0.18em;
    font-size: 1.375em;
    color: #aad9e2;
    line-height: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  [type="checkbox"]:checked:focus + label:before,
  [type="checkbox"]:not(:checked):focus + label:before {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 2px #aad9e2;
  }
  .checkbox-container {
    margin: 0.2rem 0;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }

  button {
    margin: 0.5rem auto 0;
    background: #aad9e2;
    border: none;
    padding: 0.5rem 1rem;
    width: fit-content;
    color: white;
    font-weight: 800;
    font-size: 14px;
  }
  h4 {
    margin-top: 2rem;
  }
`;

const ContactForm = ({ formContent }) => {
  const [formSent, setFormSent] = useState(false);
  const [siteSettings] = useGlobalState("siteSettings");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      field.type === "checkbox"
        ? (formData[field.name] = field.checked)
        : (formData[field.name] = field.value);
    });
    fetch("api/send-email", {
      method: "post",
      body: JSON.stringify(formData),
    });
    setFormSent(true);
    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {formSent ? (
        <p>Thank you for reaching out I will reply as soon as I can</p>
      ) : (
        <>
          <input id="sentFrom" type="text" name="sentFrom" value={siteSettings?.emailFrom} hidden readOnly/>
          <label htmlFor="artistName">Artist Name</label>
          <input id="artistName" type="text" name="artistName" />
          <label htmlFor="yourName">Your Name</label>
          <input id="yourName" type="text" name="yourName" />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
          <label htmlFor="artistWebsite">Artist Website</label>
          <input id="artistWebsite" type="text" name="artistWebsite" />
          <h4>Project Needs</h4>
          {formContent.projectNeeds.map((need, index) => (
            <p key={`${index}-${need}`} className="checkbox-container">
              <input id={need} type="checkbox" name={need} />
              <label htmlFor={need}>{need}</label>
            </p>
          ))}
          <label htmlFor="message">Message</label>
          <textarea id="message" type="text" name="message" rows="1" />
          <button type="submit">Send</button>
        </>
      )}
    </StyledForm>
  );
};

export default ContactForm;
