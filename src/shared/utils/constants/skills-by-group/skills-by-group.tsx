import JavascriptIcon from '@/ui/elements/icons/javascript-icon';
import TypescriptIcon from '@/ui/elements/icons/typescript-icon';
import HtmlIcon from '@/ui/elements/icons/html-icon';
import CssIcon from '@/ui/elements/icons/css-icon';
import SassIcon from '@/ui/elements/icons/sass-icon';
import ReactIcon from '@/ui/elements/icons/react-icon';
import NextIcon from '@/ui/elements/icons/next-icon';
import ReduxIcon from '@/ui/elements/icons/redux-icon';
import MantineIcon from '@/ui/elements/icons/mantine-icon';
import TailwindIcon from '@/ui/elements/icons/tailwind-icon';
import MuiIcon from '@/ui/elements/icons/mui-icon';
import StorybookIcon from '@/ui/elements/icons/storybook-icon';
import WebstormIcon from '@/ui/elements/icons/webstorm-icon';
import VSCodeIcon from '@/ui/elements/icons/vscode-icon';
import FigmaIcon from '@/ui/elements/icons/figma-icon';
import PixsoIcon from '@/ui/elements/icons/pixso-icon';
import JiraIcon from '@/ui/elements/icons/jira-icon';
import NodejsIcon from '@/ui/elements/icons/nodejs-icon';
import ExpressIcon from '@/ui/elements/icons/express-icon';
import MongodbIcon from '@/ui/elements/icons/mongodb-icon';
import GraphQLIcon from '@/ui/elements/icons/graphql-icon';
import PostgreSQLIcon from '@/ui/elements/icons/postgresql-icon';

const skillsByGroup = [
  {
    name: 'programming-languages',
    title: 'Programming languages',
    chips: [
      { icon: <JavascriptIcon />, label: 'JavaScript', color: '#F4DE26' },
      { icon: <TypescriptIcon />, label: 'TypeScript', color: '#397CC6' },
    ],
  },
  {
    name: 'front-end',
    title: 'Front end',
    chips: [
      { icon: <HtmlIcon />, label: 'HTML5', color: '#F16529' },
      { icon: <CssIcon />, label: 'CSS3', color: '#33A9DC' },
      { icon: <SassIcon />, label: 'SCSS', color: '#CD6C9B' },
      { icon: <ReactIcon />, label: 'React', color: '#53C1DE' },
      { icon: <NextIcon />, label: 'Next', color: undefined },
      { icon: <ReduxIcon />, label: 'Redux', color: '#764ABC' },
      { icon: <ReduxIcon />, label: 'RTK Query', color: '#764ABC' },
      { icon: <MantineIcon />, label: 'Mantine', color: '#339AF0' },
      { icon: <TailwindIcon />, label: 'Tailwind', color: '#44A8B3' },
      { icon: <MuiIcon />, label: 'MUI', color: '#00B0FF' },
      { icon: <StorybookIcon />, label: 'Storybook', color: '#FF4785' },
    ],
  },
  {
    name: 'tools',
    title: 'Tools',
    chips: [
      { icon: <WebstormIcon />, label: 'WebStorm', color: '#00CDD7' },
      { icon: <VSCodeIcon />, label: 'VS Code', color: '#28A0F1' },
      { icon: <FigmaIcon />, label: 'Figma', color: '#F24E1E' },
      { icon: <PixsoIcon />, label: 'Pixso', color: undefined },
      { icon: <JiraIcon />, label: 'Jira', color: '#2684FF' },
    ],
  },
  {
    name: 'other',
    title: "Other technologies I'm familiar with",
    chips: [
      { icon: <NodejsIcon />, label: 'NodeJS', color: '#8CC84B' },
      { icon: <ExpressIcon />, label: 'Express', color: '#F7F7FF' },
      { icon: <MongodbIcon />, label: 'MongoDB', color: '#52AB4D' },
      { icon: <GraphQLIcon />, label: 'GraphQL', color: '#E535AB' },
      { icon: <PostgreSQLIcon />, label: 'PostgreSQL', color: '#336791' },
    ],
  },
];

export default skillsByGroup;
