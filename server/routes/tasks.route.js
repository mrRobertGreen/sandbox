const tasks = require("../data-base/data.tasks");

const {Router} = require('express')
const router = Router()

// /api/tasks/get

router.get('/get', (req, res) => {
    try {
        res.status(200).json({
            data: tasks,
            message: '',
            success: true,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong..."
        })
    }
})
// /api/tasks/get
router.post('/add', (req, res) => {
    try {
        const {text} = req.body
        const newTask = {
            text: text,
            isCompleted: false,
            id: Date.now(),
        }
        tasks.push(newTask)
        res.status(200).json({
            success: true,
            data: tasks,
            message: 'Task has been created'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong..."
        })
    }
})
// /api/tasks/get
router.put('/finish/:id', (req, res) => {

})

module.exports = router