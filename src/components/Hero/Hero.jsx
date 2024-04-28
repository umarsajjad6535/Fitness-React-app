import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import heart from "../../assets/heart.png"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'



const Hero = () => {
    const transition = {type: 'spring', duration:3}
    return (
        <div className="hero">
            <div className='blur hero-blur'> </div>
            <div className="left-h">
                <Header />
                { /*The best ad */}
                <div className="the-best-ad">
                    <motion.div
                    initial= {{left: '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type:'tween'}}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/*Hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div><span>
                        Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideas and 
                            live up your life fulfil
                        </span>
                    </div>
                </div>
                {/*Figure*/}
                <div className="figures">
                    <div>
                    <span>
                        <NumberCounter end={140} start={80} delay='4' preFix="+"/>
                    </span>
                    <span>Expert Coachs</span>
                    </div>
                    <div>
                    <span><NumberCounter end={978} start={800} delay='4' preFix="+"/></span>
                    <span>member joined</span>
                    </div>
                    <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' preFix="+"/>

                    </span>
                    <span>fitness program</span>
                    </div>
                </div>
                {/* Hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right-h">
                <button className="btn">
                    Join Now
                </button>
                <motion.div
                    initial={{right: "-1rem"}}
                    whileInView={{right:"4rem"}}
                    transition={transition}
                    className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>
            </div>
            {/*Hero images */}
            <img src={hero_image} alt="" className='hero-image'/>
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={{transition}} 
            src={hero_image_back} alt=""  className='hero-image-back'/>
            {/*Calories*/}
            <motion.div 
            initial={{right: "37rem"}}
            whileInView={{right: "28rem"}}
            transition= {transition}
            className="calories">
            <img src={calories} alt="" />
            <div>    
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
            </motion.div>
        </div>
    )
}



export default Hero