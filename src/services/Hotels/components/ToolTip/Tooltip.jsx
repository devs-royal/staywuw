import React, { useContext, useState } from "react";
import LanguageContext from "@/language/LanguageContext";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div className="bg-black text-white text-xs rounded py-1 px-2 absolute z-10">
          {text}
        </div>
      )}
    </div>
  );
};

const ToolTipRefundable = ({room}) => {
  const { languageData } = useContext(LanguageContext);
  const url = process.env.REACT_APP_URL_SITE + "/policy";

  return (
    <Tooltip
      text={
        room.cancellationPolicies ? (
          <React.Fragment>
            {languageData.roomsCancellations.percentage}{" "}
            {room.cancellationPolicies.from}{" "}
            {languageData.roomsCancellations.from}{" "}
            {room.cancellationPolicies.percentage}%{" "}
            {languageData.roomsCancellations.total}{" "}
            <a
              className="label-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {languageData.roomsCancellations.terms}{" "}
            </a>
          </React.Fragment>
        ) : (
          languageData.cancellationPolicies[room.rates.min.cancellationCode]
        )
      }
    >
      <p className="m-0 text-start text-bl-100 m-m text-fs-10">
        {languageData.containerModalHotel.policies}
      </p>
    </Tooltip>
  );
};

export default ToolTipRefundable;
