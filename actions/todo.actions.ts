"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodosAction = async () => {
  return await prisma.todo.findMany();
};

export const createTodoAction = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
};

export const deleteTodoAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
};
export const updateTodoAction = async () => {};
