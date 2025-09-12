# Projeto de Sockets - Jogo Halma

**Engenharia de Computação**  
**Programação Paralela e Distribuída**  
**2025.2**  
**Prof. Cidcley T. de Souza (<cidcley@ifce.edu.br>)**
**Autor: Samuel Cabral Lima**

## Descrição do Projeto

Este projeto tem como objetivo implementar o jogo Halma utilizando Sockets para comunicação entre os tabuleiros, que podem estar em máquinas diferentes.

### Objetivo do Jogo

O Halma é um jogo de tabuleiro cujo objetivo principal é mover todas as peças de um canto do tabuleiro para o canto oposto. Cada jogador, na sua vez, pode mover uma peça para um quadrado adjacente vazio ou "saltar" sobre uma ou mais peças do adversário, tanto na horizontal quanto na vertical (e, por vezes, na diagonal), para avançar em direção ao destino. Não há captura de peças no Halma, os saltos são apenas para se aproximar do destino.

Para mais detalhes sobre as regras, consulte:  

- [Regras do Halma - BrainKing](https://brainking.com/pt/GameRules?tp=34#:~:text=Como%20terminar%20um%20jogo,para%20l%C3%A1%20as%20suas%20pe%C3%A7as.)
- [Vídeo explicativo - Ludopedia](https://ludopedia.com.br/jogo/halma/videos/208182)

### Funcionalidades Básicas

- Controle de turno, com definição de quem inicia a partida
- Movimentação das peças nos tabuleiros
- Desistência
- Chat para comunicação durante toda a partida
- Indicação de vencedor

### Critérios de Avaliação

- Interface do Jogo - UI (0-10)
- Implementação de Funcionalidades (0-10)

> **Observação:** Elementos da UI só serão considerados quando suas funcionalidades forem implementadas.

**Trabalho Individual**  
**Data de Entrega:** 08/10  
Depois disso o trabalho será desconsiderado.

O trabalho deve ser enviado por email (<cidcleyppd@gmail.com>) com o link do Google Drive contendo os códigos fontes compactados em um único arquivo ou o link do GitHub. No assunto do email deve conter o texto “Projeto Sockets”.

#### Observações Importantes

- TODOS os trabalhos só serão aceitos se apresentados pessoalmente pelo aluno na data final de entrega ou, em casos excepcionais, a combinar com o professor.
- TODOS os trabalhos só serão recebidos por email até às 13h da data de entrega.
- Não serão aceitos trabalhos enviados de qualquer outra forma.
- Devem ser entregues TODOS os códigos.
- Deverá ser entregue, se a linguagem de programação permitir, um código executável (.jar, .exe, etc).

---

# Instruções para rodar o projeto Next.js

Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Como rodar o projeto

1. Instale as dependências do projeto:

   ```
   pnpm install
   ```

   ou, se preferir usar yarn:

   ```
   yarn install
   ```

2. Execute o servidor de desenvolvimento:

   ```
   pnpm run dev
   ```

   ou

   ```
   yarn dev
   ```

3. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto em execução.

## Outros comandos úteis

- **Build para produção:**

  ```
  pnpm run build
  ```

  ou

  ```
  yarn build
  ```

- **Rodar o projeto em modo produção (após build):**

  ```
  pnpm start
  ```

  ou

  ```
  yarn start
  ```

> Certifique-se de que as variáveis de ambiente necessárias estejam configuradas antes de rodar o projeto em produção.
