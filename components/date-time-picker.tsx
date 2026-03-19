"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format, isBefore, startOfDay } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function DateTimePicker({
  value,
  onChange,
}: {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}) {
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const today = new Date();
  const minDate = startOfDay(today);
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 6);

  const disabledDates = (date: Date) => {
    return isBefore(date, startOfDay(today)) || date.getDay() === 3;
  };

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const isToday = date && format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");
  const currentHour = today.getHours();

  const isHourDisabled = (hour: number) => {
    if (!isToday) return false;
    const hour24 = hour % 12 + (currentHour >= 12 ? 12 : 0);
    return hour24 <= currentHour;
  };

  const isMinuteDisabled = (minute: number) => {
    if (!isToday) return false;
    const hour24 = date ? (date.getHours() % 12) + (date.getHours() >= 12 ? 12 : 0) : 0;
    const currentHour24 = (currentHour % 12) + (currentHour >= 12 ? 12 : 0);
    return hour24 === currentHour24 && minute <= today.getMinutes();
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      if (!date) {
        newDate.setHours(9, 0, 0, 0);
      } else {
        newDate.setHours(date.getHours(), date.getMinutes());
      }
      setDate(newDate);
      onChange?.(newDate);
    }
  };

  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string,
  ) => {
    if (date) {
      const newDate = new Date(date);
      if (type === "hour") {
        newDate.setHours(
          (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0),
        );
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      } else if (type === "ampm") {
        const currentHours = newDate.getHours();
        newDate.setHours(
          value === "PM" ? currentHours + 12 : currentHours - 12,
        );
      }
      setDate(newDate);
      onChange?.(newDate);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal bg-background border-input text-foreground placeholder:text-muted-foreground",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "MM/dd/yyyy hh:mm aa")
          ) : (
            <span>Selecciona fecha y hora</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="sm:flex pt-8">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            showOutsideDays={false}
            initialFocus
            disabled={disabledDates}
            fromDate={minDate}
            toDate={maxDate}
          />
          <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {hours.reverse().map((hour) => (
                  <Button
                    key={hour}
                    size="icon"
                    variant={
                      date && date.getHours() % 12 === hour % 12
                        ? "default"
                        : "ghost"
                    }
                    className="sm:w-full shrink-0 aspect-square"
                    disabled={isHourDisabled(hour)}
                    onClick={() => handleTimeChange("hour", hour.toString())}
                  >
                    {hour}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                  <Button
                    key={minute}
                    size="icon"
                    variant={
                      date && date.getMinutes() === minute ? "default" : "ghost"
                    }
                    className="sm:w-full shrink-0 aspect-square"
                    disabled={isMinuteDisabled(minute)}
                    onClick={() =>
                      handleTimeChange("minute", minute.toString())
                    }
                  >
                    {minute}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="">
              <div className="flex sm:flex-col p-2">
                {["AM", "PM"].map((ampm) => (
                  <Button
                    key={ampm}
                    size="icon"
                    variant={
                      date &&
                      ((ampm === "AM" && date.getHours() < 12) ||
                        (ampm === "PM" && date.getHours() >= 12))
                        ? "default"
                        : "ghost"
                    }
                    className="sm:w-full shrink-0 aspect-square"
                    onClick={() => handleTimeChange("ampm", ampm)}
                  >
                    {ampm}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
