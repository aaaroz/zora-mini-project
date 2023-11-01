import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 h-auto place-items-center p-4 md:p-14 bg-neutral-900">
      <div className="w-full p-8">
        <h1 className="text-center md:text-left text-md font-bold uppercase px-4 pb-8 mb-5 md:text-2xl text-white">
          Contact us!
        </h1>
        <form>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b-2 border-blue-gray-50 text-blue-gray-50 border-x-0 border-t-0 bg-transparent ring-transparent focus:ring-0 focus:border-neutral-400"
            />
          </div>
          <div className="mb-9">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b-2 border-blue-gray-50 text-blue-gray-50 border-x-0 border-t-0 bg-transparent ring-transparent focus:ring-0 focus:ring-transparent focus:border-neutral-400"
            />
          </div>
          <div className="mb-6">
            <textarea
              type="textarea"
              placeholder="Write Something..."
              className="w-full border-2 border-blue-gray-50 text-blue-gray-50 bg-transparent ring-transparent focus:ring-0  focus:border-neutral-400"
            />
          </div>
          <div className=" justify-end">
            <button className="bg-blue-gray-50 w-full md:w-28 py-2 font-medium">
              Send
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-center md:text-left text-md font-bold uppercase px-4 pb-2 mb-5 md:text-2xl text-white">
          Trunojoyo, Bandung
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.892831130417!2d107.61074867427602!3d-6.903417767558446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e649b62a39bd%3A0x77c9993f555f4f32!2sJl.%20Trunojoyo%2C%20Citarum%2C%20Kec.%20Bandung%20Wetan%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040115!5e0!3m2!1sid!2sid!4v1698842040356!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[25rem]"
        />
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="m-5 text-white">
            <div className="flex gap-3 mb-3 justify-center lg:justify-start">
              <span className="text-xl md:text-2xl">
                <AiFillPhone />
              </span>
              <p className="text-md">+62 812 1329 4383</p>
            </div>
            <div className="flex gap-3 mb-3 justify-center lg:justify-start">
              <span className="text-xl md:text-2xl">
                <MdEmail />
              </span>
              <p className="text-md">zorra.ecommerce@gmail.com</p>
            </div>
          </div>
          <div className="m-5 mt-0 xl:mt-5 text-center lg:text-left">
            <ul className="text-white">
              <span>Opened</span>
              <li className="text-sm">
                <span>Mon - Fri:</span> 9 am - 8 pm
              </li>
              <li className="text-sm">
                <span>Sat:</span> 10 am - 5 pm
              </li>
              <li className="text-sm">
                <span>Sun:</span> 10 am - 3 pm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
