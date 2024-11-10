import { TbUserScan } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaPassport } from "react-icons/fa6";
import { motion } from "framer-motion";

function IconHighlights() {
  return (
    <section className="py-12 container px-4 md:px-6">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* first card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-primary rounded-lg p-8 shadow-md text-center lg:text-left container space-y-6 flex flex-col"
          >
            <div className="flex justify-center lg:justify-start">
              <TbUserScan size={32} />
            </div>
            <p className="text-lg leading-loose">
              Easily scan MRZ codes from passports and quickly retrieve key travel details. No more manual data entry—just a fast and efficient way to track your international travels.
            </p>
          </motion.div>

          {/* second card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary rounded-lg p-8 shadow-md text-center lg:text-left container space-y-6 flex flex-col"
          >
            <div className="flex justify-center lg:justify-start">
              <MdOutlinePrivacyTip size={32} />
            </div>
            <p className="text-lg leading-loose">
              We prioritize your data security with advanced encryption, ensuring that all your scanned passport information remains private and protected.
            </p>
          </motion.div>

          {/* third card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }} 
            className="bg-primary rounded-lg p-8 shadow-md text-center lg:text-left container space-y-6 flex flex-col"
          >
            <div className="flex justify-center lg:justify-start">
              <FaPassport size={32} />
            </div>
            <p className="text-lg leading-loose">
              Digitally organize and view your travel history by accessing scanned passport stamps, making it easy to see where you’ve been and when.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IconHighlights;
