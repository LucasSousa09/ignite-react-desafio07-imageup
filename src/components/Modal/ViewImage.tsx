import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent m='0' rounded='12px' maxH='600px' w='90%' maxW='900px'>
      <ModalBody p='0' w='100%'>
        <Image 
          src={imgUrl}
          maxW='900px'
          w='100%'
          maxH='600px'
          h='auto'
          objectFit='cover'
          roundedTop='8px'
          objectPosition='center'
        />
      </ModalBody>
      <ModalFooter justifyContent='flex-start' roundedBottom='8px' backgroundColor='pGray.800'>
        <Link href={imgUrl}>Abrir original</Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}
