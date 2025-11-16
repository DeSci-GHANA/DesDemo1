import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Microscope, Network, Award, TrendingUp } from 'lucide-react';
import logo from 'figma:asset/aec93d3a93659ad5195a720a07bc2c62275bb30e.png';

export function HomePage() {
  return (
    <div className="space-y-8 lg:pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-lime-600 to-cyan-600 p-8 text-white">
        <div className="relative z-10">
          <div className="mb-6">
            <img src={logo} alt="DeSci Ghana" className="h-20 w-auto" />
          </div>
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Welcome to DeSci GH
          </Badge>
          <h1 className="mb-4 text-white">Advancing Science Through Decentralization</h1>
          <p className="mb-6 max-w-2xl text-lime-50">
            DeSci GH is pioneering the future of scientific research in Ghana through blockchain technology, 
            open collaboration, and community-driven innovation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button type="button" className="bg-white text-lime-700 hover:bg-lime-50">
              Join Our Community
            </Button>
            <Button type="button" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Projects
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Network className="w-full h-full" />
        </div>
      </div>

      {/* Featured Image */}
      <Card className="overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1664553692783-888fda781031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGdoYW5hfGVufDF8fHx8MTc2MzIyODczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Science Laboratory"
          className="w-full h-64 object-cover"
        />
        <CardContent className="p-6">
          <h3 className="text-gray-900 mb-2">Empowering African Science</h3>
          <p className="text-gray-600">
            We're building infrastructure and community to make scientific research more accessible, 
            transparent, and impactful across Ghana and beyond.
          </p>
        </CardContent>
      </Card>

      {/* Recent Projects */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-gray-900">Upcoming Project</h2>
            <p className="text-gray-600 mt-1">Explore our next research initiative</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-2 border-lime-200">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <img 
                  src="figma:asset/cd2d77f0ead187adeeec8f2c93763cc3329a8456.png" 
                  alt="SCIResearch Logo" 
                  className="h-48 w-auto"
                />
                <div className="space-y-2">
                  <Badge className="bg-gradient-to-r from-lime-600 to-cyan-600 text-white px-6 py-2 text-lg">
                    Anticipate
                  </Badge>
                  <p className="text-gray-600 mt-4 max-w-2xl">
                    An exciting new research platform coming soon from DeSci GH. Stay tuned for updates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mission Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Open Research</CardTitle>
            <CardDescription>
              Promoting transparency and accessibility in scientific research through open-source methodologies.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle>Innovation Focus</CardTitle>
            <CardDescription>
              Supporting breakthrough research and technological innovation in Ghana's scientific community.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <CardTitle>Sustainable Growth</CardTitle>
            <CardDescription>
              Building a sustainable ecosystem for scientific advancement and knowledge sharing.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}