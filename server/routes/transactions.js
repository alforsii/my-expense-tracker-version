const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction.model");

// GET | Transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ transactions, message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ transactions: null, message: err.message });
  }
});
// GET | Single Transaction
router.get("/transaction/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.status(200).json({ transaction, message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ transaction: null, message: err.message });
  }
});
// POST | Create new Transaction
router.post("/transaction/add", async (req, res) => {
  try {
    req.body.user = req.user._id;
    console.log(
      "🚀 ~ file: transactions.js ~ line 29 ~ router.post ~ req.body",
      req.body
    );
    const transaction = await Transaction.create(req.body);
    res.status(200).json({
      transaction,
      message: "New Transaction created!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ transaction: null, message: err.message });
  }
});
// PUT | Update Transaction
router.put("/transaction/update/:id", async (req, res) => {
  try {
    console.log(req.body);
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({ transaction, message: "Transaction updated!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ transaction: null, message: err.message });
  }
});
// DELETE | Delete Transaction
router.delete("/transaction/delete/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Transaction deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ transaction: null, message: err.message });
  }
});

module.exports = router;
