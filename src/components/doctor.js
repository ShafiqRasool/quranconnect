import React from 'react'

import PropTypes from 'prop-types'

import './doctor.css'

const Doctor = (props) => {
  return (
    <div className={`doctor-doctor ${props.rootClassName} `}>
      <div className="doctor-heading">
        <h2 className="doctor-text">{props.heading}</h2>
        <h1 className="">{props.heading1}</h1>
        <p className="doctor-text2">{props.text}</p>
      </div>
    </div>
  )
}

Doctor.defaultProps = {
  heading: 'Dr. Audrey Smith',
  image_src: '3a509d7c-a1a1-4605-a923-8a2f09e49807',
  rootClassName: '',
  heading1: 'Heading',
  image_alt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Doctor.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default Doctor
