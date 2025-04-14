import { TSVGComponent } from '@/shared/types/components';

const WebstormIcon: TSVGComponent = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <defs>
        <clipPath id="clip25_334">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
        <linearGradient
          id="paint_linear_25_339_0"
          x1="7.155"
          x2="12.331"
          y1="0.416"
          y2="19.048"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.28" stopColor="#00CDD7"></stop>
          <stop offset="0.94" stopColor="#2086D7"></stop>
        </linearGradient>
        <linearGradient
          id="paint_linear_25_340_0"
          x1="8.761"
          x2="17.517"
          y1="2.789"
          y2="15.628"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.14" stopColor="#FFF045"></stop>
          <stop offset="0.37" stopColor="#00CDD7"></stop>
        </linearGradient>
        <linearGradient
          id="paint_linear_25_341_0"
          x1="462.84"
          x2="492.28"
          y1="2.812"
          y2="2.812"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.28" stopColor="#00CDD7"></stop>
          <stop offset="0.94" stopColor="#2086D7"></stop>
        </linearGradient>
      </defs>
      <g fillOpacity="1" clipPath="url(#clip25_334)">
        <path
          fill="url(#paint_linear_25_339_0)"
          fillRule="nonzero"
          d="M2.68 18.06L0 2.09 5 .03 8.15 1.9 11.09.34l6.06 2.34L13.75 20 2.68 18.06z"
        ></path>
        <path
          fill="url(#paint_linear_25_340_0)"
          fillRule="nonzero"
          d="M20 6.78L17.4.4 12.75 0 5.5 6.93l1.93 8.97 3.66 2.53L20 13.15l-2.19-4.09L20 6.78z"
        ></path>
        <path
          fill="url(#paint_linear_25_341_0)"
          fillRule="nonzero"
          d="M16 5.81l1.81 3.25L20 6.78l-1.6-3.97-2.4 3z"
        ></path>
        <path fill="#000" d="M3.75 3.75H16.25V16.25H3.75z"></path>
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M4.93 13.9h4.69v.78H4.93v-.78zm6.13-4.09l.65-.81c.47.37.94.62 1.54.62.46 0 .75-.19.75-.5 0-.28-.19-.44-1.04-.66-1.03-.28-1.68-.56-1.68-1.59v-.03c0-.94.75-1.56 1.78-1.56.69-.01 1.36.22 1.9.65l-.59.88c-.38-.3-.83-.47-1.31-.5-.41 0-.66.19-.66.47 0 .34.22.47 1.1.68 1.03.29 1.62.66 1.62 1.57 0 1.03-.78 1.62-1.87 1.62-.81-.03-1.58-.33-2.19-.84zm-1-4.44l-.78 3-.88-3h-.87l-.88 3-.78-3H4.65l1.5 5.19h.97l.84-3 .85 3h.97l1.5-5.19h-1.22z"
        ></path>
      </g>
    </svg>
  );
};

export default WebstormIcon;
