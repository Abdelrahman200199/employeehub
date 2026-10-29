const router = require('express').Router();
const c = require('../controllers/departmentController');
 
router.route('/').get(c.getDepartments).post(c.createDepartment);
router.route('/:id').delete(c.deleteDepartment).put(c.updateDepartment);
 
module.exports = router;
