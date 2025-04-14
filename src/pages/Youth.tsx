
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Briefcase, Users } from 'lucide-react';

const Youth = () => {
  // Sample data for success stories
  const successStories = [
    {
      name: "Olivier Kabongo",
      age: 22,
      story: "Grâce au programme de bourses de GOSS UNITED, j'ai pu étudier l'informatique à l'université de Kinshasa. Aujourd'hui, je suis développeur web et je travaille pour une entreprise internationale.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3"
    },
    {
      name: "Laetitia Mbemba",
      age: 19,
      story: "J'ai rejoint le programme d'entrepreneuriat de GOSS UNITED il y a deux ans. Aujourd'hui, je gère ma propre petite entreprise de couture qui emploie trois autres jeunes femmes de ma communauté.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3"
    },
    {
      name: "David Lukusa",
      age: 24,
      story: "Ancien enfant soldat, j'ai pu me reconstruire grâce au programme de réintégration de GOSS UNITED. J'ai suivi une formation en menuiserie et je travaille maintenant comme artisan.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3"
    }
  ];

  // Sample data for opportunities
  const opportunities = [
    {
      title: "Programme de bourses universitaires",
      description: "Bourses complètes pour les études universitaires destinées aux jeunes talentueux et motivés.",
      deadline: "31 mai 2025",
      icon: BookOpen
    },
    {
      title: "Formation en entrepreneuriat",
      description: "Programme de six mois pour acquérir les compétences nécessaires pour lancer et gérer une entreprise.",
      deadline: "Inscriptions continues",
      icon: Briefcase
    },
    {
      title: "Programme de leadership",
      description: "Formation au leadership et au développement personnel pour les jeunes de 16 à 25 ans.",
      deadline: "15 juin 2025",
      icon: Users
    },
    {
      title: "Concours d'innovation sociale",
      description: "Présentez vos idées innovantes pour résoudre les défis sociaux dans votre communauté.",
      deadline: "30 avril 2025",
      icon: Award
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Espace Jeunes" 
        description="Découvrez les opportunités, les histoires inspirantes et les ressources pour les jeunes."
        backgroundImage="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3"
      />

      {/* Youth Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Bâtir le futur de la RDC</h2>
              <p className="text-gray-700 mb-4">
                GOSS UNITED croit au potentiel extraordinaire des jeunes Congolais. Notre Espace Jeunes est dédié à fournir aux jeunes les outils, les ressources et les opportunités dont ils ont besoin pour réaliser leur plein potentiel.
              </p>
              <p className="text-gray-700 mb-6">
                Que vous soyez intéressé par l'éducation supérieure, l'entrepreneuriat, le leadership ou d'autres voies de développement, nous avons des programmes conçus pour vous aider à réussir.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-accent hover:bg-accent/90">
                  Explorer les opportunités
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3" 
                alt="Jeunes leaders" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Histoires de réussite" 
            subtitle="Découvrez comment nos programmes ont transformé la vie de ces jeunes."
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{story.name}, {story.age} ans</h3>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <button className="text-primary font-medium hover:underline inline-flex items-center">
                    Lire l'histoire complète <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Opportunités actuelles" 
            subtitle="Découvrez les programmes et les opportunités auxquels vous pouvez postuler dès maintenant."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Date limite: <span className="font-medium">{opportunity.deadline}</span>
                        </span>
                        <Button className="text-sm" size="sm">
                          Postuler
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button className="gap-2">
                Voir toutes les opportunités
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Ressources pour les jeunes" 
            subtitle="Accédez à des ressources utiles pour votre développement personnel et professionnel."
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Ressources éducatives</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Guide de préparation aux examens universitaires</a>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Liste des bourses d'études internationales</a>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Plateforme d'apprentissage en ligne</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Ressources entrepreneuriales</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Comment créer un business plan</a>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Guide de financement pour startups</a>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Mentorat pour jeunes entrepreneurs</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Développement personnel</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">10 compétences essentielles pour réussir</a>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Guide de gestion du stress</a>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-2 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <a href="#" className="hover:text-primary">Construire son réseau professionnel</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à façonner votre avenir?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté de jeunes leaders et entrepreneurs qui transforment la RDC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg py-3 px-8">
                Nous contacter
              </Button>
            </Link>
            <Button className="bg-accent hover:bg-accent/90 text-lg py-3 px-8">
              Candidater maintenant
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Youth;
