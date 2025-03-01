/* Adds a hover animation to an element by setting its background and border image properties. */
export function showHoverAnimation(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget as HTMLElement; // Type assertion to HTMLElement
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; //  y position within the element.
    target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(21, 31, 51, 0.8), rgba(21, 31, 51, 0.4) )`;
  }
  /* Removes the hover animation from an element by setting its background and border image properties to null. */
  export function removeHoverAnimation(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget as HTMLElement; // Type assertion to HTMLElement
    target.style.background = "";
  }