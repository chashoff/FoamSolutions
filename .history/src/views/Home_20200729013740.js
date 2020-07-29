import React, { Component } from 'react'
import '../styles/Home.css'
import NavBar from '../components/navigation';
import Item from '../components/item';
import { benefits } from '../data/benefits.json'
import WaterWave from 'react-water-wave';
import image from '../images/background.png'
import ReactFullpage from '@fullpage/react-fullpage';
import ReactPlayer from 'react-player';
import Form from '../components/forms';
import Map from '../components/maps';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import $ from "jquery";

const anchors = ["Home", "About","Benefits", "Testimonials", "Location", "Contact", "NFPA"];
class Home extends Component {
    
    state = {
        imageCarousel: 0
    }
    prev = () => {
        let num = this.state.imageCarousel;
        num--;
        if(num === -1){
            num = 3;
        }
        this.setState({imageCarousel: num})
    }
    next = () => {
        let num = this.state.imageCarousel;
        num++;
        if(num === 4){
            num = 0;
        }
        this.setState({imageCarousel: num})
    }
    render() {
        const logo = '/images/stack_logo.png'
        return (
            <>
                <ReactFullpage
                anchors={anchors}
                navigation
                navigationTooltips={anchors}
                sectionsColor={[]}
                scrollOverflow={true}
                onLeave={(origin, destination, direction) => {
                console.log("onLeave event", { origin, destination, direction });
                }}
                render={({ state, fullpageApi }) => {
                console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

                return (
                    <div style={{ overflowY: 'hidden', padding: '0', margin: '0'}}>
                        <div className="section" style={{ position: 'relative'}}>
                        <WaterWave
                            imageUrl={image}
                            style={{ backgroundSize: 'cover'}}>
                            {methods => (
                                
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
                                        <canvas></canvas>
                                    </div>
                            )}
                        </WaterWave>
                        </div>
                        <div className="blur-container section">
                            <h2 style={{ marginTop: '1em', marginBottom: 1em;}} className="section-one-header-slide-one">About Our Company</h2>
                            <div>
                                <div style={{display: 'flex', flexDirection: 'column', width: '100%' , margin: '0 auto', paddingBottom: '1em', marginTop: '1em'}}>
                                    <h5 style={{ textAlign: 'center', marginTop: '.5em'}}>Our Process</h5>
                                    <p className="span-spacing" style={{width: '100px'}}></p>
                                    <ReactPlayer style={{ margin: '0 auto', width: '400'}} loop="true" playing="false" url='https://www.youtube.com/watch?time_continue=1&v=j6n8v_guPy0&feature=emb_logo' />
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em', marginTop: '.5em', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                                    <div className="about-info-container">
                                        <h5 className="working-date">Working Since 2006</h5>
                                        <p className="span-spacing"></p>
                                        <p className="exp-text-slide-one">Our company offers the most cost effective, environmentally friendly solution to your annual foam proportioner testing. Proudly servering our great clientelle since 2006</p>
                                    </div>
                                    <div className="about-info-container">
                                        <h2 style={{ textAlign: 'center'}}>What We Do</h2>
                                        <p className="span-spacing" style={{width: '100px'}}></p>
                                        <div>
                                            <p style={{ textAlign: 'center'}}>The method relies on an initial foam system discharge test to establish that the system is working properly 
                                            and to determine the concentration the proportioner is developing. This test is conducted in the same fashion as 
                                            any other foam proportioning system acceptance test. This test is immediately followed by a water equivalency test 
                                            at the exact same conditions as the initial foam discharge test.</p>
                                            <p style={{ textAlign: 'center'}}>A water equivalency test essentially replaces the foam concentrate supply to the proportioner with water. The 
                                            flowrate of the system and the flowrate of the water used in place of the concentrate are both measured with 
                                            precision flow meters, and a baseline proportioning rate is established.</p>
                                            <p style={{ textAlign: 'center'}}>The proportioning system can then be tested in the future by repeating a water equivalency test and comparing 
                                            the results to the initial water equivalency test. Flow of foam concentrate is not necessary.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section gradient-one">
                            <div id="about" style={{ margin: '1rem'}}>
                                <h2 style={{fontWeight: '400', fontSize: '2.3em'}}>Benefits Using<br />Our Process</h2>
                                <div>
                                    <div className="about-grid">
                                        <Item title={benefits[0].title} description={benefits[0].description} icon={benefits[0].icon} />
                                        <Item title={benefits[1].title} description={benefits[1].description} icon={benefits[1].icon} />
                                        <Item title={benefits[2].title} description={benefits[2].description} icon={benefits[2].icon} />
                                    </div>
                                    <div className="about-grid">
                                        <Item title={benefits[3].title} description={benefits[3].description} icon={benefits[3].icon} />
                                        <Item title={benefits[4].title} description={benefits[4].description} icon={benefits[4].icon} />
                                        <Item title={benefits[5].title} description={benefits[5].description} icon={benefits[5].icon} />
                                    </div>
                                </div>
                                <div className="certified">
                                    <div className="approved-container" style={{ display: 'flex', justifyContent: 'center'}}>    
                                        <img className="approved-logo" src="/images/fm_approved.png" alt=""/>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="approved-container">
                                        <img className="approved-logo" src="/images/NFPA_logo.png" alt=""/>
                                        <p style={{textAlign: 'center', fontWeight: '700'}}>APPROVED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}} className="section">
                            <div id="testimonials">
                                <h2 style={{textAlign: 'center', fontSize: '2.3em', fontWeight: '400'}}>Testimonials</h2>
                                <h4 style={{textAlign: 'center', marginBottom: '2em', color: 'darkgrey'}}>The results speak for themselves</h4>
                                <div className="testimonial-container">
                                    <div className="testimonial">
                                        <p>"The Navistar Assembly Plant in Springfield, 
                                        Ohio contracts Foam Solutions to test our fire 
                                        protection systems. The employees at Foam Solutions 
                                        are experts in their field and keep our Assembly 
                                        Plant, Paint Facility and Truck Specialty Center in..."</p>
                                        <div className="testimonial-image-background" style={{display: 'flex', backgroundColor: 'lightblue' }}>
                                            <img style={{ borderRadius: '50%', height: '75px'}} src="/images/persona.svg" alt=""/>
                                            <div style={{ marginLeft: '1em'}}>
                                                <h4 style={{textTransform: 'uppercase'}}>Rusty</h4>
                                                <h5>Bussiness Associate</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <p>"Foam solutions made it extremely easy to book an 
                                        appointment to make sure we where compliant. They 
                                        went above and beyond in fixing all of the issues we 
                                        had, and made sure we knew how to stay compliant!"</p>
                                        <div className="testimonial-image-background" style={{display: 'flex', backgroundColor: 'lightgreen'}}>
                                            <img style={{ borderRadius: '50%', height: '75px'}} src="/images/user-3.png" alt=""/>
                                            <div style={{ marginLeft: '1em'}}>
                                                <h4 style={{textTransform: 'uppercase'}}>Steven Baldwin</h4>
                                                <h5>Bussiness Owner</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <p>"We contract foam solutions to come in and test our 
                                        foam proportioner system to hopefully cut down on the 
                                        cost of a regular foam test. We are happy to say it was 
                                        much cheaper, and they did an amazing job!"</p>
                                        <div className="testimonial-image-background" style={{display: 'flex', backgroundColor: '#ff7878'}}>
                                            <img style={{ borderRadius: '50%', height: '75px' }} src="/images/user-ricky.png" alt=""/>
                                            <div style={{ marginLeft: '1em'}}>
                                                <h4 style={{textTransform: 'uppercase'}}>Kris Young</h4>
                                                <h5>Bussiness Associate</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <AwesomeSlider className="carousel" style={{width: '70%'}}>
                                <div data-src="/images/c-image-one.jpg" />
                                <div data-src="/images/c-image-two.jpg" />
                                <div data-src="/images/c-image-three.png" />
                            </AwesomeSlider>
                        </div>
                        <div id="location" className="section">
                            <div className="locationContainer">
                            <h2 className="locationHeader" style={{textAlign: 'center', fontSize: '2.3em', fontWeight: '400'}}>Locations</h2>
                                <Map />
                                <div className="secondContainer">
                                    <div className="locationService" style={{ backgroundColor: 'white', padding: '.5em 1em', borderLeft: '10px solid lightgreen'}}>
                                        <h1 style={{ textAlign: 'center', alignItems: 'center', fontSize: '2.3em'}}>Where We<br/>Service</h1>
                                        <p style={{textAlign: 'center', fontSize: '1.2em'}}>We take pride in our ability to service all of North America, and a majority of Latin America. With partners around the globe! Where ever you are we can get on track to being 100% compliant!</p>
                                    </div>
                                    <div className="locationService" style={{ marginTop: '2em', backgroundColor: 'white', padding: '.5em 1em', borderLeft: '10px solid #ff7878'}}>
                                        <h1 style={{ textAlign: 'center', alignItems: 'center', fontSize: '2.3em'}}>Located In<br/>Latin America?</h1>
                                        <p style={{textAlign: 'center', fontSize: '1.2em'}}>Check out our affiliates at <strong><a style={{ color: 'lightblue'}} href="https://www.industrialservices.ec/">Industrial Services!</a></strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="contact" style={{display: 'flex', flexDirection: 'column', height: '100vh' }} className="section">
                            <h3 style={{textAlign: 'center', marginTop: '5em'}}>Contact our sales team</h3>
                            <p style={{textAlign: 'center', fontWeight: '400', paddingBottom: '4em', fontSize: '.8em', color: 'darkgrey'}}>Our team is happy to answer your questions. The only bad question is the one not asked!</p>
                            <Form />
                            <div class="ocean">
                                <div class="wave"></div>
                                <div class="wave"></div>
                            </div>
                            <div className="created-by">
                                <img style={{height: '45px', paddingRight: '.75em'}} src="/images/lovast_logo.svg" alt="" />
                                <p>Created by Lovast</p>
                            </div>
                        </div>
                    </div>
                    
                );
                }}
            />
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
