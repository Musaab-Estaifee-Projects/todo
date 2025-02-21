import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownNavProps, DropdownProps } from "react-day-picker";
import { it } from "date-fns/locale";

const CustomCalendar = ({
  date,
  setDate,
}: {
  date: Date;
  setDate: (d: Date | undefined) => void;
}) => {
  const handleCalendarChange = (
    _value: string | number,
    _e: React.ChangeEventHandler<HTMLSelectElement>
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    _e(_event);
  };

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border border-border p-2"
        classNames={{
          month_caption: "mx-0",
        }}
        captionLayout="dropdown"
        defaultMonth={new Date()}
        startMonth={new Date(1980, 6)}
        hideNavigation
        locale={it}
        components={{
          DropdownNav: (props: DropdownNavProps) => {
            return (
              <div className="flex w-full items-center gap-2">
                {props.children}
              </div>
            );
          },
          Dropdown: (props: DropdownProps) => {
            return (
              <Select
                value={String(props.value)}
                onValueChange={(value: string | number) => {
                  if (props.onChange) {
                    handleCalendarChange(value, props.onChange);
                  }
                }}
              >
                <SelectTrigger className="h-8 w-fit font-medium first:grow capitalize">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))] capitalize">
                  {props.options?.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={String(option.value)}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          },
        }}
      />
    </div>
  );
};

export default CustomCalendar;
