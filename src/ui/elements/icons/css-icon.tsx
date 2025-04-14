import { TSVGComponent } from '@/shared/types/components';

const CssIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip25_502">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
      <g fillOpacity="1" fillRule="nonzero" clipPath="url(#clip25_502)">
        <path
          fill="#1572B6"
          d="M2.6 18L1 0h17.68l-1.61 17.99L9.82 20 2.6 18z"
        ></path>
        <path
          fill="#33A9DC"
          d="M9.84 18.46l5.85-1.61 1.37-15.38H9.84v16.99z"
        ></path>
        <path
          fill="#FFF"
          d="M9.84 7.99h2.93l.2-2.26H9.84V3.52h5.55l-.06.59-.54 6.09H9.84V7.99z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M9.85 13.72l-2.48-.66-.15-1.76H4.99l.31 3.47 4.54 1.25.01-2.3z"
        ></path>
        <path
          fill="#FFF"
          d="M12.58 10.1l-.27 2.96-2.47.66v2.3l4.54-1.25.03-.38.39-4.29h-2.22z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M9.84 3.52v2.2l-5.34.01-.05-.5-.1-1.12-.05-.59h5.54zm0 4.47v2.2l-2.43.01-.05-.5-.1-1.12-.06-.59h2.64z"
        ></path>
      </g>
    </svg>
  );
};

export default CssIcon;
