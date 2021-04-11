import React, { useState } from "react";
import Header from "./Header";
import Todo from "../components/Todo";
import { auth, firestore } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../firebase";

export default function Form() {
  const [todo, setTodo] = useState("");
  const todoRef = firestore.collection(`/todos`);
  const [todos] = useCollectionData(todoRef, { idField: "id" });

  const updateTodo = (event) => {
    const note = event.target.value;
    setTodo(note);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    todoRef.add({
      title: todo,
      isChecked: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodo("");
  };

  const complete = (id, isChecked) =>
    todoRef.doc(id).set({ isChecked: !isChecked }, { merge: true });

  const deleteTodo = (id) => todoRef.doc(id).delete();

  //   const signOut = () => auth.signOut();

  return (
    <div>
      <Header />
      <form onSubmit={handelSubmit}>
        <input
          onChange={updateTodo}
          name="todo"
          placeholder="todo comes here..."
          value={todo}
        />
        <button type="submit">Add</button>
        {/* <button onClick={signOut}>Sign Out</button> */}
      </form>
      {todos &&
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              title={todo.title}
              isChecked={todo.isChecked}
              id={todo.id}
              deleteTodo={() => deleteTodo(todo.id)}
              checked={() => complete(todo.id, todo.isChecked)}
            />
          );
        })}
    </div>
  );
}
