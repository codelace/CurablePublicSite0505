
import React from 'react';
import { formatHaikuDescription } from '@/utils/profileStyles';

interface ProfileBioProps {
  bio?: string;
  gptDescription?: string;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ bio, gptDescription }) => {
  // Use gptDescription first, fallback to bio
  const description = gptDescription || bio;
  
  if (!description) {
    return (
      <div className="pt-2 border-t border-graphite-700/30">
        <p className="text-titanium-white/60 text-sm italic">
          Profile details coming soon...
        </p>
      </div>
    );
  }
  
  // Format as haiku-style with line breaks
  const haikuLines = formatHaikuDescription(description);
  
  return (
    <div className="pt-2 border-t border-graphite-700/30">
      {haikuLines ? (
        <div className="text-titanium-white/80 text-sm space-y-1">
          {haikuLines.map((line, index) => (
            <p key={index} className="leading-relaxed">
              {line.trim()}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-titanium-white/80 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProfileBio;
