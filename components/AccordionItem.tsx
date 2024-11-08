import React, { useState } from "react";
import { View, Animated, LayoutAnimation } from "react-native";
import { ChevronDown } from "lucide-react-native";
import { styles } from "./AccordionItemStyles";
import { colors } from "@/constants/colors";
import { TouchableMain } from "./TouchableMain";
import { TextMain } from "./TextMain";

interface AccordionItemProps {
  text: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ text, children }: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rotateAnim = new Animated.Value(0); // Initialize rotateAnim here

  const toggleExpand = () => {
    const toValue = isExpanded ? 0 : 1;

    // Rotation animation for Chevron icon
    Animated.timing(rotateAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false, // Set to false for transform animation
    }).start();

    // Animation for content change (show/hide)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setIsExpanded(!isExpanded);
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={styles.container}>
      <TouchableMain onPress={toggleExpand} style={styles.header}>
        <TextMain style={styles.text}>{text}</TextMain>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <ChevronDown size={24} color={colors.white} />
        </Animated.View>
      </TouchableMain>
      {isExpanded && <View>{children}</View>}
    </View>
  );
};
