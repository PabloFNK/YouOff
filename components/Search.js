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
import { findVideo } from "../services/videoService";
import VideoCard from "../components/VideoCard";
import { debounce } from "lodash-es";

export default class Search extends React.Component {
  state = {
    foundVideos: []
  };

  onSearch = debounce(query => {
    findVideo(query).then(foundVideos => {
      this.setState({ foundVideos }, () => console.log(this.state.foundVideos));
    });
  }, 1000);

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
            return <VideoCard key={video.id.videoId} video={video} />;
          })}
        </ScrollView>
      </Container>
    );
  }
}
