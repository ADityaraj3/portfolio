import React from "react";
import Image1 from "../Photos/aboutmePic1.jpeg";
import Image2 from "../Photos/aboutmegym.jpeg";
import '../CSS/Fonts.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import MyIconComponent from '../components/Icons.jsx'; // Adjust the path accordingly


const About = () => {
    const sectionStyle = {
        // marginTop:'70px',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        marginLeft:'200px',
      };
    
      const imageStyleLeft = {
        flex: 1,
        marginLeft: '20px',
        maxWidth: "25%",
        height: "auto",
        border: '20px solid #808080',
        
      };
    
      const imageStyleRight = {
        flex: 1,
        marginRight: '200px',
        maxWidth: "25%",
        height: "auto",
        border: '20px solid #808080',
      }

      const textStyleLeft = {
        flex: 1,
        maxWidth: "50%",
        marginRight: "150px", 
        padding: "0 20px",
        marginTop:'-100px',
      };

      const textStyleRight = {
        marginTop:'-100px',
        flex: 1,
        maxWidth: "50%",
        marginleft: "200px", 
        padding: "0 20px",
      };

      const headStyle = {
        fontSize:'30px'
      };

      const bg = {
        backgroundColor: '#cccccc',
      };

      const textQuote = {
        fontSize: '19px',
      }
    

      return (
        <div style={bg}>
          <div style={sectionStyle}>
            <img src={Image1} alt="Image 1" style={imageStyleLeft} />
            <div style={textStyleLeft}>
              <h3 className="JosefinSans" style={headStyle}>Techincal Aditya</h3>
              <p className="overpass">
                I am a passionate and highly motivated 4th year Computer Science Engineering student
                with expertise in C++ programming and a strong foundation in Data Sturctures and 
                Algorithms. With over 3000 Data Structure and Algorithms problems solved across 
                paltform, namely <a href="https://leetcode.com/AdityaSraj/">leetcode</a>, <a href="https://www.interviewbit.com/profile/aditya-raj_449">Interview Bit</a>,
                <a href="https://www.codechef.com/users/kanekiaditya"> codeChef</a>, <a href="https://codeforces.com/profile/adityasraj123"> codeForces</a>,
                <a href="https://cses.fi/user/171571"> CSES</a>,<a href="https://auth.geeksforgeeks.org/user/adityasraj123/practice"> geeksforgeeks</a>,
                <a href="https://www.hackerrank.com/adityasraj123"> Hackerrank</a> and <a href="https://www.hackerearth.com/@adityasraj123"> HackerEarth</a>. Hence I possess a key analytical mindset and the ability to tackle 
                complex coding problems.
                <p className="overpass">
                In addition to my proficiency in C++, I have also gained practical experience in web 
                development, enabling me to design and develop dynamic and user-friendly websites I 
                have a solid understanding of front-end technologies such as HTML, CSS, and JavaScript, 
                as well as back-end frameworks like Node.js and Express.js. I have developed 4 websites,
                using MERN stack, and have learned tremendously from it. I am institutional rank 3 on geeksforgeeks
                website and a 6 star hackerrank coder.
                </p>
              </p>
              <MyIconComponent />
            </div>
          </div>
    
          <div style={sectionStyle}>
            <div style={textStyleRight}>
            <h3 className="JosefinSans" style={headStyle}>Aditya?</h3>
              <p className="overpass">
                    Now keeping all the technical stuff aside, I am a just a guy (that guy) who loves challenges, and wants to do something
                meaning full in life. I am also into fitness, as you can tell by the image. I love to go to the gym and you can address 
                me as a powerlifter. Other than that I am a also like to ready philosophical books, and my favourite author till now 
                has been Fyodor Dostoyevsky and the favourite book would be "Crime and punishment". Other than that I have also love 
                travelling, and e-gaming. I have also managed and conducted a hackathon and some miniature events around it like hosting
                talk shows and quizes. 
              </p>
              <p className="overpass">
                My future plans would be to grow as a person in all aspects of life, and add some value to the socitey through my work,
                if i could do so with it. Other than that, I can say that ambition is what defines me, and competative behaviour was 
                introduced in me from 7th standard, when my friend challenged me to score 100/100 on a test. After that, my competative 
                spirit has just went uphill.
              </p>
              <p className="overpass">
                I would like to finsih my introduction with one of my favourite quote from Fyodor Dostoyevsky, 
                {'\n'}
                <p className="overpass">
                "Pain and suffering are always inevitable for a large intelligence and a deep heart. It is better to be unhappy and know 
                the worst, than to be happy in a fool's paradise. To love is to suffer and there can be no love otherwise. This is my last
                 message to you: in sorrow, seek happiness."
                 </p>
              </p>
            </div>
            <img src={Image2} alt="Image 2" style={imageStyleRight} />
          </div>
        </div>
      );
}

export default About;