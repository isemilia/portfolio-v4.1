const padStart = (n: number) => {
  return n.toString().padStart(2, '0');
};

const formatDate = ({
  date,
  variant = 'dmy',
}: {
  date: string | number | Date;
  variant?: 'dmy';
}) => {
  const _date = new Date(date);

  if (Number.isNaN(_date.getTime())) {
    return 'Invalid Date';
  }

  switch (variant) {
    // variant === 'dmy'
    default: {
      const day = padStart(_date.getDate());
      const month = padStart(_date.getMonth() + 1);
      const year = padStart(_date.getFullYear());

      return `${day}.${month}.${year}`;
    }
  }
};

export default formatDate;
