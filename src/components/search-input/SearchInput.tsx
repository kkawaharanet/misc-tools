import { Cross2Icon } from "@radix-ui/react-icons";
import { IconButton, TextField } from "@radix-ui/themes";
import type React from "react";

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  icon?: React.ReactNode;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  onClear,
  icon,
  placeholder,
}: SearchInputProps) {
  return (
    <TextField.Root
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {icon && <TextField.Slot>{icon}</TextField.Slot>}
      {value.length > 0 && (
        <TextField.Slot side="right">
          <IconButton size="1" variant="ghost" onClick={onClear}>
            <Cross2Icon />
          </IconButton>
        </TextField.Slot>
      )}
    </TextField.Root>
  );
}
