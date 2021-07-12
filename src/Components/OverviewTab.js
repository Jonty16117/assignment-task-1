import React, { useState, useEffect } from "react";
import styles from "../Styles/OverviewTab.module.css";
import trophy from "../Assets/trophy.png";
import download from "../Assets/download.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SplittedRefTable from "./SplittedRefTable";
import RefTable from "./RefTable";
import sliderImage1 from "../Assets/sliderImage1.png";
import sliderImage2 from "../Assets/sliderImage2.png";
import sliderImage3 from "../Assets/sliderImage3.png";
import analyticsBtn from "../Assets/analyticsBtn.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverviewBanner from "./OverviewBanner";
import useWindowDimensions from "./useWindowDimensions";
import TestDataService from "../Services/test.service";
import InfiniteScroll from "react-infinite-scroll-component";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1400, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
  },
};

//banner 1
let heading1 = "Referral Revenue";
let text1 = "in Last 7 Days";
let bgColor1 = "#8DD8A8";

//banner 2
let heading2 = "Revenue";
let text2 = "on each $ spent";
let bgColor2 = "#F6BCCA";

//banner 3
let heading3 = "Conversion Rate";
let text3 = "";
let bgColor3 = "#AEB0E9";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createData(tableData) {
  let id = makeid(25);
  return {
    ...tableData,
    id,
  };
}

// const dummyData = {
//   ReferalProgramName: "My Referral Program 1",
//   Customers: 13,
//   OrdersPlacedUsingCoupons: 5,
//   TotalRevenue: 22,
//   AudienceWeightage: 50,
// }

export const OverviewTab = React.memo((props) => {
  const { height, width } = useWindowDimensions();
  const [tableData, setTestData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [hasMore, setHasMore] = useState(true);

  const pageSizes = [3, 6, 9];

  const getRequestParams = (page, pageSize) => {
    let params = {};

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };

  const retrieveTestData = () => {
    const params = getRequestParams(page, pageSize);

    TestDataService.getAll(params)
      .then((response) => {
        const { testData, totalPages } = response.data;
        if (page <= totalPages) {
          setTestData(tableData.concat(testData));
          setCount(totalPages);
          setPage(page + 1);
          console.log("pagination data", response.data);
        } else {
          setHasMore(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // useEffect(() => {
  //   retrieveTestData();
  // }, [page, pageSize]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  return (
    <div className={styles.root}>
      <Container>
        <Row className={styles.root2} noGutters={true}>
          <Col xs={6} lg={3} className={styles.col1}>
            <OverviewBanner
              image={sliderImage1}
              heading={heading1}
              text={text1}
              bgColor={bgColor1}
            />
          </Col>
          <Col xs={6} lg={3} className={styles.col2}>
            <OverviewBanner
              image={sliderImage2}
              heading={heading2}
              text={text2}
              bgColor={bgColor2}
            />
          </Col>
          <Col xs={6} lg={3} className={styles.col3}>
            <OverviewBanner
              image={sliderImage3}
              heading={heading3}
              text={text3}
              bgColor={bgColor3}
            />
          </Col>
          <Col xs={6} lg={3} className={styles.col4}>
            <div className={styles.viewAnalyticsDiv}>
              <div className={styles.arrowIcon}>{">"}</div>
            </div>
            <div className={styles.viewAnalyticsDiv2}>
              <a href="#" className={styles.viewAnalytics}>
                View Analytics
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className={styles.root2}>
          <Col xs={5} lg={5} className={styles.col1}>
            <img src={trophy} className={styles.trophy} />
            <p className={styles.refText}>All Referral Programs&nbsp;&nbsp;</p>
          </Col>
          <Col xs={5} lg={5} className={styles.col2}>
            <button className={styles.showInAnalytics}>
              <img src={analyticsBtn} className={styles.analyticsBtnImg} />
              Show in Analytics
            </button>
          </Col>
          <Col xs={2} lg={2} className={styles.col3}>
            <div className="d-flex justify-content-end">
              <button className={styles.downloadDivBtn}>
                <img src={download} className={styles.downloadImg} />
                <div className={styles.downloadText}>
                  &nbsp;Download PDF/CSV
                </div>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <InfiniteScroll
        dataLength={tableData.length}
        next={retrieveTestData}
        hasMore={hasMore}
        loader={<div className={styles["lds-dual-ring"]}></div>}
        scrollThreshold={0.99}
      >
        {width > 1000 ? (
          <RefTable tableData={tableData} />
        ) : (
          <SplittedRefTable tableData={tableData} />
        )}
      </InfiniteScroll>
    </div>
  );
});

export default OverviewTab;
