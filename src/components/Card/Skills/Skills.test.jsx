import { render } from '@testing-library/react';
import React from 'react';
import Skills from './Skills';

describe('Skills', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Skills {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Skills')).toBeTruthy();
    });
});
