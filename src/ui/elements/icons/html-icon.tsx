import { TSVGComponent } from '@/shared/types/components';

const HtmlIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip25_497">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
      <g fillOpacity="1" fillRule="nonzero" clipPath="url(#clip25_497)">
        <path
          fill="#E44D26"
          d="M2.76 17.85L1.33 0h17.14l-1.43 17.85L9.9 20l-7.14-2.15z"
        ></path>
        <path
          fill="#F16529"
          d="M17.04 1.42H9.9v17.5l5.71-1.78 1.43-15.72z"
        ></path>
        <path
          fill="#FFF"
          d="M5.26 10.35l-.72-6.78h11.07l-.35 2.14H6.69l.35 2.5h7.86L14.19 15 9.9 16.42 5.61 15l-.35-3.58H7.4l.36 1.79 2.14.71 2.14-.71.36-2.86H5.26z"
        ></path>
      </g>
    </svg>
  );
};

export default HtmlIcon;
