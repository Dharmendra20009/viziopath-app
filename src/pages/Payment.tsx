import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, QrCode, Building2, Wallet, CheckCircle, Copy, Download } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedMethod, setSelectedMethod] = useState('qr');
  const [isPaying, setIsPaying] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed'>('pending');

  // Get program details from URL params
  const programName = searchParams.get('program') || 'Training Program';
  const amount = searchParams.get('amount') || '0';
  const programId = searchParams.get('id') || '';

  const paymentMethods = [
    {
      id: 'qr',
      name: 'QR Code Payment',
      icon: QrCode,
      description: 'Scan QR code with any UPI app',
      popular: true
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay with Visa, MasterCard, RuPay'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building2,
      description: 'Pay through your bank account'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Paytm, PhonePe, Google Pay'
    }
  ];

  const qrCodes = {
    upi: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@ybl&pn=Viziopath&am=' + amount + '&cu=INR&tn=' + encodeURIComponent(programName),
    paytm: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@paytm&pn=Viziopath&am=' + amount + '&cu=INR&tn=' + encodeURIComponent(programName),
    phonepe: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@ybl&pn=Viziopath&am=' + amount + '&cu=INR&tn=' + encodeURIComponent(programName)
  };

  const handlePaymentMethodChange = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const handleCardPayment = async () => {
    setIsPaying(true);
    try {
      // Here you would integrate with your payment gateway
      // For now, we'll simulate a payment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('failed');
    } finally {
      setIsPaying(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  const downloadQR = (qrUrl: string, appName: string) => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `${appName}_QR_${programName}.png`;
    link.click();
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full mx-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful! 🎉</h2>
          <p className="text-gray-600 mb-6">
            You have successfully enrolled in <strong>{programName}</strong>
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/speakers')}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Back to Programs
            </button>
            <button
              onClick={() => window.print()}
              className="w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Download Receipt
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full mx-4"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">!</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h2>
          <p className="text-gray-600 mb-6">
            Something went wrong with your payment. Please try again.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentStatus('pending')}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/speakers')}
              className="w-full border-2 border-red-600 text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Back to Programs
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/speakers')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Programs
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Payment</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Program Details */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{programName}</h3>
                  <p className="text-gray-600 text-sm">Training Program</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Program Fee:</span>
                    <span className="text-gray-900 font-semibold">₹{amount}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">GST (18%):</span>
                    <span className="text-gray-900 font-semibold">₹{Math.round(parseInt(amount) * 0.18)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total Amount:</span>
                      <span className="text-xl font-bold text-blue-600">₹{Math.round(parseInt(amount) * 1.18)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Payment Methods */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Payment Method Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => handlePaymentMethodChange(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <method.icon className={`w-6 h-6 ${
                          selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span className={`font-semibold ${
                              selectedMethod === method.id ? 'text-blue-900' : 'text-gray-900'
                            }`}>
                              {method.name}
                            </span>
                            {method.popular && (
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className={`text-sm ${
                            selectedMethod === method.id ? 'text-blue-700' : 'text-gray-600'
                          }`}>
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Content */}
              {selectedMethod === 'qr' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">QR Code Payment</h3>
                  <p className="text-gray-600 mb-6">
                    Scan the QR code below with any UPI app to complete your payment
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <img src={qrCodes.upi} alt="UPI QR Code" className="w-32 h-32 mx-auto" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Any UPI App</h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => copyToClipboard('viziopath@ybl')}
                          className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                          <Copy className="w-4 h-4" />
                          Copy UPI ID
                        </button>
                        <button
                          onClick={() => downloadQR(qrCodes.upi, 'UPI')}
                          className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                          <Download className="w-4 h-4" />
                          Download QR
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <img src={qrCodes.paytm} alt="Paytm QR Code" className="w-32 h-32 mx-auto" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Paytm</h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => copyToClipboard('viziopath@paytm')}
                          className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                          <Copy className="w-4 h-4" />
                          Copy UPI ID
                        </button>
                        <button
                          onClick={() => downloadQR(qrCodes.paytm, 'Paytm')}
                          className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                          <Download className="w-4 h-4" />
                          Download QR
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <img src={qrCodes.phonepe} alt="PhonePe QR Code" className="w-32 h-32 mx-auto" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">PhonePe</h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => copyToClipboard('viziopath@ybl')}
                          className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                          <Copy className="w-4 h-4" />
                          Copy UPI ID
                        </button>
                        <button
                          onClick={() => downloadQR(qrCodes.phonepe, 'PhonePe')}
                          className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                          <Download className="w-4 h-4" />
                          Download QR
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Payment Instructions:</h4>
                    <ol className="text-sm text-blue-800 space-y-1">
                      <li>1. Open any UPI app on your phone</li>
                      <li>2. Scan the QR code or enter UPI ID: <strong>viziopath@ybl</strong></li>
                      <li>3. Enter amount: <strong>₹{Math.round(parseInt(amount) * 1.18)}</strong></li>
                      <li>4. Add note: <strong>{programName}</strong></li>
                      <li>5. Complete payment</li>
                    </ol>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'card' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Card Payment</h3>
                  <p className="text-gray-600 mb-6">
                    Pay securely with your credit or debit card
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCardPayment}
                    disabled={isPaying}
                    className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isPaying ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Processing Payment...
                      </>
                    ) : (
                      `Pay ₹${Math.round(parseInt(amount) * 1.18)}`
                    )}
                  </button>
                </motion.div>
              )}

              {selectedMethod === 'netbanking' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Net Banking</h3>
                  <p className="text-gray-600 mb-6">
                    Select your bank to proceed with net banking payment
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['SBI', 'HDFC', 'ICICI', 'Axis', 'Kotak', 'PNB', 'Canara', 'Bank of Baroda'].map((bank) => (
                      <button
                        key={bank}
                        className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                      >
                        <div className="font-medium text-gray-900">{bank}</div>
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={handleCardPayment}
                    disabled={isPaying}
                    className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isPaying ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Redirecting to Bank...
                      </>
                    ) : (
                      'Continue to Bank'
                    )}
                  </button>
                </motion.div>
              )}

              {selectedMethod === 'wallet' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Wallet</h3>
                  <p className="text-gray-600 mb-6">
                    Pay using your preferred digital wallet
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: 'Paytm', color: 'bg-blue-500' },
                      { name: 'PhonePe', color: 'bg-purple-500' },
                      { name: 'Google Pay', color: 'bg-green-500' },
                      { name: 'Amazon Pay', color: 'bg-orange-500' },
                      { name: 'BHIM', color: 'bg-indigo-500' },
                      { name: 'Mobikwik', color: 'bg-blue-600' }
                    ].map((wallet) => (
                      <button
                        key={wallet.name}
                        onClick={handleCardPayment}
                        className={`${wallet.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity text-center font-medium`}
                      >
                        {wallet.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;


