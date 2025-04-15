export interface TFilterOption {
  name: string;
  label: string;
}

export interface TFilterProps {
  options: TFilterOption[];
  defaultValue?: string;
  onChange?: (option: TFilterOption) => void;
}
