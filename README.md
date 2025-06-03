# 🧱 Estrutura das pastas

```
meu-projeto-dinamico/
│
├── index.html              # Página principal (na raiz)
├── tsconfig.json           # Configuração do TypeScript
├── package.json            # (Opcional) Se estiver usando npm
│
├── src/                    # Código fonte TypeScript
│   └── app.ts              # Arquivo principal em TypeScript
│
├── dist/                   # Pasta de saída - apenas arquivos JS compilados
│   └── app.js              # Script gerado após compilação
│
└── assets/
    └── css/
        └── styles.css      # Estilo da página
```

---

# ✅ Passo a passo no Visual Studio Code (Windows)

## 1. Crie a pasta do projeto

No terminal do VSCode:

```bash
mkdir meu-projeto-dinamico
cd meu-projeto-dinamico
```

## 2. Crie as pastas necessárias

```bash
mkdir src dist assets\css
```

> Usamos `\` no Windows para evitar erro de sintaxe.

---

## 3. Crie os arquivos nas respectivas pastas

### 📄 `tsconfig.json` (na raiz do projeto)


```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "lib": ["es2020", "dom"]
  },
  "include": ["./src/**/*"]
}
```
Opcionalmente você pode executar o seguinte comando e fazer as alterações conforme descrito acima:
```bash
tsc --init
```

> ✅ Este `tsconfig.json` diz:
> - Os arquivos `.ts` estão em `src/`
> - Os arquivos compilados irão para `dist/`

---

### 📄 `src/app.ts`


```ts
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("txtInput") as HTMLInputElement;
    const button = document.getElementById("btnSubmit") as HTMLButtonElement;
    const output = document.getElementById("output") as HTMLElement;

    button.addEventListener("click", () => {
        if (input && output) {
            const texto = input.value.trim();
            if (texto !== "") {
                output.textContent = `Você digitou: ${texto}`;
                input.value = "";
            } else {
                output.textContent = "Por favor, digite algo.";
            }
        }
    });
});
```

---

### 📄 `assets/css/styles.css`


```css
body {
    font-family: Arial, sans-serif;
    margin: 40px;
    background-color: #f5f5f5;
}

input[type="text"] {
    padding: 10px;
    width: 200px;
    margin-right: 10px;
}

button {
    padding: 10px 15px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
}

#output {
    margin-top: 20px;
    font-weight: bold;
}
```

---

### 📄 `index.html` (na raiz do projeto)


```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Página Dinâmica com TypeScript</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <h1>Minha Página Dinâmica</h1>

    <input type="text" id="txtInput" placeholder="Digite algo">
    <button id="btnSubmit">Enviar</button>
    <p id="output"></p>

    <script src="dist/app.js"></script>
</body>
</html>
```

> ⚠️ Repare que:
> - O CSS vem de `assets/css/styles.css` (relativo à raiz)
> - O JS vem de `dist/app.js`, que será gerado após a compilação

---

## 4. Instale o TypeScript localmente (opcional mas recomendado)

```bash
npm init -y
npm install typescript --save-dev
```

---

## 5. Compile o projeto

No terminal:

```bash
npx tsc
```

Esse comando compila `src/app.ts` e gera `dist/app.js`.

Se quiser compilar automaticamente ao salvar:

```bash
npx tsc --watch
```

---

## 6. Abra a página no navegador

Use a extensão **Live Server** do VSCode:

- Clique com o botão direito em `index.html` → **"Open with Live Server"**

✅ A página abrirá no navegador e estará totalmente funcional!

---

## ✅ Resumo dos Comandos Úteis

| Tarefa                          | Comando |
|-------------------------------|---------|
| Iniciar projeto               | `mkdir meu-projeto-dinamico && cd meu-projeto-dinamico` |
| Criar pastas                  | `mkdir src dist assets\css` |
| Instalar TypeScript           | `npm install typescript --save-dev` |
| Compilar TypeScript           | `npx tsc` |
| Compilar automaticamente      | `npx tsc --watch` |
| Abrir no Live Server          | Clique com botão direito em `index.html` → Open with Live Server |

---

## 🎯 Benefícios dessa estrutura

- **Organização clara**: código fonte (`src/`), recursos (`assets/`) e saída (`dist/`) bem separados.
- **Só o essencial na raiz**: `index.html` e configurações principais.
- **Pronta para deploy**: basta enviar `index.html`, `assets/` e `dist/` para um servidor web.

---