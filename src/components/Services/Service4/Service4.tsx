import React from "react";
import "./Service4.css";
import cross from "../../Services/images/cross.svg";

const Service4 = () => {
  return (
    <div className="Service4">
      <div className="FAQ">
        <h1>FAQ from Our Customers Clients</h1>
        <button>Ask a Question</button>
      </div>

      <div className="questions">
        <div className="deep">
          <p>What services does your company offer? </p>
          <img src={cross} />
        </div>
        <div className="line"></div>
        <div className="deep">
          <p>
            Our company specializes in website development and digital product
            sales. We offer a range of services including custom website design
            and development, e-commerce website development, digital product
            sales, and ongoing website maintenance and support.{" "}
          </p>
        </div>
        <div className="line"></div>
        <div className="deep">
          <p>
            What is the process for developing a website with your company?{" "}
          </p>
          <img src={cross} />
        </div>
        <div className="line"></div>
        <div className="deep">
          <p>What is included in your website development packages?</p>
          <img src={cross} />
        </div>
        <div className="line"></div>
        <div className="deep">
          <p>
            What is your pricing for website development and digital product
            sales services?{" "}
          </p>
          <img src={cross} />
        </div>
        <div className="line"></div>
        <div className="deep">
          <p>How do I get started with your services? </p>
          <img src={cross} />
        </div>
        <div className="line"></div>
        <div className="deep">
          <p>Can you build a product from an idea stage?</p>
          <img src={cross} />
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Service4;
