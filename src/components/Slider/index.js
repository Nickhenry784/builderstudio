import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames';
import { GrNext, GrPrevious } from 'react-icons/gr';

function NextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div
      className="absolute -right-6 top-0 w-12 h-full bg-gray-200 flex items-center opacity-10"
      onClick={onClick}
    >
      <GrNext size={48} />
    </div>
  );
}

function PrewArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div
      className="absolute -left-6 top-0 w-12 h-full bg-gray-200 flex items-center justify-start z-30 opacity-10"
      onClick={onClick}
    >
      <GrPrevious size={48} />
    </div>
  );
}

function SliderCarousel({
  images,
  slidesToShow,
  slidesToScroll,
  type,
  currentIndex,
  onChangeCurrentIndex,
}) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrewArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((slide, index) => (
        <div
          role="presentation"
          className={classNames('border rounded-md relative h-44', {
            'border-black': index === currentIndex,
          })}
          key={slide?.id}
          onClick={() => onChangeCurrentIndex(index)}
        >
          <img
            src={slide?.link}
            className="w-14 h-22 absolute top-8 left-8 object-cover"
            alt=""
          />
        </div>
      ))}
    </Slider>
  );
}

SliderCarousel.defaultProps = {
  slidesToShow: 4,
  slidesToScroll: 4,
  type: 'md',
  images: [],
  currentIndex: null,
};

SliderCarousel.propTypes = {
  images: PropTypes.array,
  slidesToShow: PropTypes.oneOf([2, 4, 6]),
  slidesToScroll: PropTypes.oneOf([2, 4, 6]),
  type: PropTypes.oneOf(['sm', 'md', 'lg']),
  currentIndex: PropTypes.number,
  onChangeCurrentIndex: PropTypes.func,
};

export default SliderCarousel;
