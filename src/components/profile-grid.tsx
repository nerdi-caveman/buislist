import React, { useState } from "react";
import { Link } from "react-router-dom";
import badge from "../assets/verified-badge.png";
import Icon from "@mdi/react";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";

interface IProfileGrid {
  profile: any;
  grid: number;
  addToFavourite: any;
}

const ProfileGrid: React.FC<any> = ({
  profile,
  grid = 6,
  addToFavourite
}: IProfileGrid) => {
  const [profileState, setProfileState] = useState(profile);

  const updateFavourite = (item: any, index: number) => {
    const newProfiles = [...profileState];
    newProfiles[index]["favourite"] = !item.favourite;
    setProfileState(() => [...newProfiles]);

    addToFavourite(item, !item.favourite);
  };

  return (
    <div className="people-banner">
      <div className={`grid grid-${grid}`}>
        {profileState.map((item: any, index: number) => (
          <div key={index}>
            <div className="favourite">
              <input
                checked={item.favourite !== undefined ? item.favourite: false}
                type="checkbox"
                id={"peoplefavourite" + index}
                name={"peoplefavourite" + index}
                onChange={() => updateFavourite(item, index)}
              />
              <label htmlFor={`peoplefavourite${index}`}>
                <Icon
                  className="not-selected"
                  path={mdiHeartOutline}
                  size={0.9}
                  color="#444444"
                />
                <Icon
                  className="selected"
                  path={mdiHeart}
                  size={0.9}
                  color="#444444"
                />
              </label>
            </div>
            <Link to="/" className="each-img-card">
              <div className="vertical-md fig">
                <img src={item.src} alt="people" className="profile-back" />
                <figure className="people-details">
                  <div className="img">
                    <img src={item.src} alt="stores" />
                  </div>
                  <figcaption>
                    <p className="name">Inioluwa Sogelola <img src={badge} alt="badge" /></p>
                  </figcaption>
                </figure>
              </div>
              <div className="people-desc">
                {item.premium && <div className="badge badge-sm">Premium</div>}
                <p className="label label-sm ">Photography</p>
                <p className="desc">
                  We build the best shoes for sports. Just do it✔
                  <span role="img" aria-label="fire">
                    🔥
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfileGrid;
