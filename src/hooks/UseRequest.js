import { useQuery } from '@apollo/client';
import { TASK_QUERY } from '../graphql/queries';
export const useGetTasks = () => {
  const { data, loading, refetch } = useQuery(TASK_QUERY);
  return {
    data,
    loading,
    refetch,
  };
};
