export function getDynamicColor( backgroundColor = '#FFFFFF') {
    const lightText = 'white';
    const darkText = 'black';
  
    const getRGB = (c: string) => {
      return parseInt(c, 16);
    };
  
    const getsRGB = (c: string) => {
      return getRGB(c) / 255 <= 0.03928 ? getRGB(c) / 255 / 12.92 : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
    };
  
    const getLuminance = (hexColor: string) => {
      return (
        0.2126 * getsRGB(hexColor?.slice(1, 3)) +
        0.7152 * getsRGB(hexColor?.slice(3, 5)) +
        0.0722 * getsRGB(hexColor?.slice(5, 7))
      );
    };
  
    const getContrast = (f: string, b: string) => {
      const L1 = getLuminance(f);
      const L2 = getLuminance(b);
  
      return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    };
  
    const getTextColor = (bgColor: string) => {
      const whiteContrast = getContrast(bgColor, lightText);
      const blackContrast = getContrast(bgColor, darkText);
  
      return whiteContrast > blackContrast ? lightText : darkText;
    };
  
    return getTextColor(backgroundColor);
  }