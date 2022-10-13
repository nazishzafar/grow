import React from "react";
import hero from "./Images/hero.jpg";
import "./styles/Home.css";
import book from "./Images/read.png"
import play from "./Images/playtime.png"
import life from "./Images/life.png"
import normal from "./Images/nutrition.png"
import UnderWeight from "./Images/diet.png"
import over from "./Images/over.png"
import disable from "./Images/disabled.png"
import autism from "./Images/autism.png"
import early from "./Images/physical.png"






const Home = () => {
  return (
//     <div>


//       <div className="offer-container">
//         <div className="feature" style={{ backgroundColor: "#9fe149" }}>
//           <div style={{ backgroundImage: `url(${book})`}} className="feature-img">

//           </div>
//           <h3>Learn</h3>
//           <p>
//             Your baby is marvel, growing, challenging and accomplishing at a
//             rapid pace. Read up on your baby's development here.{" "}
//           </p>
//         </div>

//         <div className="feature" style={{ backgroundColor: "#F5561D" }}>
//         <div style={{ backgroundImage: `url(${play})`}} className="feature-img">

// </div>
//           <h3>Play</h3>
//           <p>
//             Spending time together with your baby helps form a lasting bond.
//             Here are some games and activities you'll both enjoy
//           </p>
//         </div>

//         <div className="feature" style={{ backgroundColor: "#44cbd8" }}>
//         <div style={{ backgroundImage: `url(${life})`}} className="feature-img"></div>
//           <h3>Parenting Life</h3>
//           <p>
//             Parenting is challenging and rewarding! Read about postpartum life,
//             finding support, and experiences from other parents
//           </p>
//         </div>
//       </div>

   
//     </div>

  <div className="navbarPadding">
  <div class="bg-image" >
      <img class="img-fluid" src={hero} alt="hero-img" />  
  </div>
  <div className="offer-container">
          <div className="feature" style={{ backgroundColor: "#9fe149" }}>
            <div style={{ backgroundImage: `url(${book})`}} className="feature-img">

            </div>
            <h3>Learn</h3>
            <p>
              Your baby is marvel, growing, challenging and accomplishing at a
              rapid pace. Read up on your baby's development here.{" "}
            </p>
          </div>

          <div className="feature" style={{ backgroundColor: "#F5561D" }}>
          <div style={{ backgroundImage: `url(${play})`}} className="feature-img">

  </div>
            <h3>Play</h3>
            <p>
              Spending time together with your baby helps form a lasting bond.
              Here are some games and activities you'll both enjoy
            </p>
          </div>

          <div className="feature" style={{ backgroundColor: "#44cbd8" }}>
          <div style={{ backgroundImage: `url(${life})`}} className="feature-img"></div>
            <h3>Parenting Life</h3>
            <p>
              Parenting is challenging and rewarding! Read about postpartum life,
              finding support, and experiences from other parents
            </p>
          </div>
        </div>


        <div>
          <div className="offer_head">
            <h2>
              What <u>We</u> Offer
            </h2>
            <p>Helping Perents give Children the Best Start in Life.</p>
          </div>
        </div>

        <div className="offer-container">
          <button className="feature ">
          <div style={{ backgroundImage: `url(${normal})`}} className="feature-img"></div>
            <h3>Diet Plan for Normal</h3>
            <p>
            “You are what you eat, so don’t be fast, cheap, easy, or fake.”
            </p>
          </button>

          <button className="feature ">
          <div style={{ backgroundImage: `url(${UnderWeight})`}} className="feature-img"></div>

            <h3>Diet Plan for UnderWeight </h3>

            <p>
            “You are what you eat, so don’t be fast, cheap, easy, or fake.”
            </p>
          </button>

          <button className="feature ">
          <div style={{ backgroundImage: `url(${over})`}} className="feature-img"></div>

            <h3>Diet Plan for OverWeight</h3>
            <p>
                            
            “You are what you eat, so don’t be fast, cheap, easy, or fake.”
            </p>
          </button>

          <button className="feature">
          <div style={{ backgroundImage: `url(${autism})`}} className="feature-img"></div>

            <h3>Activities for ADHD and Autism</h3>
            <p>
            Sometimes real superheros live in the hearts of small children
              fighting big battles. Learn to overcome your child disability here.
            </p>
          </button>
          <button className="feature">
          <div style={{ backgroundImage: `url(${disable})`}} className="feature-img"></div>
            <h3>Activities for Special Child</h3>
            <p>
              Sometimes real superheros live in the hearts of small children
              fighting big battles. Learn to overcome your child disability here.
            </p>
          </button>

          <button className="feature">
          <div style={{ backgroundImage: `url(${early})`}} className="feature-img"></div>

            <h3>Early develoment of Child</h3>
            <p>
              Caring for your baby is a big job, and it includes safeguarding her
              safety and well-being. Read on your baby development here.
            </p>
          </button>

        
        </div>





  </div>
    );
};

export default Home;
