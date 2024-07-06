export type Provider = "gmail" | "outlook" | "yahoo" | "protonmail" | "aruba";

export interface SelectOption<T> {
  value: T;
  label: string;
}

export interface Email {
  email: string;
  provider: Provider;
}
