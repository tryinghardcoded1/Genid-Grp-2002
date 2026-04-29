/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import LiveHouseTour from './pages/LiveHouseTour';
import MortgageCalculator from './pages/Calculators/MortgageCalculator';
import AffordabilityCalculator from './pages/Calculators/AffordabilityCalculator';
import Team from './pages/About/Team';

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <h1 className="text-4xl">{title} Page Coming Soon</h1>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy/all-listings" element={<PlaceholderPage title="All Listings" />} />
            <Route path="/buy/mortgage-calculator" element={<MortgageCalculator />} />
            <Route path="/buy/affordability-calculator" element={<AffordabilityCalculator />} />
            <Route path="/buy/new-construction" element={<PlaceholderPage title="New Construction" />} />
            
            <Route path="/live-house-tour" element={<LiveHouseTour />} />
            <Route path="/sell" element={<PlaceholderPage title="Sell Your Property" />} />
            
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/reviews" element={<PlaceholderPage title="Reviews" />} />
            <Route path="/about/blogs" element={<PlaceholderPage title="Blogs" />} />
            
            <Route path="/join" element={<PlaceholderPage title="Join Our Team" />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
