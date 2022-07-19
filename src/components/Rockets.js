import React from 'react';
import rocket from '../assets/rocket.jpeg';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="rockets">
        <div className="rocket">
          <div className="rocketImg">
            <img src={rocket} alt="rocket" />
          </div>
          <div className="rocketInfo">
            <h3> The First Rocket </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button type="button" className="reserveBtn">Reserve Rocket</button>
          </div>
        </div>
        <div className="rocket">
          <div className="rocketImg">
            <img src={rocket} alt="rocket" />
          </div>
          <div className="rocketInfo">
            <h3> The Second Rocket </h3>
            <p>
              <div className="reserved">Reserved</div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button type="button" className="cancelBtn">
              Cancel Reservation
            </button>
          </div>
        </div>
        <div className="rocket">
          <div className="rocketImg">
            <img src={rocket} alt="rocket" />
          </div>
          <div className="rocketInfo">
            <h3> The Third Rocket </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button type="button" className="reserveBtn">Reserve Rocket</button>
          </div>
        </div>
        <div className="rocket">
          <div className="rocketImg">
            <img src={rocket} alt="rocket" />
          </div>
          <div className="rocketInfo">
            <h3> The Fourth Rocket </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button type="button" className="reserveBtn">Reserve Rocket</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
