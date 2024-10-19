// TopMenu.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import TopMenu from './TopMenu';
import '@testing-library/jest-dom'

describe('TopMenu Component', () => {
  test('renders the logo text', () => {
    render(<TopMenu />);
    const logoElement = screen.getByText(/CLIMAFIT/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<TopMenu />);
    const productsLink = screen.getByText(/Products/i);
    const pricingLink = screen.getByText(/Pricing/i);
    const blogLink = screen.getByText(/Blog/i);

    expect(productsLink).toBeInTheDocument();
    expect(pricingLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });

  test('opens mobile menu when menu icon is clicked', () => {
    render(<TopMenu />);
    const menuIconButton = screen.getByLabelText(/account of current user/i);
    fireEvent.click(menuIconButton);

    const mobileMenuItem = screen.getByText(/Products/i);
    expect(mobileMenuItem).toBeInTheDocument();
  });

  test('opens user settings menu when avatar is clicked', () => {
    render(<TopMenu />);
    const avatarButton = screen.getByTitle(/Open settings/i);
    fireEvent.click(avatarButton);

    const profileMenuItem = screen.getByText(/Profile/i);
    expect(profileMenuItem).toBeInTheDocument();
  });
});
