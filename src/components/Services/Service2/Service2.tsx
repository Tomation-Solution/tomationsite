import React from "react";
import "./Service2.css";
import bulb from "../../Services/images/bulb.svg";
import computer from "../../Services/images/computer.svg";
import phone from "../../Services/images/phone.svg";
import documents from "../../Services/images/documents.svg";
import backfile from "../../Services/images/backfile.svg";
import process from "../../Services/images/process.svg";
const Service2 = () => {
  return (
    <div className="Service2">
      <h1 style={{ textAlign: "center" }}>
        We Build Digital Products For Your Success
      </h1>
      <div className="upperrectangle">
        <div className="rectangle">
          <div className="logo">
            <img src={bulb} />
          </div>

          <h4>Be scope Tech Solutions</h4>
          <p>
            (Conceptualization and Launch ) We provide software integrations and
            resources for your business (Rel8, E- metrics Suite Solutions,
            Sequential Jobs)
          </p>
        </div>
        <div className="rectangle">
          <div className="logo">
            <img src={computer} />
          </div>

          <h4>Web Solution Development</h4>
          <p>
            We build a professional image for your business by designing and
            developing standard websites that are compatible with all devices.
          </p>
        </div>
        <div className="rectangle">
          <div className="logo">
            <img src={phone} />
          </div>

          <h4>Mobile Solution Development</h4>
          <p>
            We design and develop Interactive Mobile apps that will expand your
            business appearance.
          </p>
        </div>

        <div className="rectangle">
          <div className="logo">
            <img src={documents} />
          </div>

          <h4>Electronic Document Management System</h4>
          <p>
            Modernize, migrate, manage, and optimize your EDMS to build
            scalable, secure, and highly agile systems.
          </p>
        </div>
        <div className="rectangle">
          <div className="logo">
            <img src={backfile} />
          </div>

          <h4>Backfile Conversion</h4>
          <p>
            We extract valuable data and insights from your legacy records and
            documents to make better business decisions.
          </p>
        </div>
        <div className="rectangle">
          <div className="logo">
            <img src={process} />
          </div>

          <h4>Process Automation</h4>
          <p>
            We streamline a business for simplicity, achieve digital
            transformation, increase service quality, improve service delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service2;
