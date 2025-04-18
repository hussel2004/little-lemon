// src/utils/bookingUtils.test.js
import { updatesTime, initializeTime } from './bookingUtils';
import { fetchAPI } from './api';

jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTime', () => {
  it('should call fetchAPI with today\'s date and return times array', () => {
    const mockTimes = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTime();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
    expect(result).toEqual(mockTimes);
  });
});

describe('updatesTime', () => {
  it('should return new times array when action type is SET_DATE', () => {
    const mockTimes = ['17:00', '19:00'];
    const testDate = '2025-04-25';

    fetchAPI.mockReturnValue(mockTimes);

    const state = ['16:00'];
    const action = { type: 'SET_DATE', payload: testDate };

    const newState = updatesTime(state, action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date(testDate));
    expect(newState).toEqual(mockTimes);
  });

  it('should return current state if action type is not SET_DATE', () => {
    const state = ['16:00'];
    const action = { type: 'UNKNOWN_ACTION', payload: '2025-04-25' };

    const result = updatesTime(state, action);

    expect(result).toEqual(state);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
