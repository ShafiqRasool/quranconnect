import React from 'react'

import PropTypes from 'prop-types'

import './practice.css'

const Practice = (props) => {
  return (
    <div className="practice-practice">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="practice-image"
      />
      <div className="practice-heading">
        <h3 className="practice-header">{props.Title}</h3>
        <p className="practice-caption">{props.Description}</p>
      </div>
      <div className="read-more">
        <span className="practice-link">Read more</span>
        <img alt="image" src="/Icons/arrow-2.svg" className="practice-image1" />
      </div>
    </div>
  )
}

Practice.defaultProps = {
  Title: 'Basic Noorani Qaida',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Description:
    'Noorani Qaida Course is a fundamental course that is taught by our tutors using Noorani Qaida syllabus. We have designed comprehensive Online Noorani Qaida Course for kids and adults (male and females) with the help of experienced online Noorani Qaida Tutors. It is first step for beginners to learn Quran. You cannot recite the Holy Quran properly without learning basic rules first. This course starts from learning basic arabic alphabets. It is recommended for those who do not know Arabic and would like to read the Arabic language and Quran with rules of tajweed.',
}

Practice.propTypes = {
  Title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  Description: PropTypes.string,
}

export default Practice
