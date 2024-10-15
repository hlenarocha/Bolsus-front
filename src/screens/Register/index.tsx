import * as C from './styles';
import logoImage from '../../assets/logo-bolsus.png';

export const Register = () => {
  return(
    <C.Container>
      <C.Box>
      <C.Logo>
        <C.Image src={logoImage} />
        <C.HeaderTitle>Bolsus</C.HeaderTitle>
        <C.Subtitle>Controle sua vida financeira e encha os <span style={{color: 'greenyellow'}}>Bolsus</span>.</C.Subtitle>
        </C.Logo>
        <C.Title>Cadastre-se e organize suas finanças!</C.Title>
        <C.InputBox>
        <C.Input placeholder='Insira seu nome' type='text' required/>

        <C.Input placeholder='Insira seu e-mail preferido' type='text' required/>
        <C.Input placeholder='Crie uma senha super secreta' type='password'/>
        <C.Input placeholder='Confirme sua senha super secreta' type='password'/>

        <C.Button>CADASTRAR</C.Button>
        </C.InputBox>
      </C.Box>
      
    </C.Container>
  );
}