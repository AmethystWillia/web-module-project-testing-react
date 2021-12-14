import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: 'Test',
    summary: 'bla bla bla',
    seasons: [
        {id: 0, name: 'Season One', episodes: []},
        {id: 1, name: 'Season Two', episodes: []},
    ]
};

test('renders without errors', () => {
    render (<Show show={testShow} selectedSeason={'none'}/>);
});

test('renders Loading component when prop show is null', () => {
    // Arrange
    render (<Show show={null}/>);
    // Act
    const loading = screen.queryByText(/fetching data/i);
    const shouldNotShow = screen.queryByText(/select a season/i);
    // Assert
    expect(loading).toBeInTheDocument();
    expect(shouldNotShow).not.toBeInTheDocument();
});

test('renders same number of options seasons are passed in', () => {
    
    // Arrange
    render (<Show show={testShow} selectedSeason={'none'}/>);
    // Act
    const seasosnOptions = screen.queryAllByTestId('season-option')
    // Assert
    expect(seasosnOptions).toHaveLength(2);
});

test('handleSelect is called when an season is selected', () => {
    // Arrange
    // Act
    // Assert
    expect(badVar).toBeInTheDocument();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    expect(badVar).toBeInTheDocument();
});
