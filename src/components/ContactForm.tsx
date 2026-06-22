"use client";

import React, { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [purchaseChannel, setPurchaseChannel] = useState("Shopee");
  const [orderCode, setOrderCode] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          purchaseChannel,
          orderCode,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        // Reset form
        setFullName("");
        setPhone("");
        setEmail("");
        setPurchaseChannel("Shopee");
        setOrderCode("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Có lỗi xảy ra khi gửi tin nhắn.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
      setErrorMessage("Đã xảy ra lỗi kết nối. Vui lòng kiểm tra lại mạng hoặc thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#090909] border border-muted-gray/10 p-8 md:p-12">
      <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold block">
        Send Message
      </span>
      <h2 className="font-serif text-2xl font-light tracking-[0.05em] text-ivory mb-8 uppercase">
        ATELIER CORRESPONDENCE
      </h2>

      {status === "success" && (
        <div className="bg-champagne-gold/10 border border-champagne-gold/30 text-champagne-gold p-6 mb-8 text-xs tracking-wider leading-relaxed">
          Thư liên hệ của bạn đã được gửi thành công. Đội ngũ Velixir sẽ phản hồi bạn trong thời gian sớm nhất.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-6 mb-8 text-xs tracking-wider leading-relaxed">
          {errorMessage}
        </div>
      )}

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Input */}
          <div className="flex flex-col border-b border-muted-gray/20 focus-within:border-champagne-gold transition-colors duration-300 pb-2">
            <label htmlFor="fullName" className="font-sans text-[0.55rem] tracking-[0.2em] text-muted-gray uppercase mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-transparent border-none text-xs tracking-wider text-ivory w-full focus:outline-none placeholder-muted-gray/30"
              placeholder="ENTER YOUR NAME"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col border-b border-muted-gray/20 focus-within:border-champagne-gold transition-colors duration-300 pb-2">
            <label htmlFor="email" className="font-sans text-[0.55rem] tracking-[0.2em] text-muted-gray uppercase mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-none text-xs tracking-wider text-ivory w-full focus:outline-none placeholder-muted-gray/30"
              placeholder="ENTER YOUR EMAIL"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone Input */}
          <div className="flex flex-col border-b border-muted-gray/20 focus-within:border-champagne-gold transition-colors duration-300 pb-2">
            <label htmlFor="phone" className="font-sans text-[0.55rem] tracking-[0.2em] text-muted-gray uppercase mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent border-none text-xs tracking-wider text-ivory w-full focus:outline-none placeholder-muted-gray/30"
              placeholder="ENTER YOUR PHONE NUMBER"
            />
          </div>

          {/* Purchase Channel Selection */}
          <div className="flex flex-col border-b border-muted-gray/20 focus-within:border-champagne-gold transition-colors duration-300 pb-2">
            <label htmlFor="purchaseChannel" className="font-sans text-[0.55rem] tracking-[0.2em] text-muted-gray uppercase mb-1">
              Purchase Channel *
            </label>
            <select
              id="purchaseChannel"
              value={purchaseChannel}
              onChange={(e) => setPurchaseChannel(e.target.value)}
              className="bg-transparent border-none text-xs tracking-wider text-ivory w-full focus:outline-none placeholder-muted-gray/30 cursor-pointer outline-none [&>option]:bg-primary-black [&>option]:text-ivory"
            >
              <option value="Shopee">Shopee</option>
              <option value="TikTok Shop">TikTok Shop</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Order Code Input */}
        <div className="flex flex-col border-b border-muted-gray/20 focus-within:border-champagne-gold transition-colors duration-300 pb-2">
          <label htmlFor="orderCode" className="font-sans text-[0.55rem] tracking-[0.2em] text-muted-gray uppercase mb-1">
            Order Code (Optional)
          </label>
          <input
            type="text"
            id="orderCode"
            value={orderCode}
            onChange={(e) => setOrderCode(e.target.value)}
            className="bg-transparent border-none text-xs tracking-wider text-ivory w-full focus:outline-none placeholder-muted-gray/30"
            placeholder="ENTER ORDER CODE (E.G. SP29482)"
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col border-b border-muted-gray/20 focus-within:border-champagne-gold transition-colors duration-300 pb-2">
          <label htmlFor="message" className="font-sans text-[0.55rem] tracking-[0.2em] text-muted-gray uppercase mb-1">
            Message *
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent border-none text-xs tracking-wider text-ivory w-full focus:outline-none placeholder-muted-gray/30 resize-none"
            placeholder="WRITE YOUR MESSAGE HERE"
          />
        </div>

        {/* Submit Button */}
        <Button
          variant="gold"
          type="submit"
          disabled={loading}
          className="w-full text-primary-black font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Correspondence"}
        </Button>
      </form>
    </div>
  );
}
