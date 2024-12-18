import giticon from "../img/github.png";
import calImage from "../img/Basic-Calculator.png";
import AmaImage from "../img/Amazon.jpg";
import cicImage from "../img/Cisco.jpg";
import busImage from "../img/Bus-Booking.png";
import bankImage from "../img/banksystem.png";
import cdbImage from "../img/cdb.png";


export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button
            className="btn btn-github"
            onClick={() =>
              (window.location.href = "https://github.com/yourspraveeninfo")
            }
          >
            <img src={giticon} alt="gitlogo" />
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        <div
          className="portfolio--section--card"
          onClick={() =>
            (window.location.href =
              "https://yourspraveeninfo.github.io/Basic-Calculator/")
          }
        >
          <div className="portfolio--section--img">
            <img src={calImage} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Basic Calculator</h3>
              <p className="text-md">
                This repository contains a simple calculator web application
                built using HTML, CSS, and JavaScript. The application provides
                a user-friendly interface for performing basic arithmetic
                operations, including addition, subtraction, multiplication, and
                division.
              </p>
            </div>
            <p className="text-sm portfolio--link">
              <a href="https://github.com/yourspraveeninfo/Basic-Calculator">
                View in GitHub
              </a>
            </p>
          </div>
        </div>
        <div
          className="portfolio--section--card"
          onClick={() =>
            (window.location.href =
              "https://yourspraveeninfo.github.io/Amazon-Clone/")
          }
        >
          <div className="portfolio--section--img">
            <img src={AmaImage} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Amazon Clone Website</h3>
              <p className="text-md">
              The website is a clone of Amazon, designed to showcase a shopping platform with a variety of products. It features product listings, a shopping cart, and a user-friendly interface. Users can browse electronics and other categories, add items to their cart, and proceed to checkout. The design aims to replicate Amazon's core functionality and layout, providing a familiar shopping experience for users.
              </p>
            </div>
            <p className="text-sm portfolio--link">
              <a href="https://github.com/yourspraveeninfo/Amazon-Clone">
                View in GitHub
              </a>
            </p>
          </div>
        </div>
        <div
          className="portfolio--section--card"
          onClick={() =>
            (window.location.href =
              "https://yourspraveeninfo.github.io/Cisco-Clone/")
          }
        >
          <div className="portfolio--section--img">
            <img src={cicImage} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Cisco Clone Website</h3>
              <p className="text-md">
              The website is a clone of Cisco's platform, showcasing their network, software, and cybersecurity solutions. It highlights products like AI-powered Cisco XDR and Full-Stack Observability for IT automation. There are also sections for industry-specific solutions, customer stories, and insights into upcoming technologies such as AI and IoT. The site promotes Cisco’s involvement in digital transformation, security, and real-time IT support.
              </p>
            </div>
            <p className="text-sm portfolio--link">
              <a href="https://github.com/yourspraveeninfo/Cisco-Clone">
                View in GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio--section--container">
        <div
          className="portfolio--section--card"
          onClick={() =>
            (window.location.href =
              "https://github.com/yourspraveeninfo/Bus_Booking_System")
          }
        >
          <div className="portfolio--section--img">
            <img src={busImage} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Bus Booking System</h3>
              <p className="text-md">
              The program is a bus booking system that allows users to register, log in, view available buses, and book tickets. Users provide their personal details for registration and login. The system displays available bus routes and details, allowing users to select a bus and proceed with booking by confirming the date of the journey and ticket details.
              </p>
            </div>
            <p className="text-sm portfolio--link">
              <a href="https://github.com/yourspraveeninfo/Bus_Booking_System">
                View in GitHub
              </a>
            </p>
          </div>
        </div>
        <div
          className="portfolio--section--card"
          onClick={() =>
            (window.location.href =
              "https://github.com/yourspraveeninfo/Banking_System")
          }
        >
          <div className="portfolio--section--img">
            <img src={bankImage} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Banking System</h3>
              <p className="text-md">
              This Python program simulates a simple banking system that allows users to perform basic transactions. Users can show their current balance, deposit money, withdraw money, or exit the program. The program includes input validation for negative amounts and insufficient balance during withdrawals.
              </p>
            </div>
            <p className="text-sm portfolio--link">
              <a href="https://github.com/yourspraveeninfo/Banking_System">
                View in GitHub
              </a>
            </p>
          </div>
        </div>
        <div
          className="portfolio--section--card"
          onClick={() =>
            (window.location.href =
              "https://github.com/yourspraveeninfo/College_DataBase")
          }
        >
          <div className="portfolio--section--img">
            <img src={cdbImage} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">College Database</h3>
              <p className="text-md">
              The college database consists of tables for student details, college bus details, and student mark statements, all managed using MySQL. It utilizes SQL features such as grouping and joins to efficiently retrieve and aggregate data across these related tables. This structure supports comprehensive queries for generating reports.
              </p>
            </div>
            <p className="text-sm portfolio--link">
              <a href="https://github.com/yourspraveeninfo/College_DataBase">
                View in GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}