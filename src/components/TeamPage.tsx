import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const elkanahPhoto = new URL('../assets/Elkanah.jpg', import.meta.url).href;
const ababioPhoto = new URL('../assets/Ababio.jpg', import.meta.url).href;
const adugdaaPhoto = new URL('../assets/Adugdaa.jpg', import.meta.url).href;
const jonathanPhoto = new URL('../assets/Jonathan.jpg', import.meta.url).href;

export function TeamPage() {
  const leadership = [
    {
      name: 'Elkanah Ametsitsi',
      role: 'Founder',
      expertise: 'Computer Science & Blockchain',
      bio: "Pioneer in decentralized science solutions in Ghana's research .",
      image: elkanahPhoto,
      socials: {
        linkedin: 'https://www.linkedin.com/in/elkanah-ametsitsi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        twitter: 'https://x.com/africanweb3_adv?s=11',
        email: 'ametsitsielkanah@gmail.com'
      }
    },
    {
      name: 'Adugdaa Atiah Justice Azumah',
      role: 'Web Developer',
      expertise: 'Biomedical Engineering and fullstack Developer',
      bio: 'Expert in Web development for scientific solutions and research.',
      image: adugdaaPhoto,
      socials: {
        linkedin: 'https://www.linkedin.com/in/justice-adugdaa-atiah-0b2668280?originalSubdomain=gh',
        twitter: 'https://x.com/meme_verse59485?t=qXoL-gIayFm0FnIoaxnnXQ&s=09',
        email: 'adugdaaatiahjustice@gmail.com'
      }
    },
    {
      name: 'Ababio Wiafe Frederick',
      role: 'Research Lead',
      expertise: 'Biomedical Engineering & AI in Health Technology',
      bio: 'Leading researcher in machine learning for medical solutions.',
      image: ababioPhoto,
      socials: {
        linkedin: 'https://www.linkedin.com/in/ababio-frederick-wiafe-7a158425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: 'https://x.com/jokerjnr2?s=09',
        email: 'ababiowiafe17@gmail.com'
      }
    },
    {
      name: 'Jonathan Mawuko',
      role: 'Director of Community Engagement',
      expertise: 'Science Communication',
      bio: 'Passionate about making science accessible and building inclusive research communities.',
      image: jonathanPhoto,
      socials: {
        linkedin: 'https://www.linkedin.com/in/jonathan-mawuko-b6457a395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: 'https://x.com/j10naye?t=NbEUfJUdqd3x2WERn5Mlmg&s=09',
        email: 'jdmawuko11@gmail.com'
      }
    },
  ];

 // Research departments data removed (now delivered via backend or UI components).
 
  return (
    <div className="space-y-8 max-w-6xl mx-auto lg:pt-16">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-4">Our Team</h1>
        <p className="text-gray-600 max-w-3xl">
          Meet the passionate researchers, technologists, and innovators driving the future of 
          decentralized science in Ghana.
        </p>
      </div>

      {/* Team Photo */}
      <Card className="overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjMxNzU1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Team collaboration"
          className="w-full h-96 object-cover"
        />
      </Card>

      {/* Leadership Team */}
      <div>
        <h2 className="text-gray-900 mb-6">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-40 h-48 sm:h-auto flex-shrink-0">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>
                      <span className="text-lime-700">{member.role}</span>
                    </CardDescription>
                    <Badge variant="secondary" className="mt-2">{member.expertise}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      {member.socials?.linkedin && (
                        <Button 
                          type="button" 
                          size="sm" 
                          variant="outline" 
                          aria-label={`Connect with ${member.name} on LinkedIn`}
                          onClick={() => window.open(member.socials.linkedin, '_blank')}
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.socials?.twitter && (
                        <Button 
                          type="button" 
                          size="sm" 
                          variant="outline" 
                          aria-label={`Connect with ${member.name} on Twitter`}
                          onClick={() => window.open(member.socials.twitter, '_blank')}
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {member.socials?.email && (
                        <Button 
                          type="button" 
                          size="sm" 
                          variant="outline" 
                          aria-label={`Email ${member.name}`}
                          onClick={() => window.open(`mailto:${member.socials.email}`, '_blank')}
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Departments removed: moved to backend-driven data or a separate component */}

      {/* Join Team CTA */}
      <Card className="bg-gradient-to-r from-lime-600 to-cyan-600 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-white mb-4">Join Our Team</h2>
          <p className="text-lime-50 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate researchers, developers, and innovators to join 
            our mission of advancing decentralized science in Ghana.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button type="button" className="bg-white text-lime-700 hover:bg-lime-50">
              View Open Positions
            </Button>
            <Button type="button" variant="outline" className="border-white bg-white/20 text-white hover:bg-white/30">
              Become a Contributor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}