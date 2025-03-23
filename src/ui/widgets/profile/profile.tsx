import { FC } from 'react';
import Title from '@/ui/elements/title';
import Banner from '@/ui/components/banner';
import Text from '@/ui/elements/text';
import classes from './model/profile.module.scss';
import photo from './media/photo.jpeg';
import Container from '@/ui/elements/container';
import AppLink from '@/ui/elements/app-link';
import SuitcaseIcon from '@/ui/elements/icons/suitcase-icon';
import GithubIcon from '@/ui/elements/icons/github-icon';
import BlueskyIcon from '@/ui/elements/icons/bluesky-icon';

const Profile: FC = () => {
  return (
    <div className={classes.profile}>
      <Banner />
      <Container>
        <div className={classes.info}>
          <div className={classes.avatar}>
            <img src={photo.src} alt={'Avatar'} width={80} height={80} />
          </div>
          <div>
            <Title className={classes.title}>Emilia Sonder</Title>
            <Text>Front-end developer</Text>
          </div>
        </div>
        <Text component={'div'}>
          <p>Passionate about clean code and delightful user experiences ✨</p>
          <p>
            Front-end developer. Back-end explorer. UX/UI enthusiast. Creative
            thinker.
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
      </Container>
    </div>
  );
};

export default Profile;
