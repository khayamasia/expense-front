import React from "react";
import { iconInterface } from "./iconCompInterface";

const ElipsisIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M8.09961 13.7246C8.09961 13.4262 8.21814 13.1401 8.42911 12.9291C8.64009 12.7181 8.92624 12.5996 9.22461 12.5996C9.52298 12.5996 9.80913 12.7181 10.0201 12.9291C10.2311 13.1401 10.3496 13.4262 10.3496 13.7246C10.3496 14.023 10.2311 14.3091 10.0201 14.5201C9.80913 14.7311 9.52298 14.8496 9.22461 14.8496C8.92624 14.8496 8.64009 14.7311 8.42911 14.5201C8.21814 14.3091 8.09961 14.023 8.09961 13.7246ZM8.09961 9.22461C8.09961 8.92624 8.21814 8.64009 8.42911 8.42911C8.64009 8.21814 8.92624 8.09961 9.22461 8.09961C9.52298 8.09961 9.80913 8.21814 10.0201 8.42911C10.2311 8.64009 10.3496 8.92624 10.3496 9.22461C10.3496 9.52298 10.2311 9.80913 10.0201 10.0201C9.80913 10.2311 9.52298 10.3496 9.22461 10.3496C8.92624 10.3496 8.64009 10.2311 8.42911 10.0201C8.21814 9.80913 8.09961 9.52298 8.09961 9.22461ZM8.09961 4.72461C8.09961 4.42624 8.21814 4.14009 8.42911 3.92911C8.64009 3.71814 8.92624 3.59961 9.22461 3.59961C9.52298 3.59961 9.80913 3.71814 10.0201 3.92911C10.2311 4.14009 10.3496 4.42624 10.3496 4.72461C10.3496 5.02298 10.2311 5.30913 10.0201 5.5201C9.80913 5.73108 9.52298 5.84961 9.22461 5.84961C8.92624 5.84961 8.64009 5.73108 8.42911 5.5201C8.21814 5.30913 8.09961 5.02298 8.09961 4.72461Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default ElipsisIcon;
