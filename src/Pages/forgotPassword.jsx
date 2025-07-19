import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3100/api";

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState("request"); // request | verify | setPassword
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval;
    if ((step === "verify" || step === "setPassword") && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }

    if (timer === 0) {
      if (step === "verify") {
        toast.info("You can now resend OTP.");
      }
      if (step === "setPassword") {
        toast.error("Session expired. Please try again.");
        onClose(); // Auto close popup
      }
    }

    return () => clearInterval(interval);
  }, [step, timer, onClose]);

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/email/sendotp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("OTP sent to your email");
        setStep("verify");
        setTimer(120); // 2 min timer
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

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/email/verifyotp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("OTP verified successfully!");
        setStep("setPassword");
        setTimer(120); // 2 min timer for setting password
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/users/resetPassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Password reset successful!");
        onClose();
      } else {
        toast.error(data.message || "Error resetting password");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    setOtp("");
    handleSendOtp();
  };

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 dark:text-gray-100 shadow-2xl p-6 relative">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {step === "request" && "Forgot Password"}
            {step === "verify" && "Verify OTP"}
            {step === "setPassword" && "Set New Password"}
          </h2>

          {/* Step 1: Request OTP */}
          {step === "request" && (
            <>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Enter your email to receive a One-Time Password (OTP).
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
              />
              <button
                onClick={handleSendOtp}
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
                disabled={!email || loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </>
          )}

          {/* Step 2: Verify OTP */}
          {step === "verify" && (
            <>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Enter the OTP sent to <strong>{email}</strong>
              </p>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
              />
              <p className="text-sm text-gray-400 mb-2">
                OTP valid for: <strong>{timer}s</strong>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleVerifyOtp}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
                  disabled={!otp || loading}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
                <button
                  onClick={handleResendOtp}
                  className="flex-1 bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 disabled:opacity-50"
                  disabled={loading || timer > 0}
                >
                  Resend OTP
                </button>
              </div>
            </>
          )}

          {/* Step 3: Set New Password */}
          {step === "setPassword" && (
            <>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                OTP verified! Now set your new password.
              </p>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
              />
              <p className="text-sm text-gray-400 mb-2">
                Time left to set password: <strong>{timer}s</strong>
              </p>
              <button
                onClick={handleResetPassword}
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
                disabled={!newPassword || loading}
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
