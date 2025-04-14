
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const News = () => {
  // Sample data for news articles
  const newsArticles = [
    {
      id: "1",
      title: "Inauguration d'un nouveau centre d'accueil à Kinshasa",
      summary: "GOSS UNITED a inauguré un nouveau centre d'accueil pour les enfants orphelins dans le quartier de Lemba à Kinshasa, offrant un refuge à 50 enfants supplémentaires.",
      content: "Le 10 mars 2025, GOSS UNITED a inauguré un nouveau centre d'accueil...",
      image: "https://images.unsplash.com/photo-1469571486292-b53601020a8a?ixlib=rb-4.0.3",
      date: "10 mars 2025",
      category: "Événement"
    },
    {
      id: "2",
      title: "Lancement du programme de bourses 2025",
      summary: "Notre programme de bourses universitaires pour l'année 2025 est maintenant ouvert aux candidatures. Cette année, nous offrons 20 bourses complètes.",
      content: "Le programme de bourses GOSS UNITED pour l'année académique 2025-2026...",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
      date: "28 février 2025",
      category: "Éducation"
    },
    {
      id: "3",
      title: "Célébration de la journée de l'enfant africain",
      summary: "À l'occasion de la journée de l'enfant africain, GOSS UNITED a organisé une série d'activités pour sensibiliser le public aux droits des enfants.",
      content: "Le 16 juin, GOSS UNITED a célébré la journée de l'enfant africain...",
      image: "https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3",
      date: "16 juin 2025",
      category: "Événement"
    },
    {
      id: "4",
      title: "Partenariat avec une entreprise locale pour la formation professionnelle",
      summary: "GOSS UNITED a signé un partenariat avec l'entreprise Congolese Tech pour offrir des formations en programmation aux jeunes de nos centres.",
      content: "Un nouveau partenariat entre GOSS UNITED et Congolese Tech...",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3",
      date: "15 mai 2025",
      category: "Partenariat"
    },
    {
      id: "5",
      title: "Succès de notre campagne de collecte de fournitures scolaires",
      summary: "Grâce à la générosité de nos donateurs, nous avons pu collecter plus de 1000 kits scolaires pour les enfants défavorisés avant la rentrée.",
      content: "Notre campagne annuelle de collecte de fournitures scolaires...",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
      date: "20 août 2025",
      category: "Collecte"
    },
    {
      id: "6",
      title: "Remise de diplômes pour les jeunes de notre programme d'entrepreneuriat",
      summary: "15 jeunes entrepreneurs ont reçu leur certificat après avoir complété avec succès notre programme de formation de six mois.",
      content: "Lors d'une cérémonie émouvante qui s'est tenue le 5 juillet...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
      date: "5 juillet 2025",
      category: "Formation"
    }
  ];

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Extract unique categories from news articles
  const categories = ['Tous', ...Array.from(new Set(newsArticles.map(article => article.category)))];

  // Filter news based on search term and selected category
  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <PageHeader 
        title="Actualités & Blog" 
        description="Restez informés des dernières nouvelles et activités de GOSS UNITED."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3"
      />

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article, index) => (
                <NewsCard 
                  key={index}
                  id={article.id}
                  title={article.title}
                  summary={article.summary}
                  image={article.image}
                  date={article.date}
                  category={article.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-600 mb-4">Essayez d'ajuster vos critères de recherche.</p>
              <Button onClick={() => {setSearchTerm(''); setSelectedCategory('Tous');}}>
                Réinitialiser la recherche
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
            <p className="mb-8">
              Recevez les dernières nouvelles et mises à jour de GOSS UNITED directement dans votre boîte de réception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button className="bg-accent hover:bg-accent/90 whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
