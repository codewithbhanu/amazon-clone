import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='main-footer' >
            <div className='container'>
                <div className='row'>
                    <div className='items'>
                        <h4 className='header'>Get to Know Us</h4>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Amazon Cares</li>
                            <li>Gift a Smile</li>
                        </ul>
                    </div>

                    <div className='items'>
                        <h4 >Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>

                    <div className='items'>
                        <h4 >Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>

                    <div className='items'>
                        <h4 >Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bootom' >
                    <p className='text-xs-center'>
                        &copy;{new Date().getUTCFullYear()} Developed By Bhanu Teja - All Rights Reserved
                    </p>
                </div>
            </div>
       </div>
    )
}

export default Footer
