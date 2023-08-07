import React from 'react'
import { line } from '../assets'
import { footerLinks, socialMedia2 } from "../constants";

const Contact = () => (
    <div>
        <div class="hidden md:flex mt-20 mb-20">
            <div class="ml-3 p-4 w-1/2">
                <h1 class="text-[30px] text-white font-bold font-kollektif-700 mb-4">We’d love to hear from you</h1>
                <p className="text-white text-[13px] font-kollektif-700 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>
                <div className="container mx-auto p-2">
                    <h5 className='text-[20px] text-white font-bold font-kollektif-400'>
                        <span><img src={line} alt="bluetick" className="mr-2 mb-2" /></span>
                        Our Location
                    </h5>
                    <p className="text-white text-[13px] font-kollektif-400 pt-5">Corporate Headquarters<br />
                        10 Almaden Blvd, Suite 990<br />
                        San Jose, CA 95113 USA</p>
                    <p className="text-white text-[13px] font-kollektif-400 pt-5"><span className='text-white'>Email:</span> info@attendi.com</p>
                    <p className="text-white text-[13px] font-kollektif-400 pt-2"><span className='text-white'>Phone Number:</span> +234 812 345 6789</p>
                </div>
                <div className="container mx-auto p-2 mt-4">
                    <div class="w-full flex justify-between md:flex-row-2 flex-col pt-6">
                        <div class="flex items-center mb-5">
                            <h5 className='text-[20px] text-white font-bold font-kollektif-400'>
                                <span><img src={line} alt="bluetick" className="mr-2 mb-2" /></span>
                                Follow Us
                            </h5>
                        </div>
                        <div className="mr-6 flex flex-row md:mt-0 mt-10">
                            {socialMedia2.map((social, index) => (
                                <img
                                    key={social.id}
                                    src={social.icon}
                                    alt={social.id}
                                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia2.length - 1 ? "mr-6" : "mr-0"
                                        }`}
                                    onClick={() => window.open(social.link)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 w-1/2">
                <form>
                    <div className='flex'>
                        <div class="mb-4">
                            <label class="block text-white font-bold mb-2 font-kollektif-400" for="fname">First Name</label>
                            <input type="text" id="fname" name="fname" class="w-[270px] border border-gray-400 p-2" placeholder="Enter your name" />
                        </div>
                        <div class="mb-4 ml-3">
                            <label class="block text-white font-bold mb-2 font-kollektif-400" for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" class="w-[270px] border border-gray-400 p-2" placeholder="Enter your email" />
                        </div>
                    </div>

                    <div className='flex'>
                        <div class="mb-4">
                            <label class="block text-white font-bold mb-2 font-kollektif-400" for="phone">Phone Number</label>
                            <input type="number" id="phone" name="phone" class="w-[270px] border border-gray-400 p-2" placeholder="Enter your name" />
                        </div>
                        <div class="mb-4 ml-3">
                            <label class="block text-white font-bold mb-2 font-kollektif-400" for="email">Email</label>
                            <input type="email" id="email" name="email" class="w-[270px] border border-gray-400 p-2" placeholder="Enter your email" />
                        </div>
                    </div>

                    <div className='flex'>
                        <div class="mb-4">
                            <label class="block text-white font-bold mb-2 font-kollektif-400" for="service">Services</label>
                            <input type="text" id="service" name="service" class="w-[270px] border border-gray-400 p-2" placeholder="Enter your name" />
                        </div>
                        <div class="mb-4 ml-3">
                            <label class="block text-white font-bold mb-2 font-kollektif-400" for="company">Company Name</label>
                            <input type="text" id="company" name="company" class="w-[270px] border border-gray-400 p-2" placeholder="Enter your email" />
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="block text-white font-bold mb-2 font-kollektif-400" for="message">How can we help?</label>
                        <textarea id="message" name="message" class="w-[550px] border border-gray-400 p-2 rounded" placeholder="Enter your message"></textarea>
                    </div>

                    <div class="flex flex-col justify-center">
                        <p className='text-white'>Drag and Drop or <label for="fileInput" class="text-background cursor-pointer">
                            Browse Files
                        </label> (up to 5 files of 20MB overall)</p>
                        <input id="fileInput" type="file" class="hidden" multiple accept=".jpg, .png" max="5" max-size="20000" />
                        <p id="fileCount" class="mt-2 text-gray-500"></p>
                    </div>
                    <br /><br />



                    <button className="w-[150px] py-3 px-3 text-[13px] font-bold bg-background text-white px-4 py-2 font-kollektif-400">Send Request</button>
                </form>
            </div>
        </div>

        <div className="block md:hidden w-[428px] h-[1633px] mt-4">
            <h1 class="text-[24px] w-[365px] h-[31px] text-white font-semibold font-kollektif-700 mt-8 mb-4">We’d love to hear from you</h1>
            <p className="text-white text-[16px] w-[365px] h-[127px] items-center font-kollektif-700 mt-8">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, </p>

            <form className="mt-14">
                <div class="mb-4">
                    <label class="block text-white mb-2 font-kollektif-400" for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" class="w-[355px] h-[50px] border border-gray-400 p-2" placeholder="Enter your name" />
                </div>
                <div class="mb-4">
                    <label class="block text-white mb-2 font-kollektif-400" for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" class="w-[355px] h-[50px] border border-gray-400 p-2" placeholder="Enter your email" />
                </div>

                <div class="mb-4">
                    <label class="block text-white mb-2 font-kollektif-400" for="phone">Phone Number</label>
                    <input type="number" id="phone" name="phone" class="w-[355px] h-[50px] border border-gray-400 p-2" placeholder="Enter your name" />
                </div>
                <div class="mb-4">
                    <label class="block text-white mb-2 font-kollektif-400" for="email">Email</label>
                    <input type="email" id="email" name="email" class="w-[355px] h-[50px] border border-gray-400 p-2" placeholder="Enter your email" />
                </div>

                <div class="mb-4">
                    <label class="block text-white mb-2 font-kollektif-400" for="service">Services</label>
                    <input type="text" id="service" name="service" class="w-[355px] h-[50px] border border-gray-400 p-2" placeholder="Enter your name" />
                </div>
                <div class="mb-4">
                    <label class="block text-white mb-2 font-kollektif-400" for="company">Company Name</label>
                    <input type="text" id="company" name="company" class="w-[355px] h-[50px] border border-gray-400 p-2" placeholder="Enter your email" />
                </div>

                <div class="mb-4">
                    <label class="block text-white mb-2 font-kollektif-400" for="message">How can we help?</label>
                    <textarea id="message" name="message" class="w-[355px] h-[163px] border border-gray-400 p-2 rounded" placeholder="Enter your message"></textarea>
                </div>

                <div class="flex flex-col justify-center mb-10">
                    <p className='w-[355px] h-[20px] text-white'>Drag and Drop or <label for="fileInput" class="text-background cursor-pointer">
                        Browse Files
                    </label></p>
                    <input id="fileInput" type="file" class="hidden" multiple accept=".jpg, .png" max="5" max-size="20000" />
                    <p id="fileCount" class="mt-2 text-gray-500"></p>
                </div>



                <button className="w-[355px] h-[50px] text-[13px] bg-background text-white font-semibold font-kollektif-400">Send Request</button>
            </form>

            <div className="container mx-auto mt-16">
                <h5 className='text-[20px] text-white font-bold font-kollektif-400'>
                    <span><img src={line} alt="bluetick" className="mr-2 mb-2" /></span>
                    Our Location
                </h5>
                <p className="text-white text-[13px] font-kollektif-400 pt-5">Corporate Headquarters<br />
                    10 Almaden Blvd, Suite 990<br />
                    San Jose, CA 95113 USA</p>
                <p className="text-white text-[13px] font-kollektif-400 pt-5">Email:info@attendi.com</p>
                <p className="text-white text-[13px] font-kollektif-400 pt-2">Phone Number:+234 812 345 6789</p>
            </div>

            <div className="container mx-auto p-2 mt-4">
                <div class="w-full flex justify-between md:flex-row-2 flex-col pt-6">
                    <div class="flex items-center mb-5">
                        <h5 className='text-[20px] text-white font-bold font-kollektif-400'>
                            <span><img src={line} alt="bluetick" className="mr-2 mb-2" /></span>
                            Follow Us
                        </h5>
                    </div>
                    <div className="mr-6 flex flex-row mt-5">
                        {socialMedia2.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia2.length - 1 ? "mr-6" : "mr-0"
                                    }`}
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </div>

)

export default Contact