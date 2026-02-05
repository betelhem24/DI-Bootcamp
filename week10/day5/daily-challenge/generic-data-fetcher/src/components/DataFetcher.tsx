import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchDataThunk, resetData } from '../features/dataSlice';

interface DataFetcherProps<T> {
  fetchFunction: () => Promise<T>;
  renderData: (data: T) => React.ReactNode;
  renderLoading?: () => React.ReactNode;
  renderError?: (error: string) => React.ReactNode;
}

function DataFetcher<T>({
  fetchFunction,
  renderData,
  renderLoading,
  renderError,
}: DataFetcherProps<T>) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchDataThunk(fetchFunction));

    // Cleanup function
    return () => {
      dispatch(resetData());
    };
  }, [dispatch, fetchFunction]);

  if (loading) {
    return (
      <div className="loading-container">
        {renderLoading ? renderLoading() : <p>Loading...</p>}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        {renderError ? renderError(error) : <p>Error: {error}</p>}
      </div>
    );
  }

  if (!data) {
    return <div className="no-data">No data available</div>;
  }

  return <div className="data-container">{renderData(data as T)}</div>;
}

export default DataFetcher;