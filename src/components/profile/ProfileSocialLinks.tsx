
import React from 'react';
import { Globe, Linkedin } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ProfileSocialLinksProps {
  linkedInUrl: string | null;
  website?: string;
}

const ProfileSocialLinks: React.FC<ProfileSocialLinksProps> = ({ linkedInUrl, website }) => {
  if (!linkedInUrl && !website) return null;
  
  return (
    <div className="flex items-center gap-3 pt-2">
      <TooltipProvider delayDuration={300}>
        {linkedInUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-titanium-white hover:text-titanium-white transition-colors"
              >
                <Linkedin size={16} className="hover:text-warm-rose" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">LinkedIn Profile</TooltipContent>
          </Tooltip>
        )}
        
        {website && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-titanium-white hover:text-titanium-white transition-colors"
              >
                <Globe size={16} className="hover:text-warm-rose" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">Website</TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
    </div>
  );
};

export default ProfileSocialLinks;
