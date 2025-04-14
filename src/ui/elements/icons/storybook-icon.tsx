import { TSVGComponent } from '@/shared/types/components';

const StorybookIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip25_539">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip25_539)">
        <path
          fill="#FF4785"
          fillOpacity="1"
          fillRule="nonzero"
          d="M2.59 18.39L1.97 1.91c-.02-.54.4-1 .94-1.04L16.92 0a1 1 0 011.07.94V18.95c0 .55-.45 1-1 1h-.05l-13.39-.6a.994.994 0 01-.96-.96z"
        ></path>
        <mask
          id="mask25_547"
          width="16.019"
          height="19.958"
          x="1.975"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#FFF"
            fillOpacity="1"
            fillRule="nonzero"
            d="M2.59 18.39L1.97 1.91c-.02-.54.4-1 .94-1.04L16.92 0a1 1 0 011.07.94V18.95c0 .55-.45 1-1 1h-.05l-13.39-.6a.994.994 0 01-.96-.96z"
          ></path>
        </mask>
        <g mask="url(#mask25_547)">
          <path
            fill="#FFF"
            fillOpacity="1"
            fillRule="nonzero"
            d="M13.8 2.45l.09-2.3L15.82 0l.08 2.37c0 .08-.06.15-.14.15-.04 0-.07-.01-.1-.03l-.74-.58-.88.66c-.07.05-.16.04-.21-.03-.02-.02-.03-.06-.03-.09zm-2.46 5.07c0 .39 2.63.2 2.98-.07 0-2.66-1.43-4.06-4.04-4.06-2.61 0-4.07 1.42-4.07 3.55 0 3.7 5 3.78 5 5.8 0 .56-.28.9-.89.9-.8 0-1.11-.41-1.08-1.79 0-.3-3.03-.39-3.13 0-.23 3.35 1.86 4.32 4.25 4.32 2.31 0 4.13-1.23 4.13-3.47 0-3.97-5.08-3.86-5.08-5.83 0-.8.59-.91.95-.91.37 0 1.03.07.98 1.56z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default StorybookIcon;
