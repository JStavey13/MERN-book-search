
const router = require('express').Router()

const {
    login,
    saveBook,
    deleteBook,
    createUser,
    getSingleUser
} = require('../../controllers/user-controller')

const { authMiddleware } = require('../../utils/auth')

router.route('/').post(createUser).put(authMiddleware,saveBook)

router.route('/books/:bookId').delete(authMiddleware,deleteBook)

router.route('me').get(authMiddleware, getSingleUser)
router.route('/login').post(login)


module.exports = router