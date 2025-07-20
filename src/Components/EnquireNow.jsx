import { Dialog } from "@headlessui/react";
import { useState } from "react";
import ContactForm from "./contactForm";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import CreatePackage from "./CreatePackage";

export default function EnquireNow() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, user } = useAuth();

  const isAdmin = isLoggedIn && user?.role === "admin";

    
  return (
    <div className="bottom-[5%] right-[2%] fixed">
      <main>
        <button onClick={() => setIsOpen(true)}>
          <div>
            <div>
              {user ? (
                user.role === "admin" ? (
                  <span>Create Package</span>
                ) : (
                  <span>Enquire Now</span>
                )
              ) : (
                <span>Enquire Now</span>
              )}
            </div>
          </div>
        </button>
      </main>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        {/* Dialog Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl max-h-[80vh] bg-white rounded p-6 shadow-lg overflow-auto dark:bg-bg-dark dark:text-text-dark">
            { !isAdmin ? <ContactForm onClose={() => setIsOpen(false)} /> : <CreatePackage onClose={() => setIsOpen(false)}/>}
            
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
