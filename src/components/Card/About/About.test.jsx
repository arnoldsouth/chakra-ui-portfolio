import { render } from '@testing-library/react';
import React from 'react';
import About from './About';

describe('About', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<About {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('About')).toBeTruthy();
    });
});
