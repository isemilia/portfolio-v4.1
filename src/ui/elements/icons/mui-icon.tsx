import { TSVGComponent } from '@/shared/types/components';

const MuiIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip25_533">
          <path
            fill="#fff"
            fillOpacity="0"
            d="M0 0H20V20H0z"
            transform="translate(0 .469)"
          ></path>
        </clipPath>
        <clipPath id="clip25_530">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip25_530)">
        <g fillOpacity="1" fillRule="nonzero" clipPath="url(#clip25_533)">
          <path
            fill="#00B0FF"
            d="M0 11.13V2.47L7.5 6.8v2.89l-5-2.89v5.77L0 11.13z"
          ></path>
          <path
            fill="#0081CB"
            d="M7.5 6.8L15 2.47v8.66l-5 2.89-2.5-1.45 5-2.88V6.8l-5 2.89V6.8z"
          ></path>
          <path fill="#00B0FF" d="M7.5 12.57v2.89l5 2.89v-2.89l-5-2.89z"></path>
          <path
            fill="#0081CB"
            d="M12.5 18.35l7.5-4.33V8.24l-2.5 1.45v2.88l-5 2.89v2.89zm5-11.55V3.91L20 2.47v2.89L17.5 6.8z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default MuiIcon;
