import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // for simulating routing
import Auth from '../pages/Auth'; // import your Auth component

// Setup a mock function for useHistory to simulate navigation
jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

describe('Auth Component', () => {
  test('renders Sign In form correctly', () => {
    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );

    // Check if the form elements are in the document
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  test('renders Sign Up form correctly when toggled', () => {
    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );

    // Click on "Sign Up" link to switch to the sign-up form
    fireEvent.click(screen.getByText(/don’t have an account\? sign up/i));

    // Ensure the form switches to Sign Up and shows Confirm Password field
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  test('shows error for empty email on submit', () => {
    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );

    // Find and submit the form without filling the email
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.submit(screen.getByText(/sign in/i));

    // Expect an error for email being required
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });

  test('shows error for invalid email format', () => {
    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );

    // Provide an invalid email
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.submit(screen.getByText(/sign in/i));

    // Expect an error for invalid email format
    expect(screen.getByText(/email is not valid/i)).toBeInTheDocument();
  });

  test('shows error for mismatched passwords on sign up', () => {
    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );

    // Switch to Sign Up form
    fireEvent.click(screen.getByText(/don’t have an account\? sign up/i));

    // Enter mismatched passwords
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password1' } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password2' } });

    // Submit the form
    fireEvent.submit(screen.getByText(/sign up/i));

    // Expect an error for mismatched passwords
    expect(screen.getByText(/passwords must match/i)).toBeInTheDocument();
  });

  test('redirects to dashboard after successful sign-in', () => {
    // Mock useHistory to simulate redirection
    const mockHistory = { push: jest.fn() };
    jest.spyOn(require('react-router-dom'), 'useHistory').mockReturnValue(mockHistory);

    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );

    // Fill in valid form values
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });

    // Submit the form
    fireEvent.submit(screen.getByText(/sign in/i));

    // Expect the user to be redirected to the dashboard
    expect(mockHistory.push).toHaveBeenCalledWith('/dashboard');
  });

  test('redirects to dashboard after successful sign-up', () => {
    // Mock useHistory to simulate redirection
    const mockHistory = { push: jest.fn() };
    jest.spyOn(require('react-router-dom'), 'useHistory').mockReturnValue(mockHistory);

    render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );

    // Switch to Sign Up form
    fireEvent.click(screen.getByText(/don’t have an account\? sign up/i));

    // Fill in valid form values for Sign-Up
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'newuser' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'newuser@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password' } });

    // Submit the form
    fireEvent.submit(screen.getByText(/sign up/i));

    // Expect the user to be redirected to the dashboard
    expect(mockHistory.push).toHaveBeenCalledWith('/dashboard');
  });
});
