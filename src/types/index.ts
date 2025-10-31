export interface MenuItem {
  text: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface StatItem {
  count: string;
  suffix: string;
  title: string;
}

export interface TestimonialItem {
  rating: number;
  text: string;
  author: {
    name: string;
    designation: string;
    image: string;
  };
}

export interface BlogItem {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  link: string;
}

export interface ClientLogo {
  name: string;
  image: string;
  link: string;
}

export interface HeroSlide {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}