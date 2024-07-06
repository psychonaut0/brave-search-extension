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

// Check if the provider is allowed to have multiple emails
export function isUniqueProvider(emails: Email[], provider: Provider) {
  const uniqueProviders: Provider[] = ["outlook", "aruba"];
  return (
    uniqueProviders.includes(provider) &&
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
