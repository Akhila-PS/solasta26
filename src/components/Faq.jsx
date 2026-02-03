import React from "react";

export default function Faq() {
  return (
    <div className="px-2 py-4 xl:px-20">
      <div className="flex justify-start w-full font-clash font-bold">
        <span className="text-white/50 text-[5.5rem] xl:text-[7rem]">FAQs</span>
      </div>

      <div className="flex flex-col gap-4 xl:p-2">
        <div className="font-chakra">
          <div className="mb-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
            <input
              id="collapsible1"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible1"
              className="lbl-toggle block cursor-pointer font-semibold text-white/80 text-xl md:text-2xl p-7 hover:text-white transition-colors"
            >
              What are the prerequisites for darpan?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white p-8 pt-0">
                <p>
                  All students with a valid college ID can enter to the fest for
                  free
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="mb-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
            <input
              id="collapsible2"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible2"
              className="lbl-toggle block cursor-pointer font-semibold text-white/80 text-xl md:text-2xl p-7 hover:text-white transition-colors"
            >
              Who can participate?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white p-8 pt-0">
                <p>
                  The fest is open to all engineering and polytechnic students. Some events may be specifically for CS/IT branches, but most coding challenges and workshops are open to everyone!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="mb-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
            <input
              id="collapsible3"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible3"
              className="lbl-toggle block cursor-pointer font-semibold text-white/80 text-xl md:text-2xl p-7 hover:text-white transition-colors"
            >
              Is there any hostel facilities available?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white p-8 pt-0">
                <p>
                  Unfortunately, there are no hostel facilities available for
                  the tech fest, and we apologize for any inconvenience this may
                  cause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
