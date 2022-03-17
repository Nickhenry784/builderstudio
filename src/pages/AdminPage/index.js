import React from 'react';
import PropTypes from 'prop-types';
import { MdMessage, MdNotificationsActive } from 'react-icons/md';
import logo from '../../images/svg.svg';
import adminImgae from '../../images/experticon1.png';

function AdminPage(props) {
  return (
    <div className="flex justify-start flex-row">
      <div className="w-1/5 float-left fixed top-0 bottom-0 bg-[#3E65D4]">
        <div className="h-20 w-full flex items-center border-b-2 pl-8 float-left ">
          <img className="" src={logo} alt="" />
        </div>
      </div>
      <div className="ml-21rem w-full bg-gray-100 ">
        <div className="h-20 w-4/5 fixed bg-white border-b top-0 z-50 right-0 flex justify-between px-20 items-center">
          <div className="bg-red-500">Left</div>
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 flex items-center justify-center relative">
              <MdNotificationsActive size={22} />
              <div className="bg-red-500 w-8 h-4 absolute top-0 -right-2 py-2 border rounded-md flex justify-center items-center">
                <div className="text-white font-medium">4</div>
              </div>
            </div>
            <div className="w-12 h-12 mx-8 flex items-center justify-center relative">
              <MdMessage size={22} />
              <div className="bg-red-500 w-8 h-4 absolute top-0 -right-2 py-2 border rounded-md flex justify-center items-center">
                <div className="text-white font-medium">4</div>
              </div>
            </div>
            <div className="h-12 w-56 flex items-center justify-start">
              <div className="text-lg font-medium mr-8">Hello, Admim</div>
              <img
                src={adminImgae}
                alt=""
                className="object-cover w-12 h-12 rounded-full border "
              />
            </div>
          </div>
        </div>
        <div className="h-full mt-20">
          <div className="mx-24 h-96 mt-28 border mb-8 bg-white  rounded-md">
            <div className="h-16 bg-gray-50 w-full border-b flex items-center px-8">
              Hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AdminPage.propTypes = {};

export default AdminPage;
