import { ZodSchema } from 'zod';

const safeFetch = async <T>({
  url,
  schema,
  options,
}: {
  url: string;
  schema: ZodSchema<T>;
  options?: RequestInit;
}) => {
  try {
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
    console.error(`Error while fetching ${url}:`, error);

    return {
      status: 'error',
      message: 'Something went wrong',
    };
  }
};

export default safeFetch;
