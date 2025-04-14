import { TSVGComponent } from '@/shared/types/components';

const JavascriptIcon: TSVGComponent = ({ ...props }) => {
  return (
    <svg
      width="20.000000"
      height="20.000000"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <clipPath id="clip25_473">
          <rect
            id="svg"
            width="20.000000"
            height="20.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip25_473)">
        <rect
          id="rect"
          rx="0.150000"
          width="20.000000"
          height="20.000000"
          fill="#F7DF1E"
          fillOpacity="1.000000"
        />
        <path
          id="path"
          d="M12.65 14.45C13.04 15.11 13.59 15.58 14.49 15.58C15.27 15.58 15.78 15.19 15.78 14.64C15.78 14.02 15.27 13.78 14.41 13.39L13.94 13.2C12.57 12.61 11.67 11.91 11.67 10.39C11.67 8.98 12.73 7.89 14.41 7.89C15.62 7.89 16.48 8.32 17.07 9.41L15.62 10.35C15.31 9.76 14.96 9.53 14.41 9.53C13.86 9.53 13.51 9.88 13.51 10.35C13.51 10.89 13.86 11.13 14.68 11.48L15.15 11.67C16.75 12.38 17.65 13.04 17.65 14.64C17.65 16.32 16.32 17.26 14.53 17.26C12.77 17.26 11.64 16.44 11.09 15.35L12.65 14.45ZM6.01 14.6C6.32 15.11 6.56 15.58 7.22 15.58C7.85 15.58 8.24 15.35 8.24 14.41L8.24 7.92L10.11 7.92L10.11 14.33C10.11 16.28 8.98 17.14 7.3 17.14C5.78 17.14 4.92 16.36 4.49 15.42L6.01 14.6Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default JavascriptIcon;
