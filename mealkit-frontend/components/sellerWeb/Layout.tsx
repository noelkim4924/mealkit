import React from 'react';
import SellerFooter from '../SellerFooter';
import SellerHeader from '../SellerHeader';
import Sidebar from '../Sidebar';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* 여기에 헤더, 푸터 등 공통 요소를 추가 */}
      {/* {children} */}
      <SellerHeader></SellerHeader>
        <Sidebar onSectionSelect={() => {}}></Sidebar>
      <SellerFooter></SellerFooter>
      
      
    </div>
  );
}

export default Layout;
