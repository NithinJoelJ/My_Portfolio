import Logos from './Logos'
import python from './icons/python.png'
import Ae from './icons/Ae.png'
import Figma from './icons/Figma.png'
import Git from './icons/git.png'
import js from './icons/js.png'
import ps from './icons/ps.png'
import React from './icons/React.png'
import vs from './icons/vs.png'

function Cards(){

    const cards =[
        {
            img: python,
            title : "Python"
        },
        {
            img: js,
            title : "Javascript"
        },
        {
            img: React,
            title : "React"
        },
        {
            img: vs,
            title : "Visual Studio"
        },
        {
            img: Git,
            title : "Git & Github"
        },
        {
            img: Figma,
            title : "Figma"
        },
        {
            img: ps,
            title : "Photoshop"
        },
        {
            img: Ae,
            title : "Aftereffects"
        }
    ]

    const cardsmap = cards.map((images, index)=>
    <Logos key = {index} img = {images.img} title = {images.title}/>
    )
    return(
        <>{cardsmap}</>
    );
}

export default Cards;