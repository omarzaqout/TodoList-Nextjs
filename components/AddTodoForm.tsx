"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { todoformSchema, TodoFormValues } from "@/schema";
import { createTodoAction } from '@/actions/todo.actions';
import { Checkbox } from '@/components/ui/checkbox';
const AddTodoForm = () => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoformSchema),
        defaultValues: {
            title: "",
            body: "",
            completed: false,
        },
        mode: "all",

    })

    const onSubmit = async (data: TodoFormValues) => {
        console.log(data);
        await createTodoAction({
            title: data.title,
            body: data.body,
            completed: data.completed,
        });
        setShowSuccessAlert(true);
    }

    return (
        <>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="default"> <Plus />Add To Do</Button>
                    </DialogTrigger>
                    <DialogContent className="">
                        <DialogHeader>
                            <DialogTitle>New Todo</DialogTitle>
                            <DialogDescription>
                                Make new todo here. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">

                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Go to Gym" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="body"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="i want to go to gym at 5pm"
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    You can <span>@mention</span> other users and organizations.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="completed"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-4">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormLabel>Completed</FormLabel>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" >Save changes</Button>

                                </form>
                            </Form>
                        </div>

                    </DialogContent>
                </form>
            </Dialog>
            <AlertDialog open={showSuccessAlert} onOpenChange={setShowSuccessAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Added successfully✅</AlertDialogTitle>
                        <AlertDialogDescription>
                            added successfully
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setShowSuccessAlert(false)}>
                            Accept
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default AddTodoForm
