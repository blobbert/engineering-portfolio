// Markdown links starting with / point into public/. Prefix the deployment path
// here so authors never need to write their repository name in a project file.
export function basePathLinks({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    function visit(node) {
      if (['link', 'image', 'definition'].includes(node.type) &&
          typeof node.url === 'string' && /^\/(?!\/)/.test(node.url)) {
        node.url = prefix + node.url;
      }
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
