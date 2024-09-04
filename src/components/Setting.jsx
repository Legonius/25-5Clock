import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/session";
import { decBreak, incBreak } from "../slices/break";

const Setting = ({ play }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.value);
  const bLength = useSelector((state) => state.breakLength.value);

  return (
    <section className="w-full grid grid-cols-2 text-xl sm:text-3xl">
      <div className="w-full text-center">
        <p id="break-label">Break Length</p>
        <div className="w-full flex justify-center gap-4 items-center leading-relaxed select-none">
          <button
            onClick={() => {
              if (!play) {
                dispatch(incBreak());
              }
            }}
            id="break-increment"
            className="text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faUpLong} />
          </button>
          <p id="break-length">{bLength}</p>
          <button
            onClick={() => {
              if (!play) {
                dispatch(decBreak());
              }
            }}
            id="break-decrement"
            className="text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faDownLong} />
          </button>
        </div>
      </div>
      <div className="text-center">
        <p id="session-label">Session Length</p>
        <div className="w-full flex justify-center gap-4 items-center leading-relaxed  select-none">
          <button
            onClick={() => {
              if (!play) {
                dispatch(increment());
              }
            }}
            id="session-increment"
            className="text-2xl"
          >
            <FontAwesomeIcon icon={faUpLong} />
          </button>
          <p id="session-length">{session}</p>
          <button
            onClick={() => {
              if (!play) {
                dispatch(decrement());
              }
            }}
            id="session-decrement"
            className="text-2xl"
          >
            <FontAwesomeIcon icon={faDownLong} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Setting;
