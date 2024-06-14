export function replaceFavicon() {
  const favicons = document.querySelectorAll('link[rel="icon"]');
  favicons.forEach((favicon) => favicon.remove());

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA3lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////7+vj98O/t9u/98cP75+ff8d7766j65IvR69HY4fD31dX63Wq84ry437jzvb6y3bH2zi66yOTvqKisvt71wwHwwQiY0ZeszG6Qzo7psAi2vymRtL2TqtR5xHjph4GLo9DrkCduvmyCnM3meHldt1tysjHjZmdMrk1lhcJFrENOnHBCq0DgVldggcBWjJxcf77gVh3cQUPZMDDXJymLmGj2AAAAFXRSTlMABRIdKzhCQ2N0gIGZp7PK3d7r8fiF+kD6AAACZ0lEQVR42qWWf1uiQBCAkcTfhKK7clpqpRep55lwkQZuYJ74/b9QiTssuyo8T73/+rzOzDrOjHSCrJRVTW8h1NI1tazIUgY5parpKIGuVZVcmlBUdXSCrhYvSvlaE52lWcufD1FqoIs0SmcCybUWSqFVk0Xj6hplcH2VYWDcxjjNkTmjPTBtNwgC1zYHOOnIicpriNExg3AP7NxhQqqxNyixyrEZ7DlCd8DeoARGvsFCLCECY2fGger5k7QGEIIjHIqpFZuCIbJssz4oREHUOCuXffHOdYNdCAZDPYRRdESx4+ztQQdj3BkuQzAAXflSqogyDGmEZfxGeBiAAVQkSdbgY5saNkaMDhiAJrO8fk1eojBgiLDMyohyNx7//b/fBx2UTllSobF+jw9OaKIMVEmDvMYHJi9x7kafB0MxEpRyM464Q8Bis+boQzESdOTtUbllypbnEXpTQrxyc1F5QpRvKNmJiUrrpPzMWnTxkecGKP1HymtkbODFNO6nnEzeyAMSwP8iZQ2KyjXM/I34jiEo/XWkvGJomGRbzolPiD/DQhC+el1JNP8fcmSKk8bTlubFml+qIErPo47VRUD3eXNUFohS4f7IU0JZTXsGxtjoTVfeBwSBvLhxYVg+dXxv5VjOyvOJT96hEjYupEIzTsPxCUgHSMT7x3aB2VCC0cc5It6zIU7lfB0BxswTJd+bGfyAFcf4vUP8pECceyyOcXFZGCPLI/4R4lkjg1sWF1YS7o1mluNY1vShy6+k9MX3RfayTAGMnyxxOBXql416KffjgwTIFc6fPYXUW0mpiMdVRRGEb5xwn8V/Atv7iP2+AAAAAElFTkSuQmCC";
  document.head.appendChild(favicon);
}

export function changeTitle() {
  document.title = document.title
    .replace("Brave", "Google")
    .replace("Private Search Engine - ", "")
    .replace("Search", "");
}
