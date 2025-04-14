import { TSVGComponent } from '@/shared/types/components';

const FigmaIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip25_445">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
      <g fillOpacity="1" fillRule="nonzero" clipPath="url(#clip25_445)">
        <path
          fill="#1ABCFE"
          d="M10.68 10c0-1.62 1.28-2.92 2.85-2.92s2.84 1.3 2.84 2.92c0 1.61-1.27 2.91-2.84 2.91-1.57 0-2.85-1.3-2.85-2.91z"
        ></path>
        <path
          fill="#0ACF83"
          d="M5 15.83c0-1.61 1.27-2.92 2.84-2.92h2.84v2.92c0 1.61-1.27 2.92-2.84 2.92-1.57 0-2.84-1.31-2.84-2.92z"
        ></path>
        <path
          fill="#FF7262"
          d="M10.68 1.25v5.83h2.85c1.57 0 2.84-1.31 2.84-2.92 0-1.61-1.27-2.91-2.84-2.91h-2.85z"
        ></path>
        <path
          fill="#F24E1E"
          d="M5 4.16c0 1.61 1.27 2.92 2.84 2.92h2.84V1.25H7.84C6.27 1.25 5 2.55 5 4.16z"
        ></path>
        <path
          fill="#A259FF"
          d="M5 10c0 1.61 1.27 2.91 2.84 2.91h2.84V7.08H7.84C6.27 7.08 5 8.38 5 10z"
        ></path>
      </g>
    </svg>
  );
};

export default FigmaIcon;
