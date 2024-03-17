"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { createBooking } from "@/actions/createBooking";
import Select from "react-select";
import { LocalTime } from "@js-joda/core";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DatePickerWithRange from "@/components/ui/datepicker";

const formSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  startHour: z.string(),
  endHour: z.string(),
});

export default function CreateBookingForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startDate: "",
      endDate: "",
      startHour: "",
      endHour: z.string().refine(
        (endHour, { startHour }) => {
          if (!startHour || !endHour) return true;
          const startTime = LocalTime.parse(startHour);
          const endTime = LocalTime.parse(endHour);
          return startTime.isBefore(endTime);
        },
        {
          message: "End hour must be after start hour",
          path: ["endHour"],
        }
      ),
    },
  });

  const startHourValue = form.watch("startHour");
  const startHour = startHourValue
    ? LocalTime.parse(startHourValue.value)
    : LocalTime.of(0, 0);
  const hours = Array.from({ length: 24 }, (_, hour) => {
    const time = LocalTime.of(hour, 0);
    return {
      value: time.toString(),
      label: time.toString(),
      isDisabled: time.isBefore(startHour),
    };
  });

  return (
    <Form {...form}>
      <form action={createBooking} className="space-y-8">
        <DatePickerWithRange />
        <FormField
          control={form.control}
          name="startHour"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Hour</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  options={hours}
                  placeholder="Select Start Hour"
                  isClearable
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endHour"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Hour</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  options={hours}
                  placeholder="Select End Hour"
                  isClearable
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
