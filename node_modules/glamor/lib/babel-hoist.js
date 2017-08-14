'use strict';

var packageName = 'glamor';

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  console.warn('[Deprecation] In glamor v3 this file will be published as a standalone package: "babel-plugin-glamor". See https://github.com/threepointone/glamor/issues/204 for more information.');
}

module.exports = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      Program: {
        enter: function enter(path) {
          var isImported = false;
          path.traverse({
            ImportDeclaration: function ImportDeclaration(path) {
              if (path.node.source.value === packageName) {
                var specifiers = path.get('specifiers');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = specifiers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var specifier = _step.value;

                    if (specifier.isImportSpecifier() && specifier.node.imported.name === 'css') {
                      isImported = true;
                      break;
                    }
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              }
            },
            CallExpression: function CallExpression(path) {
              if (!path.get('callee').isIdentifier() || path.node.callee.name !== 'require') {
                return;
              }
              var args = path.get('arguments');
              var arg = args[0];
              if (!arg || !arg.isStringLiteral() || arg.node.value !== packageName) {
                return;
              }
              isImported = true; // might cause false positives
            }
          });
          if (!isImported) {
            return;
          }

          path.traverse({
            JSXIdentifier: function JSXIdentifier(path) {
              if (path.node.name !== 'css') return;
              if (!t.isJSXAttribute(path.parent)) return; // avoid elements named `css`

              var expr = path.parentPath.get('value.expression');
              if (!expr.isObjectExpression) return;

              if (expr.isPure()) {
                expr.hoist();
              }
            },
            CallExpression: function CallExpression(path) {
              var node = path.node;

              if (node.callee.name === 'css' && node.callee.type === 'Identifier') {
                path.get('arguments').forEach(function (x) {
                  return x.isPure() && x.hoist();
                });
              }
            }
          });
        }
      }
    }
  };
};