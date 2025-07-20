interface PoetryFooterProps {
  displayedHaikus: number[];
  isAutoPlay: boolean;
}

export const PoetryFooter = ({ displayedHaikus, isAutoPlay }: PoetryFooterProps) => {
  const getInspirationalText = () => {
    if (displayedHaikus.length === 0 && !isAutoPlay) {
      return "Click 'Show Random' or enable 'Auto-Play' to begin the poetry flow";
    }
    if (isAutoPlay) {
      return "Haikus will appear and fade like digital dreams...";
    }
    return "";
  };

  const inspirationalText = getInspirationalText();

  if (!inspirationalText) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="text-center">
        <p className="text-sm text-titanium-white/40 font-mono">
          {inspirationalText}
        </p>
      </div>
    </div>
  );
};