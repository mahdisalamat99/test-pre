import React from "react";
import { ReactComponent as User } from "./user-image.svg";
import "./Pateints.styles.css";
function Patients() {
  return (
    <div className="patients-section">
      <div className="top-section">
        <div className="left-part">
          <p className="latest-patient">Latest patient</p>
          <div className="user-card">
            <div className="first-column">
              <User />
              <p className="patient-name">John Rad</p>
              <p className="patient-code">P-216360</p>
            </div>
            <div className="second-column">
              <div className="gender">
                <p className="title">Gender</p>
                <p className="value"> Male </p>
              </div>
              <div className="dob">
                <p className="title">DoB</p>
                <p className="value"> 21 June 1985 </p>
              </div>
              <div className="phone">
                <p className="title">Phone</p>
                <p className="value"> (235)-6543130 </p>
              </div>
            </div>
            <div className="third-column">
              <div className="height">
                <p className="title">Height(cm)</p>
                <p className="value"> (235)-6543130 </p>
              </div>
              <div className="weight">
                <p className="title">Weight(kg)</p>
                <p className="value"> (235)-6543130 </p>
              </div>
              <div className="email">
                <p className="title">Email</p>
                <p className="value"> John.rod@mail.com </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part">
          <p className="general-note">General Note</p>
          <div className="note-card">
            <p className="note">
              Massa et sit diam nunc. Pulvinar natoque massa, semper est cursus
              gravida vulputate netus. Condimentum massa arcu auctor magna nec
              ipsum malesuada.
            </p>
            <p className="date">24 Feb 2021</p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="above-table">
          <div className="titles">
            <p className="title">Surgical Info</p>
            <p className="title">Findings</p>
            <p className="title">Surgical Events</p>
            <p className="title">Devices Info</p>
          </div>
          <div className="search-bar">
            <i class="las la-search"></i>
            <input type="search" placeholder="Search inside records" className="search-input" />
          </div>
        </div>
        <div className="table">
          <div className="row">
            <p className="info-key">Surgical Type</p>
            <p className="info-value">Aneurysm eCRF</p>
            <i class="las la-edit"></i>
          </div>
          <div className="row">
            <p className="info-key">Patient Name</p>
            <p className="info-value">John Rod</p>
          </div>
          <div className="row">
            <p className="info-key">MRN (Medical Record Number)</p>
            <p className="info-value">P-216360</p>
          </div>
          <div className="row">
            <p className="info-key">Accession Number</p>
            <p className="info-value">234123412</p>
          </div>
          <div className="row">
            <p className="info-key">Order Date</p>
            <p className="info-value">21 April 2021</p>
          </div>
          <div className="row">
            <p className="info-key">Date of Service</p>
            <p className="info-value">21 April 2021</p>
          </div>
          <div className="row">
            <p className="info-key">History</p>
            <p className="info-value">-</p>
          </div>
          <div className="row">
            <p className="info-key">Consent</p>
            <p className="info-value">
              Informed consent was obtained from patient, xx and discussed with
              yy by zz. Relevant risks discussed included infection, bleeding,
              vascular injury, stroke, the need for emergent surgery, coma, and
              death. Also discussed were contrast-related complications,
              including allergic reactions and renal failure. Possible
              complications relating to sedation were also discussed. The
              patient was placed on the fluoroscopy table in the supine position
              and prepped and draped in sterile fashion. Fluoroscopy was used to
              confirm the planned puncture approach.
            </p>
          </div>
          <div className="row">
            <p className="info-key">Technique</p>
            <p className="info-value">
              There were no immediate complications. The patient stayed at her
              neurological baseline. The patient was transferred the ICU in good
              condition, neurologically unchanged. xx minutes of fluoroscopy
              time and yy cc of Omnipaque 300 contrast were used. Attending
              Interventional Neuroradiologist, MD was present during the
              procedure and its interpretation.
            </p>
          </div>
          <div className="row">
            <p className="info-key">Case Complexity</p>
            <p className="info-value">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
