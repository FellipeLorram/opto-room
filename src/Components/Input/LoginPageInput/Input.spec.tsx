/* eslint-disable testing-library/no-debugging-utils */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { LoginPageInput } from './Index'
import renderWithThemeWrapper from '../../../TestAssets/RenderWithThemeProvider';

const InpuMockProps = {

  type: 'number',
  format: '##/##/##',
  label: 'jest-test',
  value: 'jest-test',
  setValue: jest.fn(),
  errorMessage: 'error-jest-test-message',
  error: true,
}

describe('<Input />', () => {
  it('should render correctly', () => {
    renderWithThemeWrapper(
      <LoginPageInput type={InpuMockProps.type} label={InpuMockProps.label} value={InpuMockProps.value} setValue={InpuMockProps.setValue} />
    );
    expect(screen.getByLabelText('jest-test')).toBeInTheDocument();
  });

  it('should have the value passed', () => {
    renderWithThemeWrapper(
      <LoginPageInput type="text" label="jest-test" value="jest-test" setValue={InpuMockProps.setValue} />
    );
    const input = screen.getByLabelText('jest-test') as HTMLInputElement;

    expect(input.value).toBe(InpuMockProps.value);
  });


  it('should have choosed type when not receive prop format', () => {
    renderWithThemeWrapper(
      <LoginPageInput type={InpuMockProps.type} label={InpuMockProps.label} value={InpuMockProps.value} setValue={InpuMockProps.setValue} />
    );
    const input = screen.getByLabelText('jest-test');
    expect(input).toHaveAttribute('type', InpuMockProps.type)
  });

  it('should have default type "text" when receive format prop', () => {
    renderWithThemeWrapper(
      <LoginPageInput
        type={InpuMockProps.type}
        label="jest-test"
        value="jest-test"
        format={InpuMockProps.format}
        setValue={InpuMockProps.setValue}
      />
    );
    const input = screen.getByLabelText('jest-test');
    expect(input).toHaveAttribute('type', 'text')
  });

  it('should show error message when prop for error is true', () => {
    renderWithThemeWrapper(
      <LoginPageInput
        error
        errorMessage={InpuMockProps.errorMessage}
        type={InpuMockProps.type}
        label={InpuMockProps.label}
        value={InpuMockProps.value}
        setValue={InpuMockProps.setValue}
      />
    );
    const errorLabel = screen.getByText(InpuMockProps.errorMessage);

    expect(errorLabel).toBeInTheDocument();
  });

  it("should'nt show error message when prop for error is false", async () => {
    renderWithThemeWrapper(
      <LoginPageInput
        error={false}
        errorMessage={InpuMockProps.errorMessage}
        type={InpuMockProps.type}
        label={InpuMockProps.label}
        value={InpuMockProps.value}
        setValue={InpuMockProps.setValue}
      />
    );
    const errorLabel = screen.getByLabelText('error-message');

    expect(errorLabel).toHaveTextContent('');
  });

  it('should call handle change function on each key pressed', async () => {
    renderWithThemeWrapper(
      <LoginPageInput
        type="text" label="jest-test" value="" setValue={InpuMockProps.setValue}
      />
    );

    const input = screen.getByLabelText('jest-test') as HTMLInputElement;

    await userEvent.type(input, InpuMockProps.value);

    expect(InpuMockProps.setValue).toHaveBeenCalledTimes(InpuMockProps.value.length);
  });
});

