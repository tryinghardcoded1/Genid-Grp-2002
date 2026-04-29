import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Download, Eye } from 'lucide-react';

export default function LiveHouseTour() {
  useEffect(() => {
    const pano_iframe_name = "tour-embeded";
    const handleDeviceMotion = (e: DeviceMotionEvent) => {
      const iframe = document.getElementById(pano_iframe_name) as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({
          type: "devicemotion",
          deviceMotionEvent: {
            acceleration: { x: e.acceleration?.x, y: e.acceleration?.y, z: e.acceleration?.z },
            accelerationIncludingGravity: { x: e.accelerationIncludingGravity?.x, y: e.accelerationIncludingGravity?.y, z: e.accelerationIncludingGravity?.z },
            rotationRate: { alpha: e.rotationRate?.alpha, beta: e.rotationRate?.beta, gamma: e.rotationRate?.gamma },
            interval: e.interval,
            timeStamp: e.timeStamp
          }
        }, "*");
      }
    };
    window.addEventListener("devicemotion", handleDeviceMotion);
    return () => window.removeEventListener("devicemotion", handleDeviceMotion);
  }, []);

  return (
    <>
      <Helmet>
        <title>Virtual 3D Home Tours | Real Estate in Northern NJ</title>
        <meta name="description" content="Walk through our premier listings from the comfort of your home. Use your mouse or VR headset to explore our Live House Tour." />
      </Helmet>

      <section className="bg-[#0A0A0A] py-24 min-h-screen text-[#F5F5F5] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-[#F5F5F5] mb-4">Experience Real Estate in <span className="text-gold-500">360°</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Walk through our premier listings from the comfort of your home. Use your mouse, touch screen, or VR headset to explore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Virtual Tour Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden border-2 border-gold-500"
                style={{ height: '600px' }}
              >
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-[#F5F5F5] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded flex items-center border border-charcoal-800">
                  <Eye className="w-4 h-4 mr-2" /> Live Virtual Tour
                </div>
                {/* Embed provided by user */}
                <iframe 
                  id="tour-embeded" 
                  name="sample tour" 
                  src="https://tour.panoee.net/iframe/69f24da196a6d5b664ca655c" 
                  style={{ border: 0 }}
                  width="100%" 
                  height="100%" 
                  scrolling="no" 
                  allow="vr; xr; accelerometer; gyroscope; autoplay;" 
                  allowFullScreen={true}
                  loading="eager"
                  className="w-full h-full"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-serif text-gold-500 mb-2">Featured Property</h3>
                <p className="text-[#F5F5F5] font-bold mb-4">123 Grove Street, Montclair NJ</p>
                
                <div className="text-gray-400 text-sm space-y-2 mb-6">
                  <p>4 Bedrooms • 3.5 Bathrooms</p>
                  <p>3,200 Sq.Ft. • 0.5 Acres</p>
                  <p className="text-[#F5F5F5] text-xl font-serif mt-4">$1,250,000</p>
                </div>

                <hr className="border-charcoal-800 my-6" />

                <h4 className="text-sm font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">Actions</h4>
                
                <button className="w-full border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-bold py-3 px-4 flex items-center justify-center transition-colors uppercase tracking-widest text-[11px] mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Showing
                </button>
                
                <button className="w-full border border-charcoal-800 hover:border-gold-500 hover:text-gold-500 text-[#F5F5F5] font-bold py-3 px-4 flex items-center justify-center transition-colors uppercase tracking-widest text-[11px]">
                  <Download className="w-4 h-4 mr-2" />
                  Listing Details
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-6 shadow-xl"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-2">Need Help?</h4>
                <p className="text-gray-400 text-sm mb-4">Having trouble with the 360 tour? Reach out to our team directly.</p>
                <p className="text-[#F5F5F5] font-bold">(555) 123-4567</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
