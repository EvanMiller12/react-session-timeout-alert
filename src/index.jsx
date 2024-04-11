import React, { useState, useEffect } from "react";
import { clsx } from 'clsx';
import { useIdle } from "./hooks/useIdleTimer.js";
import { useOutsideClick } from "./hooks/useOutsideClick.js";
import "./index.css";

const ReactSessionTimeoutAlert = ({
  alertActionsClass="",
  alertContainerClass="",
  alertContentClass="",
  alertTimerClass="",
  alertTitle="",
  alertDescription="",
  cancelBtn = {
    class: null,
    text: "Stay Logged In",
    type: "button"
  },
  confirmBtn = {
    class: null,
    text: "Logout",
    type: "submit"
  },
  debounceTime = 500,
  handleSessionTimeout = () => alert("logging out"),
  idleTime = 5,
  modalTimeout = 20
}) => {
  const alertClass = ["rst-alert", alertContainerClass];
  const alertConClass = ["rst-alert-content", alertContentClass];
  const actionsClass = ["rst-alert-actions", alertActionsClass];
  const confirmBtnText = confirmBtn?.text || "Logout";
  const confirmBtnType = confirmBtn?.type || "submit";
  const confirmBtnClass = confirmBtn?.class || "rst-btn rst-btn-danger";
  const cancelBtnText = cancelBtn?.text || "Stay Logged In";
  const cancelBtnClass = cancelBtn?.class || "rst-btn rst-btn-primary";
  const cancelBtnType = cancelBtn?.type || "button";
  const timerClass = alertTimerClass || "rst-alert-timer";

  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleIdle = () => {
    setShowModal(true); //show modal
    setRemainingTime(modalTimeout); //set seconds as time remaining
  };

  // set idle time
  const { isIdle } = useIdle({ onIdle: handleIdle, idleTime, debounceTime });

  useEffect(() => {
    let interval;

    if (isIdle && showModal) {
      // set countdown for modal
      interval = setInterval(() => {
        setRemainingTime(
          prevRemainingTime =>
            prevRemainingTime > 0 ? prevRemainingTime - 1 : 0 //reduces the second by 1
        );
      }, 1000);
    }
    // remove countdown
    return () => {
      clearInterval(interval);
    };
  }, [isIdle, showModal]);

  // handle session timeout after timer is down to zero and user has not clicked anything
  useEffect(() => {
    if (remainingTime === 0 && showModal) {
      setShowModal(false);
      handleSessionTimeout();
    }
  }, [remainingTime, showModal, handleSessionTimeout]);

  // handles close of the countdown modal and logout
  const handleLogOut = () => {
    setShowModal(false);
    handleSessionTimeout();
  };

  const handleStayLoggedIn = () => {
    setShowModal(false);
  };

   // Execute the callback function only when anything outside of the passed ref (confirm button here) is clicked
   const insider = useOutsideClick(handleStayLoggedIn);
   
   const handleOsClick = (event) => {
    // stop event bubbling for cancel btn
     event.stopPropagation();
   };

  // convert millis to minutes and seconds
  // for remaining time display in countdown modal
  const millisToMinutesAndSeconds = millis => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <>
      {isIdle && showModal && (
        <div className={clsx(alertClass)} onClick={handleOsClick}>
          <div className={clsx(alertConClass)}>
            {alertTitle && <h2 className="rst-alert-title">{alertTitle}</h2>}
            {alertDescription && <p className="rst-alert-desc">{alertDescription}</p>}
            {/* Time remaining: */}
            <h3 className={timerClass}>
              Time remaining: {millisToMinutesAndSeconds(remainingTime * 1000)}
            </h3>
            <div className={clsx(actionsClass)}>
              <button
                type={confirmBtnType}
                className={confirmBtnClass}
                ref={insider}
                onClick={handleLogOut}
              >
                {confirmBtnText}
              </button>
              <button
                type={cancelBtnType}
                className={cancelBtnClass}
                onClick={handleStayLoggedIn}
              >
                {cancelBtnText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ReactSessionTimeoutAlert };
