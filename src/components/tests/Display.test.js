import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

import mockFetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow');

const testShow = {
    name: 'Test',
    summary: 'bla bla bla',
    seasons: [
        {id: 0, name: 'Season One', episodes: []},
        {id: 1, name: 'Season Two', episodes: []},
    ]
};

test('renders without errors with no props', () => {
    render (<Display />);
});

test('renders Show component when the button is clicked ', async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    // Arrange
    render (<Display />);
    // Act
    const button = screen.getByRole('button');
    userEvent.click(button);
    // Assert
    const showCont = await screen.findByTestId('show-container');
    expect(showCont).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    // Arrange
    render (<Display />);
    // Act
    const button = screen.queryByRole('button');
    userEvent.click(button);
    // Assert
    await waitFor (() => {
        const options = screen.queryAllByTestId('season-option');
        expect(options).toHaveLength(2);
    });
});

// test('renders show season options matching your data when the button is clicked', () => {
//     expect(badVar).toBeInTheDocument();
// });
