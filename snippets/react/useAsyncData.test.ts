import { renderHook, act } from '@testing-library/react-hooks';
import { useAsyncData } from './useAsyncData';

describe('useAsyncData hook', () => {
  it('should execute the async function immediately', async () => {
    const asyncFn = jest.fn().mockResolvedValue('data');
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsyncData(asyncFn, null, true),
    );

    expect(asyncFn).toHaveBeenCalled();
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBe('data');
  });

  it('should handle errors', async () => {
    const asyncFn = jest.fn().mockRejectedValue(new Error('error'));
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsyncData(asyncFn, null, true),
    );

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(new Error('error'));
  });

  it('should not execute the async function immediately when immediate is false', () => {
    const asyncFn = jest.fn().mockResolvedValue('data');
    const { result } = renderHook(() => useAsyncData(asyncFn, null, false));

    expect(asyncFn).not.toHaveBeenCalled();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();
  });

  it('should execute the async function when execute is called', async () => {
    const asyncFn = jest.fn().mockResolvedValue('data');
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsyncData(asyncFn, null, false),
    );

    act(() => {
      result.current.execute();
    });

    expect(asyncFn).toHaveBeenCalled();
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBe('data');
  });

  it('should not update state if component is unmounted', async () => {
    const asyncFn = () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve('data');
        }, 500),
      );
    const { result, unmount, waitForNextUpdate } = renderHook(() =>
      useAsyncData(asyncFn, null, true),
    );

    expect(result.current.isLoading).toBeTruthy();

    unmount();

    await act(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should ignore outdated responses', async () => {
    const asyncFn1 = () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve('data1');
        }, 200),
      );
    const asyncFn2 = () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve('data2');
        }, 100),
      );
    const { result, rerender, waitForNextUpdate } = renderHook(
      ({ asyncFn }) => useAsyncData(asyncFn, null, true),
      { initialProps: { asyncFn: asyncFn1 } },
    );

    expect(result.current.isLoading).toBeTruthy();

    rerender({ asyncFn: asyncFn2 });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBe('data2');
  });
});
