import { render } from '@testing-library/react';
import React from 'react';
import CardReverse from './CardReverse';

describe('CardReverse', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<CardReverse {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('CardReverse')).toBeTruthy();
    });
});
