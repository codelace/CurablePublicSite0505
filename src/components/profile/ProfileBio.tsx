
import React from 'react';

interface ProfileBioProps {
  bio?: string;
  gptDescription?: string;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ bio, gptDescription }) => {
  // Use gptDescription first, fallback to bio
  const description = gptDescription || bio;
  
  if (!description) {
    return (
      <div className="pt-2 border-t border-quantum-red/30">
        <p className="text-foreground/60 text-sm font-poppins italic">
          Profile details coming soon...
        </p>
      </div>
    );
  }
  
  // Split by newlines and render each line
  const lines = description.split('\n').filter(line => line.trim());
  
  return (
    <div className="pt-2 border-t border-quantum-red/30">
      <div className="text-foreground/90 text-sm space-y-1 text-left font-poppins">
        {lines.map((line, index) => (
          <p key={index} className="leading-relaxed">
            {line.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProfileBio;
