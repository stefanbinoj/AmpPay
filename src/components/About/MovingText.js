import './MovingText.css'; 

const MovingText = () => {
    return (
      <section className="enable-animation">
        <div className="marquee">
          <ul className="marquee__content">
            <div className=" marquee__item">
            <h2>INNOVATION</h2>
            </div>
            <div className=" marquee__item">
            <h2>Transparency</h2>
            </div>
            <div className=" marquee__item">
            <h2>Customer-Centricity</h2>
            </div>
            <div className=" marquee__item">
            <h2>Sustainability</h2>
            </div>
            <div className=" marquee__item">
            <h2>Quality</h2>
            </div>
            <div className=" marquee__item">
            <h2>Collaboration</h2>
            </div>
          </ul>
          <ul aria-hidden="true" className="marquee__content">
          <div className=" marquee__item">
            <h2>Innovation</h2>
            </div>
            <div className=" marquee__item">
            <h2>Transparency</h2>
            </div>
            <div className=" marquee__item">
            <h2>Customer-Centricity</h2>
            </div>
            <div className=" marquee__item">
            <h2>Sustainability</h2>
            </div>
            <div className=" marquee__item">
            <h2>Quality</h2>
            </div>
            <div className=" marquee__item">
            <h2>Collaboration</h2>
            </div>
          </ul>
        </div>
      </section>
    );
}

export default MovingText;
