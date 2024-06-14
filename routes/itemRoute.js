let express = require('express');
const { additem, getAllitems, updateitems, deleteitems } = require('../controllers/itemController');
let router = express.Router()



router.post("/", additem)
router.get("/get-all-item", getAllitems )
router.put("/:id", updateitems )
router.delete("/:id", deleteitems )


module.exports = router;