import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Video, Music, BookOpen } from 'lucide-react';

// TypeScript Interfaces
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  color: string;
  className?: string;
}

interface SectionHeaderProps {
  title: string;
  description: string;
  linkText?: string;
}

interface Feature {
  icon: ReactNode;
  title: string;
  color: string;
}

// Feature Cards Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, color, className = 'lg:relative' }) => (
  <Card className={`${color} border-none w-[80%] h-[190%] transition-transform hover:scale-105 lg:absolute lg:-top-[70%] lg:left-[20%]  ${className}`}>
    <CardContent className="p-6 flex flex-col justify-center items-center">
      {icon}
      <span className="mt-2 font-medium">{title}</span>
    </CardContent>
  </Card>
);

// Section Header Component
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, linkText }) => (
  <div>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    {linkText && (
      <Button variant="link" className="text-[#00A8E1] p-0">
        {linkText} <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    )}
  </div>
);

const PrimeLandingPage: React.FC = () => {
  const features: Feature[] = [
    { 
      icon: <Package className="w-8 h-8" />, 
      title: "Fast Delivery", 
      color: "bg-blue-500" 
    },
    { 
      icon: <Video className="w-8 h-8" />, 
      title: "Stream", 
      color: "bg-red-500" 
    },
    { 
      icon: <Package className="w-8 h-8" />, 
      title: "Shop", 
      color: "bg-pink-500" 
    },
    { 
      icon: <Music className="w-8 h-8" />, 
      title: "More", 
      color: "bg-orange-500" 
    },
  ];

  const books: string[] = [
    "https://m.media-amazon.com/images/I/91JxVjINNsL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81EAy0np9yL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/91Bd7P9K6IL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81P2xCGWIzL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71S-mSoWejL._AC_UY327_FMwebp_QL65_.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#00A8E1] to-[#0093C9] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                There's something for everyone with Prime!
              </h1>
              <p className="text-lg mb-6">
                Check out what's included with your Prime membership
              </p>
              <Button 
                className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white"
              >
                GET STARTED
              </Button>
            </div>
            <div className="flex-1">
              <img 
                src="https://m.media-amazon.com/images/G/01/marketing/prime/brand/PM_1.jpg"
                alt="Prime Hero"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container  px-4">
          <div className="flex lg:w-[70%] lg:h-[10vw] lg:gap-5 justify-center">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <SectionHeader
                title="Fast, free delivery on millions of items"
                description="Skip the trip to the store. Get fast, free delivery on millions of items"
                linkText="Explore Prime Delivery"
              />
            </div>
            <div className="flex-1">
              <img 
                src="calf.jpg"
                alt="Delivery illustration"
                className="w-[80%] rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <SectionHeader
                title="Stream or download hit movies and TV shows"
                description="Watch award-winning movies and TV series on your favorite devices"
                linkText="Learn more about Prime Video"
              />
              <img 
                src="https://m.media-amazon.com/images/G/01/marketing/prime/brand/TV_2._CB485931808_.jpg"
                alt="Prime Video"
                className="mt-6 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <SectionHeader
                title="Stay on top of the hottest music"
                description="Listen to millions of songs and playlists on all your devices"
                linkText="Explore Prime Music"
              />
              <img 
                src="https://m.media-amazon.com/images/G/01/marketing/prime/brand/PM_3._CB485931808_.jpg"
                alt="Prime Music"
                className="mt-6 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Reading Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <SectionHeader
                title="Prime members read for no additional cost"
                description="Enjoy unlimited access to over a million eBooks, magazines, and more"
                linkText="Explore Prime Reading"
              />
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-4">
                {books.map((book, index) => (
                  <div key={index} className="aspect-[2/3] rounded-md overflow-hidden shadow-lg transition-transform hover:scale-105">
                    <img 
                      src={book}
                      alt={`Book ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='flex bg-red-500 text-white '>
        <div className='p-9'>
            <h1 className='text-[32px] w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
            <p className='w-[60%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quos tenetur accusantium nemo.</p>
        </div>
        <div>
            <img src="calf.jpg" className='w-[70%] p-5' alt="" />
        </div>
      </section>

      <section className='flex bg-white text-black '>
        <div>
            <img src="/calf.jpg" className='w-[70%] p-5' alt="" />
        </div>
        <div className='p-9'>
            <h1 className='text-[32px] w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
            <p className='w-[60%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quos tenetur accusantium nemo.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00A8E1] to-[#0093C9] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            There's something for everyone
          </h2>
          <Button 
            className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white"
          >
            GET STARTED
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PrimeLandingPage;