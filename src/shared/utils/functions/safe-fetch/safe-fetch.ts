import { ZodSchema } from 'zod';

const joinUrl = (base: string, path: string) => {
  return `${base.replace(/\/+$/, '')}/api/${path.replace(/^\/+/, '')}`;
};

const safeFetch = async <T>({
  endpoint,
  schema,
  options,
}: {
  endpoint: string;
  schema: ZodSchema<T>;
  options?: RequestInit;
}) => {
  try {
    const url = joinUrl(process.env.API_URL!, endpoint);

    const response = await fetch(url, options);

    if (!response.ok) {
      return {
        status: 'error',
        message: 'Failed to fetch data',
      };
    }

    const result = await response.json();

    const data = schema.parse(result.data);

    return {
      status: 'success',
      data,
    };
  } catch (error) {
    console.error(`Error while fetching ${endpoint}:`, error);

    return {
      status: 'error',
      message: 'Something went wrong',
    };
  }
};

export default safeFetch;
