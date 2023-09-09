import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Practice from '../components/practice'
import Doctor from '../components/doctor'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Medica template</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading">
            <span className="home-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section">
              <div className="home-heading01">
                <span className="home-header01">Cardiology</span>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-section1">
              <div className="home-heading02">
                <span className="home-header02">Orthopedics</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text001">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading03">
                <span className="home-header03">Ophtalmology</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text002">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading04">
                <span className="home-header04">Pediatrics</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text003">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading05">
                <span className="home-header05">Nutrition</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text004">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading06">
                <span className="home-header06">General</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text005">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <img
              alt="image"
              src="/image_2023-09-01_153343781-1500h.png"
              className="home-logo"
            />
            <nav className="home-links">
              <a href="#how-it-works" className="home-link">
                Cources
              </a>
              <a href="#pricing" className="home-link01">
                Prices
              </a>
              <a href="#schedule" className="home-link02">
                Contact
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image06"
              />
              <span className="home-text006">+92 321 8180319</span>
            </button>
            <a
              href="https://wa.me/+923274540905"
              target="_blank"
              rel="noreferrer noopener"
              className="home-book button button-main"
            >
              <img
                alt="image"
                src="/icons8-whatsapp.svg"
                className="home-image07"
              />
              <span className="home-text007">Chat with us</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container01">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home-image08"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text008">Features</span>
                <span className="home-text009">How it works</span>
                <span className="home-text010">Prices</span>
                <span className="home-text011">Contact</span>
                <a href="#book" className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image09"
                  />
                  <span className="home-text012">Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">Welcome to Quran Connect</h1>
              <p className="home-caption6">Get Free 3 Days Trial</p>
            </div>
            <a href="#book" className="home-book2 button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image10"
              />
              <span>Get Started</span>
            </a>
          </div>
          <div className="home-image11">
            <img
              alt="image"
              src="/whatsapp%20image%202023-09-05%20at%2014.17.53-900w.jpg"
              className="home-image12"
            />
          </div>
        </div>
        <div className="home-background"></div>
        <h2 className="home-text014">Cources</h2>
      </section>
      <section className="home-practices1">
        <div className="home-content1">
          <div className="home-grid1">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice image_src="https://www.equranschool.com/images/noorani-qaida-course.jpg"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice
                  Title="Quran Reading"
                  Description="It is duty of every Muslim to read the Holy Quran with Tajweed rules. Our online Quran Reading Course is desinged for both kids and adults of all ages and genders. This course is developed for the students who have just completed Noorani Qaida course and can read Quran but are not fluent in reading and want to improve their reading skills. Quran Reading course will provide practice in order to enhance student’s confidence while applying methods which were taught in Qaida course. Our teacher will ensure that student finishes the full Quran reading"
                  image_src="https://www.equranschool.com/images/quran-course.jpg"
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice
                  Title="Quran Memorization"
                  Description="We have arranged online Hifz program for kids and adults (male and females) with our online Hifz tutors. Our course is for all ages and genders. Some parents think that memorizing the Quran with the rules of Tajweed is very difficult. Obviously it’s not an easy task, there are more than six thousand verses in the Quran, but with help of our expert online Quran teachers your kid will be able to achieve the goal in an easy and way. Your kid have to concentrate on the lesson and it will gradually lead to the final destination."
                  image_src="https://www.equranschool.com/images/hifz-ul-quran-course.jpg"
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice
                  Title="Quran Translation"
                  Description="We have designed translation of Quran Course for male and female students who want to learn to translate Quran with the help of experienced online Quran tutors. Our course is for all ages and genders. Some parents think that learning translation is very difficult, but it is not the case. It’s very easy. You just need to concentrate on meanings and it gradually leads you to the final destination."
                  image_src="https://www.equranschool.com/images/quran-translation-course.jpg"
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice
                  Title="Rules of Tajweed"
                  Description="This course is designed for the students who already completed Quran Reading course and can read Quran but want to improve their tajweed skills. This course will provide practice in order to enhance student’s confidence while applying tajweed rules which were taught in basic level course. One of the main principles of fluent Quranic reading is repetition and lot of practice. All Basic tajweed rules will be covered along with reading practice."
                  image_src="https://www.equranschool.com/images/rules-of-tajweed-course.jpg"
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice
                  Title="Islamic studies for Kids"
                  Description="Islam is the religion of peace. It teaches us to live a good daily life, in obedience to the laws of Allah. Before being a practicing muslim we should know the basic teachings of Islam. Muslim children should know good things which are called halal and bad things which are called haram so that they can implement them in their lives for a better life. We have designed Islamic Studies for Kids Course for the children who want to know fundamental teachings of Islam. All Muslim children need to learn the obligatory knowledge of Islam. How should we live and how to avoid sin to live a pure life. EQuran School makes it possible for a Muslim family to come and learn the Quran and understandt Islam."
                  image_src="https://www.equranschool.com/images/islamic-studies-for-kids-course.jpg"
                ></Practice>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading08">
          <h2 className="home-header08">Why choose us</h2>
          <p className="home-header09">
            <span className="home-text015">Quality Education</span>
            <br className="home-text016"></br>
            <span className="home-text017">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text018"></br>
            <span className="home-text019">
              Our courses are crafted to provide a high-quality learning
              experience. Your child will be guided by experienced instructors
              who are passionate about teaching the Quran.
            </span>
            <br></br>
            <br className="home-text021"></br>
            <br className="home-text022"></br>
            <span className="home-text023">Global Community</span>
            <br className="home-text024"></br>
            <br className="home-text025"></br>
            <span className="home-text026">
               We believe in the power of a global community. Students from all
              corners of the world come together to learn, share, and grow
              spiritually.
            </span>
            <br></br>
            <br className="home-text028"></br>
            <br></br>
            <br className="home-text030"></br>
            <span className="home-text031">Three Days Free Trial</span>
            <br className="home-text032"></br>
            <br className="home-text033"></br>
            <span className="home-text034">
              We understand that making the right choice for your child&apos;s
              education is essential. That&apos;s why we offer a three-day free
              trial for every course. No strings attached. No commitments.
            </span>
            <br></br>
            <br className="home-text036"></br>
            <br></br>
            <br className="home-text038"></br>
            <span className="home-text039">Flexible Learning</span>
            <br className="home-text040"></br>
            <br className="home-text041"></br>
            <span className="home-text042">
              Life can be busy. We offer flexible schedules so your child can
              learn at their own pace, making it easier to balance Quranic
              studies with other commitments.
            </span>
          </p>
        </div>
        <div className="home-content2">
          <div className="home-video"></div>
          <div className="home-caption7"></div>
        </div>
      </section>
      <section id="schedule" className="home-schedule">
        <div className="home-content3">
          <div className="home-header10">
            <h2 className="home-heading09">Our Classes are 1 to 1</h2>
          </div>
          <div className="home-types">
            <a
              href="#book"
              className="home-book-person button button-main button-white"
            >
              <span>Book appointment</span>
            </a>
          </div>
        </div>
      </section>
      <section className="home-meet">
        <div className="home-heading10">
          <h2 className="home-text044">
            <span>See our previous reviews</span>
            <br></br>
          </h2>
        </div>
        <div className="home-list">
          <div className="home-controls">
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="previous"
              className="arrow"
            />
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="next"
              className="home-forward arrow"
            />
          </div>
          <div data-teleport="doctors" className="home-doctors">
            <Doctor
              text="My son has been a part of the Quran Connect community for a while, and I'm so pleased with the progress he's making. We started with the free trial, and it was a no-brainer to continue. The instructors are fantastic, and the flexible scheduling allows him to keep up with his studies alongside schoolwork. This platform has truly connected my son with the Quran in a meaningful way."
              heading="Emma from USA"
              heading1="⭐⭐⭐⭐⭐"
              rootClassName="doctor-root-class-name"
            ></Doctor>
            <Doctor
              text="I wanted my kids to have a strong foundation in our faith, and Quran Connect has been a great help. We gave the three-day free trial a shot, and we were pleasantly surprised. The teachers here are so patient and supportive. My children have learned a lot and have even made friends with other kids from different parts of the world. It's been a fantastic experience for us all."
              heading="Fatima from Spain"
              heading1="⭐⭐⭐⭐⭐"
              image_src="/Doctors/doctor-2-200h.png"
              rootClassName="doctor-root-class-name2"
            ></Doctor>
            <Doctor
              text="We were initially hesitant, but the free trial eased our concerns. Now, our children look forward to their Quranic lessons. The courses are well-structured, and the global community aspect is something we didn't expect. We're glad we found this platform to nurture our kids' spiritual growth."
              heading="Muhammad Ali from kuwait"
              heading1="⭐⭐⭐⭐⭐"
              image_src="/Doctors/doctor-3-200h.png"
              rootClassName="doctor-root-class-name1"
            ></Doctor>
            <Doctor
              text=" I can't thank Quran Connect enough for the wonderful experience my daughter has had! She's been using the platform for a few months now, and it's been amazing to see her enthusiasm for Quranic studies grow. We tried out the three-day free trial, and it was such a relief to find a place where she feels comfortable and engaged while learning about our faith."
              heading="Dr Ayesha from London "
              heading1="⭐⭐⭐⭐"
              image_src="/Doctors/doctor-4-200h.png"
              rootClassName="doctor-root-class-name3"
            ></Doctor>
          </div>
        </div>
      </section>
      <div className="home-download"></div>
      <section id="book" className="home-book3">
        <div className="home-heading11">
          <h2 className="home-text047">Book an appointment</h2>
        </div>
        <div className="home-div">
          <Script
            html={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        /* Add CSS styles for the button */
        #submitButton {
            background-color: #0074d9; /* Blue background color */
            color: white; /* White text color */
            border: none;
            border-radius: 5px; /* Rounded corners */
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScB38nw4vN_RbTYYCHeg50h65L4C_mExFYu2JK8htCZALW0oQ/viewform?embedded=true" width="640" height="720" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</body>
</html>
`}
          ></Script>
        </div>
        <div className="home-form">
          <div className="home-types1"></div>
          <div className="home-inputs">
            <div className="home-lower">
              <div className="home-button"></div>
              <p className="home-text048">
                Thank you for your interest . We will contact you as soon as
                possible!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-pricing">
        <div id="pricing" className="home-container02">
          <div className="home-pricing-card">
            <span className="home-text049">Free/3day</span>
            <div className="home-container03">
              <span className="home-text050">
                <span>$</span>
                <span></span>
              </span>
              <span className="home-text053">0</span>
            </div>
            <div className="home-container04">
              <span className="home-text054">3 Days Trial</span>
            </div>
            <a href="#book" className="home-link03 button">
              GET NOW
            </a>
          </div>
          <div className="home-pricing-card1">
            <span className="home-text055">
              <span>2 day/</span>
              <span>week</span>
            </span>
            <div className="home-container05">
              <span className="home-text058">
                <span>$</span>
                <span></span>
              </span>
              <span className="home-text061">37</span>
              <span className="home-text062">
                <span>/ monthly</span>
              </span>
            </div>
            <div className="home-container06">
              <div className="home-container07"></div>
              <span className="home-text064">
                <span className="home-text065">30$/Month </span>
                <span>for second sibling</span>
              </span>
            </div>
            <a href="#book" className="home-link04 button">
              DEAL 1
            </a>
          </div>
          <div className="home-pricing-card2">
            <span className="home-text067">
              <span>3 days/</span>
              <span>week</span>
            </span>
            <div className="home-container08">
              <span className="home-text070">
                <span>$</span>
                <span></span>
              </span>
              <span className="home-text073">50</span>
              <span className="home-text074">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="home-text076">
              <span className="home-text077">40$/Month</span>
              <span> for second sibling</span>
            </span>
            <a href="#book" className="home-link05 button">
              DEAL 3
            </a>
          </div>
          <div className="home-pricing-card3">
            <span className="home-text079">4days/week</span>
            <div className="home-container09">
              <span className="home-text080">
                <span>$</span>
                <span></span>
              </span>
              <span className="home-text083">63</span>
              <span className="home-text084">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="home-text086">
              <span className="home-text087">50$/Month </span>
              <span>for second sibling</span>
            </span>
            <a href="#book" className="home-link06 button">
              DEAL 3
            </a>
          </div>
          <div className="home-pricing-card4">
            <span className="home-text089">5 days/week</span>
            <div className="home-container10">
              <span className="home-text090">
                <span>$</span>
                <span></span>
              </span>
              <span className="home-text093">74</span>
              <span className="home-text094">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="home-text096">
              <span className="home-text097">60$/Month</span>
              <span> for second sibling</span>
            </span>
            <a href="#book" className="home-link07 button">
              <span>
                <span>DEAL 4</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-left1">
          <div className="home-brand">
            <img
              alt="image"
              src="/external/image-removebg-preview.svg"
              className="home-image13"
            />
            <p className="home-text102">
              Connect with us and let&apos;s explore the beauty of the Quran
              together.
            </p>
          </div>
          <div className="home-socials">
            <div className="social">
              <a
                href="https://www.instagram.com/hafizrafiq980/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/Icons/instagram.svg"
                  className="home-image14"
                />
              </a>
            </div>
            <div className="social">
              <a
                href="https://www.facebook.com/profile.php?id=61550779940995"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon5"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="home-legal">
            <span className="home-copyright">
              © 2023 Quran Connect. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home-right1">
          <div className="home-list1">
            <span className="home-header11">Menu</span>
            <div className="home-links1">
              <span className="home-link10">Home</span>
              <span className="home-link11">Cources</span>
              <span className="home-link12">Free </span>
            </div>
          </div>
          <div className="home-list2"></div>
          <div className="home-list3">
            <span className="home-header12">Contact</span>
            <div className="home-links2">
              <span className="home-link13">
                24 Street 3, Sheraz town, Lahore, 54770
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home-link14"
              >
                info@quranconnect.online
              </a>
              <a href="tel:(004) 234 - 5678" className="home-link15">
                (+92) 321 8180319
              </a>
            </div>
          </div>
        </div>
        <div className="home-legal1">
          <div className="home-row">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright5">
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <Script
          html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
        ></Script>
      </div>
      <div>
        <Script
          html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
        ></Script>
      </div>
      <div>
        <Script
          html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
