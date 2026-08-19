import '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import Filters from './filters';

const options = [
  {
    label: 'TypeScript',
    name: 'typescript',
  },
  {
    label: 'HTML',
    name: 'html',
  },
];

describe('Filters component', () => {
  it('appears on screen and renders all options', () => {
    render(<Filters options={options} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
  });

  it('calls onChange when a filter is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Filters options={options} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'TypeScript' }));

    expect(onChange).toHaveBeenCalledWith(options[0]);
  });
});
