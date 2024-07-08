import React, { useEffect, useState } from 'react'
import TodoList from '../components/TodoList.jsx'
import NewTodoButton from '../components/NewTodoButton.jsx'
import TodoContent from '../components/TodoContent.jsx'
import NoTodoContent from '../components/NoTodoContent.jsx'

function TodoPage(props)
{
  const [todoItems, setTodoItems] = useState([]);
  const [activeTodoIndex, setActiveTodoIndex] = useState(-1);

  useEffect(() =>
  {
    setTodoItems(props.todoItems);
  }, [props.todoItems]);

  const handleOnTitleChanged = (value) =>
  {
    const newItems = [...todoItems];
    newItems[activeTodoIndex].title = value;
    setTodoItems(newItems);
  };

  const handleOnContentChanged = (value) =>
  {
    const newItems = [...todoItems];
    newItems[activeTodoIndex].content = value;
    setTodoItems(newItems);
  };

  const handleCreateNewTodo = () =>
  {
    const item = {
      title: 'New Todo',
      content: 'My new todo item.'
    };

    setTodoItems([...todoItems, item]);
  }

  const handleDeleteTodo = () =>
  {
    const newItems = [...todoItems];
    newItems.splice(activeTodoIndex, 1);
    setTodoItems(newItems);
    setActiveTodoIndex(-1);
  }
  
  return (
    <div className="todo-page">
      <div className="sidebar">
        <h2 className="sidebar-header">Todos</h2>
        <div className="sidebar-content">
          <TodoList todoItems={todoItems}
            onTodoSelected={setActiveTodoIndex}
            activeTodoIndex={activeTodoIndex} />
          
          <NewTodoButton onClick={handleCreateNewTodo}/>
        </div>
      </div>

      <div className="content">
        {activeTodoIndex !== -1 ?
          <TodoContent key={todoItems[activeTodoIndex].id}
            todoItem={todoItems[activeTodoIndex]}
            onTitleChanged={handleOnTitleChanged}
            onContentChanged={handleOnContentChanged}
            onDelete={handleDeleteTodo} /> :
          <NoTodoContent />}
      </div>
    </div>
  )
}

export default TodoPage