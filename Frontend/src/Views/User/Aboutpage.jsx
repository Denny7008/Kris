import React from "react";
import Navbar from "./Usernavbar";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-[#E3EDF9]">
      <Navbar />
      <div className="p-6 w-[90vw] mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Kris Consultancy
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.img
            src="https://t3.ftcdn.net/jpg/02/73/84/44/240_F_273844408_u9Q1vMLPwzzAqVuk248d0Q9Geh4tmcKW.jpg"
            alt="Our Office"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-lg leading-relaxed">
            At Kris Consultancy, we specialize in providing top-tier business
            solutions to help companies thrive in an ever-changing market. Our
            team of experts brings years of experience in business strategy,
            market analysis, and operational efficiency to deliver the best
            results for our clients. We believe in innovation, integrity, and
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <p className="text-lg leading-relaxed">
            Founded with a vision to transform businesses, Kris Consultancy has
            been at the forefront of industry trends, offering insights and
            strategies that drive success. Our client-first approach ensures
            personalized solutions tailored to the unique needs of each
            business.
          </p>
          <motion.img
            src="https://t4.ftcdn.net/jpg/01/64/97/21/240_F_164972173_5IIg94STET0nx4LMtAmQ3Qt8Zwvst53p.jpg"
            alt="Our Team"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
          >
            <motion.img
              src={`https://source.unsplash.com/600x400/?business,team,${index}`}
              alt={`Detail ${index + 1}`}
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <p className="text-lg leading-relaxed">
              Our expertise in {`Detail ${index + 1}`} ensures unparalleled
              growth opportunities for our clients. We stay ahead of trends and
              help businesses adapt with confidence and agility.
            </p>
          </div>
        ))}

        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-blue-800">
            Why Choose Us?
          </h2>
          <p className="text-lg mt-4">
            Our team is dedicated to delivering exceptional consultancy
            services, ensuring our clients stay ahead in their respective
            industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
