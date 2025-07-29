import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ITodo } from "@/interfaces"
import { Badge } from "./ui/badge"
import TodosTableActions from "./TodosTableActions";




export default function TodoTable({ todos }: { todos: ITodo[] }) {
    return (
        <Table>
            <TableCaption>A list of your Todo.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >Id</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead className="flex items-center justify-center">
                        Actions
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.map((todo) => (
                    <TableRow key={todo?.id}>
                        <TableCell className="font-medium">{todo?.id}</TableCell>
                        <TableCell>{todo?.title}</TableCell>
                        <TableCell>{todo?.completed ?
                            <Badge>Completed</Badge> :
                            <Badge variant={'secondary'}>Incompleted</Badge>
                        }</TableCell>
                        <TableCell className="flex items-center space-x-2 justify-center">
                            <TodosTableActions todo={todo} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{!todos.length ? "YOU DON'T HAVE ANY TODO YET" : todos.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
