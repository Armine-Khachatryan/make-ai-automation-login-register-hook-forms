import React from "react";
import Logo from '../../assets/images/Logo.svg';
import NavigateLeft from '../../assets/images/NavigateLeft.svg';
import classes from './RegistrationLoginLeft.module.css';

function RegistrationLoginLeft(props){


    return(
        <div className={classes.left}>
            <div>
                <img className={classes.logo} src={Logo} alt={""}/>
                {/* eslint-disable-next-line react/prop-types */}
                {props.showTerms ?
                <div className={classes.termsWhole}>
                    <div className={classes.titleTerms}>
                        {/* eslint-disable-next-line react/prop-types */}
                        <span onClick={()=>props.onSetShowTerms(false)}><img className={classes.navigateIcon} src={NavigateLeft} alt="navigateLeft"/></span>
                        Terms and conditions</div>
                    <div className={classes.textTerms}>Lorem ipsum dolor sit amet consectetur. Sed ut convallis
                        pharetra sed metus posuere. Fringilla elit consectetur lacinia sit. Scelerisque facilisis
                        aliquet in egestas blandit elementum. Id sed ac at leo cras nec volutpat viverra molestie. Quam
                        metus sodales nulla vel. Rhoncus feugiat amet lectus senectus a quam enim. Orci pulvinar
                        aliquam blandit massa vulputate augue. Facilisi sit dignissim fringilla venenatis massa cras
                        id. Tempor pharetra eu viverra ac sit magna accumsan nibh. Ornare odio egestas felis gravida
                        maecenas urna pharetra risus eget. Tortor porta tellus.</div>
                    <div className={classes.subTitleTerms}>Lorem ipsum</div>
                    <div className={classes.textTerms}>Lorem ipsum dolor sit amet consectetur. Sed ut convallis
                        pharetra sed metus posuere. Fringilla elit consectetur lacinia sit. Scelerisque facilisis
                        aliquet in egestas blandit elementum. Id sed ac at leo cras nec volutpat viverra molestie.
                        Quam metus sodales nulla vel. Rhoncus feugiat amet lectus senectus a quam enim. Orci pulvinar
                        aliquam blandit massa vulputate augue. Facilisi sit dignissim fringilla venenatis massa cras id.
                        Tempor pharetra eu viverra ac sit magna accumsan nibh. Ornare odio egestas felis gravida
                        maecenas urna pharetra risus eget. Tortor porta tellus.</div>
                    <div className={classes.subTitleTerms}>Lorem ipsum</div>
                    <div className={classes.textTerms}>Lorem ipsum dolor sit amet consectetur. Sed ut convallis
                        pharetra sed metus posuere. Fringilla elit consectetur lacinia sit. Scelerisque facilisis
                        aliquet in egestas blandit elementum. Id sed ac at leo cras nec volutpat viverra molestie.
                        Quam metus sodales nulla vel. Rhoncus feugiat amet lectus senectus a quam enim. Orci pulvinar
                        aliquam blandit massa vulputate augue. Facilisi sit dignissim fringilla venenatis massa cras id.
                        Tempor pharetra eu viverra ac sit magna accumsan nibh. Ornare odio egestas felis gravida
                        maecenas urna pharetra risus eget. Tortor porta tellus.</div>
                </div>
                   :
                    <>
                        <div className={classes.title}>Your book is</div>
                        <div className={classes.subtitle}>Short description: Lorem ipsum dolor sit amet consectetur.
                            Eget velit
                            aenean urna scelerisque faucibus. Eu arcu interdum amet neque accumsan.
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default RegistrationLoginLeft;