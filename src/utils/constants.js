export function mapPrimitiveType(type) {
  return {
    'integer': 'number',
    'number': 'number',
    'string': 'string',
    'boolean': 'boolean',
  }[type];
};

export function mapPrimitiveTypeString(type) {
  return {
    'String': 'string',
    'Number': 'number',
    'Boolean': 'boolean',
    'Null': 'null',
  }[type];
};