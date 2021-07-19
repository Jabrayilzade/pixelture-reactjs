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

export const HomePage = () => {
    return (
        <>
            <Header/>
            <div className={sass.root}>
                <div className={sass.superhero}>
                    <div className={sass.superhero__container}>
                        <div className={sass.superhero__info}>
                            <h1 className={sass.superhero__design}>
                                <strong>Get A Superhero Design Team<br/>To Grow Your Business</strong>
                            </h1>
                            <h2 className={sass.superhero__provide}>
                                We provide an experienced design team that works with you everyday to<br/>create
                                high-quality
                                design assets to help grow your business. Zero<br/>headaches, fixed pricing and no
                                contracts.
                            </h2>
                            <img
                                className={sass.superhero__btn}
                                src={showBtnImg}
                                alt="https://www.youtube.com/watch?v=A6WEAuSvcgY"
                            />
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
            </div>
        </>
    )
}