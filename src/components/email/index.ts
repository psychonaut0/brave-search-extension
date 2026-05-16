import { Email, Provider, SelectOption } from "../../utils/types";

export function getProviderHref(provider: Provider, email: string) {
  switch (provider) {
    case "gmail":
      return `https://mail.google.com/mail/u/${email}`;
    case "outlook":
      return `https://outlook.office365.com/mail/`;
    case "yahoo":
      return `https://mail.yahoo.com/`;
    case "protonmail":
      return `https://mail.protonmail.com/u/${email}`;
    case "aruba":
      return `https://webmail.aruba.it/`;
    default:
      return "";
  }
}

// Providers that only allow one email at a time (web UI is single-account).
const SINGLE_ACCOUNT_PROVIDERS: Provider[] = ["outlook", "aruba"];

export function isProviderAtLimit(emails: Email[], provider: Provider) {
  return (
    SINGLE_ACCOUNT_PROVIDERS.includes(provider) &&
    emails.some((email) => email.provider === provider)
  );
}

export const emailOptions: SelectOption<Provider>[] = [
  {
    value: "gmail",
    label: "Gmail",
  },
  {
    value: "outlook",
    label: "Outlook",
  },
  {
    value: "yahoo",
    label: "Yahoo",
  },
  {
    value: "protonmail",
    label: "Proton Mail",
  },
  {
    value: "aruba",
    label: "Aruba",
  },
];
