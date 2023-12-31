import contactUs from '../../LottiReactFile/contactUs.json'
import Lottie from 'lottie-react'
import './ContactUs.css';

const CotactUs = () => {
    return (
        <div className='my-10 pb-10 overflow-x-hidden'>

            <h2 className='headlins-style text-center font-mono text-3xl font-bold  ' >Contact Us</h2>

            <div className='grid md:grid-cols-2'>
                <div data-aos="fade-right" className="contact-anim ps-6">
                    <Lottie animationData={contactUs} ></Lottie>
                </div>

                <div data-aos="fade-left" className="contact-form  flex justify-end md:ps-20 ">
                    <div className="container ">
                        <form id="contactus" action="" method="post">
                            <h3>Contact us form</h3>

                            <fieldset>
                                <input placeholder="name" type="text"  required  />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Email Address" type="email" required />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Phone Number" type="tel"  required />
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Type your message here..." required></textarea>
                            </fieldset>
                            <fieldset>
                                <button name="submit" type="submit" id="contactus-submit" data-submit="...Sending">Send Now</button>
                            </fieldset>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CotactUs;