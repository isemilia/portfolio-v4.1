import { TSVGComponent } from '@/shared/types/components';

const ExpressIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip26_33">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip26_33)">
        <path
          fill="#F7F7FF"
          fillOpacity="1"
          fillRule="nonzero"
          d="M20 15.49c-.73.19-1.18.01-1.59-.6l-2.87-3.97-.41-.55-3.36 4.54c-.38.54-.78.78-1.5.59l4.3-5.77-4-5.2c.69-.14 1.16-.07 1.59.55l2.97 4.02 3-4c.39-.55.8-.75 1.49-.55L18.07 6.6l-2.1 2.74c-.25.31-.21.52.02.82L20 15.49zM0 9.64l.35-1.73c.96-3.42 4.88-4.84 7.58-2.73 1.58 1.24 1.97 3 1.89 4.97H.92c-.13 3.55 2.42 5.68 5.67 4.59 1.14-.38 1.81-1.27 2.15-2.39.17-.56.45-.65.98-.49-.27 1.4-.88 2.57-2.16 3.3-1.91 1.09-4.65.74-6.08-.78-.86-.88-1.21-2-1.37-3.2-.03-.19-.08-.38-.11-.57v-.97zm.94-.24h8.04C8.93 6.84 7.33 5.02 5.15 5 2.76 4.98 1.04 6.76.94 9.4z"
        ></path>
      </g>
    </svg>
  );
};

export default ExpressIcon;
