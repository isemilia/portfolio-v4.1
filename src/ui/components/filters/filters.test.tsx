import '@testing-library/dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Filters from './filters';

describe('Filters component', () => {
  it('appears on screen and renders options', () => {
    render(<Filters options={[{ label: 'TypeScript', name: 'typescript' }]} />);
    expect(screen.getByTestId('filters')).toBeInTheDocument();
    expect(screen.getByTestId('chip')).toBeInTheDocument();
  });
});
