// src/components/Popup.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Popup = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.tasks.popupMessage);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch({ type: 'CLEAR_POPUP_MESSAGE' });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div className="popup">
      {message}
    </div>
  );
};

export default Popup;
