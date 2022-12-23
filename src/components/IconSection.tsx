import React from "react";
import AddIcon from "../assets/icons/AddIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import MessageIcon from "../assets/icons/MessageIcon";
import DropDownIcon from "../assets/icons/DropDownIcon";

const IconNavSection = () => {
  return (
    <div className="icon-nav_section">
      <div>
        <button>
          <AddIcon />
        </button>
      </div>
      <div>
        <button>
          <LocationIcon />
        </button>
      </div>
      <div>
        <button>
          <NotificationIcon />
        </button>
      </div>
      <div>
        <button>
          <MessageIcon />
        </button>
      </div>
      <div>
        <button>
          <img
            src={`${process.env.PUBLIC_URL}/89afb77d02bc11b23271614bbff9d634.jpeg`}
            alt=""
          />
        </button>
        <DropDownIcon />
      </div>
    </div>
  );
};

export default IconNavSection;
