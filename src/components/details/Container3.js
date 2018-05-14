import React from 'react';
import '../../styles/details/Container3.css'

const Container3 = (props) => (
  <div className="container3">
          {Object.keys(props.names).map(elem => (
            <div key={elem} className="container3__row">
              <span className="container3__row__span">
                {elem}:
              </span>
              {props.names[elem]}
            </div>
          ))
      }
  </div>
);

export default Container3;
