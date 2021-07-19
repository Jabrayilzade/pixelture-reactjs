/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/images/logo.svg'
import sass from '../sass/header.module.sass'
import {makeStyles} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
    btnDemo: {
        width: 200,
        height: 50,
        borderRadius: 45,
        border: '1px #fc687b',
        transition: 'color .2s, box-shadow .2s, background-color .2s',

        '&:hover': {
            background: ' $colorBaseBrandRed',
            boxShadow: '0 0 0 6px rgb(253 87 108 / 25%)',
        }
    }
}))

export const Header = () => {
    const muiStyles = useStyles()

    return (
        <div className={sass.root}>
            <div className={sass.header}>
                <div className={sass.header__logo}>
                    <img className={sass.header__img} src={logo} alt=''/>
                    <a className={sass.header__title} href="https://github.com/Jabrayilzade" target="_blank">
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
                            <a>Login</a>
                        </div>
                    </div>
                    <button className={sass.menu__btn}>Schedule Demo</button>
                </div>
            </div>
        </div>
    )
}