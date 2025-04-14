
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import DonateButton from '@/components/DonateButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Programs = () => {
  // Sample data for all programs
  const allPrograms = [
    {
      id: "orphelinats",
      title: "Orphelinats",
      description: "Nos centres d'accueil offrent un foyer aimant et stable pour les enfants orphelins et abandonnés.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
      details: "Nos orphelinats fournissent un environnement sûr, aimant et structuré où les enfants reçoivent de la nourriture, un abri, des soins médicaux et un soutien psychosocial. Nous veillons à ce que chaque enfant se sente valorisé et protégé.",
      impacts: [
        "Plus de 200 enfants hébergés dans nos centres",
        "Soins personnalisés et attention individuelle",
        "Suivi psychologique et accompagnement"
      ]
    },
    {
      id: "education",
      title: "Accès à l'éducation",
      description: "Nous assurons une éducation de qualité pour permettre aux enfants de construire leur avenir.",
      image: "https://images.unsplash.com/photo-1597892657493-6847b9640bac?ixlib=rb-4.0.3",
      details: "Notre programme d'éducation vise à garantir que chaque enfant a accès à une éducation de qualité. Nous fournissons des uniformes scolaires, des fournitures, payons les frais de scolarité et offrons un soutien scolaire.",
      impacts: [
        "500+ enfants scolarisés",
        "Taux de réussite scolaire de 85%",
        "Partenariats avec 15 écoles locales"
      ]
    },
    {
      id: "leadership",
      title: "Leadership & bourses",
      description: "Nous formons les jeunes talents et leaders de demain à travers des programmes de bourses.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3",
      details: "Notre programme de leadership et de bourses identifie les jeunes talentueux et leur offre des opportunités d'éducation supérieure et de formation au leadership pour qu'ils deviennent les leaders de demain.",
      impacts: [
        "50 bourses universitaires attribuées",
        "Ateliers de leadership mensuels",
        "Mentorat par des professionnels"
      ]
    },
    {
      id: "sante",
      title: "Santé & bien-être",
      description: "Nous fournissons des soins de santé essentiels et des programmes de nutrition pour les enfants vulnérables.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
      details: "Notre programme de santé et de bien-être assure que les enfants reçoivent des soins médicaux réguliers, des vaccinations, une alimentation équilibrée et une éducation à la santé pour prévenir les maladies.",
      impacts: [
        "Contrôles médicaux réguliers pour tous les enfants",
        "Programmes de nutrition équilibrée",
        "Éducation à l'hygiène et à la santé"
      ]
    },
    {
      id: "entrepreneuriat",
      title: "Incubateurs entrepreneuriaux",
      description: "Nous développons les compétences entrepreneuriales des jeunes pour favoriser leur autonomie économique.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3",
      details: "Nos incubateurs entrepreneuriaux forment les jeunes aux compétences commerciales, leur offrent un mentorat et un capital de démarrage pour lancer leurs propres entreprises et devenir économiquement autonomes.",
      impacts: [
        "75 jeunes entrepreneurs formés",
        "30 micro-entreprises créées",
        "Formation professionnelle et technique"
      ]
    },
    {
      id: "reintegration",
      title: "Réintégration des enfants soldats",
      description: "Nous aidons les anciens enfants soldats à se réintégrer dans la société et à reconstruire leur vie.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3",
      details: "Notre programme de réintégration aide les anciens enfants soldats à surmonter leurs traumatismes, à acquérir de nouvelles compétences et à se réintégrer dans leurs communautés pour mener une vie normale.",
      impacts: [
        "Soutien psychologique spécialisé",
        "Réunification familiale quand c'est possible",
        "Formation professionnelle adaptée"
      ]
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Nos actions" 
        description="Découvrez les différents programmes que nous menons pour améliorer la vie des enfants et des jeunes."
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3"
      />

      {/* Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Nos programmes" 
            subtitle="GOSS UNITED mène diverses actions pour répondre aux besoins des enfants orphelins et démunis en République Démocratique du Congo."
          />

          {allPrograms.map((program, index) => (
            <div key={index} id={program.id} className={`mb-16 pb-16 ${index !== allPrograms.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover" 
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4 text-primary">{program.title}</h2>
                  <p className="text-gray-700 mb-4">{program.details}</p>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Impact</h3>
                  <ul className="space-y-2 mb-6">
                    {program.impacts.map((impact, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-accent mr-2 mt-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                    <DonateButton />
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Devenir bénévole
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How You Can Help */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Comment vous pouvez aider" 
            subtitle="Il existe plusieurs façons de contribuer à notre mission et de faire une différence dans la vie des enfants."
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Faire un don</h3>
              <p className="text-gray-600 mb-4">
                Votre contribution financière, quelle que soit sa taille, peut faire une différence significative dans la vie d'un enfant.
              </p>
              <Link to="/donate">
                <Button className="w-full bg-accent hover:bg-accent/90">Faire un don</Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Devenir bénévole</h3>
              <p className="text-gray-600 mb-4">
                Partagez vos compétences et votre temps en devenant bénévole pour nos programmes sur le terrain ou à distance.
              </p>
              <Link to="/contact">
                <Button className="w-full">Nous contacter</Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sensibiliser</h3>
              <p className="text-gray-600 mb-4">
                Aidez à faire connaître notre cause en parlant de GOSS UNITED à votre entourage et sur les réseaux sociaux.
              </p>
              <div className="flex space-x-2">
                <a href="https://facebook.com" className="bg-[#1877F2] text-white p-2 rounded">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="bg-[#1DA1F2] text-white p-2 rounded">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="bg-[#E4405F] text-white p-2 rounded">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="bg-[#0A66C2] text-white p-2 rounded">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
