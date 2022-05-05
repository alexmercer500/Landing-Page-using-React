import React from 'react'
import currenctIMG from './/images/image-currency.jpg'
import restaurentIMG from './/images/image-restaurant.jpg'
import planeIMG from './/images/image-plane.jpg'
import confettiIMG from './/images/image-confetti.jpg'

export default function Articles() {
    return (
        <>
            <div className='articles-heading'>
                <h1 className='art-heading-style'>Latest Articles</h1>
                <div className='article-box'>
                    <div className='art-section'>
                        <img src={currenctIMG} alt='Currency' />
                        <h1>By Claire Robinson</h1>
                        <h2>Receive money in any currency with no fees</h2>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                            forced to only receive money in a single …</p>
                    </div>

                    <div className='art-section'>
                        <img src={restaurentIMG} alt='Restaurent' />
                        <h1>By Wilson Hutton</h1>
                        <h2>Treat yourself without worrying about money</h2>
                        <p>Our simple budgeting feature allows you to separate out your spending and set
                            realistic limits each month. That means you …
                        </p>
                    </div>

                    <div className='art-section'>
                        <img src={planeIMG} alt='Plane' />
                        <h1>By Wilson Hutton</h1>
                        <h2>Take your Easybank card wherever you go</h2>
                        <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                            while you’re abroad. We’ll even show you …</p>
                    </div>

                    <div className='art-section'>
                        <img src={confettiIMG} alt='confetti' />
                        <h1>By Claire Robinson</h1>
                        <h2>Our invite-only Beta accounts are now live!</h2>
                        <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                            It’s easy to request an invite through the site ...</p>
                    </div>

                </div>
            </div>
        </>
    )
}
