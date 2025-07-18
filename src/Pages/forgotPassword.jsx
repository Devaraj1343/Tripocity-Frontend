import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3100/api";

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState("request"); // request | verify
  const [timer, setTimer] = useState(120);
  const [loading, setLoading] = useState(false);

  // Countdown timer
  useEffect(() => {
    let interval;
    if (step === "verify" && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/users/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("OTP sent to your email");
        setStep("verify");
        setTimer(120); // Reset timer for verification
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndReset = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/users/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password reset successful!");
        onClose(); // Close popup
      } else {
        toast.error(data.message || "Invalid OTP or error resetting password");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      {/* Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white dark:bg-bg-dark dark:text-text-dark shadow-2xl p-6 relative">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {step === "request" ? "Forgot Password" : "Reset Password"}
          </h2>

          {/* Phase 1: Request OTP */}
          {step === "request" && (
            <>
              <p className="mb-2 text-sm text-gray-500">
                Enter your email to receive a One-Time Password (OTP).
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-bg-dark dark:text-text-dark"
              />
              <button
                onClick={handleSendOtp}
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
                disabled={!email || loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </>
          )}

          {/* Phase 2: Verify OTP + Reset Password */}
          {step === "verify" && (
            <>
              <p className="mb-2 text-sm text-gray-500">
                Enter the OTP sent to <strong>{email}</strong>
              </p>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-bg-dark dark:text-text-dark"
              />

              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-bg-dark dark:text-text-dark"
              />

              {/* Timer */}
              {timer > 0 ? (
                <p className="text-sm text-gray-400 mb-2">
                  OTP valid for: <strong>{timer}s</strong>
                </p>
              ) : (
                <p className="text-sm text-red-500 mb-2">
                  OTP expired.{" "}
                  <button
                    onClick={() => {
                      setStep("request");
                      setOtp("");
                    }}
                    className="underline text-primary"
                  >
                    Resend?
                  </button>
                </p>
              )}

              <button
                onClick={handleVerifyAndReset}
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
                disabled={!otp || !newPassword || loading || timer <= 0}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
