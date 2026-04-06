import { useSelector } from 'react-redux'

import Produto from '../components/Produto'
import { RootState } from '../store'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos = [] } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (id: number) =>
    favoritos.some((f) => f.id === id)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
