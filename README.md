# 📱 Navegação com Expo Router

Este projeto demonstra como estruturar a navegação em um aplicativo React Native utilizando o **Expo Router**, abordando diferentes padrões como **Stack**, **Tabs** e **Drawer**.

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript (opcional)]

## 📂 Funcionalidades implementadas

- Navegação em pilha (Stack Navigation)
- Navegação por abas (Tab Navigation)
- Navegação por menu lateral (Drawer Navigation)
- Tipagem de rotas
- Passagem de parâmetros entre telas
- Redirecionamento de rotas
- Customização de ícones e rótulos
- Aninhamento de rotas

## 🧭 Estrutura do projeto

## 📁 Estrutura de Pastas

```plaintext
app/
├── (drawer)/_layout.tsx         # Layout do Drawer
│   └── (tabs)/_layout.tsx       # Layout das Tabs
│       ├── index.tsx            # Tela principal (produtos)
│       ├── order.tsx            # Tela de pedidos
│       └── product.tsx          # Detalhes do produto
├── config.tsx                   # Tela de configurações
└── _layout.tsx                  # Layout raiz com Stack
```


## 📝 Créditos

Baseado nos módulos do curso:

- **Iniciando com Expo Router**
- **Aprofundando na navegação**

---

Feito com 💙 utilizando React Native + Expo Router.
