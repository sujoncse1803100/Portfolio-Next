import React, { useEffect } from "react";

const DownloadButton = () => {
  return (
    <button className="bg-blue-500 ps-2 pr-2 rounded">
      <a href="/Sujon_Ali_(Resume).pdf" download="Sujon_Ali_Resume.pdf">
        Download CV
      </a>
    </button>
  );
};

export default DownloadButton;
