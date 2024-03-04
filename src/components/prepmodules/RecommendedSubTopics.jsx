import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { topics } from "../../utils/constants";
import { useAuth } from "../../utils/context";
const TopicCard = styled.li`
  height: fit-content;
  white-space: nowrap;
  background-color: rgba(121, 9, 11, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #090b79;
  text-align: center;
  background: ${(props) => (props.isCurrentTopic ? "#070853" : "inherit")};
  color: ${(props) => (props.isCurrentTopic ? "white" : "black")};
  &:hover {
    background: #060746;
    color: white;
  }
  &:hover a {
    color: white;
  }
  &:focus {
    outline: none; /* Remove the default focus outline */
  }
  img {
    height: 20px;
    width: 20px;
  }
`;

const Wrapper = styled.ul`
  width: fit-content;
  display: flex;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  justify-content : center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0px;

  a{
    width : 100%;
  }
`;

const MarginTop = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top : 0;
  white-space: nowrap;

  position: sticky;
`;

const Box = styled.div`
  display: flex;
  white-space: nowrap;

  justify-content: center;
  align-items: center;
`;
const Box2 = styled.h6`
  min-width : 10rem;
  margin: auto;
  padding : 10px 5px;
  margin-bottom: 0px;
  white-space: nowrap;

  text-transform: uppercase;
  font-weight: ${(props) => (props.isCurrentTopic ? "bolder" : "normal")};
  overflow-wrap: break-word;
`;

const RecommendedSubTopics = () => {
  const [auth] = useAuth();
  const allow = auth?.user?.packageId;
  const { topic, subTopic } = useParams();
  const subtopics = topics[topic] || [];
  useEffect(() => {
    const bootstrapCssLink = document.createElement("link");
    bootstrapCssLink.rel = "stylesheet";
    bootstrapCssLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    bootstrapCssLink.integrity =
      "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";
    bootstrapCssLink.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCssLink);
    return () => {
      document.head.removeChild(bootstrapCssLink);
    };
  }, []);

  return (
    <MarginTop>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: '#0000ff25',
                color: 'black',
                fontWeight: 'bold',
                outline: '2px solid black',
              }}
            >
              {topic}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-1 mt-3">
              <Wrapper>
                {subtopics.map((currentTopic, subIndex) => {
                  // Determine if the link should be visible based on conditions
                  const isVisible =
                    (!auth.user && subIndex === 0) || // Show only index 0 when user is not logged in
                    (auth.user && subIndex <= 4) || // Show up to index 4 when user is logged in
                    (allow === '65d93ff1aaf8ebc47c522ced'); // Show all when allow is a specific value

                  // Render the link only if it's visible
                  if (isVisible) {
                    return (
                      <Link
                        className="no-underline"
                        to={`/test/prep/${topic}/${currentTopic}`}
                        key={subIndex}
                      >
                        <TopicCard
                          isCurrentTopic={
                            subTopic.split('_').join(' ') === currentTopic
                          }
                        >
                          <Box>
                            <Box2
                              isCurrentTopic={
                                currentTopic ===
                                subTopic.split('_').join(' ')
                              }
                            >
                              {currentTopic}
                            </Box2>
                          </Box>
                        </TopicCard>
                      </Link>
                    );
                  } else {
                    return null; // Render nothing if the link is not visible
                  }
                })}
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </MarginTop>
  );
};

export default RecommendedSubTopics;
