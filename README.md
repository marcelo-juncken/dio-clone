# Website Frontend da DIO

Este projeto representa o frontend do website da Digital Innovation One (DIO), desenvolvido com o intuito de criar uma interface rica e interativa para os usuários. O site permite a navegação entre diferentes páginas, como Home, Login, Registro e Feed, utilizando conceitos de autenticação e gerenciamento de estado para uma experiência de usuário segura e personalizada.

## Índice
- [Instalação](#instalação)
- [Como Utilizar](#como-utilizar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Conceitos Avançados do React Aplicados](#conceitos-avançados-do-react-aplicados)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação
Para instalar e executar este projeto, você precisará ter o Node.js instalado em sua máquina. Depois de confirmar a instalação do Node.js, siga estas etapas no diretório do projeto:

```bash
# Instalar dependências do projeto
npm install
# Para simular o backend, instale o json-server
npm install json-server --save-dev
```

## Como Utilizar
Com as dependências instaladas, você pode iniciar a aplicação localmente. Ainda na pasta raiz do projeto, execute os seguintes comandos:

```bash
# Iniciar a aplicação com npm
npm start

# Iniciar o backend
npm run api
```

## Tecnologias Utilizadas
- React
- TypeScript
- Styled Components
- React Hook Form
- React Router Dom
- Axios
- JSON Server
- React Icons
  
## Funcionalidades
- **Navegação entre páginas:** Utiliza `react-router-dom`, permitindo uma navegação suave entre as páginas do site.
- **Autenticação de Usuários:** Utiliza o `localStorage` para gerenciar sessões de usuário, permitindo operações de login e logout com a manutenção do estado de autenticação.
- **Registro de Usuários:** Oferece uma página para novos usuários se registrarem.
- **Feed Personalizado:** Após o login, os usuários podem acessar um feed personalizado.
- **Validação de Formulários:** Utiliza `react-hook-form` e `Yup` para validar os formulários de login e registro.
- **Estilos Personalizados:** Implementa `styled-components` para estilização, permitindo temas customizados e estilos dinâmicos.
- **Ícones:** Usa `react-icons` para adicionar ícones estilizados às interfaces do usuário.
- **Chamadas API:** Utiliza `axios` para fazer chamadas API, simulando interações do backend com `json-server`.

## Conceitos Avançados do React Aplicados:
- useMemo e useCallback: Otimizam o desempenho do aplicativo, reduzindo o número de cálculos e renderizações desnecessárias.
- useEffect: Gerencia efeitos colaterais, como chamadas API e manipulações do estado baseadas em mudanças de propriedades ou estado.
- useContext e useState: Facilitam o gerenciamento de estados globais e locais, promovendo uma arquitetura limpa e modular.
- Lazy Loading com React.lazy e Suspense: Melhora a performance do site, carregando componentes dinamicamente apenas quando necessários.
- React.memo: Utilizado para prevenir renderizações desnecessárias de componentes, melhorando a eficiência especialmente em listas grandes e componentes complexos.

## Contribuição
Contribuições para o aprimoramento deste projeto são bem-vindas. Se você tem uma sugestão para melhorá-lo, sinta-se à vontade para fazer um fork do repositório e criar um pull request, ou abrir uma issue com a tag "melhoria".

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.txt](LICENSE.txt) para mais detalhes.

