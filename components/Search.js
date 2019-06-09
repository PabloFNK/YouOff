import React, { Fragment } from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";
import { debounce } from "lodash-es";
import VideoCard from "../components/VideoCard";
import {
  findVideo,
  getYoutubeUrlFromId,
  downloadYoutubeVideo
} from "../services/videoService";

export default class Search extends React.Component {
  state = {
    foundVideos: []
  };

  onSearch = debounce(query => {
    findVideo(query).then(foundVideos => {
      this.setState({ foundVideos }, () => console.log(this.state.foundVideos));
    });
  }, 1000);

  onDownload = videoId => {
    const videoUrl = getYoutubeUrlFromId(videoId);
    downloadYoutubeVideo(videoUrl);
  };

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.onSearch} />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
          {this.state.foundVideos.map(video => {
            return (
              <VideoCard
                key={video.id.videoId}
                video={video}
                onPressDownload={this.onDownload}
              />
            );
          })}
        </ScrollView>
      </Container>
    );
  }
}
