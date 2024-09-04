import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../slices/session";
import { resetBreak } from "../slices/break";

const Display = ({ play, setPlay }) => {
  const session = useSelector((state) => state.session.value);
  const bLength = useSelector((state) => state.breakLength.value);
  const dispatch = useDispatch();

  //min & sec setup
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);

  const [lengthName, setLengthName] = useState("Session");

  const audio = document.getElementById("beep");

  // handle reset button
  const handleReset = () => {
    setPlay(false);
    dispatch(reset());
    dispatch(resetBreak());
    setMin(session);
    setSec(0);
    audio.pause();
    audio.currentTime = 0;
  };
  //set timer according to name of length
  const setTimer = (length) => {
    if (length === "Session") {
      setMin(session);
    } else {
      setMin(bLength);
    }
    setLengthName(length);
    setSec(0);
  };
  // sec countdown function
  const countdown = () => {
    if (sec > 0) {
      setSec(sec - 1);
      return;
    } else {
      if (min > 0) {
        setMin(min - 1);
        setSec(59);
      } else {
        setTimer(lengthName === "Session" ? "Break" : "Session");
      }
    }
    if (min === 0 && sec === 0) {
      audio.currentLength = 0;
      audio.play();
    }
  };

  //min & sec dynamic with setInterval & clearence
  useEffect(() => {
    let intervalId;
    if (play) {
      intervalId = setInterval(() => {
        countdown();
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [play, sec, min]);

  // set Min & Sec on first load & whenever session is changed
  useEffect(() => {
    setTimer("Session");
  }, [session]);

  //Format time to show always 2 digits
  const formattedTime = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;

  return (
    <section className="w-full text-center gap-5 sm:gap-8 flex flex-col items-center">
      <div
        className={`border-2  py-3 px-10 ${
          play ? "border-green-500" : "border-gray-600"
        } rounded-2xl sm:text-5xl ${min ? "" : "text-red-500"}`}
      >
        <div id="timer-label" className="text-xl">
          {lengthName}
        </div>

        <div id="time-left">{formattedTime}</div>
      </div>
      <div className="flex gap-9">
        <button id="start_stop" onClick={() => setPlay(!play)}>
          <FontAwesomeIcon icon={play ? faPause : faPlay} />
        </button>
        <button id="reset" onClick={handleReset}>
          <FontAwesomeIcon icon={faRepeat} />
        </button>
      </div>
      <audio
        id="beep"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
        hidden
      />
    </section>
  );
};

export default Display;
