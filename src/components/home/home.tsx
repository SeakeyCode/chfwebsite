import * as React from 'react';
import './home.scss'
import { List, Space, message, Spin } from 'antd';
import axios from '../../axios'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroller';


const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

interface State {
  list: any,
  loading: Boolean,
  hasMore: Boolean,
  page: number,
  last_page: number
}

class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      list: [],
      loading: false,
      hasMore: true,
      page: 1,
      last_page: 0
    }
  }
  componentDidMount() {
    this.fetchData((res: any) => {
      this.setState({
        list: res.data,
      });
    }, this.state.page)
  }

  fetchData = (callback: any, page: any) => {
    axios.get(`/api/video?page=${page}`).then((res: any) => {
      this.setState({
        last_page: res.data.last_page,
      });
      callback(res.data)
    })
  };

  handleInfiniteOnLoad = () => {
    let { list } = this.state;
    this.setState({
      loading: true
    })
    if (this.state.page >= this.state.last_page) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.setState((prevState, props) => ({
      page: prevState.page + 1
    }))
    this.fetchData((res: any) => {
      list = list.concat(res.data);
      this.setState({
        list,
        loading: false,
      })
    }, this.state.page);
  }
  render() {
    return (
        <div className="content">
           <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={this.handleInfiniteOnLoad}
              hasMore={!this.state.loading && this.state.hasMore}
            >
              <List
                dataSource={this.state.list}
                itemLayout="vertical"
                renderItem={(item: any) => (
                  <List.Item 
                    key={item.id}
                    actions={[
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                      <img
                        width={170}
                        alt="logo"
                        src={item.image}
                      />
                    }
                  >
                    <List.Item.Meta
                      title={item.title}
                      description={item.sub_title}
                    />
                  </List.Item>
                )}
              >
                {this.state.loading && this.state.hasMore && (
                  <div className="demo-loading-container">
                    <Spin />
                  </div>
                )}
            </List>
        </InfiniteScroll>
        </div>
    )
  }
}

export default Home;
