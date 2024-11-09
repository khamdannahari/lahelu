import React, { useState, useCallback, useRef } from "react";
import { FlatList, ActivityIndicator, ViewToken } from "react-native";
import FeedItem, { FeedItemProps, MediaType } from "./FeedItem";
import { colors } from "@/constants/colors";
import { dummyPosts } from "@/app/utils/dummyPosts";
import { styles } from "../styles/FeedListStyles";

const FeedList = () => {
  const [data, setData] = useState<FeedItemProps[]>(dummyPosts());
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [focusedVideoId, setFocusedVideoId] = useState<string | null>(null);

  const fetchFeed = (page: number) => Promise.resolve(dummyPosts(page));

  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);
    fetchFeed(page + 1).then((newItems) => {
      setData((prevData) => [...prevData, ...newItems]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    });
  };

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const focusedItem = viewableItems.find(
        (item) => item.isViewable && item.item.mediaType === MediaType.video,
      );
      setFocusedVideoId(focusedItem ? focusedItem.item.id : null);
    },
    [],
  );

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      initialNumToRender={3}
      maxToRenderPerBatch={3}
      style={{ backgroundColor: colors.black }}
      data={data}
      renderItem={({ item }) => (
        <FeedItem {...item} isFocused={focusedVideoId === item.id} />
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => (
        <ActivityIndicator
          size={50}
          color={colors.code405D72}
          style={styles.loader}
        />
      )}
    />
  );
};

export default FeedList;
