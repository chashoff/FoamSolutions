import React, { Component } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import NavBar from '../components/navigation';
import { Helmet } from "react-helmet";
import FadeIn from 'react-fade-in';
import Footer from '../components/footer';
import Item from '../components/item';
import { benefits } from '../data/benefits.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
import WaterWave from 'react-water-wave';
import 

import image from '../images/background.png'
AOS.init();


class Home extends Component {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
    }
    componentDidMount() {
        var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
}); 
    }
    componentWillUnmount() {
        if (!!window.cleanUpWaves) {
            window.cleanUpWaves();
        }
    }
    imageOnClick = () => {

    }
    render() {
        const items = benefits.map(el => {
            return <Item title={el.title} description={el.description} icon={el.icon} />
        })
        const logo = '/images/stack_logo.png'
        const images = [{ url: "/images/bg.jpg" }, { url: "/images/bg2.jpg" }, { url: "/images/bg2.jpg" }, { url: "/images/bg2.jpg" }];
        return (
            <>
                <div id="fullpage">
                    <section class="vertical-scrolling">
                        <h2>fullPage.js</h2>
                        <h3>This is the first section</h3>
                        <div class="scroll-icon">
                        <p>Jump into the last slide</p>
                        <a href="#fifthSection/1" class="icon-up-open-big"></a>
                        </div>
                    </section>
                    <section class="vertical-scrolling">
                        <h2>fullPage.js</h2>
                        <h3>This is the second section</h3>
                    </section>
                    <section class="vertical-scrolling">
                        <h2>fullPage.js</h2>
                        <h3>This is the third section</h3>
                    </section>
                    <section class="vertical-scrolling">
                        <h2>fullPage.js</h2> 
                        <h3>This is the fourth section</h3>
                    </section>
                    <section class="vertical-scrolling">
                        <div class="horizontal-scrolling">
                        <h2>fullPage.js</h2>
                        <h3>This is the fifth section and it contains the first slide (actually section == first slide)</h3>
                        </div>
                        <div class="horizontal-scrolling">
                        <h2>fullPage.js</h2>
                        <h3>This is the second slide</h3> 
                        <p class="end">Thank you!</p>
                        </div>
                    </section>
                </div>
                {/* <WaterWave
                    imageUrl={image}
                    style={{ backgroundSize: 'cover'}}>
                    {methods => (
                        <div className="section section1">
                        <FadeIn>
                            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', marginTop: 'auto',overflowX: 'hidden' }}>
                                <NavBar />
                                <div style={styles.container}>
                                    <div style={styles.heroContainer}>
                                        <img style={{ height: '200px' }} src={logo} alt="Company logo" />
                                        <h4 style={{ paddingTop: '.25em', fontSize: '1em', color: 'lightgrey' }}>Foam Proportioner Testing for <span style={styles.label}>HEF</span>, <span style={styles.label}>AR</span> and <span style={styles.label}>AFFF</span> Systems</h4>
                                        <p style={{ fontSize: '1.6em', marginTop: '.75em', color: 'lightgrey' }}>
                                            An Eco Friendly Company Doing<br />Eco Friendly Testing!
                                        </p>
                                    </div>
                                </div>
                                {/* Do not delete!!!
                                <canvas></canvas>
                            </div>
                        </FadeIn>
                    </div>
                    )}
                </WaterWave>
                
                <div className="item-container">
                    <h2 style={{ fontWeight: '400', textAlign:'center' }}>About Our Company</h2>
                    <div>
                        <div data-aos="fade-up" data-aos-duration="500" style={{ textAlign: 'center', paddingTop: '2em'}}>
                            <h5 style={{fontWeight: '500'}}>Working Since 2006</h5>
                            <p style={{ height: '4px', width: '40px', backgroundColor: '#45a5e4', margin: '10px auto 0 auto'}}></p>
                            <p>Our company offers the most cost effective, environmentally friendly solution to your annual foam proportioner testing.</p>
                        </div>
                        <div style={{textAlign: 'center', paddingTop: '2em'}}>
                            <h5 data-aos="fade-up" data-aos-duration="1000" style={{fontWeight: '500', marginBottom: '1em'}}>Our Process</h5>
                            <div data-aos="flip-up" data-aos-duration="1000" style={{ height: '600px', width: '70%', backgroundColor: 'lightgrey', margin: '0 auto', marginBottom: '5em'}}>Video Here</div>
                        </div>
                    </div>
                    <h2 style={{ fontWeight: '400', textAlign:'center' }}>Benefits Using<br />Our Process</h2>
                    <div data-aos="slide-up" data-aos-duration="1000" className="item-styles">
                        <div className="three-group">
                            <Item title={benefits[0].title} description={benefits[0].description} icon={benefits[0].icon} />
                            <img style={{ width: "100%", height: '100%', padding: '1em'}} src="/images/bg.jpg" alt=""/>
                            <Item title={benefits[1].title} description={benefits[1].description} icon={benefits[1].icon} />
                        </div>
                        <div className="three-group">
                            <img style={{ width: "100%", height: '100%', padding: '1em'}} src="/images/bg.jpg" alt=""/>
                            <Item title={benefits[2].title} description={benefits[2].description} icon={benefits[2].icon} />
                            <img style={{ width: "100%", height: '100%', padding: '1em'}} src="/images/bg.jpg" alt=""/>
                        </div>
                        <div className="three-group">
                            <Item title={benefits[3].title} description={benefits[3].description} icon={benefits[3].icon} />
                            <img style={{ width: "100%", height: '100%', padding: '1em'}} src="/images/bg.jpg" alt=""/>
                            <Item title={benefits[4].title} description={benefits[4].description} icon={benefits[4].icon} />
                        </div>
                        <div className="three-group">
                            <img className="image-desc-hover" style={{ width: "100%", height: '100%', padding: '1em'}} src="/images/bg.jpg" alt=""/>
                            <Item title={benefits[5].title} description={benefits[5].description} icon={benefits[5].icon} />
                            <img style={{ width: "100%", height: '100%', padding: '1em'}} src="/images/bg.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div style={{ paddingTop: '4em' }} className="map-section">
                        <div data-aos="slide-right" data-aos-duration="1000" style={{ height: '400px'}} className="map_container">
                            {/* MAP GOES HERE 
                            <div>Map Here</div>
                        </div>
                        <div data-aos="slide-left" data-aos-duration="1000" className="map-about" style={{ width: '50%', margin: 'auto 0' }}>
                            <h2 style={{ textTransform: 'uppercase', fontWeight: '400' }}>Where We<br />Service</h2>
                            <p style={{ marginBottom: '1em' }}>We take pride in our ability to service all of North America, and a majority
                            of Latin America. With partners around the globe! Where ever you are we can get you
                                on track to being 100% compliant!</p>
                            <Link className="primary-button" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                    <div data-aos="slide-up" data-aos-duration="1000" className="affiliates" style={{ textAlign: 'center', marginTop: '3em', marginBottom: '3em' }}>
                        <h3 style={{ marginBottom: '.25em' }}>Please contact our Latin American Agent at <a style={{ color: 'lightblue' }} href="https://www.industrialservices.ec/">Industrial Services!</a></h3>
                    </div>
                    <Footer />
                </div> */}
            </>    
        );
    }
}
export default Home;

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: '10',
        height: '100vh',
        width: '50%',
        margin: '0 auto'
    },
    header: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
    },
    secondNav: {
        padding: '1em 5em',
        display: 'flex',
        flexDirection: 'row'
    },
    secondNavIcon: {
        height: '50px'
    },
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: 'auto',
        color: 'white'
    },
    label: {
        color: '#00B9AE'
    },

}
