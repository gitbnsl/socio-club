import React from 'react'

import game from '../images/Game.gif'
import podcast from '../images/Podcast.gif'
import book from '../images/audiobook.gif'
import hack from '../images/Anonymous.gif'
import music from '../images/Music.gif'
import chatbot from '../images/chatbot.gif'
import crypto from '../images/Crypto.gif'
import news from '../images/News.gif'
import radio from '../images/Radio.gif'
import shop from '../images/shop2.gif'
import reading from '../images/readingbook.gif'

import '../css/Features.css'


const Features = () => {


    return (
        <>
            <div className="container p-5" id='Feature'>
                <div className="row">
                    <h1 className='text-center text-light mb-5'>Our Features</h1>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={game} className="" width={130} alt="..." />
                                <h3>Games</h3>
                                <p>Play Multiple Domain Games....</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={podcast} className="" width={130} alt="..." />
                                <h3>Podcasts</h3>
                                <p>Listen to Podcasts all over the world...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 hg bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={book} className="" width={130} alt="..." />
                                <h3>Audio books</h3>
                                <p>Very lazy to read books, the listen the books</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3  bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={hack} className="" width={130} alt="..." />
                                <h3>Anonmyous</h3>
                                <p>Any one can securly post anything as truth as , hard as anonymous</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row my-2">

                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={radio} className="" width={130} alt="..." />
                                <h3>Radio</h3>
                                <p>Listen to Multiple stations radios</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={crypto} className="" width={130} alt="..." />
                                <h3>NFT'S</h3>
                                <p>Check Nifts and Crypto Things</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 hg bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={news} className="" width={130} alt="..." />
                                <h3>News</h3>
                                <p>Daily Updated Real news</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3  bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={music} className="" width={130} alt="..." />
                                <h3>Music</h3>
                                <p>Listen to music freely , no adds</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row my-2">

                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={shop} className="" width={130} alt="..." />
                                <h3>Shopping</h3>
                                <p>Shop items...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={chatbot} className="" width={130} alt="..." />
                                <h3>Chat bot</h3>
                                <p>Lucky chat bot, which will entertain with voice and talks in chat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card hg hgmx-3 hg bg-light text-dark text-center">
                            <div className="card-body text-center">
                                <img src={reading} className="" width={130} alt="..." />
                                <h3>High End chat</h3>
                                <p>Make chat , communcations with all</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>




            </div>
        </>
    )
}

export default Features