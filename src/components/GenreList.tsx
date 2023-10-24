
import useGenres from '../hooks/useGenres';
import { HStack, ListItem, List, Image, Button, Spinner, Heading } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../hooks/useGenres';

interface Props {
   onSelectedGenre: (genres: Genre) => void;
   selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectedGenre}: Props) => {
   const { data, isLoading, error } = useGenres();

   if (error) return null;
   
   if (isLoading) return <Spinner />

   return (
     <>
         <Heading fontSize='2x1' marginBottom={3}>Genres</Heading>
     <List>
        {data.map((genre) => (
           <ListItem key={genre.id} paddingY='5px'>
              <HStack>
           <Image
              boxSize='32px'
                    borderRadius={8}
                    objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
           />
           <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack>
        </ListItem>
        ))}
         </List>
         </>
  )
}

export default GenreList