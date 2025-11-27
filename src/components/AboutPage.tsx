import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Eye, Lightbulb, Globe, Shield, Zap } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in open, transparent research practices that build trust and accelerate discovery.',
    },
    {
      icon: Globe,
      title: 'Collaboration',
      description: 'Fostering global partnerships and local community engagement to advance scientific knowledge.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies like blockchain to revolutionize how research is conducted.',
    },
    {
      icon: Lightbulb,
      title: 'Education',
      description: 'Committed to making science education accessible to all Ghanaians and promoting STEM careers.',
    },
  ];

  const milestones = [
    { year: '2025', event: 'DeSci GH Founded', description: 'Established as Ghana\'s first decentralized science organization' },
    { year: '2025', event: 'Education Initiative', description: 'Launched open science communication platform reaching out  students' },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto lg:pt-16">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-4">About DeSci GH</h1>
        <p className="text-gray-600 max-w-3xl">
          Decentralised Science Ghana (DeSci GH) is a pioneering organization dedicated to transforming 
          scientific research through blockchain technology, open collaboration, and community empowerment.
        </p>
      </div>

      {/* Hero Image */}
      <Card className="overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1650295894392-7fea9aa5a5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2NpZW50aXN0cyUyMHJlc2VhcmNofGVufDF8fHx8MTc2MzIyODczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="African scientists at work"
          className="w-full h-80 object-cover"
        />
      </Card>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-lime-200 bg-lime-50/50">
          <CardHeader>
            <div className="w-12 h-12 bg-lime-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription className="text-gray-700">
              To democratize scientific research in Ghana by leveraging decentralized technologies, 
              fostering collaboration, and creating equitable access to research funding and resources.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-2 border-cyan-200 bg-cyan-50/50">
          <CardHeader>
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <CardTitle>Our Vision</CardTitle>
            <CardDescription className="text-gray-700">
              A thriving scientific ecosystem in Ghana where researchers, students, and innovators 
              collaborate freely, share knowledge openly, and drive impactful discoveries that benefit society.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Our Story */}
      <Card>
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            DeSci GH was born from a simple yet powerful idea: that scientific research should be accessible, 
            transparent, and community-driven. Founded in 2022 by a group of passionate Ghanaian researchers 
            and blockchain enthusiasts, we recognized the challenges facing the African scientific community—from 
            limited funding to restricted access to research infrastructure.
          </p>
          <p>
            By combining the principles of decentralized science with blockchain technology, we created a platform 
            where researchers can collaborate across borders, secure funding through transparent mechanisms, and 
            share their findings with the world without traditional barriers.
          </p>
          <p>
            Today, DeSci GH has grown into a vibrant community of over 150 active researchers, spanning multiple 
            disciplines from biotechnology to data science. We've facilitated numerous research projects, 
            published groundbreaking papers, and most importantly, inspired a new generation of scientists 
            who believe in the power of open, collaborative research.
          </p>
        </CardContent>
      </Card>

      {/* Values */}
      <div>
        <h2 className="text-gray-900 mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-gray-900 mb-6">Our Journey</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">{milestone.year}</span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-lime-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-gray-900 mb-1">{milestone.event}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Image */}
      <Card className="overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxNTg0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Blockchain technology"
          className="w-full h-64 object-cover"
        />
        <CardContent className="p-6">
          <h3 className="text-gray-900 mb-2">Technology-Driven Solutions</h3>
          <p className="text-gray-600">
            We leverage blockchain and decentralized technologies to create transparent, efficient, 
            and accessible research infrastructure for the scientific community.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}