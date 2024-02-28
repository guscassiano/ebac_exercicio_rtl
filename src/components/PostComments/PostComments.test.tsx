import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar dois comentários', ()=> {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Muito legal mesmo!'
            }
        })
        fireEvent.click(screen.getByTestId('postar-comentario'))
        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Onde compro um??'
            }
        })
        fireEvent.click(screen.getByTestId('postar-comentario'))
        expect(screen.getByText('Muito legal mesmo!' && 'Onde compro um??')).toBeInTheDocument()
    })
});
