import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function TaskEditForm({ task, onSave, onCancel, loading }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    try {
      await onSave(task.id, {
        title: title.trim(),
        description: description.trim(),
      });
    } catch {
      // Parent handles API error display
    }
  };

  return (
    <Card className="border-primary/20 ring-1 ring-primary/10">
      <CardHeader>
        <CardTitle className="text-base">Edit task</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="space-y-2">
            <Label htmlFor={`edit-title-${task.id}`}>Title</Label>
            <Input
              id={`edit-title-${task.id}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`edit-description-${task.id}`}>Description</Label>
            <Textarea
              id={`edit-description-${task.id}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Save changes
          </Button>
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
