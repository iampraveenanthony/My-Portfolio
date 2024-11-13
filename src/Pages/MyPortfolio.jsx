import data from "../data/index.json";
import giticon from "../img/github.png";

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
              (window.location.href = "https://github.com/iampraveenanthony")
            }
          >
            <img src={giticon} alt="gitlogo" />
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="portfolio--section--card"
            onClick={() => (window.location.href = item.view)}
          >
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <a href={item.link}>View in GitHub</a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio2?.map((item, index) => (
          <div
            key={index}
            className="portfolio--section--card"
            onClick={() => (window.location.href = item.view)}
          >
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <a href={item.link}>View in GitHub</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
