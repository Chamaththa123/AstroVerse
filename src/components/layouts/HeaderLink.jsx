import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderLink = ({ title, url }) => {
    return (
        <Link to={url} className="nav-item read-more-header text-white text-base font-bold font-inter tracking-wide">{title}</Link>

    )
}
