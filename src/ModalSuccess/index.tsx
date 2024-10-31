import * as C from './styles';
import imageCheck from '../assets/check-green.png';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}

export default function ModalSuccess({isOpen, setIsOpen}: ModalProps) {
  
  function handleClose() {
    setIsOpen(false);
  }


  return (
    <C.Container style={{display: isOpen? 'flex': 'none'}}>
      <C.Box>
        <C.Image src={imageCheck}></C.Image>
        <C.Title>Tudo certo por aqui!</C.Title>
        <C.Description>Seu registro já consta na tabela.</C.Description>
        
        <C.ConfirmButton onClick={handleClose}>OK!</C.ConfirmButton>
      </C.Box>
    </C.Container>
  );
}
