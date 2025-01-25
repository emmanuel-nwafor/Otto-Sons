import React from "react";
import { motion } from "framer-motion";

function Info() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div id="services"></div>
      <div>
        <div className="text-gray-300 p-3">
          <h1 className="text-3xl p-4 font-bold">Explore</h1>
          <div className="flex items-center justify-evenly max-md:flex-col">
            {/* Card 1 */}
            <motion.div
              className="flex-col p-12 items-center justify-center bg-[#333] m-4 rounded-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <i className="bx bx-edit-alt text-3xl"></i>
              <br />
              <br />
              <div>
                <h1 className="text-2xl font-bold">Renting</h1>
                <p className="text-[17px]">
                  Experience the ease of renting with our trusted service.
                  Whether it’s for a quick trip or a long-term need, we provide
                  affordable and reliable options tailored to suit you. With
                  flexible plans and a seamless process, we make sure you’re on
                  the road without any hassle.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="p-12 items-center justify-center bg-[#333] m-4 rounded-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            >
              <i className="bx bxs-car-mechanic text-3xl"></i>
              <br />
              <br />
              <div>
                <h1 className="text-2xl font-bold">
                  Maintaining and Repairing
                </h1>
                <p className="text-[17px]">
                  Keep your car in top shape with our trusted repair and
                  maintenance services. From routine checkups to complex fixes,
                  we offer reliable, affordable solutions tailored to your
                  needs. With skilled technicians and a seamless process, your
                  car is in good hands.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="p-12 items-center justify-center bg-[#333] m-4 rounded-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            >
              <i className="bx bx-credit-card text-3xl"></i>
              <br />
              <br />
              <div>
                <h1 className="text-2xl font-bold">Buying And Selling</h1>
                <p className="text-[17px]">
                  Experience the simplicity of buying or selling your car with
                  us. Whether you’re searching for your next ride or ready to
                  sell, we provide transparent, hassle-free solutions. With fair
                  pricing and a smooth process, we ensure your experience is
                  quick and stress-free.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
