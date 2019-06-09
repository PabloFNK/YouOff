import React from "react";
import { Image, Linking } from "react-native";
import {
  Icon,
  Button,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Right
} from "native-base";
import { getYoutubeUrlFromId } from "../services/videoService";

const videoCard = props => {
  const video = props.video;
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{video.snippet.title}</Text>
            <Text note>{video.snippet.description}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: video.snippet.thumbnails.high.url }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Button
            transparent
            onPress={() => props.onPressDownload(video.id.videoId)}
          >
            <Icon active name="download" />
            <Text>Download</Text>
          </Button>
        </Left>
        <Right>
          <Button
            transparent
            onPress={() =>
              Linking.openURL(getYoutubeUrlFromId(video.id.videoId))
            }
          >
            <Icon active name="play" />
            <Text>Play</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

export default videoCard;
