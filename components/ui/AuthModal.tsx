"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Pencil } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, authMode, authStep, setAuthStep, phoneNumber, setPhoneNumber, login } = useUserStore();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  if (!isAuthModalOpen) return null;

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      if (authMode === "login") {
        setAuthStep("otp"); // Login only needs phone -> OTP -> Done
      } else {
        setAuthStep("otp"); // Signup needs phone -> OTP -> Details
      }
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join("").length === 6) {
      if (authMode === "login") {
        login(); // Direct login after OTP
      } else {
        setAuthStep("details"); // Go to profile details for signup
      }
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeAuthModal}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white w-full max-w-[480px] rounded-2xl shadow-2xl p-8 md:p-10 z-10 overflow-hidden"
        >
          <button 
            onClick={closeAuthModal}
            className="absolute top-6 right-6 text-[#8A8982] hover:text-[#111111] transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          <div className="flex justify-center mb-8">
            <span className="text-xl tracking-[0.25em] font-medium uppercase text-[#111111]">Forma</span>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: PHONE INPUT */}
            {authStep === "phone" && (
              <motion.div
                key="phone"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-medium tracking-tight text-[#111111] mb-2">
                    {authMode === "signup" ? "Sign up to get started" : "Log in to your account"}
                  </h2>
                  <p className="text-[14px] text-[#686761]">Get personalised picks & faster checkout</p>
                </div>

                <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-6">
                  <div className="relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-[#686761]">Enter 10-digit mobile number</label>
                    <div className="flex items-center border border-[#DDDAD3] rounded-lg focus-within:border-[#111111] focus-within:ring-1 focus-within:ring-[#111111] transition-all overflow-hidden">
                      <span className="pl-4 pr-3 py-3.5 text-[#111111] text-[15px] border-r border-[#DDDAD3] bg-[#F7F6F2]">+91</span>
                      <input 
                        type="tel"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-4 py-3.5 text-[15px] text-[#111111] focus:outline-none"
                        placeholder="Mobile Number"
                        autoFocus
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={phoneNumber.length !== 10}
                    className="w-full py-4 rounded-full text-[15px] font-medium transition-colors disabled:bg-[#F1F0EB] disabled:text-[#8A8982] bg-[#111111] text-white hover:bg-[#C6532D]"
                  >
                    Get OTP
                  </button>

                  <p className="text-center text-[12px] text-[#8A8982] mt-4 px-4 leading-relaxed">
                    By entering this site, you agree to the <br/>
                    <a href="#" className="text-[#111111] underline font-medium hover:text-[#C6532D]">Terms & Conditions</a> and <a href="#" className="text-[#111111] underline font-medium hover:text-[#C6532D]">Privacy Policy</a>
                  </p>
                </form>
              </motion.div>
            )}

            {/* STEP 2: OTP VERIFICATION */}
            {authStep === "otp" && (
              <motion.div
                key="otp"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-medium tracking-tight text-[#111111] mb-2">Enter OTP</h2>
                  <div className="flex items-center justify-center gap-2 text-[14px] text-[#686761]">
                    <span>Sent to +91 {phoneNumber}</span>
                    <button onClick={() => setAuthStep("phone")} className="hover:text-[#111111]"><Pencil size={12} /></button>
                  </div>
                </div>

                <form onSubmit={handleOtpSubmit} className="flex flex-col gap-8">
                  <div className="flex justify-between gap-2">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const newOtp = [...otp];
                          newOtp[idx] = e.target.value.replace(/\D/g, '');
                          setOtp(newOtp);
                        }}
                        className="w-12 h-14 border border-[#DDDAD3] rounded-lg text-center text-xl font-medium focus:border-[#111111] focus:ring-1 focus:ring-[#111111] outline-none transition-all"
                      />
                    ))}
                  </div>

                  <div className="text-center">
                    <button type="button" className="text-[13px] text-[#686761] hover:text-[#111111] font-medium">
                      Resend in 00:43
                    </button>
                  </div>

                  <button 
                    type="submit"
                    disabled={otp.join("").length !== 6}
                    className="w-full py-4 rounded-full text-[15px] font-medium transition-colors disabled:bg-[#F1F0EB] disabled:text-[#8A8982] bg-[#111111] text-white hover:bg-[#C6532D]"
                  >
                    Verify OTP
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 3: USER DETAILS (Sign up only) */}
            {authStep === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-[16px] font-medium tracking-tight text-[#111111] mb-2">A few details will help us personalise your experience.</h2>
                </div>

                <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-5">
                  <div className="relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-[#686761]">First Name*</label>
                    <input type="text" required className="w-full px-4 py-3.5 border border-[#DDDAD3] rounded-lg text-[15px] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all" />
                  </div>
                  
                  <div className="relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-[#686761]">Last Name*</label>
                    <input type="text" required className="w-full px-4 py-3.5 border border-[#DDDAD3] rounded-lg text-[15px] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all" />
                  </div>

                  <div className="relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-[#686761]">Shopping Preference*</label>
                    <select required className="w-full px-4 py-3.5 border border-[#DDDAD3] rounded-lg text-[15px] bg-white focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all appearance-none cursor-pointer">
                      <option value="" disabled selected></option>
                      <option value="mens">Men's</option>
                      <option value="womens">Women's</option>
                      <option value="unisex">Unisex</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-[#686761]">Date of Birth (DD-MM-YYYY)*</label>
                    <input type="text" placeholder="DD-MM-YYYY" required className="w-full px-4 py-3.5 border border-[#DDDAD3] rounded-lg text-[15px] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all" />
                  </div>

                  <div className="relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-[#686761]">Email Address*</label>
                    <input type="email" required className="w-full px-4 py-3.5 border border-[#DDDAD3] rounded-lg text-[15px] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all" />
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-4 py-4 rounded-full text-[15px] font-medium transition-colors bg-[#111111] text-white hover:bg-[#C6532D]"
                  >
                    Save & Continue
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}