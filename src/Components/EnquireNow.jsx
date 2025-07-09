import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function EnquireNow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10 absolute bottom-[2%] right-[1%]" >
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary text-white rounded"
      >
        Enquire Now
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        {/* Dialog Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded p-6 shadow-lg"></Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
