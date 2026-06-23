import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TASK_FILTERS, TASK_SORT_OPTIONS } from "@/utils/constants";

const filterOptions = [
  { value: TASK_FILTERS.ALL, label: "All" },
  { value: TASK_FILTERS.PENDING, label: "Pending" },
  { value: TASK_FILTERS.COMPLETED, label: "Completed" },
];

const sortOptions = [
  { value: TASK_SORT_OPTIONS.NEWEST, label: "Newest First" },
  { value: TASK_SORT_OPTIONS.OLDEST, label: "Oldest First" },
  { value: TASK_SORT_OPTIONS.COMPLETED_FIRST, label: "Completed First" },
  { value: TASK_SORT_OPTIONS.PENDING_FIRST, label: "Pending First" },
];

export function TaskFilters({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className="pl-9"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={filter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
