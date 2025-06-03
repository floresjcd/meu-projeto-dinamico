"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("txtInput");
    const button = document.getElementById("btnSubmit");
    const output = document.getElementById("output");
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    // Evento do primeiro exemplo
    button.addEventListener("click", () => {
        if (input && output) {
            const texto = input.value.trim();
            if (texto !== "") {
                output.textContent = `Você digitou: ${texto}`;
                input.value = "";
            }
            else {
                output.textContent = "Por favor, digite algo.";
            }
        }
    });
    // Função para criar item da lista de tarefas
    function createTaskElement(text) {
        const li = document.createElement("li");
        li.textContent = text;
        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Remover";
        btnRemove.addEventListener("click", () => {
            taskList.removeChild(li);
        });
        li.appendChild(btnRemove);
        return li;
    }
    // Adicionar tarefa
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = "";
        }
    });
    // Adicionar tarefa com Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
