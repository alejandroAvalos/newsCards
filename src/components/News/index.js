import React, { Component } from "react";
import { connect } from "react-redux";
import mailboxbody from "../../images/mailbox2.png";
import * as actions from "../../store/actions/index.js";

import NewItem from "./NewsItem";

class News extends Component {
  componentDidMount() {
    this.props.fetchNewYork();
    this.props.fetchABC();
    this.props.fetchLastMonth();
    this.props.fetchLastWeek();
  }
  render() {
    const date = new Date().toLocaleString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const { newYork, abc, lastMonth, lastWeek } = this.props;
    return (
      <div className="container-fluid">
        <div className="body-content">
          <span>{date}</span>
        </div>
        <div className="row pb">
          {newYork && newYork.length > 0 ? (
            <div className="col-md-4 offset-md-2">
              <div>
                <img
                  src={mailboxbody}
                  className="img-mailbox2"
                  alt="New York Times"
                />
                <h3>New York Times</h3>
              </div>
              <div className="col-md-12 pt">
                {newYork.slice(0, 3).map((item, index) => {
                  return <NewItem key={index} item={item} />;
                })}
              </div>
            </div>
          ) : null}
          {abc && abc.length > 0  ? (
            <div className="col-md-4">
              <div>
                <img
                  src={mailboxbody}
                  className="img-mailbox2"
                  alt="ABC News"
                />
                <h3>ABC News</h3>
              </div>
              <div className="col-md-12 pt">
                {abc.slice(0, 3).map((item, index) => {
                  return <NewItem key={index} item={item} />;
                })}
              </div>
            </div>
          ) : null}
        </div>
        <div className="row pb">
          {lastMonth && lastMonth.length > 0  ? (
            <div className="col-md-4 offset-md-2">
              <div>
                <img
                  src={mailboxbody}
                  className="img-mailbox2"
                  alt="Last Month"
                />
                <h3>Last Month</h3>
              </div>
              <div className="col-md-12 pt">
                {lastMonth.slice(0, 3).map((item, index) => {
                  return <NewItem key={index} item={item} />;
                })}
              </div>
            </div>
          ) : null}
          {lastWeek && lastWeek.length > 0  ? (
            <div className="col-md-4">
              <div>
                <img
                  src={mailboxbody}
                  className="img-mailbox2"
                  alt="Last Week"
                />
                <h3>Last Week</h3>
              </div>
              <div className="col-md-12 pt">
                {lastWeek.slice(0, 3).map((item, index) => {
                  return <NewItem key={index} item={item} />;
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newYork: state.news.newYork.articles,
    abc: state.news.abc.articles,
    lastWeek: state.news.lastWeek.articles,
    lastMonth: state.news.lastMonth.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNewYork: () => {
      dispatch(actions.fetchNewYork());
    },
    fetchABC: () => {
      dispatch(actions.fetchABC());
    },
    fetchLastMonth: () => {
      dispatch(actions.fetchLastMonth());
    },
    fetchLastWeek: () => {
      dispatch(actions.fetchLastWeek());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
