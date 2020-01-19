import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './item.css';

/* Fix: make only fluid source conditional instead of Img component */

const Item = ({ title, isActive, imageInActive, imageActive }) => (
  <figure>
    {isActive ? (
      <Img
        fluid={imageActive ? imageActive.childImageSharp.fluid : {}}
        alt={title}
      />
    ) : (
      <Img
        fluid={imageInActive ? imageInActive.childImageSharp.fluid : {}}
        alt={title}
      />
    )}

    <figcaption>
      <Title>{title}</Title>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  imageInActive: PropTypes.object.isRequired,
  imageActive: PropTypes.object.isRequired,
};

export default Item;
