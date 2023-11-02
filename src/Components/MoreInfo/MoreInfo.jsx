import "./MoreInfo.css";
import charity from "./Assets/charity.jpg";
import domotron from "./Assets/domotron.png";
import venueOMenu from "./Assets/venueOMenu.jpg";
import gst from "./Assets/gst.png";
import instaBot from "./Assets/instaBot.png";
import itune from "./Assets/itune.png";
import skincare from "./Assets/skincare.png";
import getConnect from "./Assets/getConnect.png";

export const MoreInfo = () => {
  return (
    <div>
      {/* Item 1 */}
      <div className="item item1">
        <div className="description">
          <h3>Secure Donor</h3>
          <p>
            A custom web application that allows multiple clients to manage
            online donation forms. A robust and flexible application with
            techonology integrated to seamlessly allow future enhancement and
            growth to online donation processing system.
          </p>
        </div>
          <div
            className="img-container img1"
            style={{
              backgroundImage: `url(${charity})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat'
            }}
          ></div>
      </div>
      {/* Item 2 */}
      <div className="item item1">
        <div className="img-wrapper" style={{
              overflow:'hidden'
            }}>
          <div
            className="img-container img1"
            style={{
              backgroundImage: `url(${venueOMenu})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat',
              
            }}
          ></div>
        </div>
        <div className="description">
          <h3>Venu O Menu</h3>
          <p>
            A dedicated website for easy event planning and hiring resources for
            an event. Specialy designed and curated for Indian wedding and
            events.
          </p>
        </div>
      </div>
      {/* Item 3 */}
      <div className="item item1">
        <div className="description">
          <h3>CatsBill</h3>
          <p>
            A Sifars initiative, an elegant and easy to use online portal to
            generate GST invoicing in India with many advance features like
            inventory, stock transfer and invoice management.
          </p>
        </div>
        <div className="img-wrapper">
          <div
            className="img-container img1"
            style={{
              backgroundImage: `url(${gst})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat'
            }}
          ></div>
        </div>
      </div>
      {/* Item 4 */}
      <div className="item item1">
        <div className="img-wrapper">
          <div
            className="img-container img1"
            style={{
              backgroundImage: `url(${instaBot})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat'
            }}
          ></div>
        </div>
        <div className="description">
          <h3>Instagram Bot</h3>
          <p>
            An interactive instagram auto posting platform engaging multiple
            profiles. A custom automation tool with fetaures like scheduled
            follow, unfollow and likes to organically grow instagram followers.
          </p>
        </div>
      </div>
      {/* Item 5 */}
      <div className="item item1">
        <div className="description">
          <h3>Itunes Traffic Bot</h3>
          <p>
            An automation tool to increase the traffic of your song on itunes.
          </p>
        </div>
        <div
          className="img-container img1"
          style={{
            backgroundImage: `url(${itune})`,
            backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat'
          }}
        ></div>
      </div>
      {/* Item 6 */}
      <div className="item item1">
        <div className="img-wrapper">
          <div
            className="img-container img1"
            style={{
              backgroundImage: `url(${domotron})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat'
            }}
          ></div>
        </div>
        <div className="description">
          <h3>Domotron</h3>
          <p>An interactive design made using picocms and pattern labs.</p>
        </div>
      </div>
      {/* Item 7 */}
      <div className="item item1">
        <div className="description">
          <h3>Labonics</h3>
          <p>
            A custom theme for woocommerce site to shop Labonics products
            integrated with ERP system
          </p>
        </div>
        <div className="img-wrapper">
          <div
            className="img-container img1"
            style={{
              backgroundImage: `url(${skincare})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat'
            }}
          ></div>
        </div>
      </div>
      {/* Item 8 */}
      <div className="item item1">
        <div className="img-wrapper">
          <div
            className="img-container img1"
            style={{
              backgroundImage: `url(${getConnect})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat'
            }}
          ></div>
        </div>
        <div className="description">
          <h3>GetConnect</h3>
          <p>
            A cloud-based ETL software solution specifically designed for the
            banking sector to automate the manual ETL into design enrich
            automated software program. The program is highly flexible and is
            integrated with many administrative controls.
          </p>
        </div>
      </div>
    </div>
  );
};
