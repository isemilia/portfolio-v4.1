import { FC } from 'react';
import Title from '@/ui/elements/title';
import Banner from '@/ui/components/banner';
import Text from '@/ui/elements/text';
import classes from './model/profile.module.scss';
import photo from './media/photo.jpg';
import Container from '@/ui/elements/container';
import AppLink from '@/ui/elements/app-link';
import SuitcaseIcon from '@/ui/elements/icons/suitcase-icon';
import GithubIcon from '@/ui/elements/icons/github-icon';
import BlueskyIcon from '@/ui/elements/icons/bluesky-icon';
import Navigation from '@/ui/components/navigation';
import Image from 'next/image';

const Profile: FC = () => {
  const links = [
    { href: '/', label: 'About', name: 'default' },
    { href: '/skills', label: 'Skills', name: 'skills' },
    { href: '/projects', label: 'Projects', name: 'projects' },
    { href: '/blog', label: 'Blog', name: 'blog' },
  ];

  return (
    <div className={classes.profile}>
      <Banner />
      <Container>
        <div className={classes.info}>
          <div className={classes.avatar}>
            <Image src={photo.src} alt={'Avatar'} width={80} height={80} />
          </div>
          <div>
            <Title className={classes.title}>Emilia Sonder</Title>
            <Text>Frontend developer</Text>
          </div>
        </div>
        <Text component={'div'}>
          <p>
            Building web applications with React, Next.js, and TypeScript,
            focusing on clean architecture and maintainable UI systems
          </p>
        </Text>
        <div className={classes.links}>
          <AppLink component={'div'} icon={<SuitcaseIcon />}>
            Available
          </AppLink>
          <AppLink
            icon={<GithubIcon />}
            href={'https://github.com/isemilia'}
            target={'_blank'}
          >
            Github
          </AppLink>
          <AppLink
            icon={<BlueskyIcon />}
            href={'https://bsky.app/profile/emiliasonder.bsky.social'}
            target={'_blank'}
          >
            Bluesky
          </AppLink>
        </div>
        <Navigation links={links} className={classes.navigation} />
      </Container>
    </div>
  );
};

export default Profile;
