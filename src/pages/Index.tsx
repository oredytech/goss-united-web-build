import React from 'react';
import Layout from '@/components/Layout';
import DonateButton from '@/components/DonateButton';
import SectionTitle from '@/components/SectionTitle';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';
import NewsCard from '@/components/NewsCard';
import PartnerLogos from '@/components/PartnerLogos';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample data for programs
  const featuredPrograms = [
    {
      id: "orphelinats",
      title: "Orphelinats",
      description: "Nous offrons un foyer aimant et stable pour les enfants orphelins et abandonnés.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3"
    },
    {
      id: "education",
      title: "Accès à l'éducation",
      description: "Nous assurons une éducation de qualité pour permettre aux enfants de construire leur avenir.",
      image: "https://images.unsplash.com/photo-1597892657493-6847b9640bac?ixlib=rb-4.0.3"
    },
    {
      id: "leadership",
      title: "Leadership & bourses",
      description: "Nous formons les jeunes talents et leaders de demain à travers des programmes de bourses.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3"
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      name: "Esther Mutombo",
      role: "Ancienne bénéficiaire",
      quote: "Grâce à GOSS UNITED, j'ai pu poursuivre mes études et devenir enseignante. Aujourd'hui, je redonne à ma communauté.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3"
    },
    {
      name: "Jean-Claude Kabongo",
      role: "Parent d'élève",
      quote: "L'aide apportée à mes enfants a transformé leur vie. Ils ont maintenant accès à une éducation de qualité et à un avenir prometteur.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
    }
  ];

  // Sample data for news
  const recentNews = [
    {
      id: "1",
      title: "Inauguration d'un nouveau centre d'accueil à Kinshasa",
      summary: "GOSS UNITED a inauguré un nouveau centre d'accueil pour les enfants orphelins dans le quartier de Lemba à Kinshasa.",
      image: "https://images.unsplash.com/photo-1469571486292-b53601020a8a?ixlib=rb-4.0.3",
      date: "10 mars 2025",
      category: "Événement"
    },
    {
      id: "2",
      title: "Lancement du programme de bourses 2025",
      summary: "Notre programme de bourses universitaires pour l'année 2025 est maintenant ouvert aux candidatures.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
      date: "28 février 2025",
      category: "Éducation"
    }
  ];

  // Sample data for partners
  const partners = [
    {
      name: "UNICEF",
      logo: "https://www.unicef.org/sites/default/files/styles/logo/public/UNICEF_Logo_2019_HiRes%402x.png"
    },
    {
      name: "Save The Children",
      logo: "https://www.savethechildren.org/content/dam/usa/logos/logo-save-the-children.svg"
    },
    {
      name: "UNESCO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UNESCO_logo.svg/2560px-UNESCO_logo.svg.png"
    },
    {
      name: "World Vision",
      logo: "https://www.worldvision.org/wp-content/themes/worldvision/assets/svg/wvi-logo.svg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/lovable-uploads/c09cb2ad-0c31-4b5c-8cf9-ec7eb2822adf.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bâtir un avenir inclusif pour les enfants
            </h1>
            <p className="text-xl mb-8">
              GOSS UNITED œuvre pour l'éducation, la santé et l'avenir des enfants orphelins et démunis en République Démocratique du Congo.
            </p>
            <div className="flex flex-wrap gap-4">
              <DonateButton large />
              <Link to="/about">
                <Button variant="outline" className="border-white text-[#8E9196] hover:bg-white hover:text-primary text-lg py-6 px-8">
                  En savoir plus
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">GOSS UNITED asbl</h2>
              <p className="text-gray-700 mb-4">
                GOSS UNITED est une organisation à but non lucratif basée en République Démocratique du Congo, dédiée à améliorer la vie des enfants orphelins et démunis à travers des programmes d'éducation, de santé et de développement.
              </p>
              <p className="text-gray-700 mb-6">
                Notre vision est de créer un environnement où chaque enfant a accès à une éducation de qualité, aux soins de santé et à des opportunités pour développer son plein potentiel.
              </p>
              <Link to="/about">
                <Button className="gap-2">
                  Découvrir notre mission
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3" 
                alt="Enfants souriants" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Nos actions" 
            subtitle="Découvrez nos principaux programmes visant à améliorer la vie des enfants et des jeunes."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <ProgramCard 
                key={index}
                id={program.id}
                title={program.title}
                description={program.description}
                image={program.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programs">
              <Button className="gap-2">
                Voir tous nos programmes
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-lg">Enfants soutenus</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">10</p>
              <p className="text-lg">Centres d'accueil</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">85%</p>
              <p className="text-lg">Taux de réussite scolaire</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">15</p>
              <p className="text-lg">Années d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Témoignages" 
            subtitle="Découvrez l'impact de notre travail à travers les témoignages de nos bénéficiaires."
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Actualités récentes" 
            subtitle="Restez informés des dernières nouvelles et activités de GOSS UNITED."
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentNews.map((news, index) => (
              <NewsCard 
                key={index}
                id={news.id}
                title={news.title}
                summary={news.summary}
                image={news.image}
                date={news.date}
                category={news.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/news">
              <Button className="gap-2">
                Voir toutes les actualités
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soutenez notre mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Votre don nous aide à améliorer la vie des enfants orphelins et démunis en République Démocratique du Congo.
          </p>
          <Link to="/donate">
            <Button className="bg-white text-accent hover:bg-gray-100 text-lg py-6 px-8">
              Faire un don maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerLogos partners={partners} />
    </Layout>
  );
};

export default Index;
