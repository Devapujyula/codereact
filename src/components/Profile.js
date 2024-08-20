import React from "react";

const Profile = (props) => {
  const { title, url, thumbnailUrl } = props;
  console.log(props);
  return (
    <article className="profile-card">
      <img src={url} alt={title} />
      <h2 className="title">{title}</h2>
      <a href={thumbnailUrl} className="button">
        Details
      </a>
    </article>
  );
};

export default Profile;
