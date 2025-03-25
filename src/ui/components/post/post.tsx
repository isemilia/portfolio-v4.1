import { TComponent } from '@/shared/types/components';
import classes from './model/post.module.scss';
import Title from '@/ui/elements/title';
import Text from '@/ui/elements/text';
import { z } from 'zod';
import { postSchema } from '@/shared/api/types/posts';
import HeartIcon from '@/ui/elements/icons/heart-icon';
import AppLink from '@/ui/elements/app-link';
import CommentIcon from '@/ui/elements/icons/comment-icon';
import ShareIcon from '@/ui/elements/icons/share-icon';
import formatDate from '@/shared/utils/format-date';

const Post: TComponent<false, z.infer<typeof postSchema>> = ({
  content,
  author,
  createdAt,
  uri,
  replyCount,
  likeCount,
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
      <div className={classes.footer}>
        <div className={classes.controls}>
          <AppLink
            href={uri}
            target={'_blank'}
            className={classes.button}
            iconSize={'sm'}
            icon={<HeartIcon className={classes.icon} />}
          >
            {likeCount || null}
          </AppLink>
          <AppLink
            href={uri}
            target={'_blank'}
            className={classes.button}
            iconSize={'sm'}
            icon={<CommentIcon className={classes.icon} />}
          >
            {replyCount || null}
          </AppLink>
          <AppLink
            href={uri}
            target={'_blank'}
            className={classes.button}
            iconSize={'sm'}
            icon={<ShareIcon className={classes.icon} />}
          ></AppLink>
        </div>
        <Text variant={'xs'} className={classes.date}>
          {formatDate({ date: createdAt })}
        </Text>
      </div>
    </div>
  );
};

export default Post;
