import React from 'react';
import renderer from 'react-test-renderer';
import PasswordStrengthMeterBar from '../index';

jest.useFakeTimers();

test('renders correctly', async () => {
  const tree = renderer
    .create(<PasswordStrengthMeterBar password="testpassword" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
