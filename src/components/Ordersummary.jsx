import React from 'react';

const OrderSummary = ({ subtotal }) => {
    const tax = subtotal * 0.05; // 5% tax rate
    const grandTotal = subtotal + tax;

  return (
    <div className="order-summary bg-gray-100 p-4 rounded w-[500px]">
      <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax (5%):</span>
        <span>${tax}</span>
      </div>
      <div className="flex justify-between">
        <span>Grand Total:</span>
        <span>${grandTotal}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
