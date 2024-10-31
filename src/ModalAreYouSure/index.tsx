import * as C from './styles';
import imageCheck from '../assets/check-green.png';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}

export default function ModalAreYouSure({isOpen, setIsOpen}: ModalProps) {
  
  function handleClose() {
    setIsOpen(false);
  }


  return (
    <C.Container style={{display: isOpen? 'flex': 'none'}}>
      <C.Box>
        <C.Image src={imageCheck}></C.Image>
        <C.Title>Deletar registro</C.Title>
        <C.Description>Tem certeza?</C.Description>
        
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <C.ConfirmButton onClick={handleClose}>NÃO</C.ConfirmButton>
        <C.ConfirmButton onClick={handleClose}>SIM</C.ConfirmButton>


        </div>
      </C.Box>
    </C.Container>
  );
}
