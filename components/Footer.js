'use client';

import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center font-monospace mt-4">
            <hr />

            <p><Link href="/feedback" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4">Give a Feedback</Link></p>

            <p className='text-center mt-3 my-0'>Made with ❤️ by SC&trade;</p>
            <span>{`${String.fromCodePoint(0x00A9)}`} 2022-26</span>

        </footer>
    )
}

export default Footer 