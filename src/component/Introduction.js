import React from 'react'
import intoImg from './/images/image-mockups.png'

export default function Introduction() {
    return (
        <>
            <div className='intro'>
                <div className='intro-main'>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.</p>
                    <button className='btn'> Request Invite</button>
                </div>
                <div className='intro-hero'>
                    <img src={intoImg} alt='introduction ' />
                </div>
            </div>
        </>
    )
}
