import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseAsyncDataReturn<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  execute: (resetState?: boolean) => void;
}

export function useAsyncData<T>(
  asyncFn: () => Promise<T>,
  initialData: T | null = null,
  immediate: boolean = true,
): UseAsyncDataReturn<T> {
  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const active = useRef<boolean>(true);
  const lastCallId = useRef<number>(0);

  const execute = useCallback(
    (resetState: boolean = true) => {
      const callId = ++lastCallId.current;
      if (resetState) {
        setIsLoading(true);
        setError(null);
      }

      asyncFn()
        .then((response) => {
          if (active.current && callId === lastCallId.current) {
            setData(response);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          if (active.current && callId === lastCallId.current) {
            setError(error as Error);
            setIsLoading(false);
          }
        });
    },
    [asyncFn],
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }

    return () => {
      active.current = false;
    };
  }, [execute, immediate]);

  return { execute, data, isLoading, error };
}
