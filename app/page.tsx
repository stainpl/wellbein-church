'use client'

import { useState } from 'react'

import Hero from './components/Hero'
import Slider from './components/Slider'
import FancyCard from './components/FancyCard'
import Footer from './components/Footer'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'


export default function Home() {

  return (
    <> 
            
      <Hero />

      <div className="py-16 bg-gray-800">
        <FancyCard
          description="We are a community dedicated to faith, fellowship, and service. Join us for worship, events, and outreach!"
          verse="Now faith is the assurance of things hoped for, the conviction of things not seen."
          citation="Hebrews 11:1"
        />
      </div>

      <Slider />

      <div className="bg-gray-100 py-10 px-6 mt-16">
        <hr className="border-t border-gray-300 mb-8" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Left Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Stay Connected</h3>
            <p className="text-sm">
              Join us as we grow together in faith, love, and service. Follow updates, share requests, and support the ministry.
            </p>
          </div>

          {/* Center Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/prayer-request" className="hover:underline">Request Prayer</a></li>
              <li><a href="/donate" className="hover:underline">Make a Donation</a></li>
              <li><a href="/community" className="hover:underline">Community</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>

            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>

            <div className="flex space-x-4 mt-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-12" />
      </div>

      <Footer />
    </>
  )
}
