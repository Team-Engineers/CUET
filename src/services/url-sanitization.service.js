const urlSanitizer = (url) => {
    url = url
    ?.toLowerCase()
    .replace(/\s/g, "_")
    .replace(/&/g, "and")
    .replace(/\./g, "")
    .replace(/,/g, "");
    return url;
}

export { urlSanitizer };