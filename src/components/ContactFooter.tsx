import { Phone, Mail, Home, Clock, BarChart2, Star, PlayCircle, Shield, BadgeCheck, ShieldCheck } from 'lucide-react';

export default function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section className="bg-primary-container text-white py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Request Your Free Estimate</h2>
              <p className="text-on-primary-container text-xl">Send us a message and Ron will get back to you personally within 24 hours.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="w-full px-6 py-5 min-h-[60px] rounded-2xl bg-primary border-none text-white focus:ring-2 focus:ring-secondary text-lg outline-none" placeholder="Your Name" type="text" />
                  <input className="w-full px-6 py-5 min-h-[60px] rounded-2xl bg-primary border-none text-white focus:ring-2 focus:ring-secondary text-lg outline-none" placeholder="Phone Number" type="tel" />
                </div>
                <input className="w-full px-6 py-5 min-h-[60px] rounded-2xl bg-primary border-none text-white focus:ring-2 focus:ring-secondary text-lg outline-none" placeholder="Email Address" type="email" />
                <select className="w-full px-6 py-5 min-h-[60px] rounded-2xl bg-primary border-none text-white focus:ring-2 focus:ring-secondary text-lg outline-none appearance-none">
                  <option disabled selected value="">Service Needed</option>
                  <option value="repair">AC Repair</option>
                  <option value="install">New Installation</option>
                  <option value="maintenance">Annual Maintenance</option>
                  <option value="iaq">Indoor Air Quality</option>
                  <option value="emergency">Emergency Service</option>
                </select>
                <textarea className="w-full px-6 py-5 min-h-[120px] rounded-2xl bg-primary border-none text-white focus:ring-2 focus:ring-secondary text-lg outline-none" placeholder="Describe your issue..." rows={4}></textarea>
                <button type="button" className="w-full bg-secondary text-white py-6 rounded-2xl font-black text-xl hover:brightness-110 transition-all shadow-xl shadow-black/20 uppercase tracking-widest cursor-pointer mt-4">
                  REQUEST YOUR FREE ESTIMATE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12 lg:pl-12">
              <div className="bg-primary p-8 rounded-3xl border border-white/10 space-y-8">
                <h3 className="text-2xl font-bold text-secondary-fixed">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full text-secondary-fixed">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-on-primary-container uppercase tracking-wider mb-1">Call or Text</div>
                      <a href="tel:3467727120" className="text-2xl font-black hover:text-secondary-fixed transition-colors">(346) 772-7120</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full text-secondary-fixed">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-on-primary-container uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:ron@houstonhvac.com" className="text-xl font-bold hover:text-secondary-fixed transition-colors">ron@houstonhvac.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full text-secondary-fixed">
                      <Home size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-on-primary-container uppercase tracking-wider mb-1">Service Area</div>
                      <div className="text-lg font-medium">Houston, TX & Surrounding Areas</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full text-secondary-fixed">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-on-primary-container uppercase tracking-wider mb-1">Hours</div>
                      <div className="text-lg font-medium">24/7 Emergency Service Available</div>
                      <div className="text-on-primary-container">Standard: Mon-Sat 8am - 6pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
                <ShieldCheck className="text-secondary-fixed" size={32} />
                <span className="tracking-tighter">HOUSTON HVAC</span>
              </div>
              <p className="max-w-sm leading-relaxed">
                Houston's premier HVAC service provider. Master-licensed, experienced, and dedicated to honest, transparent pricing.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-secondary-fixed transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-secondary-fixed transition-colors">About Ron</a></li>
                <li><a href="#reviews" className="hover:text-secondary-fixed transition-colors">Customer Reviews</a></li>
                <li><a href="#areas" className="hover:text-secondary-fixed transition-colors">Service Areas</a></li>
                <li><a href="#contact" className="hover:text-secondary-fixed transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="hover:text-secondary-fixed transition-colors">AC Repair</a></li>
                <li><a href="#services" className="hover:text-secondary-fixed transition-colors">AC Installation</a></li>
                <li><a href="#services" className="hover:text-secondary-fixed transition-colors">Heating Services</a></li>
                <li><a href="#services" className="hover:text-secondary-fixed transition-colors">Indoor Air Quality</a></li>
                <li><a href="#services" className="hover:text-secondary-fixed transition-colors">Emergency Dispatch</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>&copy; {new Date().getFullYear()} Houston HVAC. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
