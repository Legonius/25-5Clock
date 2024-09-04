import React from "react";

const Footer = () => {
  return (
    <footer className="text-base text-center flex flex-col items-center">
      <p className="text-blue-400">Design & Coded By:</p>
      <a
        href="https://github.com/Legonius"
        className="coder text-slate-500 cursor-pointer"
      >
        Zaw Min Thu
      </a>
      <a
        className="text-blue-600 underline"
        href="https://github.com/Legonius/25-5Clock.git"
        target="_blank"
      >
        code link
      </a>
      <p className="mt-5 px-2 text-sm text-slate-400">{`Note: If you can't 'Run test' click some button (e.g: arrow up & down) and run test again. Thank you <3`}</p>
    </footer>
  );
};

export default Footer;
