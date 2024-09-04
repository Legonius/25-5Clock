import React, { useState } from "react";
import Setting from "./Setting";
import Display from "./Display";

const Main = () => {
  const [play, setPlay] = useState(false);

  return (
    <main className="w-full flex flex-col gap-11 sm:gap-16">
      <Setting play={play} />
      <Display play={play} setPlay={setPlay} />
    </main>
  );
};

export default Main;
