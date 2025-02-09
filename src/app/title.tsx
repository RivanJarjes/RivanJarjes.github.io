export default function Title() {
    const mainTitle = 'rivan jarjes';
    const getSubTitle = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const prefix = (year < 2029 && month >= 5 && month < 9) ? 'Incoming ' : '';
      const suffix = (year < 2029 || (year === 2029 && month < 5)) ? ' compsci student' : 'Software Engineer';

      if (year <= 2025 && month < 5) {
        return prefix + '1st year' + suffix;
      } else if ((year === 2025 && month >= 5) || (year === 2026 && month < 5)) {
        return prefix + '2nd year' + suffix;
      } else if ((year === 2026 && month >= 5) || (year === 2027 && month < 5)) {
        return prefix + '3rd year' + suffix;
      } else if ((year === 2027 && month >= 5) || (year === 2028 && month < 5)) {
        return prefix + '4th year' + suffix;
      } else if ((year === 2028 && month >= 5) || (year === 2029 && month < 5)) {
        return prefix + '5th year' + suffix;
      } else {
        return suffix;
      }
    };
    const subTitle1 = getSubTitle();
    const subTitle2 = 'Hon. B.Sc. in Computer Science @ TMU';

    const renderText = (text: string, baseDelay: number, charDelay: number) => {
        let totalChars = 0;
        return (
            <>
                {text.split(' ').map((word, wordIndex, words) => {
                    const currentDelay = totalChars * charDelay + baseDelay;
                    totalChars += word.length + 1;
                    
                    return (
                        <span key={wordIndex} className="inline-flex whitespace-nowrap">
                            {word.split('').map((char, charIndex) => {
                                const delay = currentDelay + charIndex * charDelay;
                                return (
                                    <span key={charIndex} className="relative inline-block">
                                        <span 
                                            className="opacity-0 animate-[appear_0.1s_forwards]"
                                            style={{ animationDelay: `${delay}s` }}
                                        >
                                            {char}
                                        </span>
                                        <span 
                                            className="absolute inset-y-0 right-0 text-[var(--accent-color)] animate-[cursorBlink_0.1s_step-end]"
                                            style={{ 
                                                animationDelay: `${delay}s`,
                                                opacity: 0
                                            }}
                                        >
                                            _
                                        </span>
                                    </span>
                                );
                            })}
                            {wordIndex < words.length - 1 && (
                                <span className="relative inline-block">
                                    <span 
                                        className="opacity-0 animate-[appear_0.1s_forwards]"
                                        style={{ animationDelay: `${currentDelay + word.length * charDelay}s` }}
                                    >
                                        &nbsp;
                                    </span>
                                </span>
                            )}
                        </span>
                    );
                })}
            </>
        );
    };

    return (
      <div className="bg-[var(--home-background)]">
        <div className="flex flex-col items-center justify-center min-h-[90vh] max-w-5xl mx-auto px-8">
          <div className="flex flex-col items-start">
            <div className="flex flex-col">
              <h1 className="text-8xl font-bold text-[var(--accent-color)]">
                <span className="relative block">
                  {mainTitle.split('').map((char, i) => (
                    <span key={i} className="relative">
                      <span 
                        className="opacity-0 animate-[appear_0.075s_forwards]" 
                        style={{ animationDelay: `${i * 0.075}s` }}
                      >
                        {char}
                      </span>
                      <span 
                        className="absolute left-full animate-[cursorBlink_0.1s_step-end,disappear_0.075s_forwards] cursor-position text-[var(--accent-color)]" 
                        style={{ 
                          animationDelay: `${i * 0.075}s, ${(mainTitle.length * 0.075) - 0.075}s`,
                          opacity: 0
                        }}
                      >
                        _
                      </span>
                    </span>
                  ))}
                </span>
              </h1>
              <div className="text-2xl sm:text-4xl pl-2 flex flex-col text-[var(--secondary-text)] mt-4 space-y-1">
                <span className="relative flex flex-wrap">
                    {renderText(subTitle1, 0.8, 0.05)}
                </span>
                <span className="relative flex flex-wrap">
                    {renderText(subTitle2, 0.8 + (subTitle1.length * 0.05), 0.05)}
                    <span 
                        className="inline-block opacity-0 text-[var(--accent-color)] animate-[appear_0.1s_forwards,blink_0.5s_step-end_infinite]"
                        style={{ 
                            animationDelay: `${(subTitle2.length * 0.05) + (subTitle1.length * 0.05) + 1.0}s, ${(subTitle2.length * 0.05) + (subTitle1.length * 0.05) + 1.2}s`,
                            opacity: 0
                        }}
                    >
                        _
                    </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  