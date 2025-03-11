import { useState, useEffect, useMemo } from "react";
import {
  currentKindAtom,
  currentColorAtom,
  selectedCollarAtom,
  selectedLapelTypeAtom,
  selectedPacketTypeAtom,
  selectedInsideTypeAtom,
  selectedButtonAtom,
  selectedPoshetAtom,
  selectedHolesButtonAtom,
  selectedHolesButtonUpAtom
} from "../../Utils";
import { useAtomValue } from "jotai";

const ImageFilterComponent = () => {
  // Default values
  const DEFAULTS = {
    KIND: "kind1",
    LAPEL: "standard",
    PACKET_TYPE: "packet1",
    LAPEL_KIND: "collarTight",
    COLOR: "blackGrey"
  };

  // State for managing image paths and loading status
  const [imagePaths, setImagePaths] = useState({});
  const [loadingParts, setLoadingParts] = useState({});
  
  // Get values from atoms
  const currColor = useAtomValue(currentColorAtom);
  const selectedKind = useAtomValue(currentKindAtom);
  const selectedCollar = useAtomValue(selectedCollarAtom);
  const selectedLapelType = useAtomValue(selectedLapelTypeAtom);
  const selectedPacketType = useAtomValue(selectedPacketTypeAtom);
  const selectedInsideType = useAtomValue(selectedInsideTypeAtom);
  const selectedHolesButton = useAtomValue(selectedHolesButtonAtom);
  const selectedHolesButtonUp = useAtomValue(selectedHolesButtonUpAtom);
  const selectedButton = useAtomValue(selectedButtonAtom);
  const selectedPoshet = useAtomValue(selectedPoshetAtom);

  // Memoize the current configuration to avoid unnecessary rerenders
  const config = useMemo(() => ({
    kind: selectedKind || DEFAULTS.KIND,
    lapelType: selectedLapelType || DEFAULTS.LAPEL,
    lapelKind: selectedCollar || DEFAULTS.LAPEL_KIND,
    packetType: selectedPacketType || DEFAULTS.PACKET_TYPE,
    color: currColor?.colorName || DEFAULTS.COLOR,
    insideColor: selectedInsideType || currColor?.colorName || DEFAULTS.COLOR,
    holeButtonColor: selectedHolesButton,
    holeButtonUpColor: selectedHolesButtonUp,
    buttonColor: selectedButton,
    poshetColor: selectedPoshet
  }), [
    selectedKind, 
    selectedLapelType, 
    selectedCollar, 
    selectedPacketType,
    currColor, 
    selectedInsideType,
    selectedHolesButton,
    selectedHolesButtonUp,
    selectedButton,
    selectedPoshet
  ]);

  // Utility function for loading images with caching
  const loadImage = async (path, partName) => {
    setLoadingParts(prev => ({ ...prev, [partName]: true }));
    
    try {
      // Use dynamic import with a consistent pattern
      const module = await import(/* @vite-ignore */ path);
      setImagePaths(prev => ({
        ...prev,
        [partName]: module.default
      }));
    } catch (error) {
      console.warn(`⚠️ Missing image for ${partName}: ${path}`);
    } finally {
      setLoadingParts(prev => ({ ...prev, [partName]: false }));
    }
  };

  // Define image loading logic in a separate effect
  useEffect(() => {
    const { 
      color, 
      kind, 
      lapelType, 
      lapelKind, 
      packetType, 
      insideColor,
      holeButtonColor,
      holeButtonUpColor,
      buttonColor,
      poshetColor 
    } = config;
    
    console.log("Current Values:", { color, kind, lapelType, lapelKind, packetType });

    if (!color) return;

    // Reset image paths and loading states
    setImagePaths({});
    setLoadingParts({});

    // Determine base parts to load
    const bottomPart = kind === "kind3" || kind === "kind4" ? "bottomKind3" : "bottom";
    const baseParts = ["insideBottom", "sleeves", "colar", bottomPart, "packetUp"];

    // Load base parts first (these are always needed)
    baseParts.forEach(part => {
      loadImage(`../assets/ragach/${part}/${color}.png`, part);
    });

    // Load part-specific images with proper paths
    loadImage(`../assets/ragach/insideUp/${insideColor}.png`, "insideUp");
    loadImage(`../assets/ragach/packetBottom/${packetType}/${color}.png`, "packetBottom");
    loadImage(`../assets/ragach/${lapelKind}/${lapelType}/${kind}/${color}.png`, "lapelCollar");

    // Conditionally load optional parts
    if (holeButtonColor) {
      loadImage(`../assets/adds/holesButton/${holeButtonColor}.png`, "holeButton");
    }
    
    if (holeButtonUpColor) {
      loadImage(`../assets/adds/holesButtonUp/${holeButtonUpColor}.png`, "holeButtonUp");
    }
    
    if (buttonColor) {
      loadImage(`../assets/ragach/button/${kind}/${buttonColor}.png`, "buttonColor");
    }
    
    if (poshetColor) {
      loadImage(`../assets/adds/poshet/${poshetColor}.png`, "poshetColor");
    }
  }, [config]);

  // Create a mapping for z-index values to ensure proper layering
  const getZIndex = (part) => {
    const zIndexMap = {
      packetBottom: 100,
      packetUp: 100,
      buttonColor: 100,
      holeButton: 100,
      holeButtonUp: 100,
      poshetColor: 100,
      // Base parts have lower z-index
      default: 1
    };
    
    return zIndexMap[part] || zIndexMap.default;
  };

  return (
    <div>
      <div style={{ position: "relative", width: "500px", height: "500px" }}>
        {Object.entries(imagePaths).map(([part, src]) => (
          <img
            key={part}
            src={src}
            alt={`${config.color} ${part}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              opacity: loadingParts[part] ? 0.5 : 1,
              zIndex: getZIndex(part),
              // Add loading attribute to enable browser's native lazy loading
              loading: "lazy"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageFilterComponent;