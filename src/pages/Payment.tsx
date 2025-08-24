import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, QrCode, Building2, Wallet, CheckCircle, Copy, Download } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedMethod, setSelectedMethod] = useState('qr');
  const [isPaying, setIsPaying] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('pending'); // 'pending' | 'success' | 'failed'

  // Program details from URL
  const programName = searchParams.get('program') || 'Training Program';
  const amount = searchParams.get('amount') || '0';
  const programId = searchParams.get('id') || '';

  const paymentMethods = [
    { id: 'qr', name: 'QR Code Payment', icon: QrCode, description: 'Scan QR code with any UPI app', popular: true },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Pay with Visa, MasterCard, RuPay' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'Pay through your bank account' },
    { id: 'wallet', name: 'Digital Wallet', icon: Wallet, description: 'Paytm, PhonePe, Google Pay' }
  ];

  const qrCodes = {
    upi: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@ybl&pn=Viziopath&am=${amount}&cu=INR&tn=${encodeURIComponent(programName)}`,
    paytm: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@paytm&pn=Viziopath&am=${amount}&cu=INR&tn=${encodeURIComponent(programName)}`,
    phonepe: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@ybl&pn=Viziopath&am=${amount}&cu=INR&tn=${encodeURIComponent(programName)}`
  };

  const handlePaymentMethodChange = (methodId) => {
    setSelectedMethod(methodId);
  };

  const handleCardPayment = async () => {
    setIsPaying(true);
    try {
      // Simulate payment
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('failed');
    } finally {
      setIsPaying(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  const downloadQR = (qrUrl, appName) => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `${appName}_QR_${programName}.png`;
    link.click();
  };

  // ✅ Success State
  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full mx-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful! 🎉</h2>
          <p className="text-gray-600 mb-6">
            You have successfully enrolled in <strong>{programName}</strong>
          </p>
          <div className="space-y-3">
            <button onClick={() => navigate('/speakers')}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700">
              Back to Programs
            </button>
            <button onClick={() => window.print()}
              className="w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50">
              Download Receipt
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ❌ Failed State
  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full mx-4">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">!</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h2>
          <p className="text-gray-600 mb-6">Something went wrong. Please try again.</p>
          <div className="space-y-3">
            <button onClick={() => setPaymentStatus('pending')}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700">
              Try Again
            </button>
            <button onClick={() => navigate('/speakers')}
              className="w-full border-2 border-red-600 text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-red-50">
              Back to Programs
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // 💳 Default Pending State (QR, Card, Wallet, Netbanking)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/speakers')}
            className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Programs
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Payment</h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Page Body */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Program Summary */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold mb-4">Program Details</h2>
              <p className="font-semibold">{programName}</p>
              <p className="text-gray-600 text-sm">Training Program</p>
              <hr className="my-4" />
              <div className="flex justify-between"><span>Program Fee:</span><span>₹{amount}</span></div>
              <div className="flex justify-between"><span>GST (18%):</span><span>₹{Math.round(parseInt(amount) * 0.18)}</span></div>
              <div className="flex justify-between font-bold text-blue-600 mt-2"><span>Total:</span><span>₹{Math.round(parseInt(amount) * 1.18)}</span></div>
            </motion.div>
          </div>

          {/* Right - Payment Options */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {/* Payment Methods */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <button key={method.id} onClick={() => handlePaymentMethodChange(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                      }`}>
                      <div className="flex items-center space-x-3">
                        <method.icon className={`w-6 h-6 ${selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'}`} />
                        <div>
                          <span className="font-semibold">{method.name}</span>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Content (QR/Card/Netbanking/Wallet) */}
              {selectedMethod === 'qr' && (
                <div className="bg-white rounded-2xl shadow-lg p-6"> {/* QR Code Section */} </div>
              )}
              {selectedMethod === 'card' && (
                <div className="bg-white rounded-2xl shadow-lg p-6"> {/* Card Payment Form */} </div>
              )}
              {selectedMethod === 'netbanking' && (
                <div className="bg-white rounded-2xl shadow-lg p-6"> {/* Netbanking Section */} </div>
              )}
              {selectedMethod === 'wallet' && (
                <div className="bg-white rounded-2xl shadow-lg p-6"> {/* Wallet Options */} </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
