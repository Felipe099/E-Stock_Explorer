import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth.jsx';
import { USER_ROLE } from '../../utils/roles.js';

import { Container, Header, Item } from './styles';
import { Button } from '../../components/Button';

export function Product() {
    const { user } = useAuth();

    const navigate = useNavigate();

    const products = Array(20)
        .fill({ name: 'Produto' })
        .map((item, index) => `${item.name} ${index + 1}`);

    return (
        <Container>
            <Header>
                <h1>Produtos</h1>

                <nav>
                    {[USER_ROLE.ADMIN].includes(user.role) && (
                        <Button title="Cadastrar" />
                    )}
                    <Button title="Voltar" onClick={() => navigate('/')} />
                </nav>
            </Header>

            {products.map((product) => (
                <Item key={product}>
                    <span>{product}</span>
                </Item>
            ))}
        </Container>
    );
}
