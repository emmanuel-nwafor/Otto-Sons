import React from "react";
import { motion } from "framer-motion";
import AdminHeader from "./AdminHeader";
import AdminPurchaseHistory from "./AdminPurchaseHistory";
import AdminBookingHistory from "./AdminBookingHistory";

const AdminBookingDetails = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Smooth fade-in and fade-out transition
        className=" "
      >
        <AdminHeader />
        <AdminPurchaseHistory />
        <div className="p-6">
          <AdminBookingHistory />
        </div>
      </motion.div>
    </>
  );
};

export default AdminBookingDetails;
