/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import sass from '../sass/home-page.module.sass'
import showBtnImg from '../assets/images/show-btn.svg'
import {Header} from "../components/Header"
import educative from '../assets/images/educative.png'
import streak from '../assets/images/streak.png'
import ligrsystems from '../assets/images/ligrsystems.png'
import bridgeProfits from '../assets/images/bridge-profits.svg'
import inquivix from '../assets/images/inguivix.svg'
import manyRequests from '../assets/images/many-requests.svg'
import buildForMars from '../assets/images/build-for-mars.svg'
import poorQuality from '../assets/images/poor-quality.svg'
import badCommunication from '../assets/images/bad-communication.svg'
import missedDeadlines from '../assets/images/missed-deadlines.svg'
import {Grow} from "@material-ui/core";

const SPONSORS = [
    {
        id: 1,
        logo: educative,
        href: 'https://www.educative.io/'

    },
    {
        id: 2,
        logo: streak,
        href: 'https://www.streak.com/'
    },
    {
        id: 3,
        logo: ligrsystems,
        href: 'https://www.ligrsystems.com/'
    },
    {
        id: 4,
        logo: bridgeProfits,
        href: 'http://bridgeprofits.com/'
    },
    {
        id: 5,
        logo: inquivix,
        href: 'https://www.inquivix.com/'
    },
    {
        id: 6,
        logo: manyRequests,
        href: 'https://manyrequests.com/'
    },
    {
        id: 7,
        logo: buildForMars,
        href: 'https://builtformars.com/'
    },
]

const WORK_CARDS = [
    {
        id: 1,
        img: poorQuality,
        title: 'Poor Quality',
        text: 'You’re tired of the guessing game to find the right designer.'
    },
    {
        id: 2,
        img: badCommunication,
        title: 'Bad Communication',
        text: 'You’re fed up with having to explain yourself multiple times.'
    },
    {
        id: 3,
        img: missedDeadlines,
        title: 'Missed deadlines',
        text: 'You lose hope as deadlines are missed over and over again.'
    }
]

export const HomePage = () => {

    const [infoAnimations, setInfoAnimations] = React.useState({
        isH1Shown: false, isH2Shown: false, isImgShown: false
    })

    React.useEffect(() => {
        setInfoAnimations({isH1Shown: true, isH2Shown: true, isImgShown: true})

        return () => setInfoAnimations(null)
    }, [])


    return (
        <>
            <Header/>
            <div className={sass.root}>
                <div className={sass.superhero}>
                    <div className={sass.superhero__container}>
                        <div className={sass.superhero__info}>
                            <Grow in={infoAnimations.isH1Shown} timeout={{enter: 1000, exit: 1000}}>
                                <h1 className={sass.superhero__design}>
                                    <strong>Get A Superhero Design Team<br/>To Grow Your Business</strong>
                                </h1>
                            </Grow>
                            <Grow in={infoAnimations.isH2Shown} timeout={{enter: 1500, exit: 1500}}>
                                <h2 className={sass.superhero__provide}>
                                    We provide an experienced design team that works with you everyday to<br/>create
                                    high-quality
                                    design assets to help grow your business. Zero<br/>headaches, fixed pricing and no
                                    contracts.
                                </h2>
                            </Grow>
                            <Grow in={infoAnimations.isImgShown} timeout={{enter: 2000, exit: 2000}}>
                                <img
                                    className={sass.superhero__btn}
                                    src={showBtnImg}
                                    alt="https://www.youtube.com/watch?v=A6WEAuSvcgY"
                                />
                            </Grow>
                        </div>
                    </div>
                </div>
                <div className={sass.sponsors}>
                    <div className={sass.sponsors__container}>
                        {SPONSORS?.map(sponsor => (
                            <a
                                key={sponsor.id}
                                className={sass.sponsors__item}
                                href={sponsor.href}
                                rel="noreferrer"
                                target="_blank"
                                style={{backgroundImage: `url(${sponsor.logo})`}}
                            />
                        ))}
                    </div>
                </div>
                <div className={sass.workCards}>
                    <h1 className={sass.workCards__title}>We get it. Reliable
                        designers<br/><span>are hard to find</span></h1>
                    <div className={sass.workCards__container}>
                        {WORK_CARDS?.map(card => (
                            <div key={card.id} className={sass.workCards__card}>
                                <img className={sass.workCards__img} src={card.img} alt=""/>
                                <div className={sass.workCards__content}>
                                    <h3 className={sass.workCards__label}>
                                        {card.title}
                                    </h3>
                                    <p className={sass.workCards__text}>
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}