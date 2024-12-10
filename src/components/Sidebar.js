import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ setSelectedOption }) => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  const menuItems = [
    { title: 'Dashboard', icon: '🏠', subItems: [] },
    { title: 'Partner', icon: '🤝', subItems: [] },
    { title: 'Product', icon: '🛒', subItems: [] },
    { title: 'Sales', icon: '📊', subItems: [] },
    {
      title: 'Items',
      icon: '📦',
      subItems: [
        'Categories',
        'Sub-categories',
        'Specification',
        'HSN List',
        'Logistics Rate',
        'Brand List',
      ],
    },
    { title: 'Refunds', icon: '💵', subItems: [] },
    { title: 'Customers', icon: '👥', subItems: [] },
    { title: 'Sellers', icon: '🛍️', subItems: [] },
    { title: 'Reports', icon: '📄', subItems: [] },
    { title: 'Uploaded Files', icon: '📂', subItems: [] },
    { title: 'Blog System', icon: '📝', subItems: [] },
    { title: 'Doodle', icon: '✏️', subItems: [] },
    { title: 'Marketing', icon: '📢', subItems: [] },
    { title: 'Support', icon: '🎧', subItems: [] },
    { title: 'Website Setup', icon: '⚙️', subItems: [] },
    { title: 'Staff Management', icon: '🔒', subItems: [] },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        {/* Replace text with an image */}
        <img src="..public/image/log.png" alt="Indiazona Logo" className="sidebar-logo-image" />
      </div>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <div
              className={`menu-title ${
                activeMenu === item.title ? 'active' : ''
              }`}
              onClick={() => {
                if (item.subItems.length > 0) {
                  toggleMenu(item.title);
                } else {
                  setSelectedOption(item.title);
                }
              }}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.title}</span>
              {item.subItems.length > 0 && (
                <span className="menu-arrow">
                  {activeMenu === item.title ? '▲' : '▼'}
                </span>
              )}
            </div>
            {item.subItems.length > 0 && activeMenu === item.title && (
              <ul className="submenu-list">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="submenu-item"
                    onClick={() => setSelectedOption(subItem)}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
