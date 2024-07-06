export function replaceFavicon() {
  const favicons = document.querySelectorAll(
    'link[rel="icon"], link[rel="shortcut icon"]'
  );
  favicons.forEach((favicon) => favicon.remove());

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAilBMVEUAAAD+/vz////6+vrt7e7////9/f3////////7+/v////t8+3///9cf77XJihErEL0wAPz9/eMpdGy27PcOjjU6tnvpKT75Ixft1rF0OjfTk/75+H309KQzpDzvbzlbGV7xHr000xFrEKywuDog4GvvSR/mcx+mcxTkJBErULE0On75+DkbGVFrUKnKiSeAAAADHRSTlMA/M9YK+xyEqhCkisUqviYAAABqklEQVQ4y7WU6VaDMBCFnUAgwShFFhEorVp3ff/XM80NDIXW7Ry/fy3fubN0ytm/E+soUUolkY6/0sJEEBkLkRRRfFqTZoqMwmPaeSTMHBEsUwNBZgkpPfMiVF2a8tAMBo/aftc0zabqsqF8OB1jaK/bFZeeTe97UdPC/ruquWSKCqEyWARWLo6p0I0YR08OvaIpCle8NSAaAjFJXzjrveq7rtoVzgOIHAJb11/T4zF1Vcs7QmSMDq9Xe6/jpwbw4BpncLtaFWh/iQh5N28ry8YHZgw2pNEiKltuUe/mauQJplulYvHaQLxgbn4q3v8ycd5jNu3RiaVbieapW+s91KUBZMme9mLGU2vp9/iQpvlkza9773HcI/8y1kvrfPSyK54l8deIB9t0b65Lcp9K5z26yhRAjHE9ZW3FO6vmlm2dPmNmHOQQyaaTLS+pNe8JgbMLp7L+gAoxzbEtFfOfkLy5RaKj9p50I4NQDaPmY3k/lSGM7NH8Oinz9Xa9RhrvkIvDXECjx9XlEU8m8L4LVdDmxJGgaVW89E6oSuBEpEignSTUgUVrFP0Dn1KMOK+LG/lmAAAAAElFTkSuQmCC";
  document.head.appendChild(favicon);
}
