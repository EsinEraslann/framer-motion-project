import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // motion'ı import et

function HeroSection() {
  return (
    <section className="w-full py-12">
      <div className="circlePosition w-full h-full bg-[#36a0d142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
        <div className="circle w-[17rem] h-[17rem] bg-[#26b9fd42] rounded-[100%]" />
      </div>
      <div className="container px-4 md:px-6 ">
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 md:gap-16 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Başlangıç durumu: opaklık yok, yukarıdan hafif kayma
            animate={{ opacity: 1, y: 0 }} // Görünür olduğunda, opaklık artar ve kayma biter
            transition={{ duration: 1.5, ease: "easeOut" }} // Yavaşça geçiş
          >
            <h1 className="text-4xl font-extrabold mb-4">
              Revolutionize Passport Travel Records Management
            </h1>
            <p className="py-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Transform the way you handle your travel history. Scan, organize,
              and access your trips with a single scan.
            </p>

            <div className="flex items-left gap-6">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </motion.div>

          <motion.img
            alt="heroimage"
            className="mx-auto"
            src="assets/mobile-phone.png"
            initial={{ opacity: 0, scale: 0.95 }} // Başlangıçta resim küçük ve opak değil
            animate={{ opacity: 1, scale: 1 }} // Görünür olduğunda resim normal boyutta ve opak
            transition={{ duration: 1.5, ease: "easeOut" }} // Yavaşça geçiş
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
