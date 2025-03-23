import { TSVGComponent } from '@/shared/types/components';

const BlueskyIcon: TSVGComponent = ({ ...props }) => {
  return (
    <svg
      width="23.000000"
      height="20.000000"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <clipPath id="clip299_89">
          <rect
            id="Bluesky--Streamline-Simple-Icons"
            width="23.000000"
            height="20.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip299_89)">
        <path
          id="path"
          d="M11.5 8.87C10.45 6.89 7.62 3.19 4.98 1.37C2.45 -0.37 1.49 -0.07 0.86 0.21C0.13 0.53 0 1.63 0 2.28C0 2.92 0.36 7.57 0.59 8.35C1.37 10.92 4.15 11.78 6.71 11.5C6.84 11.49 6.97 11.47 7.11 11.45C6.98 11.47 6.84 11.49 6.71 11.5C2.96 12.05 -0.37 13.38 4 18.14C8.8 23.01 10.58 17.1 11.5 14.1C12.41 17.1 13.46 22.79 18.91 18.14C23 14.1 20.03 12.05 16.28 11.5C16.15 11.49 16.01 11.47 15.88 11.45C16.02 11.47 16.15 11.49 16.28 11.5C18.84 11.78 21.62 10.92 22.4 8.35C22.63 7.57 23 2.92 23 2.28C23 1.63 22.86 0.53 22.13 0.21C21.5 -0.07 20.54 -0.37 18.01 1.37C15.37 3.2 12.54 6.89 11.5 8.87Z"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default BlueskyIcon;
