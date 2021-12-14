import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

test('renders without errors', () => {
    render (<Show />);
});

test('renders Loading component when prop show is null', async () => {
    // Arrange
    render (<Show />);
    // Act
    const loading = screen.queryByText(/fetching data/i);
    const shouldNotShow = screen.queryByText(/select a season/i);
    // Assert
    expect(loading).toBeInTheDocument();
    expect(shouldNotShow).not.toBeInTheDocument();
});

test('renders same number of options seasons are passed in', () => {
    // Arrange
    render (<Show selectedSeason={1} show={{
        name: 'test',
        image: null,
        summary: 'test',
        seasons: [
            {id:1, name: "Season 1", episodes: [{
                id: 1,
                image: 'test.url',
                name: 'test',
                season: 1,
                number: 42,
                summary: 'test',
                runtime: 42,
            }]},
        ]
    }}/>);
    // Act
    const seasosnOptions = screen.queryAllByTestId('season-option')
    // Assert
    expect(seasosnOptions).toHaveLength(1);
});

test('handleSelect is called when an season is selected', () => {
    expect(badVar).toBeInTheDocument();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    expect(badVar).toBeInTheDocument();
});
