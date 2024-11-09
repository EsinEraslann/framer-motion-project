import React from "react";
import { motion } from "framer-motion";

function Features() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              className="text-3xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              Advanced Data Extraction Technology
            </motion.h2>
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Efficient and Accurate Scanning at Your Fingertips
            </motion.h1>
            <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Our MRZ Scanner uses cutting-edge optical character recognition
              (OCR) technology to accurately read and extract data from the
              Machine Readable Zone (MRZ) of your passport. With this powerful
              tool, you can retrieve essential travel information instantly.
            </p>
          </div>

          <div>
            <img
              alt="f1"
              className="mx-auto"
              height="400"
              src="assets/f1.png"
              style={{
                aspectRatio: "400/400",
              }}
              width="400"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              alt="f1"
              className="mx-auto"
              height="400"
              src="assets/f1.png"
              style={{
                aspectRatio: "400/400",
              }}
              width="400"
            />
          </div>

          <div>
            <motion.h2
              className="text-3xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }} 
              transition={{ duration: 1 }}
            >
              Seamless Travel History Organization
            </motion.h2>
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 1, delay: 0.2 }}
            >
              Easily Track Your Past Journeys
            </motion.h1>
            <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Our MRZ Scanner not only extracts key information from your
              passport but also automatically organizes your travel history in a
              simple, user-friendly format. Say goodbye to the hassle of keeping
              track of stamps or physical records.
            </p>
          </div>
        </div>
      </div>

      <div className="circlePosition w-full h-full bg-[#36a0d142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
        <div className="circle w-[17rem] h-[17rem] bg-[#26b9fd42] rounded-[100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <motion.h1
            className="text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false }} 
            transition={{ duration: 1 }}
          >
            Big Feature Display
          </motion.h1>
          <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="w-full">
            <img
              alt="Astro Architecture"
              className="w-full h-auto max-w-[600px] mx-auto"
              src="assets/Dashboard.png"
              style={{
                aspectRatio: "1280/720",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
