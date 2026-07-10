"use client";

import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/919885011157?text=Hello%20EAZYKREDIT%2C%20I%20would%20like%20to%20apply%20for%20a%20loan.";

  return (
    <>
      {/* Floating Call Button - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <a href="tel:+919885011157" aria-label="Call Loan Expert">
          <motion.div
            className="w-14 h-14 bg-primary-blue hover:bg-dark-blue text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-premium-hover relative cursor-pointer group"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(30, 136, 229, 0.5)",
                "0 0 0 12px rgba(30, 136, 229, 0)",
                "0 0 0 0 rgba(30, 136, 229, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Phone className="w-6 h-6 fill-white" />
            <span className="absolute left-16 bg-text-dark text-white px-3 py-1.5 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md">
              Call Loan Expert
            </span>
          </motion.div>
        </a>
      </div>

      {/* Floating WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <motion.div
            className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-premium-hover relative cursor-pointer group"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(37, 211, 102, 0.5)",
                "0 0 0 12px rgba(37, 211, 102, 0)",
                "0 0 0 0 rgba(37, 211, 102, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 fill-white"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.863-9.852.001-2.633-1.02-5.107-2.875-6.963C16.488 1.832 14.022.812 11.39.812 5.952.812 1.53 5.228 1.528 10.66c-.001 1.636.43 3.22 1.25 4.62l-.993 3.63 3.732-.979c1.378.75 2.919 1.157 4.54 1.159zm11.324-7.653c-.304-.152-1.802-.888-2.08-.989-.278-.101-.48-.152-.68.152-.2.304-.777.989-.953 1.19-.177.2-.354.228-.658.076-.304-.152-1.283-.473-2.443-1.507-.903-.805-1.512-1.8-1.69-2.103-.177-.304-.018-.468.13-.62.136-.136.304-.354.456-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.68-1.643-.933-2.253-.247-.59-.498-.51-.68-.52-.177-.008-.38-.01-.58-.01-.2 0-.527.076-.803.38-.278.304-1.062 1.037-1.062 2.53s1.088 2.937 1.24 3.139c.152.202 2.144 3.274 5.19 4.588.724.311 1.29.497 1.73.637.727.231 1.39.198 1.912.12.583-.088 1.802-.737 2.055-1.45.253-.715.253-1.328.177-1.45-.076-.122-.278-.202-.582-.354z" />
            </svg>
            <span className="absolute right-16 bg-text-dark text-white px-3 py-1.5 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md">
              Chat with Loan Expert
            </span>
          </motion.div>
        </a>
      </div>
    </>
  );
}
