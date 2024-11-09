import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import {
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
  ResizeMode,
  Video,
} from "expo-av";
import { colors } from "@/constants/colors";
import { TextMain } from "@/components/TextMain";
import {
  PlayIcon,
  EllipsisIcon,
  CircleDollarSignIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  MessageSquareTextIcon,
  ForwardIcon,
  VolumeXIcon,
  Volume2Icon,
} from "lucide-react-native";
import { TouchableMain } from "@/components/TouchableMain";
import { copies } from "@/constants/copies";
import { styles } from "../styles/FeedItemStyles";
import Slider from "@react-native-community/slider";
import {
  Gesture,
  GestureHandlerRootView,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

/* eslint-disable no-unused-vars */
export enum MediaType {
  image = "image",
  video = "video",
}

export type FeedItemProps = {
  id: string;
  name: string;
  timeAgo: string;
  imageUrl: string;
  textContent: string;
  mediaUrl?: string;
  mediaType?: MediaType | string;
  hashtags: string[];
  upVotes: number;
  downVotes: number;
  comments: number;
  isFocused?: boolean;
};

const FeedItem: React.FC<FeedItemProps> = ({
  name,
  timeAgo,
  imageUrl,
  textContent,
  mediaUrl,
  mediaType = MediaType.image,
  hashtags,
  upVotes,
  downVotes,
  comments,
  isFocused,
}) => {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [mediaAspectRatio, setMediaAspectRatio] = useState<number>(16 / 9);
  const [isMuted, setIsMuted] = useState(false); // New state for mute/unmute

  useEffect(() => {
    if (mediaType === MediaType.image && mediaUrl) {
      Image.getSize(mediaUrl, (width, height) => {
        setMediaAspectRatio(width / height);
      });
    }
  }, [mediaUrl, mediaType]);

  useEffect(() => {
    if (mediaType === MediaType.video && videoRef.current) {
      if (isFocused) {
        videoRef.current.playAsync().catch(() => {});
        setIsPlaying(true);
        setLoading(true);
      } else {
        videoRef.current.pauseAsync().catch(() => {});
        setIsPlaying(false);
      }
    }
  }, [isFocused, mediaType]);

  const togglePlayPause = useCallback(async () => {
    if (isPlaying) {
      videoRef.current?.pauseAsync().catch(() => {});
      setIsPlaying(false);
    } else {
      videoRef.current?.playAsync().catch(() => {});
      setIsPlaying(true);
      setLoading(true);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
    videoRef.current?.setIsMutedAsync(!isMuted).catch(() => {});
  }, [isMuted]);

  const handlePlaybackStatusUpdate = useCallback(
    (status: AVPlaybackStatus) => {
      if (status && status.isLoaded) {
        const playing = (status as AVPlaybackStatusSuccess).isPlaying;
        if (playing !== isPlaying) setIsPlaying(playing);

        const positionMillis = (status as AVPlaybackStatusSuccess)
          .positionMillis;
        const videoDuration =
          (status as AVPlaybackStatusSuccess).durationMillis || 1;

        setSliderValue(positionMillis / 1000); // Convert to seconds for the slider
        setDuration(videoDuration / 1000); // Duration in seconds
        setLoading(false);
      }
    },
    [isPlaying],
  );

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    videoRef.current?.setPositionAsync(value * 1000); // Convert back to milliseconds
  };

  // Pinch-to-zoom gesture setup
  const scale = useSharedValue(1);
  const startScale = useSharedValue(0);

  const pinch = Gesture.Pinch()
    .onStart(() => {
      startScale.value = scale.value;
    })
    .onUpdate((event) => {
      scale.value = Math.min(Math.max(startScale.value * event.scale, 0.5), 3);
    })
    .onEnd(() => {
      scale.value = 1; // Reset the scale to 1 when the pinch gesture ends
    })
    .runOnJS(true);

  const pinchStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    zIndex: scale.value > 1 ? 9999 : 1, // Set zIndex to 9999 when zoomed in, else default to 1
  }));

  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <Image source={{ uri: imageUrl }} style={styles.profileImage} />
        <TextMain style={styles.name}>{name}</TextMain>
        <TextMain style={styles.timeAgo}>
          {"• "}
          {timeAgo}
        </TextMain>
        <View style={styles.spacer} />
        <TouchableMain>
          <EllipsisIcon size={24} color={colors.white} />
        </TouchableMain>
      </View>

      <TextMain style={styles.textContent}>{textContent}</TextMain>

      {mediaUrl && (
        <GestureHandlerRootView style={[styles.mediaContent]}>
          <GestureDetector gesture={pinch}>
            <Animated.View
              style={[{ aspectRatio: mediaAspectRatio }, pinchStyle]}
            >
              {mediaType === MediaType.video ? (
                <TouchableWithoutFeedback onPress={togglePlayPause}>
                  <View style={StyleSheet.absoluteFill}>
                    <Video
                      ref={videoRef}
                      source={{ uri: mediaUrl }}
                      style={StyleSheet.absoluteFill}
                      resizeMode={ResizeMode.CONTAIN}
                      isLooping
                      onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                    />
                    {!isPlaying && !loading && (
                      <View style={styles.playIconOverlay}>
                        <PlayIcon size={48} color={colors.white} />
                      </View>
                    )}
                    <Slider
                      style={styles.slider}
                      minimumValue={0}
                      maximumValue={duration}
                      value={sliderValue}
                      onSlidingComplete={handleSliderChange}
                      minimumTrackTintColor={colors.blue}
                      maximumTrackTintColor={colors.black}
                      thumbTintColor={colors.white}
                    />

                    {mediaType === MediaType.video && (
                      <TouchableMain
                        onPress={toggleMute}
                        style={styles.muteButton}
                      >
                        {isMuted ? (
                          <VolumeXIcon size={24} color={colors.white} />
                        ) : (
                          <Volume2Icon size={24} color={colors.white} />
                        )}
                      </TouchableMain>
                    )}
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <Image
                  source={{ uri: mediaUrl }}
                  style={StyleSheet.absoluteFill}
                  resizeMode="contain"
                />
              )}
            </Animated.View>
          </GestureDetector>
        </GestureHandlerRootView>
      )}

      <View style={styles.tipHastagContainer}>
        <View style={styles.tipContainer}>
          <CircleDollarSignIcon size={16} color={colors.white} />
          <TextMain style={styles.tipText}>{copies.tip}</TextMain>
        </View>

        {hashtags.map((tag, index) => (
          <View key={index} style={styles.chip}>
            <TextMain style={styles.chipText}># {tag}</TextMain>
          </View>
        ))}
      </View>

      <View style={styles.actionRow}>
        <View style={styles.likeDislikeContainer}>
          <TouchableMain style={styles.likeButton}>
            <ThumbsUpIcon size={20} color={colors.white} />
            <TextMain style={styles.actionText}>{upVotes}</TextMain>
          </TouchableMain>

          <View style={styles.lineVertical} />

          <TouchableMain style={styles.dislikeButton}>
            <ThumbsDownIcon size={20} color={colors.white} />
            <TextMain style={styles.actionText}>{downVotes}</TextMain>
          </TouchableMain>
        </View>

        <TouchableMain style={styles.commentButton}>
          <MessageSquareTextIcon size={20} color={colors.white} />
          <TextMain style={styles.actionText}>{comments}</TextMain>
        </TouchableMain>

        <View style={styles.flexSpacer} />

        <TouchableMain style={styles.forwardButton}>
          <ForwardIcon size={20} color={colors.white} />
        </TouchableMain>
      </View>
    </View>
  );
};

export default FeedItem;
