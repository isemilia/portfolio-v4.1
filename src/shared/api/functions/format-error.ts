const formatError = ({
  error,
  status = 500,
}: {
  error: unknown;
  status?: number;
}) => {
  return {
    error: {
      message: error instanceof Error ? error.message : 'Something went wrong',
      status,
    },
  };
};

export default formatError;
