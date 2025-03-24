const padStart = (n: number) => {
  return n.toString().padStart(2, '0');
};

const formatDate = ({
  date,
  variant = 'dmy',
}: {
  date: string | Date;
  variant?: 'dmy';
}) => {
  const _date = new Date(date);

  switch (variant) {
    case 'dmy': {
      const day = padStart(_date.getDate());
      const month = padStart(_date.getMonth() + 1);
      const year = padStart(_date.getFullYear());

      return `${day}.${month}.${year}`;
    }
    default: {
      return '';
    }
  }
};

export default formatDate;
