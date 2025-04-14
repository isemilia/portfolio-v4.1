import { TSVGComponent } from '@/shared/types/components';

const MongodbIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip26_36">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
        <linearGradient
          id="paint_linear_26_40_0"
          x1="7.232"
          x2="12.63"
          y1="10.158"
          y2="11.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.231" stopColor="#999875"></stop>
          <stop offset="0.563" stopColor="#9B9977"></stop>
          <stop offset="0.683" stopColor="#A09F7E"></stop>
          <stop offset="0.768" stopColor="#A9A889"></stop>
          <stop offset="0.837" stopColor="#B7B69A"></stop>
          <stop offset="0.896" stopColor="#C9C7B0"></stop>
          <stop offset="0.948" stopColor="#DEDDCB"></stop>
          <stop offset="0.994" stopColor="#F8F6EB"></stop>
          <stop offset="1" stopColor="#FBF9EF"></stop>
        </linearGradient>
        <linearGradient
          id="paint_linear_26_41_0"
          x1="9.211"
          x2="12.99"
          y1="1.215"
          y2="15.885"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#48A547"></stop>
          <stop offset="1" stopColor="#3F9143"></stop>
        </linearGradient>
        <linearGradient
          id="paint_linear_26_42_0"
          x1="5.746"
          x2="12.361"
          y1="9.847"
          y2="8.344"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41A247"></stop>
          <stop offset="0.352" stopColor="#4BA74B"></stop>
          <stop offset="0.956" stopColor="#67B554"></stop>
          <stop offset="1" stopColor="#69B655"></stop>
        </linearGradient>
      </defs>
      <g fillOpacity="1" fillRule="nonzero" clipPath="url(#clip26_36)">
        <path
          fill="url(#paint_linear_26_40_0)"
          d="M10.38 18.75l-.47-.16s.07-2.38-.79-2.54c-.57-.66.08-27.97 2.14-.1-.41.21-.69.53-.84.96-.08.61-.09 1.22-.04 1.84z"
        ></path>
        <path
          fill="url(#paint_linear_26_41_0)"
          d="M10.64 16.45a8.198 8.198 0 002.76-3.68c.56-1.49.68-3.02.36-4.59-.92-4.05-3.09-5.38-3.33-5.89-.2-.32-.37-.65-.51-1l.17 11.29s-.36 3.46.55 3.87z"
        ></path>
        <path
          fill="url(#paint_linear_26_42_0)"
          d="M9.67 16.6S5.85 14 6.07 9.39c.02-1.41.33-2.75.93-4.02a9.574 9.574 0 012.52-3.26c.26-.23.39-.52.38-.86.24.51.2 7.65.22 8.48.1 3.25-.18 6.26-.45 6.87z"
        ></path>
      </g>
    </svg>
  );
};

export default MongodbIcon;
