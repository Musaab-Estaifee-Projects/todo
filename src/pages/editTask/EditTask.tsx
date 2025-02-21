import { useAtom } from "jotai";
import { useNavigate, useParams } from "react-router";
import { tasksAtom } from "@/atoms/tasksAtom";
import { saveTasksToLocalStorage } from "@/lib/localStroage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateTaskSchema } from "@/validators/updateTaskSchema";
import { toast } from "@/hooks/use-toast";

const EditTask = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useAtom(tasksAtom);
  const navigate = useNavigate();

  const taskToEdit = tasks.find((task) => task.id === id);

  const form = useForm<z.infer<typeof updateTaskSchema>>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      title: taskToEdit?.title,
      description: taskToEdit?.description,
    },
  });

  if (!taskToEdit) {
    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold text-red-500 text-center">
          Task not found!
        </h1>
      </div>
    );
  }

  function onSubmit(data: z.infer<typeof updateTaskSchema>) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, title: data.title, description: data.description }
        : task
    );

    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    toast({
      title: "Task Updated",
      description: "Your task has been updated successfully",
      variant: "default",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10 w-1/2 max-md:w-full max-md:p-6 mx-auto">
      <h1 className="text-4xl font-extrabold">Edit Task</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Task Title <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Update task name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Update task details..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="bg-blue-500">
            Update Task
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditTask;
