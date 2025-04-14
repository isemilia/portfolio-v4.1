import { TSVGComponent } from '@/shared/types/components';

const JiraIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip25_306">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
        <linearGradient
          id="paint_linear_25_312_0"
          x1="14.989"
          x2="10.903"
          y1="4.803"
          y2="9.017"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC"></stop>
          <stop offset="1" stopColor="#2684FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint_linear_25_313_0"
          x1="10.508"
          x2="5.783"
          y1="9.617"
          y2="14.211"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC"></stop>
          <stop offset="1" stopColor="#2684FF"></stop>
        </linearGradient>
      </defs>
      <g fillOpacity="1" fillRule="nonzero" clipPath="url(#clip25_306)">
        <path
          fill="#2684FF"
          d="M19.11 0H9.5c0 1.15.46 2.25 1.27 3.06a4.37 4.37 0 003.07 1.27h1.77v1.71c0 2.39 1.94 4.33 4.33 4.33V.83c0-.46-.37-.83-.83-.83z"
        ></path>
        <path
          fill="url(#paint_linear_25_312_0)"
          d="M14.36 4.78H4.75c0 2.39 1.94 4.33 4.33 4.33h1.77v1.72a4.347 4.347 0 004.34 4.33V5.61c0-.46-.37-.83-.83-.83z"
        ></path>
        <path
          fill="url(#paint_linear_25_313_0)"
          d="M9.6 9.56H0c0 2.4 1.94 4.34 4.33 4.34h1.78v1.71c0 2.39 1.93 4.33 4.32 4.33V10.4c0-.46-.37-.84-.83-.84z"
        ></path>
      </g>
    </svg>
  );
};

export default JiraIcon;
