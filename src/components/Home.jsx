import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>GAUTAM OP</h1>
          <p> Web Dev  | Competitive Programming  |  Network Sequrity</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          The power of cybersecurity lies in its ability to safeguard digital realms, preserve trust, protect sensitive data, mitigate risks, and fortify defenses against ever-evolving cyber threats.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who I am?</h1>
          <p>
          As a student at IIT Goa, I am passionate about coding and web development. I have extensive knowledge in programming languages such as C++, C, Python, HTML 5, and JavaScript, and I am proficient in using tools such as Bootstrap. I am also interested in exploring the fields of Machine Learning and Artificial Intelligence.

In my free time, I enjoy playing online games such as BGMI and participating in national-level tournaments. I am also a competitive programmer with a 5-star rating in C++ and C on HackerRank and a 3-star rating on CodeChef. Currently, I am working to improve my skills by solving problems on LeetCode.

I have a love for sports and I enjoy making content for my YouTube channel, where I have over 1,000 subscribers. I am driven, dedicated, and eager to continuously grow and improve my skills. I am confident that my diverse set of interests and abilities will make me a valuable asset to any team.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          {/* <h1>My Social Media Handles</h1> */}

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillLinkedin />
              <p><a href="https://www.linkedin.com/in/gautam-kumar-mahar-iitgoa/">Linkedin</a></p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillGithub/>
              <p><a href="https://github.com/gautamop01">Github</a></p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p><a href="https://www.youtube.com/@GAUTAM_OP">Youtube</a></p>
            </div>
            <div
             style={{
                animationDelay: "1s",
                 }}
              >
                <AiFillInstagram />
              <p><a href="https://www.instagram.com/gautam_op_/">Instagram</a></p>
               </div>


           
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
