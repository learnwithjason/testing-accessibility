import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('hides nav links from keyboard nav when hidden', () => {
  render(<App />);

  const mainNav = screen.queryByTestId('main-nav');

  expect(mainNav).not.toBeVisible();
});

test('links are keyboard navigable when nav is open', () => {
  render(<App />);

  const navLink = screen.queryByTestId('nav-link');
  const mainNavToggle = screen.queryByTestId('main-nav-toggle');

  mainNavToggle.focus();
  mainNavToggle.click();

  userEvent.tab();

  // expect(navLink).toBeVisible();
  expect(navLink).toHaveFocus();
});
