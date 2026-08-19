import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import Button from './button';

const label = 'Click me!';

describe('Button component', () => {
  it('renders with the correct content', () => {
    render(<Button>{label}</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>{label}</Button>);

    await user.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
