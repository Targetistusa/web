import React, { useState } from 'react';
import '../styles/Features2.css';
import { FaCirclePlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useInView } from 'react-intersection-observer';
import WordFadeIn from "./magicUIComponents/wordFadeIn";
import { Element } from 'react-scroll';
const Features = () => {
    const [isFlipped, setIsFlipped] = useState(new Array(5).fill(false));
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3       // Trigger when 50% of the element is in view
    });


    return (
        <Element name="features" className='features-section'>
        <section ref={ref}>
            <div className='heading'>
              {inView && <WordFadeIn words="you need it. we have it." className=' text-4xl text-purple-800' />}
            </div>
            <div className="grid-container">
                
                <div className={"feature-card AS_card"}
                     onClick={()=> Swal.fire({
                         html: `<div> 
                         Our advanced algorithm creates customized schedules by
                         considering user preferences, habits, and workload,
                         ensuring that tasks fit seamlessly into users' daily
                         routines.
                        </div>`,
                         showCloseButton:true,
                         width: "70vw",
                     })}>
                    <img src={require('../images/autosch.png')} alt="Auto Scheduling" />
                    <div className="AS_card_text">Auto Scheduling</div>
                    <FaCirclePlus color={"#9e31e3"} size={30} style={{
                        position:"absolute",
                        bottom:10,
                        right:10
                    }} onClick={()=> Swal.fire({
                        html: `<div> 
                        Our advanced algorithm creates customized schedules by
                        considering user preferences, habits, and workload,
                        ensuring that tasks fit seamlessly into users' daily
                        routines.
                        </div>`,
                        showCloseButton:true,
                        width: "70vw",
                    })}/>
                </div>
                <div className={"feature-card"} onClick={()=> Swal.fire({
                    html: `<div> 
                    When users forget a task or underestimate its time, Targetist
                    automatically reshuffles their schedule to minimize disruption and enhance
                    efficiency, addressing the unexpected challenges of real-life scheduling.
                        </div>`,
                    showCloseButton:true,
                    width: "70vw",
                })}>
                    <img src={require('../images/rerouting.png')} alt="Auto Rerouting"/>
                    <div className="card-text">Auto Rerouting</div>
                    <FaCirclePlus color={"#9e31e3"} size={30} style={{
                        position:"absolute",
                        bottom:10,
                        right:10
                    }} onClick={()=> Swal.fire({
                        html: `<div> 
                        When users forget a task or underestimate its time, Targetist
                        automatically reshuffles their schedule to minimize disruption and enhance
                        efficiency, addressing the unexpected challenges of real-life scheduling.
                        </div>`,
                        showCloseButton:true,
                        width: "70vw",
                    })}/>
                </div>
                <div className={"feature-card"} onClick={()=> Swal.fire({
                   html: `<div style={{flex:1,flexDirection:column,justifyContent:center, alignItems:center, marginTop:20}}> 
                   <p style={{textAlign:"right"}}>Users build streaks by completing their
                   daily tasks, and when friends also accomplish their goals, group
                   streaks are formed, fostering motivation and a sense of community
                   accountability.</p>
                       </div>`,
                    showCloseButton:true,
                    width: "70vw",

                })}>
                    <img src={require('../images/social.png')} alt="Gamification" />
                    <div className="card-text">Gamification</div>
                    <FaCirclePlus color={"#9e31e3"} size={30} style={{
                        position:"absolute",
                        bottom:10,
                        right:10
                    }} onClick={()=> Swal.fire({
                        html: `<div style={{flex:1,flexDirection:column,justifyContent:center, alignItems:center, marginTop:20}}> 
                    <p style={{textAlign:"center"}}>Users build streaks by completing their
                    daily tasks, and when friends also accomplish their goals, group
                    streaks are formed, fostering motivation and a sense of community
                    accountability.</p>
                        </div>`,
                        showCloseButton:true,
                        width: "70vw",
                    })}/>
                </div>
                <div className={"feature-card"} onClick={()=> Swal.fire({
                    html: `<div> 
                    Any task can be linked as a prerequisite or dependent to any other task,
                    allowing Targetist to seamlessly integrate with various project
                    management systems like waterfall, agile, or even emerging
                    methodologies. The algorithm's flexibility distinguishes us from other
                    software solutions.
                        </div>`,
                    showCloseButton:true,
                    width: "70vw",

                })}>
                    <img src={require('../images/node.png')} alt="Nodes & Connection" />
                    <div className="card-text">Nodes & Connection</div>
                    <FaCirclePlus color={"#9e31e3"} size={30} style={{
                        position:"absolute",
                        bottom:10,
                        right:10
                    }} onClick={()=> Swal.fire({
                        html: `<div> 
                        Any task can be linked as a prerequisite or dependent to any other task,
                        allowing Targetist to seamlessly integrate with various project
                        management systems like waterfall, agile, or even emerging
                        methodologies. The algorithm's flexibility distinguishes us from other
                        software solutions.
                        </div>`,
                        showCloseButton:true,
                        width: "70vw",

                    })}/>
                </div>
                <div className={"feature-card"} onClick={()=> Swal.fire({
                    html: `<div style={{flex:1,flexDirection:column,justifyContent:center, alignItems:center, marginTop:20}}> 
                    <p style={{marginTop:30,textAlign:"center"}}></p>Targetist intelligently allocates <br/> 
                    extra time to tasks based on users'
                    previous behavior. If you consistently underestimate the time
                    required for a task, it adjusts accordingly, helping you stay on track.
                    </div>`,
                    showCloseButton:true,
                    width: "70vw",

                })}>
                    <img src={require('../images/insights.png')} alt="Insights" />
                    <div className="card-text">Insights</div>
                    <FaCirclePlus color={"#9e31e3"} size={30} style={{
                        position:"absolute",
                        bottom:10,
                        right:10
                    }} onClick={()=> Swal.fire({
                        html: `<div style={{flex:1,flexDirection:column,justifyContent:center, alignItems:center, marginTop:20}}> 
                        <p style={{marginTop:30,textAlign:"center"}}></p>Targetist intelligently allocates <br/> 
                        extra time to tasks based on users'
                        previous behavior. If you consistently underestimate the time
                        required for a task, it adjusts accordingly, helping you stay on track.
                        </div>`,
                        showCloseButton:true,
                        width: "70vw",

                    })}/>
                </div>
            </div>
            <div className="circles circle1"></div>
            <div className="circles circle2"></div>
            </section>
        </Element>
    );
};

export default Features;
