import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('calculates paths for a 3x3 grid', () => {
    render(<App />);
    const cell = screen.getByText('6'); // This is the value of bottom-right cell in a 3x3 grid
    const linkElement = screen.getByText(/Total Paths: 6/i);
    expect(linkElement).toBeInTheDocument();
    expect(cell).toBeInTheDocument();
});

test('calculates paths for a user-defined grid', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/X:/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Y:/i), { target: { value: '4' } });
    fireEvent.click(screen.getByText(/Calculate/i));
    const cell = screen.getByText('20'); // This is the value of bottom-right cell in a 4x4 grid
    const linkElement = screen.getByText(/Total Paths: 20/i);
    expect(linkElement).toBeInTheDocument();
    expect(cell).toBeInTheDocument();
});
