import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Container3.css'

const Container3 = (props) => (
  <div className="container__container2__container3">
          {Object.keys(props.names).map(elem => (
            <div key={elem} className="container__container2__container3__row">
              <span className="container__container2__container3__row__span">
                {elem}:
              </span>
              {props.names[elem]}
            </div>
          ))
      }
  </div>
);

export default Container3;
