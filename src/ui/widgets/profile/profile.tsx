import { FC } from 'react';
import Title from '@/ui/elements/title';
import Banner from '@/ui/components/banner';
import Text from '@/ui/elements/text';
import classes from './model/profile.module.scss';
import photo from './media/photo.jpeg';
import Container from '@/ui/elements/container';

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
            <Title className={classes.title}>Emilia</Title>
            <Text>Front-end developer</Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
