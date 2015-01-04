import { version } from '../package.json'
// Loading uncached estraverse for changing estraverse.Syntax.
const estraverse = require('estraverse').cloneEnvironment();
class Controller extends estraverse.Controller {
    traverse(root, visitor) {
        // always use fallback
        visitor.fallback = 'iteration';
        super.traverse(root, visitor);
    }

    replace(root, visitor) {
        // always use fallback
        visitor.fallback = 'iteration';
        super.replace(root, visitor);
    }
}
module.exports = {
    version,
    Controller,
    traverse(root, visitor) {
        var controller = new Controller();
        return controller.traverse(root, visitor);
    },
    replace(root, visitor) {
        var controller = new Controller();
        return controller.replace(root, visitor);
    },
    VisitorOption: estraverse.VisitorOption
};