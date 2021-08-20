import Login from "./Login";
import '@testing-library/jest-dom';
import {render,fireEvent, screen} from '@testing-library/react';

describe('login form', ()=> {
  it( 'should show login form', () => {
    render(<Login />)
    const components = screen.getByTestId('login-cp')
    expect(components).toBeInTheDocument();
  });
  
  it('should change input value when user enters a field', () => {
    render(<Login />)
    const input = screen.getByLabelText('Username').nextElementSibling;
    fireEvent.change(input, {target: {value: 'John Doe'}});
    
    expect(input.value).toBe('John Doe');
  });
  
  it('should not send form if every field are not entered ', () => {
    render(<Login />)
    const onSubmit = jest.fn();
    const from = screen.getByTestId('login-cp').firstChild;
    
    
    fireEvent.click(screen.getByTestId('login-cp').firstChild)
    expect(onSubmit).toHaveBeenCalledTimes(0)
  });
  
  
  it('should send form when every field are entred', () => {
    render(<Login />)
    const onSubmit = jest.fn();
    const from = screen.getByTestId('login-cp').firstChild;
    
    
    const inputName = screen.getByLabelText('Username').nextElementSibling;
    const inputEmail = screen.getByLabelText('Email').nextElementSibling;
    const inputPassword = screen.getByLabelText('Password').nextElementSibling;
    
    fireEvent.change(inputName, {target: {value: 'John Doe'}});
    fireEvent.change(inputEmail, {target: {value: 'JohnDoe@gmail.fr'}});
    fireEvent.change(inputPassword, {target: {value: 'JohnDoe1234'}});
    
    
    fireEvent.click(screen.getByTestId('login-cp').firstChild)
    
    expect(onSubmit).toHaveBeenCalled;
  });
});

