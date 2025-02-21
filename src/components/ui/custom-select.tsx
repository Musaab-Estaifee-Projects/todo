import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown, Loader } from "lucide-react";
import { useId, useState } from "react";

interface Option {
	label: string;
	value: string;
}

interface CustomSelectProps {
	label?: string;
	data: Option[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	isLoading?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	label,
	data,
	value,
	onChange,
	placeholder = "Seleziona",
	isLoading = false,
}) => {
	const id = useId();
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");

	const filteredData = data.filter((item) =>
		item.label.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="space-y-2">
			{label && <Label htmlFor={id}>{label}</Label>}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						id={id}
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-full h-[45px] justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
					>
						<span className={cn("truncate", !value && "text-muted-foreground")}>
							{value
								? data.find((item) => item.value === value)?.label
								: placeholder}
						</span>
						<ChevronDown
							size={16}
							strokeWidth={2}
							className="shrink-0 text-muted-foreground/80"
							aria-hidden="true"
						/>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-full min-w-[var(--radix-popper-anchor-width)]  p-0"
					align="start"
				>
					<Command shouldFilter={false}>
						<CommandInput
							placeholder="Ricerca..."
							className=""
							value={search}
							onValueChange={setSearch}
							// defaultValue={value}
							// defaultChecked={value}
						/>
						<CommandList>
							{isLoading ? (
								<CommandGroup>
									<div className="flex items-center justify-center text-center p-2">
										<Loader className="animate-spin" />
									</div>
								</CommandGroup>
							) : filteredData.length === 0 ? (
								<CommandEmpty>Nessun risultato trovato.</CommandEmpty>
							) : (
								<CommandGroup>
									{filteredData.map((item) => (
										<CommandItem
											key={item.value}
											value={item.value}
											onSelect={(currentValue) => {
												onChange(currentValue === value ? "" : currentValue);
												setOpen(false);
											}}
										>
											{item.label}
											{value === item.value && (
												<Check size={16} strokeWidth={2} className="ml-auto" />
											)}
										</CommandItem>
									))}
								</CommandGroup>
							)}
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default CustomSelect;
