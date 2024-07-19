import React, {useState} from "react";
import Avatar from '../../assets/images/Avatar.svg';
import Book from '../../assets/images/Book.svg';
import Send from '../../assets/images/Send.svg';
import classes from './Home.module.css';


function Home(){



    const [data, setData]=useState([
        {
            question:"Lorem ipsum dolor sit amet consectetur. Blandit cras lectus vitae commodo urna tristique. Morbi" +
                " ultrices urna tincidunt amet. Morbi faucibus a consequat erat vitae tellus. Donec purus praesent" +
                " nulla velit.",
            answer:"Lorem ipsum dolor sit amet consectetur. Blandit cras lectus vitae commodo urna tristique. Morbi" +
                " ultrices urna tincidunt amet. Morbi faucibus a consequat erat vitae tellus. Donec purus praesent" +
                " nulla velit."
        },
        {
            question:"Lorem ipsum dolor sit amet consectetur. Blandit cras lectus vitae commodo urna tristique. Morbi" +
                " ultrices urna tincidunt amet. Morbi faucibus a consequat erat vitae tellus. Donec purus praesent" +
                " nulla velit.",
            answer:"Lorem ipsum dolor sit amet consectetur. Blandit cras lectus vitae commodo urna tristique. Morbi" +
                " ultrices urna tincidunt amet. Morbi faucibus a consequat erat vitae tellus. Donec purus praesent" +
                " nulla velit."
        },
        {
            question:"Lorem ipsum dolor sit amet consectetur. Blandit cras lectus vitae commodo urna tristique. Morbi" +
                " ultrices urna tincidunt amet. Morbi faucibus a consequat erat vitae tellus. Donec purus praesent" +
                " nulla velit.",
            answer:"Lorem ipsum dolor sit amet consectetur. Blandit cras lectus vitae commodo urna tristique. Morbi" +
                " ultrices urna tincidunt amet. Morbi faucibus a consequat erat vitae tellus. Donec purus praesent" +
                " nulla velit."
        }
    ]);

    const renderData=data.map((item, index)=>(
        <div key={index}>
            <div className={classes.writer}>
                <img src={Avatar} alt={""} className={classes.avatarDiv}/>You
            </div>
            <div className={classes.messageDiv}>{item.question}</div>
            <div className={classes.writer}>
                <img src={Book} alt={""} className={classes.avatarDiv}/>You
            </div>
            <div className={classes.messageDiv}>{item.answer}</div>
        </div>
        )
    )


    return(
        <div className={classes.wholeHome}>
            <div className={classes.questionsAnswers}>
                {renderData}
            </div>
            <div className={classes.textareaContainer}>
                <textarea className={classes.textareaStyle} id="message" placeholder="Type your message..."/>
                <button className={classes.btn} id="sendButton">
                    <img src={Send} alt={""} className={classes.sendIcon}/> Label
                </button>
            </div>
        </div>
    )
}

export default Home;