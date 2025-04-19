export interface TFilterOption {
  name: string;
  label: string;
}

export interface TFilterProps {
  options: TFilterOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (option: TFilterOption) => void;
}
