'use strict';

import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <ul className="products-list product-list-in-box">
        <li className="item">
          <div className="product-img">
            <img src="img/default-50x50.gif" alt="Product Image" />
          </div>
          <div className="product-info">
            <a href="#" className="product-title">Samsung TV <span className="label label-warning pull-right">$1800</span></a>
            <span className="product-description">
              Samsung 32 1080p 60Hz LED Smart HDTV.
            </span>
          </div>
        </li>
        <li className="item">
          <div className="product-img">
            <img src="img/default-50x50.gif" alt="Product Image" />
          </div>
          <div className="product-info">
            <a href="#" className="product-title">Bicycle <span className="label label-info pull-right">$700</span></a>
            <span className="product-description">
              26 Mongoose Dolomite Men's 7-speed, Navy Blue.
            </span>
          </div>
        </li>
        <li className="item">
          <div className="product-img">
            <img src="img/default-50x50.gif" alt="Product Image" />
          </div>
          <div className="product-info">
            <a href="#" className="product-title">Xbox One <span className="label label-danger pull-right">$350</span></a>
            <span className="product-description">
              Xbox One Console Bundle with Halo Master Chief Collection.
            </span>
          </div>
        </li>
        <li className="item">
          <div className="product-img">
            <img src="img/default-50x50.gif" alt="Product Image" />
          </div>
          <div className="product-info">
            <a href="#" className="product-title">PlayStation 4 <span className="label label-success pull-right">$399</span></a>
            <span className="product-description">
              PlayStation 4 500GB Console (PS4)
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

ProductList.displayName = 'ProductLists';
ProductList.defaultProps = {
};
ProductList.propTypes = {
};

export default ProductList;
