let item = require("../models/itemSchema");
const { findOne, updateOne } = require("../models/itemSchema");

module.exports = {
  additem: async (req, res) => {
    console.log(req.body);
    let { itemname, Brandname, Category, Price } = req.body;

    if (!itemname || !Brandname || !Category || !Price) {
        res.status(400).json({message:"enter all fields"})
      return;
    }

    try {
      let result = await item.findOne({ itemname, Brandname });
      console.log(result);

      if (result) {
        res.status(400).json({message:"item already exist"});
      } else {
        let response = await item.create({
          itemname: itemname,
          Brandname: Brandname,
          Category: Category,
          Price: Price,
        });
        res.status(200).json({ message: "This is from database", data: response });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAllitems: async (req, res) => {
    try {
      let result = await item.find();
      console.log(result);
      res.status(200).json({ message: "successfull", data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "wrong", error: error });
    }
  },

  updateitems: async (req, res) => {
    let { itemname, Brandname, Category, Price } = req.body;

    try {
      let result = await item.updateOne(
        { _id: req.params.id },
        {
          itemname: itemname,
          Brandname: Brandname,
          Category: Category,
          Price: Price,
        }
      );

      if (result.modifiedCount==1) {
        res.status(200).json({message:"updated successfully",data:result})
      }else{
        res.status(500).json({message:"item is not updated"})
      }

    } catch (error) {
      console.log(error);
      res.status(500).json({message:"invalid id or item"});
    }
  },

  deleteitems: async (req, res) => {
    try {
      let result = await item.findByIdAndDelete({ _id: req.params.id });

      if (result.deletedCount == 1) {
        res.status(200).json({message:"item is deleted succesfully"});
      } else {
        res.status(500).json({message:"No item is available"});
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({message:"invalid id or item"});
    }
  },
};
