import AddTodoForm from "@/components/AddTodoForm";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id}>{i++}: {todo.email}</li>
        ))}
      </ul> */}
      <AddTodoForm />


    </main>
  );
}
