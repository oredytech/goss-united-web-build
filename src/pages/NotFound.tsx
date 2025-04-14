
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl font-bold text-gray-800 mb-2">Page non trouvée</p>
          <p className="text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/">
            <Button className="gap-2">
              <Home size={18} />
              Retourner à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
