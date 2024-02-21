import React from 'react'
import Navbar from '../Navbar'
import './testNew.scss';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export default function TestNew() {
  return (
  <>
  <Navbar />
  <section className='hero-section'>
    <div className='text'>
      <div className="back-icon">
        <Link className="text-[#5648FC]" to={"/"}>
            <IoArrowBack />
        </Link>
      </div>
      <div className='heading'>
        <h3 className='heading-text'>
            One Stop for your <br/> complete Learning
        </h3>  
        <h4 className='subHeading-text'>
          CUET
        </h4>
        <div className="btn">
              Access Now
        </div>
      </div>
    </div>
    <div className="hero-image">
          <img src="https://s3-alpha-sig.figma.com/img/bcb7/1722/18523a084e62fca4abf99df9aeb0d2c8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqNR2zH1XwTymeeR2uamO5nlRdn5k7WbencRG6Fw5IkPosCTt1~y9Om0Aww2dVunFxZv3LwIzjkoTe7jYBUOgDjX3hce97LGcQNnitMAd1hcbl-rYXuqeOdPo5muxGRKkBog0piHEU4mbknkBDCLmvYI2ohi0mHKdQt0E2d9OZI8VaETV4k1IU7U1PCKegrAisPmgC6gcTfhFwNO7FHEbjnHHnPhyXgaN3wYKqdinhfIXzOjCwUu1r3f65kYN~IjkXUncekgyIQzw4kUTJ8lpuIMnvcHW30JSRK7dxr1kJr-H18v146HlAYwhTTuHnY2YOc~PRBgPkniJRyhiMIoXw__" />
    </div>
  </section>
  <div></div>
  
  
  </>
  )
}
