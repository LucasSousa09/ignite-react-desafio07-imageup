import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({pageParam = null}) => {
      const response = await api.get('api/images',{
        params: {
          after: pageParam
        }
      })
      return response
    }
    ,
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.after
      }
    }
  );

  const formattedData = useMemo(() => {
    const imagesArray = data?.pages?.flat().map(
      flated => flated.data.data
    ).flat()

    return imagesArray
  }, [data]);

  return (
    <>
      <Header />
    {
      isLoading ?
      <Loading/>
      : isError ?
      <Error/> 
      :
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {
          hasNextPage ?
          <Button marginTop='40px' onClick={() => fetchNextPage()}>{
            isFetchingNextPage ?
            'Carregando...' :
            'Carregar mais'
          }</Button> :
          ''
        }
      </Box> 
    }
    </>
  );
}
