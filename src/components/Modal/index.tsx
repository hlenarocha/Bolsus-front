import * as C from './styles';
import imageClose from '../../assets/close.png'

interface ModalProps {
    title: string;
    description: string;
    setIsOpen: (isOpen: boolean) => void;
    imageUrl: string;
    categories: string[];
    isOpen: boolean;
}


export default function Modal({title, description, setIsOpen, isOpen, imageUrl, categories}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  
  function handleClose() {
    setIsOpen(!isOpen);
  }

  return(
    <C.Container>
      <C.Box>
      <C.Image onClick={handleClose} style={{width: 50, height: 50, position: 'absolute', top: 20, right: 20, cursor: 'pointer'}} src={imageClose} />

      <C.Image src={imageUrl}></C.Image>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
      <C.Input placeholder='Data' type='date' required></C.Input>
      <C.Select>
        {categories.map((category, index) => (
          <C.Option key={index}>{category}</C.Option>

        ))};
  

      </C.Select>
      <C.Input placeholder='Título' type='text'></C.Input>
      <C.Input placeholder='Valor' type='number'></C.Input>
      <C.ConfirmButton type='submit'>CONFIRMAR</C.ConfirmButton>

      </C.Box>
      
    </C.Container>

  );
}