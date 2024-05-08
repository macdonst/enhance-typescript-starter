export default ({ html, state: { attrs } }) => {
    const { state = "" } = attrs;
    return html `
    ${state === "complete" ? "☑" : "☐"}
    <slot></slot>
  `;
};
