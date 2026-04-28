import React, { useState } from "react";
import '../../App.css'

function TransactionForm() {
  const [formData, setFormData] = useState({
    category: "",
    type: "Expense",
    amount: "",
    description: "",
    paymentMethod: ""
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const validate = () => {
    let newErrors = {};
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = "Enter a valid amount";
    }
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.paymentMethod.trim()) newErrors.paymentMethod = "Payment method is required";
    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert(`Transaction Added:\n${JSON.stringify(formData, null, 2)}`);
  
    setFormData({
      category: "",
      type: "Expense",
      amount: "",
      description: "",
      paymentMethod: ""
    });
  };

  return (
    <div id="Transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        
     <p>Category:</p>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g., Food"
        />
        {errors.category && <p>{errors.category}</p>}


        <p>Type:</p>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        {errors.type && <p>{errors.type}</p>}


        <p>Amount:</p>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="e.g., 25"
        />
        {errors.amount && <p >{errors.amount}</p>}


        <p>Description:</p>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="e.g., Lunch"
        />
        {errors.description && <p>{errors.description}</p>}

        <p>Payment Method:</p>
        <input
          type="text"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          placeholder="e.g., UPI, Cash, Card"
        />
        {errors.paymentMethod && <p>{errors.paymentMethod}</p>}

        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
