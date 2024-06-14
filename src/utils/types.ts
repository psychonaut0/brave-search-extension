export type Provider = "gmail" | "outlook" | "yahoo";

export interface Email {
  email: string;
  provider: Provider;
}
