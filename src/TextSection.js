import React, { Component } from 'react'

class TextSection extends Component {
    render() {
        const { image, order } = this.props
        return (
            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className={`col-md-6 ${order}`} data-aos="fade-up" data-aos-delay="100">
                        <figure className="img-dotted-bg">
                            <img src={image} alt="Image" className="img-fluid"/>
                        </figure>
                        </div>
                        <div className="col-md-5 mr-auto" data-aos="fade-up" data-aos-delay="">
                        <h2 className="mb-4 section-title">Company History</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quos, adipisci aliquid similique
                            saepe ipsa minus maxime alias libero nam quis officia eum impedit. At quisquam reprehenderit cum hic enim?</p>
                        <p>Necessitatibus eligendi molestias similique tempore, optio nobis numquam temporibus debitis cum aspernatur,
                            eius, nihil soluta sapiente enim. </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default TextSection
