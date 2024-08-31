import React from 'react';
import { iconInterface } from './iconCompInterface';

const UsbIcon: React.FC<iconInterface> = ({ className }) => {
   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            className={`${className} fill-current`}
         >
            <path
               d="M13.12,21.75h-1.25c-2.45,0-3.67,0-4.72-.51-.93-.46-1.68-1.17-2.15-2.07-.54-1.02-.54-2.21-.54-4.57v-3c0-.64,0-1.03,.2-1.41,.17-.33,.45-.59,.79-.76,.31-.15,.63-.18,1.09-.18V4.6c0-.64,0-1.03,.2-1.41,.18-.33,.45-.59,.79-.76,.38-.19,.77-.19,1.43-.19h7.08c.68,0,1.05,0,1.43,.18,.34,.17,.61,.43,.79,.76,.2,.38,.2,.77,.2,1.41v4.65c.46,0,.78,.03,1.09,.18,.34,.17,.61,.43,.79,.76,.2,.38,.2,.77,.2,1.41v3c0,2.36,0,3.55-.54,4.57-.48,.9-1.22,1.61-2.15,2.07-1.05,.51-2.28,.51-4.72,.51ZM6.87,10.75c-.34,0-.69,0-.77,.03-.05,.03-.1,.07-.12,.11-.03,.07-.03,.39-.03,.7v3c0,2.11,0,3.17,.37,3.87,.33,.62,.84,1.11,1.49,1.43,.73,.36,1.85,.36,4.06,.36h1.25c2.21,0,3.33,0,4.06-.36,.64-.32,1.16-.81,1.49-1.43,.37-.69,.37-1.75,.37-3.87v-3c0-.31,0-.63-.03-.71-.02-.04-.06-.08-.12-.11-.08-.03-.43-.03-.77-.03H6.87Zm1.17-1.5h8.92V4.6c0-.31,0-.63-.03-.71-.02-.04-.07-.08-.12-.11-.08-.03-.43-.03-.77-.03h-7.08c-.34,0-.69,0-.77,.03-.05,.03-.1,.07-.12,.12-.03,.07-.03,.39-.03,.7v4.65Zm6.02-1.5c-.41,0-.75-.34-.75-.75v-1c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v1c0,.41-.34,.75-.75,.75Zm-3.13,0c-.41,0-.75-.34-.75-.75v-1c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v1c0,.41-.34,.75-.75,.75Z"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </>
   );
};
export default UsbIcon;