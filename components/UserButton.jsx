import React from 'react';

const UserButton = ({ text, iconName }) => {
  return (
    <button className="rounded-full px-3 py-0.5 text-base text-blue-600 font-semibold bg-yellow-300 ">
      <i className={iconName} aria-hidden="true"></i> {text}
    </button>
  );
};

export default UserButton;
