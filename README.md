
# FrontEnd Consulta de extrato bancario

Front end que consume uma api em java, trazendo filtros personalizados para a tela.

***


## Stack utilizada

***REACT + VITE***
O React é uma biblioteca JavaScript popular para construir interfaces de usuário. Ele permite que você divida sua UI em componentes reutilizáveis e atualize apenas as partes necessárias quando os dados mudam, resultando em uma aplicação eficiente e responsiva.

O Vite é uma ferramenta de desenvolvimento rápida que visa melhorar a experiência do desenvolvedor ao criar aplicativos React (e outras estruturas). Ele oferece um tempo de inicialização extremamente rápido, permitindo que você comece a trabalhar em seu aplicativo quase instantaneamente. Além disso, o Vite suporta carregamento rápido de módulos e recarregamento a quente, o que agiliza o processo de desenvolvimento.


***JAVA SCRIPT + AXIOS***

Em resumo, JavaScript é a linguagem de programação que permite criar interações dinâmicas em páginas web, e o Axios é uma biblioteca que facilita o processo de fazer requisições HTTP em JavaScript, tornando a comunicação com servidores e APIs mais simples e eficiente. Juntos, eles fornecem as ferramentas necessárias para criar aplicativos web interativos e realizar comunicação de dados de forma eficaz.

***MUI REACT MATERIAL***

MUI (Material-UI) React é uma biblioteca de componentes UI para React baseada no Material Design. Ela fornece uma ampla gama de componentes prontos para uso, estilos e temas personalizáveis, permitindo que você crie interfaces de usuário bonitas e responsivas de forma rápida e fácil.

***


**SISTEMA**

O sistema é uma aplicação que permite aos usuários consultar transferências e saldos bancários de forma fácil e conveniente. Com uma interface intuitiva e organizada, os usuários podem acessar informações detalhadas sobre suas transações financeiras e saldos de contas.

Algumas das principais funcionalidades do sistema incluem:

Consulta de transferências: Os usuários podem visualizar todas as transferências realizadas, incluindo informações como número da transação, data, valor, tipo e operador responsável.

Consulta de saldos: É possível verificar o saldo total de uma conta específica, fornecendo o número da conta como entrada.

Pesquisa por período: Os usuários podem filtrar as transferências e saldos por um período de tempo específico, permitindo uma análise mais detalhada das transações realizadas em determinado período.

Pesquisa por operador: É possível pesquisar transferências realizadas por um operador específico, fornecendo o nome do operador como critério de pesquisa.

Essas funcionalidades fornecem aos usuários acesso rápido e fácil às informações financeiras relevantes, permitindo uma melhor compreensão e acompanhamento das transações e saldos bancários.

Além disso, o sistema utiliza uma interface moderna e responsiva, proporcionando uma experiência de usuário agradável e amigável.



![Tela do sistema](https://i.imgur.com/IPYpx3t.png "TELA")
***tela do sitema***
***

## Instalação

Instalando react + vite

```bash
npx create-vite@latest my-react-app --template react
cd my-react-app
npm run dev

```
MUI react material    
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material

```
## Aprendizados
Durante o desenvolvimento do projeto, tive a oportunidade de aprender mais sobre o React e suas principais características, como componentes, estado, props e ciclo de vida. Isso me permitiu construir uma interface de usuário interativa e dinâmica.

Integração com APIs: Um dos desafios foi integrar o frontend com as APIs do backend para obter os dados de transferências e saldos bancários. Aprendi a utilizar a biblioteca Axios para fazer requisições HTTP e obter os dados necessários.

Resolução de problemas: Durante o desenvolvimento, enfrentei problemas e erros que surgiram ao testar e integrar diferentes partes do sistema. Para superá-los, utilizei ferramentas de depuração, pesquisei soluções em documentações e fóruns, e trabalhei com disciplina para identificar e corrigir os problemas um por um.


Em resumo, construir esse projeto me proporcionou a oportunidade de aprender e aplicar conceitos do React, lidar com integração de APIs e enfrentar desafios comuns no desenvolvimento front-end.
## Referência

 - [React documentação](https://legacy.reactjs.org/docs/react-api.html)
 - [Stackoverflow](https://stackoverflow.com/)
 - [Axios javascript](https://axios-http.com/ptbr/docs/example)

