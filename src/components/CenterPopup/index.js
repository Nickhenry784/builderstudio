import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { GrShare, GrNext, GrPrevious } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import SliderCarousel from '../Slider/index';
import { displayViewDetail } from './actions';
import example from './data/example';
import Android from '../../images/android.svg';
import Mobile from '../../images/mobile.svg';
import ProgressiveIcon from '../../images/progressiveIcon.svg';
import Cloudinclude from '../../images/cloudinclude.svg';
import Careinclude from '../../images/careinclude.svg';
import DevicegreyFrame from '../../images/devicegreyframe.png';

function CenterPopUp() {
  const display = useSelector((state) => state.display.display);
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleNextPrevButton, setVisibleNextPrevButton] = useState(false);
  const [currentPlatfrom, setCurrentPlatfrom] = useState('mobile');

  const handleClickPlatfromButton = () => {
    if (currentPlatfrom === 'mobile') {
      setCurrentPlatfrom('desktop');
    } else {
      setCurrentPlatfrom('mobile');
    }
  };

  const handleOnClickNextSlideButton = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleOnClickPrevSlideButton = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const hanleSetVisibleNextPrevButton = () => {
    setVisibleNextPrevButton(!visibleNextPrevButton);
  };

  const setImageShow = (value) => {
    setCurrentSlide(value);
  };

  const handleClickCloseButton = () => {
    dispatch(displayViewDetail());
  };

  return (
    <div
      className={classNames(
        'fixed w-full h-full z-40 top-0 left-0 flex items-center justify-center',
        { hidden: !display },
      )}
    >
      <div className="bg-gray-500 opacity-25 w-full h-full fixed top-0 left-0 z-40" />
      <div className="w-3/4 h-4/5 flex flex-col bg-white z-50">
        <div className="flex-1 items-start overflow-y-scroll">
          <div className="flex items-center justify-end py-4">
            <button
              className="w-10 h-10 rounded-md border flex items-center justify-center mr-4"
              type="button"
            >
              <GrShare size={20} />
            </button>
            <button
              className="w-10 h-10 rounded-md border flex items-center justify-center mr-4"
              type="button"
            >
              <AiOutlineLink size={24} />
            </button>
            <button
              className="w-10 h-10 rounded-full border flex items-center justify-center mr-4"
              type="button"
              onClick={handleClickCloseButton}
            >
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="px-20 flex items-start justify-between">
            {/* Left content */}
            <div className="pr-4 w-1/2 h-128">
              <div className="w-full h-32rem bg-white relative">
                <img
                  src={DevicegreyFrame}
                  alt=""
                  className="w-1/2 h-32rem block mx-auto select-none relative"
                />
                {example.image.map((slide, index) => (
                  <div className="" key={slide.id}>
                    <button
                      type="button"
                      onClick={handleOnClickPrevSlideButton}
                      onMouseEnter={hanleSetVisibleNextPrevButton}
                      onMouseLeave={hanleSetVisibleNextPrevButton}
                      className={
                        currentSlide === 0
                          ? 'hidden'
                          : 'absolute w-32 h-full opacity-40 top-0 left-0'
                      }
                    >
                      {visibleNextPrevButton ? (
                        <GrPrevious size={48} />
                      ) : (
                        <div className="bg-white" />
                      )}
                    </button>
                    <img
                      src={slide.link}
                      alt=""
                      className={
                        index === currentSlide
                          ? 'w-15rem h-25rem object-cover absolute top-14 right-1/2 translate-x-1/2 transition select-none'
                          : 'hidden'
                      }
                    />
                    <button
                      type="button"
                      onClick={handleOnClickNextSlideButton}
                      onMouseEnter={hanleSetVisibleNextPrevButton}
                      onMouseLeave={hanleSetVisibleNextPrevButton}
                      className={
                        currentSlide === example.image.length - 1
                          ? 'hidden'
                          : 'absolute top-0 w-32 h-full flex opacity-40 items-center justify-end right-0'
                      }
                    >
                      {visibleNextPrevButton ? (
                        <GrNext size={48} />
                      ) : (
                        <div className="bg-white" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="text-sm font-bold mr-4">
                  {currentSlide + 1}/{example.image.length}{' '}
                  {example.image[currentSlide].detail}
                </div>
                <RiErrorWarningLine color="gray" />
              </div>
              <div className="flex items-center justify-center py-4">
                <button
                  className={classNames(
                    'flex justify-center items-center w-16 h-12 border-t border-l border-b rounded-tl-md rounded-bl-md',
                    { 'bg-gray-300': currentPlatfrom === 'mobile' },
                  )}
                  type="button"
                  onClick={handleClickPlatfromButton}
                >
                  <img src={Mobile} alt="" className="w-6 h-6" />
                </button>
                <button
                  className={classNames(
                    'flex justify-center items-center w-16 h-12 border rounded-tr-md rounded-br-md',
                    { 'bg-gray-300': currentPlatfrom === 'desktop' },
                  )}
                  type="button"
                  onClick={handleClickPlatfromButton}
                >
                  <img src={ProgressiveIcon} alt="" className="w-6 h-6" />
                </button>
              </div>
              <div className="h-44 py-2">
                <SliderCarousel
                  images={example.image}
                  currentIndex={currentSlide}
                  onChangeCurrentIndex={setImageShow}
                />
              </div>
              <div className="text-xs block pt-4">
                These designs are representative of the features included in the
                app.
              </div>
              <div className="text-xs">
                {' '}
                They do not show your finished product. You can customise how
                everything looks with our network of designers.
              </div>
            </div>
            {/* Right content */}
            <div className="pl-4 w-1/2 h-128">
              <div className="flex items-center justify-start py-2 ">
                <img className="w-16 h-16 pr-4" src={example.logo} alt="" />
                <div className="font-bold text-4xl">{example.title}</div>
              </div>
              <div className="py-1 ">{example.features} features included</div>
              <div className="py-2 text-xl">{example.content}</div>
              <div className="py-4 border-t border-b flex flex-col justify-start">
                <div className="text-lg text-gray-300">FROM</div>
                <div className="flex justify-start items-end">
                  <div className="text-5xl font-bold mr-4">
                    ${example.price}
                  </div>
                  <div className="py-1 text-gray-300">per platform</div>
                </div>
              </div>
              <div className="border-b">
                <div className="flex items-center justify-start py-4">
                  <div className="text-base font-light text-gray-400 mr-4">
                    PLATFORMS AVAILABLE
                  </div>
                  <RiErrorWarningLine color="gray" />
                </div>
                <ul className="pb-8">
                  <li className="flex items-center py-2 justify-start">
                    <img src={Mobile} alt="" className="w-12 h-12 mr-12" />
                    <div className="text-lg">iOS app for Apple (iPhones)</div>
                  </li>
                  <li className="flex items-center py-2 justify-start">
                    <img src={Android} alt="" className="w-12 h-12 mr-12" />
                    <div className="text-lg">
                      Android app (for Android phones)
                    </div>
                  </li>
                  <li className="flex items-center py-2 justify-start">
                    <img
                      src={ProgressiveIcon}
                      alt=""
                      className="w-12 h-12 mr-12"
                    />
                    <div className="text-lg">
                      Progressive Web App for desktop and mobile
                    </div>
                  </li>
                </ul>
              </div>
              <div className="py-2 border-b">
                <div className="flex items-center justify-between">
                  <div className="text-base font-light text-gray-400">
                    BUILDER CARE
                  </div>
                  <div className="text-base font-light text-gray-400">
                    Available from $241.85 /month
                  </div>
                </div>
                <div className="flex items-center py-4">
                  <img src={Careinclude} alt="" className="w-16 h-16 mr-12" />
                  <div className="text-lg">
                    Our aftercare warantee updates, upgrades and keeps your app
                    running smoothly.{' '}
                    <a href="/" className="text-blue-400">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b  mb-24">
                <div className="flex items-center justify-between">
                  <div className="text-base font-light text-gray-400">
                    BUILDER CARE
                  </div>
                  <div className="text-base font-light text-gray-400">
                    Available from $241.85 /month
                  </div>
                </div>
                <div className="flex items-center py-4">
                  <img src={Cloudinclude} alt="" className="w-16 h-16 mr-12" />
                  <div className="text-lg">
                    Our aftercare warantee updates, upgrades and keeps your app
                    running smoothly.{' '}
                    <a href="/" className="text-blue-400">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 border-t bg-white flex items-center justify-end">
          <button
            type="button"
            className="bg-green-500 w-64 h-full text-center font-bold"
          >
            Add Template
          </button>
        </div>
      </div>
    </div>
  );
}

CenterPopUp.propTypes = {};

export default CenterPopUp;
