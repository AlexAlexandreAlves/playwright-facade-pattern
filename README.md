# Facade Pattern

Este projeto é uma suíte de testes automatizados utilizando [Playwright](https://playwright.dev/) para validar fluxos de autenticação e cadastro em uma aplicação web. O projeto adota o **Facade Pattern** para organizar e simplificar a interação com as páginas, tornando os testes mais legíveis, reutilizáveis e de fácil manutenção.

## Contexto

O objetivo deste repositório é demonstrar como estruturar testes automatizados de ponta a ponta (E2E) utilizando o padrão de projeto **Facade**. Esse padrão encapsula operações complexas de páginas em classes de fachada, expondo métodos de alto nível para os testes, sem que eles precisem conhecer detalhes de implementação dos elementos da interface.

## Sobre o Facade Pattern

O **Facade Pattern** (Padrão Fachada) é utilizado para fornecer uma interface simplificada para um conjunto de interfaces em um subsistema. No contexto deste projeto, cada fluxo de negócio (ex: autenticação, cadastro) possui uma fachada (`AuthFacade`, `RegisterFacade`) que abstrai as interações com os elementos da página, facilitando a escrita e manutenção dos testes.

**Exemplo:**
```typescript
const register = new RegisterFacade(page);
await register.registerAs("email@teste.com", "Nome", "senha", "senha");
```

## Estrutura do Projeto

- `ui/pages/`: Page Objects com os elementos e ações de cada página.
- `ui/facade/`: Facades que encapsulam fluxos completos de negócio.
- `tests/`: Arquivos de teste automatizados.
- `playwright.config.ts`: Configuração do Playwright (incluindo baseURL).

## Comandos Essenciais

- **Executar todos os testes:**
  ```
  npx playwright test
  ```

- **Executar testes em modo UI interativo:**
  ```
  npx playwright test --ui
  ```

- **Executar testes em um navegador específico:**
  ```
  npx playwright test --project=chromium
  ```

- **Executar um arquivo de teste específico:**
  ```
  npx playwright test tests/login.test.ts
  ```

- **Executar em modo debug:**
  ```
  npx playwright test --debug
  ```

- **Gerar testes automaticamente com Codegen:**
  ```
  npx playwright codegen
  ```

## Requisitos

- Node.js instalado
- Dependências instaladas com:
  ```
  npm install
  ```

## Observações

- O projeto utiliza `baseURL` configurado no `playwright.config.ts`, permitindo o uso de caminhos relativos nos testes.
- Como a aplicação de exemplo não possui banco de dados persistente, os dados criados existem apenas durante a sessão.
