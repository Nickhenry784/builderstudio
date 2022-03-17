import classNames from 'classnames';
import React, { useState } from 'react';
import contentList from './data/contentList';
import TabContent from './TabContent';

function Contents() {
  const [classArrange, setClassArrange] = useState('All');
  const [listArrange, setListArrange] = useState([...contentList]);

  const handleClickArrangeButton = (value) => {
    if (value !== 'All') {
      const newList = [];
      for (let index = 0; index < contentList.length; index += 1) {
        const element = contentList[index];
        if (element.class === value) {
          newList.push(element);
        }
      }
      setListArrange(newList);
    } else {
      setListArrange([...contentList]);
    }
    setClassArrange(value);
  };

  return (
    <div className="pt-32 px-12 py-12">
      <div className="flex flex-row justify-start items-center pt-8">
        <button
          type="button"
          className={classNames('border rounded-md px-10 py-3 mr-4 ', {
            'bg-gray-300': classArrange === 'All',
            'hover:bg-gray-100': classArrange !== 'All',
          })}
          onClick={() => handleClickArrangeButton('All')}
        >
          All
        </button>
        <button
          type="button"
          className={classNames('border rounded-md px-10 py-3 mr-4 ', {
            'bg-gray-300': classArrange === 'Pro',
            'hover:bg-gray-100': classArrange !== 'Pro',
          })}
          onClick={() => handleClickArrangeButton('Pro')}
        >
          Pro
        </button>
        <button
          type="button"
          className={classNames('border rounded-md px-10 py-3 mr-4 ', {
            'bg-gray-300': classArrange === 'Store',
            'hover:bg-gray-100': classArrange !== 'Store',
          })}
          onClick={() => handleClickArrangeButton('Store')}
        >
          Store
        </button>
      </div>
      <div className="py-8 text-xl font-light">
        Choose up to 3 templates (apps similar to your idea) to use as a base.
      </div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-8">
        {listArrange.map((item) => (
          <TabContent item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

Contents.propTypes = {};

export default Contents;
