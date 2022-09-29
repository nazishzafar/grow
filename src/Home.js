import React from "react";
import hero from "./Images/hero.jpg";
import "./styles/Home.css";
import book from "./Images/book.png"

const Home = () => {
  return (
    <div>
      <div className="hero-image">
        <img src={hero} alt="hero image" />
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
          <h3>Play</h3>
          <p>
            Spending time together with your baby helps form a lasting bond.
            Here are some games and activities you'll both enjoy
          </p>
        </div>

        <div className="feature" style={{ backgroundColor: "#44cbd8" }}>
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
        <div className="feature ">
          <i class="fa fa-home" aria-hidden="true"></i>
          <h3>Activities for Normal</h3>
          <p>
            Between all those diaper changes, feedings, and naps there will be
            times when your newborn is awake and alert, ready to take in his
            surroundings and engage with you.
          </p>
        </div>

        <div className="feature ">
          <h3>UnderWeight Diet Plan</h3>

          <p>
            Is your child too busy or too picky to eat? Discover what to serve
            your toddler or preschooler and how to make family mealtimes more
            pleasant.
          </p>
        </div>

        <div className="feature ">
          <h3>OverWeight diet Plan</h3>
          <p>
            Is your child too busy or too picky to eat? Discover what to serve
            your toddler or preschooler and how to make family mealtimes more
            pleasant.
          </p>
        </div>

        <div className="feature">
          <h3>Parent's Experiences</h3>
          <p>
            Parenting is challenging and rewarding! Read about postpartum life,
            finding support, and experiences from other parents.
          </p>
        </div>

        <div className="feature">
          <h3>Early develoment</h3>
          <p>
            Caring for your baby is a big job, and it includes safeguarding her
            safety and well-being. Read on your baby development here.
          </p>
        </div>

        <div className="feature">
          <h3>Activities for Special Child</h3>
          <p>
            Sometimes real superheros live in the hearts of small children
            fighting big battles. Learn to overcome your child disability here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
