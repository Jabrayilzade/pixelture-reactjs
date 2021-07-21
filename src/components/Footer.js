import React from 'react'
import sass from '../sass/footer.module.sass'

const LISTS = [
    {
        id: 1,
        title: 'Services',
        items: [
            {
                name: 'Out Platform',
                href: '#'
            },
            {
                name: 'Testimonials',
                href: '#'
            },
            {
                name: 'Our work',
                href: '#'
            },
            {
                name: 'Pricing',
                href: '#'
            },
            {
                name: 'Schedule A Demo',
                href: '#'
            }
        ]
    },
    {
        id: 2,
        title: 'Company',
        items: [
            {
                name: 'About Us',
                href: '#'
            },
            {
                name: 'Case Studies',
                href: '#'
            },
            {
                name: 'License',
                href: '#'
            },
            {
                name: 'FAQs',
                href: '#'
            },
            {
                name: 'Refund Policy',
                href: '#'
            }
        ]
    },
    {
        id: 3,
        title: 'Resources',
        items: [
            {
                name: 'Blog',
                href: '#'
            },
            {
                name: 'Website & App Cost Calculator',
                href: '#'
            },
            {
                name: 'Mockup Generator',
                href: '#'
            },
            {
                name: 'Free Illustrations',
                href: '#'
            },
            {
                name: 'Illustration Packs',
                href: '#'
            }
        ]
    },
    {
        id: 4,
        title: 'Contact',
        items: [
            {
                name: 'nihad@algoritma.az',
                href: '#'
            },
            {
                name: 'Dumlupinar mah / Cetin Emec cad, Bursa - Nilufer',
                href: '#'
            }
        ]
    },
]

export const Footer = () => {
    return (
        <div className={sass.root}>
            <div className={sass.footer}>
                <div className={sass.footer__ads}>
                    <p className={sass.footer__adsText}>
                        Get actionable tips on how to increase sales and conversions with design!
                    </p>
                    <button className={sass.footer__btn}>Read now 🤓</button>
                </div>
                {LISTS.map(list => (
                    <ul key={list.id} className={sass.footer__list}>
                        <li className={sass.footer__title}>{list.title}</li>
                        {list.items.map(item => (
                            <li key={item.name} className={sass.footer__item}>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className={sass.copyright}>
                All Rights Reserved NIHAD JABRAYILZADE 2021
            </div>
        </div>
    )
}
