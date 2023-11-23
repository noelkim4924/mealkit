"use client";
import React from "react";
import Dashboard from "./SellerWeb/DashBoard";
import Menu from "./SellerWeb/Menu";
import Order from "./SellerWeb/Order";
import Review from "./SellerWeb/Review";
import Add from "./SellerWeb/Add";
interface SidebarProps {
  onSectionSelect: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSectionSelect }) => {
  const handleDashboardClick = (buttonName: string) => {
    onSectionSelect(`dashboard-${buttonName}`);
  };

  const handleMenuClick = () => {
    onSectionSelect("menu");
  };
  const handleOrderClick = () => {
    onSectionSelect("order");
  };

  const handleReviewClick = () => {
    onSectionSelect("review");
  };

  const handleAddClick = () => {
    onSectionSelect("add");
  };

  return (
    <aside className="sidebar">
      <div className="dashboard-section">
        <Dashboard onButtonClick={handleDashboardClick} />
      </div>
      <div>
        <Menu onMenuClick={handleMenuClick} />
      </div>
      <div>
        <Order onOrderClick={handleOrderClick} />
      </div>
      <div>
        <Review onReviewClick={handleReviewClick} />
      </div>
      <div>
        <Add onAddClick={handleAddClick} />
      </div>
    </aside>
  );
};

export default Sidebar;
