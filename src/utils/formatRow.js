export function formatRow(content, depth = 0, TAB_SIZE = 4){
  return `${" ".repeat(TAB_SIZE).repeat(depth)}${content}\n`;
};

export function formatDescription(schema, depth = 0){
  const description = schema.description || schema.desc;
  return description ? formatRow(`/** ${description} */`, depth) : "";
};

export function mapPrimitiveType(type) {
  return {
    'integer': 'number',
    'number': 'number',
    'string': 'string',
    'boolean': 'boolean',
  }[type];
};
