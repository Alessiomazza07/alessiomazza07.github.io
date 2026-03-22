const STORAGE_KEY = 'todoListData';
let todosData = {
    todos: [],
    nextId: 1
};
let currentFilter = 'all';
document.addEventListener('DOMContentLoaded', init);
function init() {
    loadTodos();
    setupEventListeners();
    renderTodos();
}

function loadTodos() {
    try {
        const jsonString = localStorage.getItem(STORAGE_KEY);
        if (jsonString) {
            todosData = JSON.parse(jsonString);
        } else {
            console.log('Nessun dato salvato, uso dati vuoti');
        }
    } catch (error) {
        console.error('Errore caricamento:', error);
        todosData = { todos: [], nextId: 1 };
    }
}

function saveTodos() {
    try {
        const jsonString = JSON.stringify(todosData);
        localStorage.setItem(STORAGE_KEY, jsonString);
    } catch (error) {
        console.error('Errore salvataggio:', error);
    }
}

function addTodo(title, description = '') {
    if (!title || title.trim() === '') {
        return false;
    }
    const newTodo = {
        id: todosData.nextId,
        title: title.trim(),
        description: description.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    todosData.todos.push(newTodo);
    todosData.nextId++;
    saveTodos();
    renderTodos();
    return true;
}

function deleteTodo(id) {
    if (!confirm('Sei sicuro di voler eliminare questa task?')) {
        console.log('Eliminazione annullata');
        return; 
    }
    todosData.todos = todosData.todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function toggleTodo(id) {
    const todo = todosData.todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    } else {
        console.warn('⚠️ Task non trovata:', id);
    }
}

function renderTodos() {
    const todoList = document.getElementById('container');
    todoList.innerHTML = '';
    const filteredTodos = getFilteredTodos();
  console.log(filteredTodos);
    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<p class="empty-message">Nessuna task da visualizzare</p>';
        updateCounter();
        return;
    }
    filteredTodos.forEach((todo, index) => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
    });
    updateCounter();
}

function createTodoElement(todo) {
    const div = document.createElement('div');
    div.className = `task ${todo.completed ? 'completed' : ''}`;
    div.dataset.id = todo.id;
    div.innerHTML = `
        <input type="checkbox" 
               class="todo-checkbox" 
               ${todo.completed ? 'checked' : ''}>
        <div class="task-content">
            <h3 class="title">${escapeHtml(todo.title)}</h3>
            ${todo.description ? `<p class="todo-description">${escapeHtml(todo.description)}</p>` : ''}
            <small class="todo-date">${formatDate(todo.createdAt)}</small>
        </div>
        <div class="btn-section">
            <button class="delete">Delete</button>
        </div>
    `;
    const checkbox = div.querySelector('.todo-checkbox');
    checkbox.addEventListener('change', () => {
        console.log(`Checkbox cliccata per task ${todo.id}`);
        toggleTodo(todo.id);
    });
    const btnDelete = div.querySelector('.delete');
    btnDelete.addEventListener('click', () => {
        console.log(`Elimina cliccato per task ${todo.id}`);
        deleteTodo(todo.id);
    });
    return div;
}

function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todosData.todos.filter(t => !t.completed);
        case 'completed':
            return todosData.todos.filter(t => t.completed);
        default:
            return todosData.todos;
    }
}

function updateCounter() {
    const activeCount = todosData.todos.filter(t => !t.completed).length;
    const countElement = document.getElementById('count');
    countElement.textContent = `${activeCount} active ${activeCount === 1 ? 'task' : 'tasks'}`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(isoString) {
    const date = new Date(isoString);
    const dateStr = date.toLocaleDateString('it-IT');
    const timeStr = date.toLocaleTimeString('it-IT', {
        hour: '2-digit',
        minute: '2-digit'
    });
    return `${dateStr}, ${timeStr}`;
}

function setupEventListeners() {
    const add = document.getElementById('add');
    add.addEventListener('click', handleAddTodo);
    const title = document.getElementById('title');
    title.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    });
    const filterButtons = document.querySelectorAll('.filter');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterChange);
    });
}

function handleAddTodo() {
    const titleInput = document.getElementById('title');
    const descInput = document.getElementById('description');
    const title = titleInput.value;
    const description = descInput.value;
    const success = addTodo(title, description);
    if (success) {
        titleInput.value = '';
        descInput.value = '';
        titleInput.focus();
    } else {
        titleInput.focus();
        console.log('Aggiunta fallita (validazione)');
    }
}

function handleFilterChange(e) {
    document.querySelectorAll('.filter').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    console.log(`Nuovo filtro: ${currentFilter}`);
    renderTodos();
}
