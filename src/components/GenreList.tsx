
import useGenres from '../hooks/useGenres';
import { HStack, ListItem, List, Image, Button, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../hooks/useGenres';

interface Props {
   onSelectedGenre: (genres: Genre) => void;
}

const GenreList = ({onSelectedGenre}: Props) => {
   const { data, isLoading, error } = useGenres();

   if (error) return null;
   
   if (isLoading) return <Spinner />

  return (
     <List>
        {data.map((genre) => (
           <ListItem key={genre.id} paddingY='5px'>
              <HStack>
           <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
           />
           <Button onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack>
        </ListItem>
        ))}
    </List>
  )
}

export default GenreList