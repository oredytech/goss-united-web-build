
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import TeamMemberCard from '@/components/TeamMemberCard';

const About = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: "Jean-Pierre Kalala",
      role: "Fondateur & Président",
      bio: "Plus de 20 ans d'expérience dans le secteur humanitaire, passionné par l'éducation des enfants défavorisés.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Marie Lumumba",
      role: "Directrice des Programmes",
      bio: "Spécialiste de l'éducation avec une vaste expérience dans la gestion de programmes pour enfants vulnérables.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Patrick Mbombo",
      role: "Directeur Financier",
      bio: "Expert en gestion financière des organisations non gouvernementales avec plus de 15 ans d'expérience.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      socialLinks: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Francine Tshisekedi",
      role: "Coordinatrice des Opérations",
      bio: "Dévouée à la cause des enfants vulnérables et experte en coordination de projets humanitaires.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="À propos de nous" 
        description="Découvrez notre histoire, notre mission et l'équipe derrière GOSS UNITED."
        backgroundImage="https://images.unsplash.com/photo-1527690789675-4ea7d8da4e6b?ixlib=rb-4.0.3"
      />

      {/* Mission and Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3" 
                alt="Notre mission" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Notre mission</h2>
              <p className="text-gray-700 mb-6">
                GOSS UNITED s'engage à améliorer la vie des enfants orphelins et démunis en République Démocratique du Congo en leur offrant un accès à l'éducation, aux soins de santé et à un environnement sûr et protecteur pour leur développement.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-primary">Notre vision</h2>
              <p className="text-gray-700 mb-6">
                Nous envisageons un avenir où chaque enfant en RDC, quel que soit son statut socio-économique, a accès à une éducation de qualité et dispose des outils nécessaires pour réaliser son plein potentiel et contribuer positivement à la société.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Notre histoire" 
            subtitle="Le parcours de GOSS UNITED depuis sa création."
          />
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-primary text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2010</h3>
                  <p>Fondation</p>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Création de GOSS UNITED</h3>
                <p className="text-gray-700">
                  GOSS UNITED a été fondée par Jean-Pierre Kalala, inspiré par son expérience personnelle et sa passion pour aider les enfants orphelins et vulnérables en RDC. L'organisation a commencé avec un petit centre d'accueil à Kinshasa.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-primary text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2015</h3>
                  <p>Expansion</p>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Développement des programmes éducatifs</h3>
                <p className="text-gray-700">
                  Après plusieurs années de croissance, GOSS UNITED a élargi ses activités pour inclure des programmes éducatifs complets et des bourses pour les enfants défavorisés, touchant plus de 200 bénéficiaires.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-primary text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2020</h3>
                  <p>Innovation</p>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Lancement des incubateurs entrepreneuriaux</h3>
                <p className="text-gray-700">
                  Pour répondre aux besoins des jeunes adultes, GOSS UNITED a lancé des incubateurs entrepreneuriaux pour former les jeunes aux compétences professionnelles et à l'entrepreneuriat, favorisant l'autonomie économique.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-primary text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2023</h3>
                  <p>Aujourd'hui</p>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Un impact national</h3>
                <p className="text-gray-700">
                  Aujourd'hui, GOSS UNITED gère 10 centres d'accueil à travers la RDC, soutient plus de 500 enfants et jeunes, et a développé des partenariats avec des organisations internationales pour étendre son impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Nos valeurs" 
            subtitle="Les principes qui guident notre action au quotidien."
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p className="text-gray-600">
                Nous agissons avec empathie et bienveillance envers tous les enfants et communautés que nous servons.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Intégrité</h3>
              <p className="text-gray-600">
                Nous adhérons aux normes éthiques les plus élevées, garantissant transparence et responsabilité dans toutes nos actions.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous recherchons constamment de nouvelles approches et solutions pour améliorer l'efficacité de nos programmes.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Nous travaillons en partenariat avec les communautés locales et les organisations pour maximiser notre impact.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Respect</h3>
              <p className="text-gray-600">
                Nous respectons la dignité, la culture et les droits de chaque individu avec qui nous travaillons.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Engagement</h3>
              <p className="text-gray-600">
                Nous nous engageons pleinement à créer un changement durable et positif dans la vie des enfants que nous soutenons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Notre équipe dirigeante" 
            subtitle="Rencontrez les personnes passionnées qui dirigent GOSS UNITED."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
