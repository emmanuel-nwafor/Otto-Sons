import React from "react";
import { motion } from "framer-motion";

function ManageVehicles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Smooth fade-in and fade-out transition
      className="min-h-screen bg- flex flex-col"
    >
      <div>
        <div>Hello Manage Vehicles</div>{" "}
      </div>
    </motion.div>
  );
}

export default ManageVehicles;
