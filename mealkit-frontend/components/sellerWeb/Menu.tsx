import React from 'react';

interface MenuProps {
  onMenuClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuClick }) => {
  return (
    <button className="common-button" onClick={onMenuClick}>
      Menu
    </button>
  );
}

export default Menu;
