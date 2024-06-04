import React, { useState } from "react";
import NotificationType from "./NotificationType";

export default function BtnShowNotification() {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="p-5">
      <button
        onClick={handleShowNotification}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Mostrar Notificación succes
      </button>
      {showNotification && (
        // <DoneNotification
        //   type="success"
        //   title="Success"
        //   message="Operation completed successfully."
        // />
        // <DoneNotification
        //   type="warning"
        //   title="Warning"
        //   message="This is a warning message."
        // />
        <NotificationType type="error" title="Error" message="An error occurred." />
      )}
    </div>
  );
}
