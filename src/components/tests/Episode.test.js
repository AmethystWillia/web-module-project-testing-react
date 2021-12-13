import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
    render (<Episode episode={{}}/>);
});

test("renders the summary test passed as prop", () => {
    // Arrange
    render (<Episode episode={{
        summary: 'This is a test',
    }}/>);
    // Act
    const summaryText = screen.queryByText(/this is a test/i)
    // Assert
    expect(summaryText).toBeInTheDocument();
});

test("renders default image when image is not defined", () => {
    // Arrange
    render (<Episode episode={{}}/>);
    // Act
    const img = screen.queryByRole('img');
    // Assert
    expect(img).toHaveAttribute('src', 'https://i.ibb.co/2FsfXqM/stranger-things.png');
});
