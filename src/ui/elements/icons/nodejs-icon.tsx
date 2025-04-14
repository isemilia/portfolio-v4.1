import { TSVGComponent } from '@/shared/types/components';

const NodejsIcon: TSVGComponent = ({ ...props }) => {
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
        <clipPath id="clip26_26">
          <path fill="#fff" fillOpacity="0" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
      <g
        fill="#8CC84B"
        fillOpacity="1"
        fillRule="nonzero"
        clipPath="url(#clip26_26)"
      >
        <path d="M10.73 1.43c-.45-.25-1.02-.25-1.47 0-2.22 1.23-4.45 2.46-6.67 3.68-.43.23-.72.7-.72 1.18v7.41c0 .49.3.96.75 1.19.64.34 1.26.71 1.91 1.03.75.37 1.69.45 2.45.07.62-.32.89-1.03.89-1.68.01-2.45 0-4.9 0-7.35a.185.185 0 00-.18-.22h-.86c-.1-.01-.21.08-.2.19v7.29c0 .34-.22.66-.55.78-.75.26-2.88-1.13-2.88-1.13a.209.209 0 01-.12-.21V6.33c-.02-.1.05-.19.14-.23 2.21-1.22 4.43-2.44 6.64-3.67.08-.05.19-.05.27.01 2.21 1.22 4.43 2.44 6.64 3.66.1.04.15.13.14.23 0 2.44.01 4.89 0 7.33.01.09-.03.18-.12.21-2.19 1.22-4.41 2.39-6.59 3.64-.09.05-.2.12-.31.06-.57-.32-1.13-.65-1.7-.97-.07-.04-.15-.05-.21-.01-.26.13-.5.24-.79.36-.41.16-.35.23.03.45.66.37 1.33.75 2 1.13.44.27 1.03.29 1.48.04 2.22-1.23 4.45-2.46 6.67-3.68.44-.23.75-.69.75-1.19V6.29c0-.47-.28-.93-.7-1.16-2.23-1.24-4.46-2.47-6.69-3.7z"></path>
        <path d="M14.08 7c-.87-.47-1.91-.49-2.88-.43-.7.07-1.44.26-1.95.76-.52.51-.63 1.32-.39 1.98.18.47.63.77 1.1.93.59.21 1.22.28 1.85.34.57.06 1.14.12 1.7.29.22.08.48.19.55.44.06.29-.01.62-.24.82-.75.6-2.83.5-3.56.04-.3-.2-.43-.55-.48-.88-.01-.11-.09-.2-.21-.2h-.85c-.1-.01-.2.06-.2.17-.06 1.53 1.34 2.2 2.66 2.34.76.08 1.53.07 2.27-.09.56-.13 1.12-.36 1.51-.79.47-.52.56-1.3.35-1.95-.16-.49-.63-.8-1.1-.96-.65-.22-1.41-.34-2-.4-.85-.08-1.86-.05-2.1-.6-.09-.3-.01-.66.26-.84.71-.48 2.16-.42 2.89-.06.34.17.54.52.62.87.01.1.08.21.2.21h.84c.1.01.21-.05.23-.15-.02-.73-.39-1.48-1.07-1.84z"></path>
      </g>
    </svg>
  );
};

export default NodejsIcon;
