import React from "react";
import "./about.css";
import Myimages from "../../contants/Allimage";
import { TeamMember } from "../../contants/Allimage";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-top-sec">
        <div className="about-heding-sec">
          <div className="about-top-sec-heading">
            <h2>We're designing a new way to do business</h2>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Read Our Story <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="about-top-sec-img">
          <img
            src="https://preview.cruip.com/tidy/images/about-intro.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="modal" id="myModal">
        <div class="modal-dialog" data-aos="fade-down">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Our Story</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
                amet how to manage. Malesuada proin libero nunc consequat
                interdum varius. Quam pellentesque nec nam aliquam sem et tortor
                consequat. Pellentesque adipiscing commodo elit at imperdiet.
                Semper auctor neque vitae tempus quam pellentesque nec. Amet
                dictum sit amet justo donec enim diam. Varius sit amet mattis
                vulputate enim nulla aliquet porttitor. Odio pellentesque diam
                volutpat commodo sed. Elit sed vulputate mi sit amet mauris
                commodo quis imperdiet.
              </p>

              <p>
                Temper auctor neque vitae tempus quam pellentesque nec. Amet
                dictum sit amet justo donec enim diam. Varius sit amet mattis
                vulputate enim nulla aliquet porttitor. Odio pellentesque diam
                volutpat commodo sed. Elit sed vulputate mi sit amet mauris
                commodo quis imperdiet.
              </p>

              <p>The Tidy Team</p>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="about-sec3">
        <h2>
          We are fully distributed, which means you can join us whenever you
          want.
        </h2>

        <div className="about-sec3-img">
          <div className="about-sec3-parent">
            <div className="about-sec3-img1 child"></div>
          </div>
          <div className="about-sec3-parent">
            <div className="about-sec3-img2 child"></div>
          </div>
          <div className="about-sec3-parent">
            <div className="about-sec3-img3 child"></div>
          </div>
        </div>
      </div>



      <div className="scroll-container about-sec4">
 
        <div className="scroll-content">
          {TeamMember.map((data) => {
            return (
              <div>
                <img className="temMember-img" src={data.img} alt="" />
                <h4>{data.name}</h4>
                <p>{data.post}</p>
              </div>
            );
          })}
        </div>
      </div>
      

      <div className="about-sec6">
        <div>
          <h2>Want to be part of the journey?</h2>
          <p>
            We are always open to talk to great people who want to help us shape
            the future of work, and we have job openings all over the world.
          </p>

          <button>
            See Open Position <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
