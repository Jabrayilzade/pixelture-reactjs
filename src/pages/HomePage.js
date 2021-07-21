/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import sass from '../sass/home-page.module.sass'
import {Header} from "../components/Header"
import {Grow} from "@material-ui/core"
import ReactHtmlParser from 'react-html-parser'

import educative from '../assets/images/educative.png'
import showBtnImg from '../assets/images/show-btn.svg'
import streak from '../assets/images/streak.png'
import ligrsystems from '../assets/images/ligrsystems.png'
import bridgeProfits from '../assets/images/bridge-profits.svg'
import inquivix from '../assets/images/inguivix.svg'
import manyRequests from '../assets/images/many-requests.svg'
import buildForMars from '../assets/images/build-for-mars.svg'
import poorQuality from '../assets/images/poor-quality.svg'
import badCommunication from '../assets/images/bad-communication.svg'
import missedDeadlines from '../assets/images/missed-deadlines.svg'
import noMoreMissedDeadlines from '../assets/images/no-more-missed-deadlines.svg'
import breathTakingDesigns from '../assets/images/breath-taking-designs.svg'
import communicationThatMatters from '../assets/images/communication-that-matters.svg'
import noMoreMissedDeadlinesLogo from '../assets/images/no-more-mised-dealines-logo.svg'
import breathTakingDesignsLogo from '../assets/images/breath-taking-designs-logo.svg'
import communicationThatMattersLogo from '../assets/images/communication-that-matters-logo.svg'
import createDesignProjects from '../assets/images/create-design-projects.png'
import draftsAndRevision from '../assets/images/drafts-and-revision.png'
import completeAndDownload from '../assets/images/complete-and-download.png'
import {Footer} from "../components/Footer";

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

const SOLUTION_CARDS = [
    {
        id: 1,
        title: 'Breath-taking Designs',
        text: "All of our designers are carefully vetted and have years of experience working in the design industry.<br/><br/>You’ll get a dedicated UI Designer, Graphic Designer, Illustrator and Project Manager. With a full design team, getting breath-taking designs couldn't be any easier!",
        logo: breathTakingDesignsLogo,
        image: breathTakingDesigns
    },
    {
        id: 2,
        title: 'Communication That Matters',
        text: "With a dedicated Project Manager who cares about your success and direct live-chat access to your experienced designers, communication issues will be no more!",
        logo: communicationThatMattersLogo,
        image: communicationThatMatters
    },
    {
        id: 3,
        title: 'No More Missed Deadlines',
        text: "Need that design done on a specific date? You can trust us to deliver it on time. Once we commit to a date, we'll get it done.<br/><br/>Job requests will on average be delivered in a few business days. Simpler tasks such as graphic designs and revisions will be delivered within 24 hours.",
        logo: noMoreMissedDeadlinesLogo,
        image: noMoreMissedDeadlines
    }
]

const HOW_IT_WORKS_CARDS = [
    {
        id: 1,
        title: 'Create design projects',
        text: "Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests",
        image: createDesignProjects
    },
    {
        id: 2,
        title: 'Drafts & revisions',
        text: "You’ll receive your design within a few business days. Submit as many revisions as you want until the design is perfect!",
        image: draftsAndRevision
    },
    {
        id: 3,
        title: 'Complete & download',
        text: "Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests",
        image: completeAndDownload
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
                <div className={`${sass.section} ${sass.superhero}`}>
                    <div className={sass.section__container}>
                        <div className={sass.superhero__info}>
                            <Grow in={infoAnimations.isH1Shown} timeout={{enter: 1000, exit: 1000}}>
                                <h1 className={sass.superhero__title}>
                                    <strong>Get A Superhero Design Team<br/>To Grow Your Business</strong>
                                </h1>
                            </Grow>
                            <Grow in={infoAnimations.isH2Shown} timeout={{enter: 1500, exit: 1500}}>
                                <h2 className={sass.superhero__text}>
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
                                    onClick={() => window.open('https://www.youtube.com/watch?v=A6WEAuSvcgY')}
                                />
                            </Grow>
                        </div>
                    </div>
                </div>
                <div className={`${sass.section} ${sass.sponsors}`}>
                    <div className={sass.section__container}>
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
                <div className={`${sass.section} ${sass.workCards}`}>
                    <h1 className={sass.section__contentTitle}>
                        We get it. Reliable designers<br/><span>are hard to find</span>
                    </h1>
                    <div className={sass.section__container}>
                        {WORK_CARDS?.map(card => (
                            <div key={card.id} className={sass.workCards__card}>
                                <img className={sass.workCards__img} src={card.img} alt=""/>
                                <div className={sass.workCards__content}>
                                    <h3 className={sass.workCards__title}>
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
                <div className={`${sass.section} ${sass.makeItEasy}`}>
                    <h1 className={sass.section__contentTitle}>
                        Design doesn’t have to be hard.<br/><span>We make it easy.</span>
                    </h1>
                    <div className={sass.section__container}>
                        {SOLUTION_CARDS?.map(card => (
                            <div key={card.id} className={sass.makeItEasy__card}>
                                <div className={sass.makeItEasy__content}>
                                    <img className={sass.makeItEasy__logo} src={card.logo} alt=""/>
                                    <div className={sass.makeItEasy__title}>{card.title}</div>
                                    <div className={sass.makeItEasy__text}>{ReactHtmlParser(card.text)}</div>
                                </div>
                                <img className={sass.makeItEasy__img} src={card.image} alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${sass.section} ${sass.howItWorks}`}>

                </div>
            </div>
            <Footer/>
        </>
    )
}