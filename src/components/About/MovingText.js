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
            <h2>TRANSPARENCY</h2>
            </div>
            <div className=" marquee__item">
            <h2>CUSTOMER-CENTRICITY</h2>
            </div>
            <div className=" marquee__item">
            <h2>SUSTAINABILITY</h2>
            </div>
            <div className=" marquee__item">
            <h2>QUALITY</h2>
            </div>
            <div className=" marquee__item">
            <h2>COLLABORATION</h2>
            </div>
          </ul>
          <ul aria-hidden="true" className="marquee__content">
          <div className=" marquee__item">
            <h2>INNOVATION</h2>
            </div>
            <div className=" marquee__item">
            <h2>TRANSPARENCY</h2>
            </div>
            <div className=" marquee__item">
            <h2>CUSTOMER-CENTRICITY</h2>
            </div>
            <div className=" marquee__item">
            <h2>SUSTAINABILITY</h2>
            </div>
            <div className=" marquee__item">
            <h2>QUALITY</h2>
            </div>
            <div className=" marquee__item">
            <h2>COLLABORATION</h2>
            </div>
          </ul>
        </div>
      </section>
    );
}

export default MovingText;
