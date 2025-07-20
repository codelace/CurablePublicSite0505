import { FloatingHaiku } from './FloatingHaiku';
import { haikus } from '@/data/haikus';

interface HaikuDisplayProps {
  displayedHaikus: number[];
  onHaikuComplete: (haikuId: number) => void;
}

const getRandomPosition = () => ({
  x: Math.random() * 60 + 20, // 20% to 80% from left
  y: Math.random() * 60 + 20  // 20% to 80% from top
});

export const HaikuDisplay = ({ displayedHaikus, onHaikuComplete }: HaikuDisplayProps) => {
  return (
    <div className="relative h-screen w-full">
      {displayedHaikus.map((haikuId, index) => {
        const haiku = haikus.find(h => h.id === haikuId);
        if (!haiku) return null;

        return (
          <FloatingHaiku
            key={`${haikuId}-${index}`}
            haiku={haiku}
            delay={index * 1000}
            position={getRandomPosition()}
            onComplete={() => onHaikuComplete(haikuId)}
          />
        );
      })}
    </div>
  );
};