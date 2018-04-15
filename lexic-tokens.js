exports.module  =  {
  NUM: {
    token: 'NUM',
    regex: /[0-9]+/,
  },
  T_INTEGER: {
    token: 'T_INTEGER',
    regex: /INTEGER/,
  },
  T_DOUBLE: {
    token: 'T_DOUBLE',
    regex: /DOUBLE/,
  },
  T_BOOLEAN: {
    token: 'T_BOOLEAN',
    regex: /BOOLEAN/,
  },
  T_TEXT: {
    token: 'T_TEXT',
    regex: /TEXT/,
  },
  T_LEQ: {
    token: 'T_LEQ',
    regex: /<=/,
  },
  T_GEQ: {
    token: 'T_GEQ',
    regex: />=/,
  },
  T_EQ: {
    token: 'T_EQ',
    regex: /==/,
  },
  T_NEQ: {
    token: 'T_NEQ',
    regex: /!=/,
  },
  T_GREATER: {
    token: 'T_GREATER',
    regex: />/,
  },
  T_LESS: {
    token: 'T_LESS',
    regex: /</,
  },
  T_ADD: {
    token: 'T_ADD',
    regex: /\+/,
  },
  T_SUSTRACTION: {
    token: 'T_SUSTRACTION',
    regex: /-/,
  },
  T_DIVISION: {
    token: 'T_DIVISION',
    regex: /\//,
  },
  T_MULTIPLY: {
    token: 'T_MULTIPLY',
    regex: /\*/,
  },
  T_SELECT: {
    token: 'T_SELECT',
    regex: /SELECT/,
  },
  T_ALL: {
    token: 'T_ALL',
    regex: /\*/,
  },
  T_FROM: {
    token: 'T_FROM',
    regex: /FROM/,
  },
  T_TABLE: {
    token: 'T_TABLE',
    regex: /TABLE/,
  },
  T_CREATE: {
    token: 'T_CREATE',
    regex: /CREATE/,
  },
  T_ELINE: {
    token: 'T_ELINE',
    regex: /;/,
  },
  T_DISTINCT: {
    token: 'T_DISTINCT',
    regex: /DISTINCT/,
  },
  T_AND: {
    token: 'T_AND',
    regex: /AND/,
  },
  T_OR: {
    token: 'T_OR',
    regex: /OR/,
  },
  T_WHERE: {
    token: 'T_WHERE',
    regex: /WHERE/,
  },
  T_UPDATE: {
    token: 'T_UPDATE',
    regex: /UPDATE/,
  },
  T_SET: {
    token: 'T_SET',
    regex: /SET/,
  },
  T_JOIN: {
    token: 'T_JOIN',
    regex: /JOIN/,
  },
  T_DELETE: {
    token: 'T_DELETE',
    regex: /DELETE/,
  },
  T_SEPARATOR: {
    token: 'T_SEPARATOR',
    regex: /,/,
  },
  BOOLEAN: {
    token: 'BOOLEAN',
    regex: /FALSE|TRUE/,
  },
  ID: {
    token: 'ID',
    // regex: /[a-zA-Z_]+[0-9]*[^;]/,
    regex: /[a-zA-Z_]+[0-9]*/,
  },
}