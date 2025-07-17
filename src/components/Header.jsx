import React from 'react';

const Header = ({ imageUrl }) => {
  return (
    <div className="header">
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="header-content">
        <h1>Ideas</h1>
        <p>Explore our latest thoughts</p>
      </div>
    </div>
  );
};

export default Header;
