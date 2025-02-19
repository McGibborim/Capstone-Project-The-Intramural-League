export interface ReviewCardProps {
    rating: number;
    title: string;
    content: string;
    author: string;
    date: string;
    avatarSrc: string;
  }
  
  export interface NavigationItemProps {
    label: string;
  }
  
  export interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export interface FooterLinkSectionProps {
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }