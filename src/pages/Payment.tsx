import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, QrCode, Building2, Wallet, CheckCircle, Copy, Download, Smartphone, Banknote, Shield, Lock, Zap } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedMethod, setSelectedMethod] = useState('qr');
  const [isPaying, setIsPaying] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('pending'); // 'pending' | 'success' | 'failed'
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');

  // Program details from URL
  const programName = searchParams.get('program') || 'Training Program';
  const amount = searchParams.get('amount') || '0';
  const amountNumber = parseInt(amount) || 0;
  const programId = searchParams.get('id') || '';

  const paymentMethods = [
    { 
      id: 'qr', 
      name: 'QR Code Payment', 
      icon: QrCode, 
      description: 'Scan QR code with any UPI app',
      popular: true,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      id: 'upi', 
      name: 'UPI Payment', 
      icon: Smartphone, 
      description: 'Pay using UPI ID or phone number',
      popular: true,
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      id: 'card', 
      name: 'Credit/Debit Card', 
      icon: CreditCard, 
      description: 'Pay with Visa, MasterCard, RuPay',
      popular: false,
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      id: 'netbanking', 
      name: 'Net Banking', 
      icon: Building2, 
      description: 'Pay through your bank account',
      popular: false,
      color: 'from-orange-500 to-red-600'
    },
    { 
      id: 'wallet', 
      name: 'Digital Wallet', 
      icon: Wallet, 
      description: 'Paytm, PhonePe, Google Pay',
      popular: true,
      color: 'from-yellow-500 to-orange-600'
    },
    { 
      id: 'cash', 
      name: 'Cash Payment', 
      icon: Banknote, 
      description: 'Pay at our office or centers',
      popular: false,
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Punjab National Bank',
    'Bank of Baroda', 'Canara Bank', 'Union Bank of India', 'Bank of India', 'Central Bank of India'
  ];

  const wallets = [
    { name: 'Paytm', icon: '💳', color: 'bg-blue-500' },
    { name: 'PhonePe', icon: '📱', color: 'bg-purple-500' },
    { name: 'Google Pay', icon: '🔵', color: 'bg-green-500' },
    { name: 'Amazon Pay', icon: '🟠', color: 'bg-orange-500' },
    { name: 'BHIM UPI', icon: '🏦', color: 'bg-indigo-500' }
  ];

  const qrCodes = {
    upi: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@ybl&pn=Viziopath&am=${amount}&cu=INR&tn=${encodeURIComponent(programName)}`,
    paytm: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@paytm&pn=Viziopath&am=${amount}&cu=INR&tn=${encodeURIComponent(programName)}`,
    phonepe: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=viziopath@ybl&pn=Viziopath&am=${amount}&cu=INR&tn=${encodeURIComponent(programName)}`
  };

  const handlePaymentMethodChange = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const handleCardPayment = async () => {
    if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
      alert('Please fill in all card details');
      return;
    }
    
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

  const handleUPIPayment = async () => {
    if (!upiId) {
      alert('Please enter UPI ID');
      return;
    }
    
    setIsPaying(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('failed');
    } finally {
      setIsPaying(false);
    }
  };

  const handleNetBankingPayment = async () => {
    if (!selectedBank) {
      alert('Please select a bank');
      return;
    }
    
    setIsPaying(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('failed');
    } finally {
      setIsPaying(false);
    }
  };

  const handleWalletPayment = async () => {
    if (!selectedWallet) {
      alert('Please select a wallet');
      return;
    }
    
    setIsPaying(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('failed');
    } finally {
      setIsPaying(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  const downloadQR = (qrUrl: string, appName: string) => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `${appName}_QR_${programName}.png`;
    link.click();
  };

  // ✅ Success State
  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative overflow-hidden">
        {/* 3D Background for Success */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-40 h-40 bg-emerald-500/20 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center max-w-md w-full mx-4 border border-green-200/50 relative z-10"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful! 🎉</h2>
          <p className="text-gray-600 mb-6">
            You have successfully enrolled in <strong>{programName}</strong>
          </p>
          <div className="space-y-3">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/speakers')}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              Back to Programs
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.print()}
              className="w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
            >
              Download Receipt
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ❌ Failed State
  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center relative overflow-hidden">
        {/* 3D Background for Failure */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-32 right-20 w-28 h-28 bg-red-500/20 rounded-full blur-xl"
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center max-w-md w-full mx-4 border border-red-200/50 relative z-10"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">!</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h2>
          <p className="text-gray-600 mb-6">Something went wrong. Please try again.</p>
          <div className="space-y-3">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPaymentStatus('pending')}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300"
            >
              Try Again
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/speakers')}
              className="w-full border-2 border-red-600 text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300"
            >
              Back to Programs
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // 💳 Default Pending State (All Payment Methods)
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* 3D Animated Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl shadow-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/speakers')}
            className="flex items-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Programs
          </motion.button>
          <h1 className="text-xl font-semibold text-white">Secure Payment</h1>
          <div className="flex items-center space-x-2 text-white/70">
            <Shield className="w-4 h-4" />
            <span className="text-sm">SSL Secured</span>
          </div>
        </div>
      </div>

      {/* Page Body */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Program Summary */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20 sticky top-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Program Details</h2>
              <p className="font-semibold text-white">{programName}</p>
              <p className="text-white/70 text-sm">Training Program</p>
              <hr className="my-4 border-white/20" />
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>Program Fee:</span>
                  <span>₹{amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%):</span>
                  <span>₹{Math.round(amountNumber * 0.18)}</span>
                </div>
                <div className="flex justify-between font-bold text-blue-300 mt-2 text-lg">
                  <span>Total:</span>
                  <span>₹{Math.round(amountNumber * 1.18)}</span>
                </div>
              </div>
              
              {/* Security Badges */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2 text-white/70 text-sm mb-2">
                  <Lock className="w-4 h-4" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>PCI DSS Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Payment Options */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="space-y-6"
            >
              {/* Payment Methods - Enhanced 3D Design */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                {/* 3D Header with Glow Effect */}
                <div className="text-center mb-8">
                  <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-white mb-3 relative"
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Choose Payment Method
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10"></div>
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/70 text-lg"
                  >
                    Select your preferred way to complete the payment
                  </motion.p>
                </div>

                {/* Enhanced Payment Method Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={method.id}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="relative group"
                    >
                      {/* 3D Card with Hover Effects */}
                      <motion.button 
                        onClick={() => handlePaymentMethodChange(method.id)}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -8,
                          rotateY: 5,
                          rotateX: 2
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative w-full p-6 rounded-2xl border-2 transition-all duration-500 transform perspective-1000 ${
                          selectedMethod === method.id 
                            ? 'border-blue-400 bg-gradient-to-br from-blue-500/30 to-purple-500/30 shadow-2xl shadow-blue-500/40 scale-105' 
                            : 'border-white/20 bg-gradient-to-br from-white/10 to-white/5 hover:border-white/40 hover:bg-white/15 hover:shadow-xl hover:shadow-white/10'
                        }`}
                        style={{
                          transformStyle: 'preserve-3d',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        {/* 3D Depth Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                        
                        {/* Glowing Border Effect */}
                        {selectedMethod === method.id && (
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
                        )}

                        {/* Content */}
                        <div className="relative z-10 flex items-start space-x-4">
                          {/* Enhanced Icon with 3D Effect */}
                          <motion.div 
                            className={`p-4 rounded-2xl bg-gradient-to-br ${method.color} text-white shadow-lg relative overflow-hidden`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <method.icon className="w-6 h-6" />
                            {/* Icon Glow */}
                            <div className="absolute inset-0 bg-white/20 blur-xl"></div>
                          </motion.div>

                          {/* Text Content */}
                          <div className="flex-1 text-left">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="font-bold text-white text-lg">{method.name}</span>
                              {method.popular && (
                                <motion.span 
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.5, type: "spring" }}
                                  className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs rounded-full font-bold shadow-lg"
                                >
                                  ⭐ Popular
                                </motion.span>
                              )}
                            </div>
                            <p className="text-white/80 text-sm leading-relaxed">{method.description}</p>
                            
                            {/* Additional Visual Elements */}
                            <div className="mt-3 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                            </div>
                          </div>

                          {/* Selection Indicator */}
                          {selectedMethod === method.id && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.3, type: "spring" }}
                              className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg"
                            >
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </motion.div>
                          )}
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 transition-all duration-500"></div>
                      </motion.button>

                      {/* Floating Particles Effect */}
                      {selectedMethod === method.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 pointer-events-none"
                        >
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              animate={{
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 100 - 50],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
              </motion.div>

              {/* Payment Content Based on Selected Method */}
              {selectedMethod === 'qr' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">QR Code Payment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(qrCodes).map(([app, qrUrl]: [string, string]) => (
                      <div key={app} className="text-center">
                        <div className="bg-white p-4 rounded-lg mb-2">
                          <img src={qrUrl} alt={`${app} QR Code`} className="w-32 h-32 mx-auto" />
                        </div>
                        <p className="text-white/90 font-medium capitalize mb-2">{app}</p>
                        <div className="flex space-x-2 justify-center">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => copyToClipboard(qrUrl)}
                            className="p-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors"
                          >
                            <Copy className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => downloadQR(qrUrl, app)}
                            className="p-2 bg-green-500/20 border border-green-400/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                    <p className="text-blue-200 text-sm text-center">
                      💡 Scan any QR code with your preferred UPI app to complete payment
                    </p>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'upi' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">UPI Payment</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/90 mb-2">UPI ID or Phone Number</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="example@upi or 9876543210"
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleUPIPayment}
                      disabled={isPaying}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isPaying ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing UPI Payment...
                        </div>
                      ) : (
                        'Pay with UPI'
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'card' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">Card Payment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">Card Number</label>
                      <input
                        type="text"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                        placeholder="MM/YY"
                        maxLength="5"
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">CVV</label>
                      <input
                        type="text"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                        placeholder="123"
                        maxLength="4"
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCardPayment}
                    disabled={isPaying}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPaying ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Card Payment...
                      </div>
                    ) : (
                      'Pay with Card'
                    )}
                  </motion.button>
                </motion.div>
              )}

              {selectedMethod === 'netbanking' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">Net Banking</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/90 mb-2">Select Bank</label>
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      >
                        <option value="">Choose your bank</option>
                        {banks.map((bank) => (
                          <option key={bank} value={bank} className="bg-gray-800 text-white">
                            {bank}
                          </option>
                        ))}
                      </select>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNetBankingPayment}
                      disabled={isPaying}
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isPaying ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Redirecting to Bank...
                        </div>
                      ) : (
                        'Continue to Bank'
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'wallet' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">Digital Wallet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {wallets.map((wallet) => (
                      <motion.button
                        key={wallet.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedWallet(wallet.name)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedWallet === wallet.name 
                            ? 'border-yellow-400 bg-yellow-500/20 shadow-lg shadow-yellow-500/25' 
                            : 'border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-12 h-12 ${wallet.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-2`}>
                            {wallet.icon}
                          </div>
                          <span className="text-white font-medium">{wallet.name}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWalletPayment}
                    disabled={isPaying || !selectedWallet}
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPaying ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Opening {selectedWallet}...
                      </div>
                    ) : (
                      `Pay with ${selectedWallet || 'Wallet'}`
                    )}
                  </motion.button>
                </motion.div>
              )}

              {selectedMethod === 'cash' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">Cash Payment</h3>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Banknote className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white/80">
                      Visit our office or authorized centers to pay in cash
                    </p>
                    <div className="bg-gray-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Payment Centers:</h4>
                      <ul className="text-white/80 text-sm space-y-1 text-left">
                        <li>• Main Office: 123 Business Street, City</li>
                        <li>• Training Center: 456 Education Road, City</li>
                        <li>• Partner Center: 789 Partner Avenue, City</li>
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPaymentStatus('success')}
                      className="w-full bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg"
                    >
                      Mark as Paid
                    </motion.button>
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
