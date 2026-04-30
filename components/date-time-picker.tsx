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
  const isToday =
    date && format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();

  const getHour24 = (hour: number, ampm: "AM" | "PM") => {
    if (ampm === "AM") {
      return hour === 12 ? 0 : hour;
    }

    return hour === 12 ? 12 : hour + 12;
  };

  const isHourDisabled = (hour: number) => {
    if (!isToday) return false;

    const selectedAmPm = date && date.getHours() >= 12 ? "PM" : "AM";
    const hour24 = getHour24(hour, selectedAmPm);

    return hour24 < currentHour;
  };

  const isMinuteDisabled = (minute: number) => {
    if (!isToday) return false;
    if (!date) return false;

    return date.getHours() === currentHour && minute < currentMinute;
  };

  const isAmPmDisabled = (ampm: "AM" | "PM") => {
    if (!isToday) return false;
    if (!date) return false;

    const currentAmPm = currentHour >= 12 ? "PM" : "AM";
    return ampm === "AM" && currentAmPm === "PM";
  };

  const adjustDateIfInPast = (candidate: Date) => {
    const isCandidateToday =
      format(candidate, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");

    if (!isCandidateToday) return candidate;
    if (candidate.getTime() >= today.getTime()) return candidate;

    const roundedNow = new Date(today);
    roundedNow.setSeconds(0, 0);

    return roundedNow;
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      if (!date) {
        newDate.setHours(9, 0, 0, 0);
      } else {
        newDate.setHours(date.getHours(), date.getMinutes());
      }

      const adjustedDate = adjustDateIfInPast(newDate);

      setDate(adjustedDate);
      onChange?.(adjustedDate);
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
        const isCurrentlyPm = currentHours >= 12;

        if (value === "PM" && !isCurrentlyPm) {
          newDate.setHours(currentHours + 12);
        }

        if (value === "AM" && isCurrentlyPm) {
          newDate.setHours(currentHours - 12);
        }
      }

      const adjustedDate = adjustDateIfInPast(newDate);

      setDate(adjustedDate);
      onChange?.(adjustedDate);
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
                    disabled={isAmPmDisabled(ampm as "AM" | "PM")}
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
