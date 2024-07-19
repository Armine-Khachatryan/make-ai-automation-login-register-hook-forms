import React, {useState} from 'react';
import Menu from '../../assets/images/Menu.svg';
import Search from '../../assets/images/Search.svg';
import Dot from '../../assets/images/Dot.svg';
import Plus from '../../assets/images/Plus.svg';
import ActiveDot from '../../assets/images/ActiveDot.svg';
import classes from './Layout.module.css';
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";



function Layout(){

    // const menuIcons=
    const [menuIcons, setActiveMenu]=useState([
        {
            date:"Today",
            names:[
                {
                name:"Book name",
                },
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
            ]
        },
        {
            date:"Yesterday",
            names:[
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
            ]
        },
        {
            date:"01.04.2024",
            names:[
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
                {
                    name:"Book name",
                },
            ]
        },
    ]);

    const makeActive = (index, indx) => {
        const menuIconsCopy = [...menuIcons];
        menuIconsCopy.map((item, i)=>{
            if(i===index){
                item.names.map((single, ix)=>{
                    if(ix!==indx){
                        single.active = false
                    }
                    else{
                        single.active =true
                    }
                })
            }
        })


        // menuIconsCopy.map((item, i)=>{
        //     if(i===index) {
        //         item.names.map((single, ix) => {
        //             if (ix === indx) {
        //                 single.active = true
        //             }
        //             else{
        //                 single.active = false
        //             }
        //         })
        //     }
        //         else{
        //             item.names.map((single, ix)=> {
        //                 single.active = false
        //         })
        //     }
        // })




        // menuIconsCopy.forEach((item, i) => {
        //     if (i === index) {
        //         item.names = item.names.map((name, j) => ({
        //             ...name,
        //             active: j === indx
        //         }));
        //     } else {
        //         item.names = item.names.map(name => ({
        //             ...name,
        //             active: false
        //         }));
        //     }
        // });
        setActiveMenu(menuIconsCopy);
    };


    const renderMenu=menuIcons.map((item, index)=> (
        <div key={index}>
            <div className={classes.date}>{item.date}</div>
            {item.names.map((one, indx)=>(
                // <div className={`${one.active ? classes.activeMenuRow : classes.menuRow}`} key={indx}
                //      onClick={() => makeActive( index, indx)}>
                //     <img src={one.active ? ActiveDot: Dot} alt={""} className={classes.icon}/> {one}
                // </div>
                <div className={`${one.active ? classes.activeMenuRow : classes.menuRow}`} key={indx}
                     onClick={() => makeActive(index, indx)}>
                    <img src={one.active ? ActiveDot : Dot} alt={""} className={classes.icon}/> {one.name}
                </div>
                ))
            }
        </div>
    ))


    return(
        <div className={classes.whole}>
            <Header/>
            <main>
                <div className={classes.menu}>
                    <div className={classes.searchDiv}>
                        <div className={classes.searchBar}>
                            <img style={{cursor:"pointer"}} className={classes.iconMenu} src={Menu} alt={""}/>
                            <input className={classes.searchInput}  name="gsearch" placeholder={"Hinted search text"}/>
                            <img style={{cursor:"pointer"}} className={classes.iconSearch} src={Search} alt={""}/>
                        </div>
                    </div>
                    <div className={classes.menuBelow}>
                        <div className={classes.title}>Topics</div>
                        {renderMenu}
                    </div>
                    <button className={classes.btnStyle}>
                        <img src={Plus} alt={""} className={classes.plus}/> Add a new topic</button>
                </div>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout;