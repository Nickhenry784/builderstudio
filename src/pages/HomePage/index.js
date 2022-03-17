import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import LeftNav from '../../components/LeftNav';
import NavigationBar from '../../components/NavigationBar';
import Contents from '../../components/Contents';
import FooterCard from '../../components/Cart';
import CenterPopUp from '../../components/CenterPopup';

function HomePage(props) {
  return (
    <div>
      <Header />
      <div className="w-1/5 fixed hover:overflow-y-scroll border-r-2 z-20 top-20 bottom-0">
        <LeftNav />
      </div>
      <div className="ml-80 mt-20 h-full">
        <div className="h-32 w-4/5 fixed top-20 right-0 z-10">
          <NavigationBar />
        </div>
        <Contents />
        <FooterCard />
      </div>
      <CenterPopUp />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
