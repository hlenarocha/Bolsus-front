import * as C from './styles';

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
}


export default function Modal({title, description, isOpen}: ModalProps) {
   if (!isOpen) {
    return null;
  } 

  return(
    <C.Container>
      <C.Box>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
      <C.Input placeholder='Data' type='date' required></C.Input>
      <C.Select>
        <C.Option>Categoria</C.Option>
      </C.Select>
      <C.Input placeholder='Título' type='text'></C.Input>
      <C.Input placeholder='Valor' type='number'></C.Input>
      <C.ConfirmButton type='submit'>CONFIRMAR</C.ConfirmButton>

      </C.Box>
      
    </C.Container>

  );
}