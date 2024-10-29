import * as C from './styles';

type Props = {
  title: string;
  value: number;
  color?: string;

};

export const ResumeItem = ({title, value, color}: Props ) => {
  const formattedValue = value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Value color={color}>{formattedValue}</C.Value>
    </C.Container>

  );

}