import { useState } from "react";
import { ChevronUp, ChevronDown, MapPin, DotIcon } from "lucide-react";
import { Dot } from "lucide-react";

const items = [
  {
    title: "What is React?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently.",
  },
  {
    title: "What is Tailwind?",
    content: "Tailwind is a utility-first CSS framework.",
  },
  {
    title: "What is JSX?",
    content: "JSX is a syntax extension for JavaScript.",
  },
{
    title: "What is React?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently.",
  },
  {
    title: "What is JSX?",
    content: "JSX is a syntax extension for JavaScript.",
  },
  {
    title: "What is JSX?",
    content: "JSX is a syntax extension for JavaScript.",
  },
 {
    title: "What is React?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi nesciunt eveniet quod autem in mollitia maxime dicta voluptate, ab ea nostrum, deleniti repellat excepturi temporibus sunt quae ut. React is a JS library for building UIs. It lets you build reusable components efficiently.",
  },

];

export default function AccordionList() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto mt-8">
      {items.map((item, index) => (
        <div key={index} className="border-0 border-b border-[#d8d8d8] mb-6">
          <button
            className="flex flex-row gap-5 w-full text-left px-4 py-3 font-medium justify-between"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex flex-row gap-3 items-center">
              <p className="font-medium w-16">Day-{index + 1}</p>
              <MapPin className="text-primary" />
              <span className="font-semibold">{item.title}</span>
            </div>
            <div>{openIndex === index ? <ChevronUp /> : <ChevronDown />}</div>
          </button>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="flex gap-4 pl-[6.5rem] pr-4 pb-4">
              <div className="border-l-2 border-primary w-300 -mt-3"></div>
              <div className="text-gray-700 relative dark:text-white">
                {item.content}
                <div className="absolute left-[-23px] w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
