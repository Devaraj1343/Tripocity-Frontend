import { Dialog } from "@headlessui/react";
import { useState } from "react";
import ContactForm from "./contactForm";

export default function EnquireNow() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className=" bottom-[5%] right-[2%]  fixed" >
       <main>
      <button onClick={() => setIsOpen(true)}>
        <div>
          <span>Enquire Now</span>
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
            <ContactForm onClose={() => setIsOpen(false)}/>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
