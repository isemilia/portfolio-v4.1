import { BskyAgent } from '@atproto/api';

const username = process.env.BSKY_USERNAME;
const appPassword = process.env.BSKY_APP_PASSWORD;

const agent = new BskyAgent({
  service: 'https://bsky.social',
});

let isLoggedIn = false;

export const login = async () => {
  if (!username || !appPassword) {
    throw new Error('Missing username or password');
  }

  try {
    if (!isLoggedIn) {
      await agent.login({
        identifier: username,
        password: appPassword,
      });
      isLoggedIn = true;
    }
  } catch {
    isLoggedIn = false;
  }
};

export default agent;
