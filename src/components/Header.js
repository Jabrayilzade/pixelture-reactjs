/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/images/logo.svg'
import sass from '../sass/header.module.sass'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Header = () => {
    return (
        <div className={sass.root}>
            <div className={sass.header}>
                <div className={sass.header__logo}>
                    <img className={sass.header__img} src={logo} alt=''/>
                    <a className={sass.header__title} href="https://github.com/Jabrayilzade" target="_blank" rel="noreferrer">
                        pixeltrue
                    </a>
                </div>
                <div className={`${sass.header__menu} ${sass.menu}`}>
                    <div className={sass.menu__list}>
                        <div className={sass.menu__item}>
                            <a>Case Studies</a>
                        </div>
                        <div className={sass.menu__item}>
                            <a>Pricing</a>
                        </div>
                        <div className={sass.menu__item}>
                            <a>Our Work</a>
                        </div>
                        <div className={sass.menu__item}>
                            <a>Our Platform</a>
                        </div>
                        <div className={`${sass.menu__item} ${sass.menu__item_more}`}>
                            <a>More <ExpandMoreIcon/></a>
                        </div>
                        <div className={sass.menu__item}>
                            <a onClick={() => window.open('https://app.pixeltrue.com/login')}>Login</a>
                        </div>
                    </div>
                    <button className={sass.menu__btn}>Schedule Demo</button>
                </div>
            </div>
        </div>
    )
}