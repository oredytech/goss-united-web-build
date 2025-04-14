import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Check, CreditCard, DollarSign, Heart, Repeat } from 'lucide-react';

const Donate = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  const handleDonationTypeChange = (type: 'one-time' | 'monthly') => {
    setDonationType(type);
  };

  const handleAmountChange = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      if (value !== '') {
        setDonationAmount(parseInt(value, 10));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Payment processing logic would go here
    alert(`Merci pour votre don de ${donationAmount} ${currency} ${donationType === 'monthly' ? 'mensuel' : 'unique'} !`);
  };

  return (
    <Layout>
      <PageHeader 
        title="Faire un don" 
        description="Votre générosité permet aux enfants orphelins et démunis d'avoir un avenir meilleur."
        backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3"
      />

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Votre impact" 
            subtitle="Découvrez comment votre don peut transformer la vie des enfants."
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">25$</h3>
              <p className="text-gray-600">
                Fournit des repas nutritifs pendant un mois à un enfant de nos centres d'accueil.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">50$</h3>
              <p className="text-gray-600">
                Couvre les frais de scolarité et les fournitures scolaires pour un trimestre.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">100$</h3>
              <p className="text-gray-600">
                Finance une formation professionnelle ou un capital de démarrage pour un jeune entrepreneur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Faites un don aujourd'hui" 
              subtitle="Chaque contribution, quelle que soit sa taille, fait une différence significative."
              center
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Donation Type */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Type de don</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={donationType === 'one-time' ? 'default' : 'outline'}
                      className={`p-4 h-auto flex items-center justify-center gap-2 ${
                        donationType === 'one-time' ? 'bg-primary text-white' : 'border-gray-300'
                      }`}
                      onClick={() => handleDonationTypeChange('one-time')}
                    >
                      <CreditCard size={20} />
                      <div className="text-left">
                        <p className="font-bold">Don unique</p>
                        <p className="text-xs">Contribution ponctuelle</p>
                      </div>
                    </Button>
                    
                    <Button
                      type="button"
                      variant={donationType === 'monthly' ? 'default' : 'outline'}
                      className={`p-4 h-auto flex items-center justify-center gap-2 ${
                        donationType === 'monthly' ? 'bg-primary text-white' : 'border-gray-300'
                      }`}
                      onClick={() => handleDonationTypeChange('monthly')}
                    >
                      <Repeat size={20} />
                      <div className="text-left">
                        <p className="font-bold">Don mensuel</p>
                        <p className="text-xs">Soutien régulier</p>
                      </div>
                    </Button>
                  </div>
                </div>
                
                {/* Currency Selection */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Devise</h3>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={currency === 'USD' ? 'default' : 'outline'}
                      className={currency === 'USD' ? 'bg-primary text-white' : 'border-gray-300'}
                      onClick={() => setCurrency('USD')}
                    >
                      USD ($)
                    </Button>
                    <Button
                      type="button"
                      variant={currency === 'EUR' ? 'default' : 'outline'}
                      className={currency === 'EUR' ? 'bg-primary text-white' : 'border-gray-300'}
                      onClick={() => setCurrency('EUR')}
                    >
                      EUR (€)
                    </Button>
                    <Button
                      type="button"
                      variant={currency === 'GBP' ? 'default' : 'outline'}
                      className={currency === 'GBP' ? 'bg-primary text-white' : 'border-gray-300'}
                      onClick={() => setCurrency('GBP')}
                    >
                      GBP (£)
                    </Button>
                  </div>
                </div>
                
                {/* Amount Selection */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Montant du don</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[25, 50, 100].map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={donationAmount === amount && customAmount === '' ? 'default' : 'outline'}
                        className={`p-4 h-auto ${
                          donationAmount === amount && customAmount === '' ? 'bg-primary text-white' : 'border-gray-300'
                        }`}
                        onClick={() => handleAmountChange(amount)}
                      >
                        {currency === 'USD' && '$'}
                        {currency === 'EUR' && '€'}
                        {currency === 'GBP' && '£'}
                        {amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Autre montant"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      {currency === 'USD' && '$'}
                      {currency === 'EUR' && '€'}
                      {currency === 'GBP' && '£'}
                    </div>
                  </div>
                </div>
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Vos coordonnées</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                {/* Payment Button */}
                <Button type="submit" className="w-full py-6 text-lg bg-accent hover:bg-accent/90 flex items-center justify-center gap-2">
                  <DollarSign size={20} />
                  Faire un don de {currency === 'USD' && '$'}{currency === 'EUR' && '€'}{currency === 'GBP' && '£'}{donationAmount} {donationType === 'monthly' ? 'par mois' : ''}
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  <p className="mb-1">Paiement sécurisé via Stripe</p>
                  <p>GOSS UNITED est une organisation à but non lucratif enregistrée. Vos dons peuvent être fiscalement déductibles.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Autres façons d'aider" 
            subtitle="Il existe plusieurs façons de soutenir notre mission au-delà des dons financiers."
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Check className="text-primary mr-2" size={22} />
                Dons en nature
              </h3>
              <p className="text-gray-600 mb-4">
                Vous pouvez faire don de fournitures scolaires, de vêtements, de livres ou d'équipements pour nos centres d'accueil.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                En savoir plus
              </a>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Check className="text-primary mr-2" size={22} />
                Parrainage d'enfant
              </h3>
              <p className="text-gray-600 mb-4">
                En parrainant un enfant, vous établissez une relation spéciale et soutenez son éducation et son bien-être.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                En savoir plus
              </a>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Check className="text-primary mr-2" size={22} />
                Collectes de fonds
              </h3>
              <p className="text-gray-600 mb-4">
                Organisez votre propre collecte de fonds ou événement caritatif au profit de GOSS UNITED.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Ce que disent nos donateurs" 
            subtitle="Découvrez les témoignages de personnes qui soutiennent notre mission."
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6 italic">
                "Soutenir GOSS UNITED est l'une des meilleures décisions que j'ai prises. Savoir que mon don mensuel aide des enfants à avoir accès à l'éducation me donne un sentiment de satisfaction incomparable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3" 
                    alt="Sarah M." 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah M.</p>
                  <p className="text-gray-600 text-sm">Donatrice mensuelle depuis 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6 italic">
                "J'ai eu l'occasion de visiter l'un des centres d'accueil de GOSS UNITED lors d'un voyage en RDC. L'impact de leur travail est réel et tangible. Je continue de les soutenir financièrement car je sais que chaque dollar fait une différence."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" 
                    alt="Robert K." 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Robert K.</p>
                  <p className="text-gray-600 text-sm">Donateur depuis 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Transparence financière" 
            subtitle="Nous nous engageons à utiliser vos dons de manière responsable et transparente."
            center
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">Répartition de chaque don</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="mb-2 mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold">
                    75%
                  </div>
                  <p className="font-medium">Programmes sur le terrain</p>
                </div>
                <div>
                  <div className="mb-2 mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-accent text-white text-xl font-bold">
                    15%
                  </div>
                  <p className="font-medium">Administration</p>
                </div>
                <div>
                  <div className="mb-2 mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-gray-400 text-white text-xl font-bold">
                    10%
                  </div>
                  <p className="font-medium">Collecte de fonds</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              GOSS UNITED est fière de sa gestion financière responsable. Nous publions des rapports financiers annuels détaillés et sommes soumis à des audits réguliers par des organismes indépendants.
            </p>
            
            <div className="flex justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Télécharger notre rapport annuel
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
