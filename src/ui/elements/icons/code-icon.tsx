import { TSVGComponent } from '@/shared/types/components';

const CodeIcon: TSVGComponent = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      fill="none"
      viewBox="0 0 14 12"
      {...props}
    >
      <path
        fill={'currentColor'}
        fillOpacity="1"
        fillRule="evenodd"
        d="M8.42.73l-2.4 10.79c-.08.33-.39.53-.72.46a.586.586 0 01-.45-.72L7.25.47a.59.59 0 01.71-.46.6.6 0 01.46.72zM4.06 3.42L1.48 6l2.58 2.57c.23.24.23.61 0 .85-.24.24-.62.24-.85 0l-3-3c-.29-.28-.29-.57 0-.85l3-3c.23-.24.61-.24.85 0 .23.24.23.61 0 .85zm5.99-.85a.58.58 0 00-.84 0c-.24.24-.24.61 0 .85L11.78 6 9.21 8.57c-.24.24-.24.61 0 .85.23.24.61.24.84 0l3-3c.29-.28.29-.57 0-.85l-3-3z"
      ></path>
    </svg>
  );
};

export default CodeIcon;
