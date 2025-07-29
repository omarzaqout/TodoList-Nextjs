import { getUserTodosAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation"; 

export default async function Home() {
  const { userId } = await auth();
  const todos = await getUserTodosAction({ userId });
  // if (!userId) {
  //   return redirect("/sign-in");
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <AddTodoForm userId={userId || ""} />
      <TodoTable todos={todos} />


    </main>
  );
}
