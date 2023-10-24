import bullsEye from '../assets/Emojis/bulls-eye.webp'; 
import thumbsUp from '../assets/Emojis/thumbs-up.webp'; 
import meh from '../assets/Emojis/meh.webp'; 
import { ImageProps, Image } from '@chakra-ui/react';

interface Props {
   rating: number;
}

const Emoji = ({ rating }: Props) => {

   if (rating < 3) return null;

   const emojiMap: { [key: number]: ImageProps } = {
      3: { src: meh, alt: 'meh', boxSize: '25' },
      4: { src: thumbsUp, alt: 'recommended', boxSize: '25' },
      5: { src: bullsEye, alt: 'exceptional', boxSize: '35' },
   }
  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji