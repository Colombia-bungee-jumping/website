"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        root: "rdp",
        months: "flex flex-col gap-4",
        month: "space-y-4",

        caption: "flex justify-center relative items-center",
        caption_label: "text-sm font-medium",

        nav: "flex items-center gap-1",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "absolute left-3 h-7 w-7 p-0 top-3",
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-3 h-7 w-7 p-0 top-3",
        ),

        table: "w-full border-collapse",

        head_row: "grid grid-cols-7",
        head_cell:
          "text-muted-foreground text-[0.8rem] font-normal text-center",

        row: "grid grid-cols-7 mt-2",

        cell: "text-center text-sm p-0 relative",

        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal mx-auto",
        ),

        day_selected: "bg-primary text-primary-foreground hover:bg-primary",

        day_today: "bg-accent text-accent-foreground",

        day_outside: "text-muted-foreground opacity-50",

        day_disabled: "text-muted-foreground/40 opacity-100 bg-muted/30 rounded-md",

        day_hidden: "invisible",

        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  );
}
