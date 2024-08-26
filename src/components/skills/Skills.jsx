import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="skills text-center">
      <h2>Skills</h2>
      <Carousel responsive={responsive}
       autoPlay={true}
       swipeable={true}
       draggable={true}
       infinite={true}
       
      //  focusOnSelect={true}
      >
      <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/web.jpg" alt="Web Development" />
              <h4>Web Development</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/react.jpg" alt="React.js" />
              <h4>React Js</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/next.jpg" alt="Next.js" />
              <h4>Next Js</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/node.svg" alt="Node.js" />
              <h4>Node Js</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/express.webp" alt="Express.js" />
              <h4>Express Js</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/php.jpg" alt="PHP" />
              <h4>PHP</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/Laravel.png" alt="Laravel" />
              <h4>Laravel</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="d-flex justify-content-start align-items-center flex-column front">
              <img src="/image/mysql.webp" alt="MySQL" />
              <h4>MySQL</h4>
            </div>
            <div className="back ">back part</div>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
};
