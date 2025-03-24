import { TComponent } from '@/shared/types/components';
import classes from './model/post.module.scss';
import Title from '@/ui/elements/title';
import Text from '@/ui/elements/text';
import { z } from 'zod';
import { postSchema } from '@/shared/api/types/posts';

const Post: TComponent<false, z.infer<typeof postSchema>> = ({
  content,
  author,
}) => {
  return (
    <div className={classes.post}>
      <div className={classes.head}>
        <div className={classes.avatar}>
          <img src={author.avatar} alt={author.name} width={40} height={40} />
        </div>
        <div>
          <Title component={'h3'} variant={'h3'} className={classes.title}>
            {author.name}
          </Title>
          <Text variant={'xs'} className={classes.subtitle}>
            {author.username}
          </Text>
        </div>
      </div>
      <div className={classes.body}>
        <Text component={'div'} variant={'sm'}>
          {content}
        </Text>
      </div>
    </div>
  );
};

export default Post;
